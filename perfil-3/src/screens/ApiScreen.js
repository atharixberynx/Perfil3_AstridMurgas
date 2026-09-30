import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useFetchData } from '../hooks/UseFetchData';
import { Card } from '../components/Card';
import { Loading } from '../components/Loading';
 
// Ejemplo utilizando la API de Rick and Morty
const API_URL = 'https://rickandmortyapi.com/api/character';
 
export const ApiScreen = () => {
  const { data, loading, error } = useFetchData(API_URL);
 
  if (loading) return <Loading />;
 
  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }
 
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.name}
            image={item.image}
            description={`Especie: ${item.species} | Estado: ${item.status}`}
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f9',
  },
  listContainer: {
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});