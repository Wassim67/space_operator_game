import { useEffect, useRef } from "react";
import { Alert } from "react-native";

import Player from "./type/Player";
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
    setRole: React.Dispatch<React.SetStateAction<string>>,
    errorHandledRef: React.MutableRefObject<boolean>,
) => {
    const ws = useRef<WebSocket | null>(null);


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

    const handleStartNotification = () => {
        console.log("Notification de démarrage de la partie reçue.");
    };

    const handleIncomingMessage = (message: Message) => {
        if (message.type === "players") {
            const players = message.data?.players; // Using optional chaining
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
                updatePlayers(players);
                checkAllPlayersReady(players);
            }
        } else if (message.type === "operation") {
            console.log("attribution des roles!");
            // assignRolesAndStartGame(players);
            // faire appel a user data??
            console.log("", "AZIIIIII")
            // Attribution aléatoire des rôles et envoi des demandes de démarrage de partie
        } else if (message.type === "start") {
            // Traitez la notification de démarrage de partie ici
            handleStartNotification();
        }
    };

    const assignRolesAndStartGame = (players: Player[]) => {

        const numPlayers = players.length;
        const numOperators = Math.floor(numPlayers / 2); // Nombre d'opérateurs
        let numAssignedOperators = 0;

        // Parcourir les joueurs et leur attribuer aléatoirement un rôle
        players.forEach((player) => {
            // Générer un nombre aléatoire entre 0 et 1
            const randomNumber = Math.random();

            // Si le nombre aléatoire est inférieur à 0.5 et on n'a pas encore attribué tous les rôles d'opérateur
            if (randomNumber < 0.5 && numAssignedOperators < numOperators) {
                player.role = "operator";
                numAssignedOperators++; // Incrémenter le nombre d'opérateurs attribués
            } else {
                player.role = "instructor";
            }
        });

        // Mettre à jour les joueurs avec les rôles attribués
        setPlayers(players);

        // Envoyer une demande de démarrage de partie au serveur via WebSocket
        const startRequest = {
            type: "start",
            data: {
                gameId: gameId,
            },
        };
        ws.current?.send(JSON.stringify(startRequest));
    };



    return ws;
};

export default useWebSocket;


