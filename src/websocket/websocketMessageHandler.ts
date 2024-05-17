import { useRef, useEffect } from "react";
import { Alert } from "react-native";
import Player from "../type/Player";
import useWebSocketConnection from "./websocketConnection";

interface Message {
    type: string;
    data: {
        players: Player[];
    };
}

const useWebSocketMessageHandler = (
    setPlayers: React.Dispatch<React.SetStateAction<Player[]>>,
    navigation: any,
    gameId: string,
    gamerId: string,
    gamerName: string
) => {
    const ws = useWebSocketConnection(gameId, gamerId, gamerName, navigation);
    const errorHandledRef = useRef(false);
    const playersRef = useRef<Player[]>([]);

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
        console.log(players, "les joueurs mis a jour")
    };

    const checkAllPlayersReady = (players: Player[]) => {
        const allPlayersReady = players.every((player) => player.status);
        if (allPlayersReady) {
            console.log("Tous les joueurs sont prêts, lancement de la partie après 10 secondes.");
            console.log(allPlayersReady, "tout les joueurs pret");
        }
    };

    useEffect(() => {
        if (ws.current) {
            ws.current.onmessage = (event: MessageEvent) => {
                console.log("Message reçu :", event.data);
                if (event.data === "ping") {
                    ws.current?.send("pong");
                    console.log("pong");
                } else {
                    try {
                        const message: Message = JSON.parse(event.data);
                        handleIncomingMessage(message);
                    } catch (error) {
                        console.error("Erreur lors de l'analyse du message WebSocket :", error);
                    }
                }
            };
        }

        return () => {
            if (ws.current) {
                ws.current.close();
            }
        };
    }, []);

    const handleStartNotification = () => {
        console.log("Notification de démarrage de la partie reçue.");
    };

    const handleIncomingMessage = (message: Message) => {
        if (message.type === "players") {
            const players = message.data?.players;
            if (!players) {
                console.error("Players data is missing or undefined in the WebSocket message.");
                return;
            }
            console.log(
                "Nombre de joueurs reçus :",
                players.length
            );
            if (players.length === 0) {
                handleGameNotExist();
            } else {
                playersRef.current = players;
                updatePlayers(players);
                checkAllPlayersReady(players);
            }
        } else if (message.type === "operation") {
            console.log("attribution des roles!");
            // const listPlayers = playersRef.current
            // assignRolesAndStartGame(listPlayers);
        } else if (message.type === "start") {
            handleStartNotification();
        }
    };




    return ws;
};

export default useWebSocketMessageHandler;
