import React from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

export const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#0066cc" />
    <Text style={styles.text}>Cargando datos...</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: "#555",
  },
});
