import { useEffect, useRef } from "react";
import { Alert } from "react-native";

interface Player {
    id: string;
    username: string;
    statut: boolean;
}

interface Message {
    type: string;
    data: {
        players: Player[];
    };
}

const useWebSocket = (
    gameId: string,
    gamerId: string,
    gamerName: string,
    navigation: any,
    setPlayers: React.Dispatch<React.SetStateAction<Player[]>>,
    errorHandledRef: React.MutableRefObject<boolean>
) => {
    const ws = useRef<WebSocket | null>(null);

    const handleMessage = (event: MessageEvent) => {
        console.log("Message reçu :", event.data);
        if (event.data === "ping") {
            ws.current?.send("pong");
            console.log("pong");
        } else {
            try {
                const message: Message = JSON.parse(event.data);
                handleIncomingMessage(message);
            } catch (error) {
                console.error(
                    "Erreur lors de l'analyse du message WebSocket :",
                    error
                );
            }
        }
    };

    const handleIncomingMessage = (message: Message) => {
        if (message.type === "players") {
            console.log(
                "Nombre de joueurs reçus :",
                message.data.players.length
            );
            if (message.data.players.length === 0) {
                handleGameNotExist();
            } else {
                updatePlayers(message.data.players);
                checkAllPlayersReady(message.data.players);
            }
        }
    };

    const handleGameNotExist = () => {
        console.log("La partie n'existe pas, affichage de l'alerte.");
        errorHandledRef.current = true;
        Alert.alert("Erreur", "La partie n'existe pas.", [
            { text: "OK", onPress: () => navigation.goBack() },
        ]);
    };

    const updatePlayers = (players: Player[]) => {
        console.log("Mise à jour des joueurs avec les données reçues du serveur.");
        setPlayers(players);
    };

    const checkAllPlayersReady = (players: Player[]) => {
        const allPlayersReady = players.every((player) => player.statut);
        if (allPlayersReady) {
            console.log("Tous les joueurs sont prêts, lancement de la partie après 10 secondes.");
            setTimeout(() => {
                console.log("Lancement de la partie...");
            }, 10000);
        }
    };

    useEffect(() => {
        ws.current = new WebSocket(
            "wss://space-operators-bb2423167918.herokuapp.com"
        );

        ws.current.onopen = () => {
            console.log("WebSocket ouvert");
            sendConnectMessage();
        };

        ws.current.onclose = () => {
            console.log("WebSocket fermé");
        };

        ws.current.onmessage = handleMessage;

        return () => {
            if (ws.current) {
                ws.current.close();
            }
        };
    }, []);

    const sendConnectMessage = () => {
        console.log("Envoi des données de connexion au serveur WebSocket.");
        const connectData = {
            type: "connect",
            data: {
                gameId: gameId,
                playerId: gamerId,
                playerName: gamerName,
            },
        };
        ws.current?.send(JSON.stringify(connectData));
    };

    return ws;
};

export default useWebSocket;
