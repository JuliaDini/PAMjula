import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import Lista from './componentes/Lista';

export default function App() {
  return (
    <View style={styles.container}>
      <Lista />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f4f7fb", padding: 16 },
  titulo: { fontSize: 22, fontWeight: "700", textAlign: "center", marginBottom: 12, color: "#222" },
  card: {
    width: "100%", 
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3
  }
})