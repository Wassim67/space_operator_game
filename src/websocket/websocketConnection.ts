import { useEffect, useRef } from "react";

const useWebSocketConnection = (gameId: string, gamerId: string, gamerName: string, navigation: any) => {
    const ws = useRef<WebSocket | null>(null);

    useEffect(() => {
        ws.current = new WebSocket("wss://space-operators-bb2423167918.herokuapp.com");

        ws.current.onopen = () => {
            console.log("WebSocket ouvert");
            sendConnectMessage();
        };

        ws.current.onclose = () => {
            console.log("WebSocket fermé");
        };

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

export default useWebSocketConnection;
