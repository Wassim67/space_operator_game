import { t } from "i18next";
import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Button, Modal } from "react-native";

export const ChangeName: React.FC<{
  visible: boolean;
  onClose: () => void;
  onSave: (name: string) => void;
}> = ({ visible, onClose, onSave }) => {
  const [newName, setNewName] = useState("");

  const handleSave = () => {
    onSave(newName);
  };

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{t("main_menu.change_name")}</Text>
          <TextInput
            style={styles.input}
            placeholder={t("main_menu.new_name")}
            value={newName}
            onChangeText={(text) => setNewName(text)}
          />
          <View style={styles.buttonRow}>
            <Button title={t("main_menu.cancel")} onPress={onClose} />
            <Button title={t("main_menu.save")} onPress={handleSave} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ChangeName;
