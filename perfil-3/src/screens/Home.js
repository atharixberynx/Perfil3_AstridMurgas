import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardInfo}>
        <Text style={styles.header}>Información del Estudiante</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.value}>Astrid Berenice Murgas Herrera</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Carnet:</Text>
          <Text style={styles.value}>20240235</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Sección y Grupo:</Text>
          <Text style={styles.value}>1B</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ApiData")}
      >
        <Text style={styles.buttonText}>Ver Datos de la API</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#f4f6f9",
  },
  cardInfo: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    elevation: 2,
    marginBottom: 30,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#1a1a1a",
    textAlign: "center",
  },
  row: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: "#888",
    fontWeight: "600",
  },
  value: {
    fontSize: 16,
    color: "#222",
    fontWeight: "bold",
    marginTop: 2,
  },
  button: {
    backgroundColor: "#0066cc",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
