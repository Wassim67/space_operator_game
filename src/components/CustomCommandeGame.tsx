import React, { Component } from "react";
import { View, Button, Switch, Text } from "react-native";
import CustomText from "./CustomText2";
import CustomView from "./CustomView";

interface Element {
  valueType: string;
  value: string | number;
  type: "button" | "switch";
  id: number;
}

interface CustomCommandeGameProps {
  elements: Element[];
}

interface CustomCommandeGameState {
  switchesState: { [key: number]: boolean };
}

class CustomCommandeGame extends Component<CustomCommandeGameProps, CustomCommandeGameState> {
  constructor(props: CustomCommandeGameProps) {
    super(props);
    const switchesState: { [key: number]: boolean } = {};
    props.elements.forEach(element => {
      if (element.type === "switch") {
        switchesState[element.id] = false; // Désactivé par défaut
      }
    });
    this.state = { switchesState };
  }

  toggleSwitch = (id: number) => {
    this.setState(prevState => ({
      switchesState: {
        ...prevState.switchesState,
        [id]: !prevState.switchesState[id] // Inverse l'état actuel du switch
      }
    }));
  };

  render() {
    const { elements } = this.props;
    const { switchesState } = this.state;

    return (
      <View>
        {elements.map((element: Element) => {
          if (element.type === "button") {
            return (
              <Button
                key={element.id}
                title={element.value.toString()}
                color={element.valueType === "color" ? (element.value as string) : undefined}
                onPress={() => console.log(`Button ${element.id} clicked`)}
              />
            );
          } else if (element.type === "switch") {
            const switchColor = element.valueType === "color" ? (element.value as string) : undefined;
            const thumbColor = switchesState[element.id] ? switchColor : "#333333"; // Couleur du curseur en fonction de l'état du switch

            return (
              <CustomView padding={2} key={element.id} style={{ flexDirection: "row", alignItems: "center" }}>
                <Switch
                  value={switchesState[element.id]} // Utilise l'état local pour déterminer l'état du switch
                  onValueChange={(value) => {
                    this.toggleSwitch(element.id); // Appelle la fonction toggleSwitch pour changer l'état du switch
                    console.log(`Switch ${element.id} toggled: ${value ? "activé" : "désactivé"}`);
                  }}
                  thumbColor={thumbColor} // Définit la couleur du curseur du switch
                  style={{ transform: [{ scale: 1.5 }] }} // Augmente la taille du switch
                />
                {element.valueType === "color" ? (
                  <View style={{ width: 20, height: 20, backgroundColor: element.value as string, marginLeft: 10 }} />
                ) : (
                  <CustomText text={element.value.toString()} bold color="black"/>
                )}
              </CustomView>
            );
          } else {
            return null;
          }
        })}
      </View>
    );
  }
}

export default CustomCommandeGame;
