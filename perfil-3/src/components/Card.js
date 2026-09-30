import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const Card = ({ title, image, description }) => {
  return (
    <View style={styles.card}>
      {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {description || "Sin descripción disponible."}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  info: {
    padding: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});
