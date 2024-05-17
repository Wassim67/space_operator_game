import { Audio } from "expo-av";

let soundObject: Audio.Sound | undefined = undefined;
let isSoundPlaying: boolean = false; // Variable pour suivre l'état de lecture du son

// Fonction pour jouer le son de clic
export const playClickSound = async (volumeOn: boolean) => {
    if (!volumeOn) {
        console.log("Le volume est désactivé. Le son de clic ne peut pas être joué.");
        return;
    }

    const clickSound = new Audio.Sound();
    try {
        await clickSound.loadAsync(require("./assets/click_sound.mp3"));
        await clickSound.playAsync();
    } catch (error) {
        console.log("Erreur lors de la lecture du son de clic:", error);
    }
};

export const playAmbientSound = async () => {
    if (isSoundPlaying) {
        console.log(isSoundPlaying)
        console.log("Le son est déjà en train de jouer.");
        // stopAmbientSound();
        return;
    }

    soundObject = new Audio.Sound();
    try {
        await soundObject.loadAsync(require("./assets/70K.mp3"));
        await soundObject.playAsync();
        isSoundPlaying = true; // Mettez à jour l'état de lecture du son
        console.log(isSoundPlaying)
        soundObject.setOnPlaybackStatusUpdate(async (status) => {
            if (
                status.isLoaded &&
                status.durationMillis !== undefined &&
                status.positionMillis >= status.durationMillis - 1000
            ) {
                console.log("replay in 3 seconds...");
                setTimeout(restartSound, 100);
            }
        });
    } catch (error) {
        console.log("Erreur lors de la lecture du son d'ambiance:", error);
    }
};

const restartSound = async () => {
    try {
        if (soundObject) {
            await soundObject.replayAsync();
        }
    } catch (error) {
        console.log("Erreur lors du redémarrage du son:", error);
    }
};

export const stopAmbientSound = async () => {
    try {
        if (soundObject) {
            await soundObject.stopAsync();
            await soundObject.unloadAsync();
            isSoundPlaying = false; // Réinitialiser l'état de lecture du son
        }
    } catch (error) {
        console.log("Erreur lors de l'arrêt du son d'ambiance:", error);
    }
};

