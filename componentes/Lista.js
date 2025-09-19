import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  ImageBackground,
  Pressable,
  Animated,
} from "react-native";

function Lista() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const produtos = [
    { id: "1", nome: "Espada de Diamante", fabricante: "Mojang", preco: 500.0, imagem: require("../imagenspam/espadadediamante.webp") },
    { id: "2", nome: "Picareta de Ferro", fabricante: "Mojang", preco: 450.0, imagem: require("../imagenspam/picaretadeferro.webp") },
    { id: "3", nome: "Poção de Vida", fabricante: "Minecraft Alquimia", preco: 150.0, imagem: require("../imagenspam/poçãodevida.webp") },
    { id: "4", nome: "Armadura de Ouro", fabricante: "Minecraft", preco: 490.0, imagem: require("../imagenspam/armaduradeouro.png") },
    { id: "5", nome: "Arco Encantado", fabricante: "Minecraft Alquimia", preco: 400.0, imagem: require("../imagenspam/arcoencantado.webp") },
    { id: "6", nome: "Vara de Pesca", fabricante: "Minecraft", preco: 100.0, imagem: require("../imagenspam/varadepesca.webp") },
  ];


  const BotaoAnimado = ({ onPress, children, style }) => {
    const scale = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
      Animated.spring(scale, {
        toValue: 0.9,
        useNativeDriver: true,
      }).start();
    };

    const handlePressOut = () => {
      Animated.spring(scale, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }).start();
    };

    return (
      <Pressable onPress={onPress} onPressIn={handlePressIn} onPressOut={handlePressOut}>
        <Animated.View style={[style, { transform: [{ scale }] }]}>
          {children}
        </Animated.View>
      </Pressable>
    );
  };

  return (
    <ImageBackground
      source={{
        uri: "https://images.steamusercontent.com/ugc/2310974141604980016/B4EF3A7A2D1772DE26B1A6F51CE33A04FD8BB917/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
      }}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>🪓 Loja Minecraft</Text>

        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 40 }}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.row}>
                <Image source={item.imagem} style={styles.thumb} />
                <View style={styles.info}>
                  <Text style={styles.nome}>{item.nome}</Text>
                  <Text style={styles.fabricante}>{item.fabricante}</Text>
                  <Text style={styles.preco}>💰 R$ {item.preco.toFixed(2)}</Text>
                </View>
              </View>


              <BotaoAnimado style={styles.botao} onPress={() => setProdutoSelecionado(item)}>
                <Text style={styles.botaoTexto}>📜 Descrição</Text>
              </BotaoAnimado>
            </View>
          )}
        />


        <Modal visible={!!produtoSelecionado} transparent animationType="fade">
          <View style={styles.modalFundo}>
            <View style={styles.modalCaixa}>
              {produtoSelecionado && (
                <>
                  <Text style={styles.modalTitulo}>{produtoSelecionado.nome}</Text>
                  <Image source={produtoSelecionado.imagem} style={styles.modalImagem} />
                  <Text style={styles.modalDescricao}>Fabricado por: {produtoSelecionado.fabricante}</Text>
                  <Text style={styles.modalPreco}>Valor: 💎 R$ {produtoSelecionado.preco.toFixed(2)}</Text>

                  <BotaoAnimado style={[styles.botao, styles.botaoFechar]} onPress={() => setProdutoSelecionado(null)}>
                    <Text style={styles.botaoTexto}>❌ Fechar</Text>
                  </BotaoAnimado>
                </>
              )}
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  titulo: {
    fontSize: 26,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
    textShadowColor: "#000",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 4,
  },
  card: {
    width: "100%",
    backgroundColor: "#c2f970",
    borderWidth: 3,
    borderColor: "#145a32",
    borderRadius: 10,
    padding: 16,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 5,
    elevation: 4,
  },
  row: { flexDirection: "row", alignItems: "center" },
  thumb: {
    width: 90,
    height: 90,
    borderWidth: 2,
    borderColor: "#2c3e50",
    backgroundColor: "#fff",
    marginRight: 14,
    resizeMode: "contain",
  },
  info: { flex: 1 },
  nome: { fontSize: 18, fontWeight: "700", color: "#145a32" },
  fabricante: { fontSize: 15, color: "#333", marginTop: 2 },
  preco: { fontSize: 16, fontWeight: "700", color: "#d35400", marginTop: 6 },
  botao: {
    marginTop: 12,
    backgroundColor: "#2ecc71",
    borderWidth: 3,
    borderColor: "#145a32",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 15,
    textTransform: "uppercase",
  },
  modalFundo: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalCaixa: {
    width: "85%",
    backgroundColor: "#fefefe",
    borderWidth: 4,
    borderColor: "#145a32",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  modalTitulo: {
    fontSize: 22,
    fontWeight: "900",
    marginBottom: 15,
    color: "#145a32",
  },
  modalImagem: { width: 200, height: 200, resizeMode: "contain", marginBottom: 15 },
  modalDescricao: { fontSize: 16, marginBottom: 8, color: "#444" },
  modalPreco: { fontSize: 18, fontWeight: "700", color: "#d35400" },
  botaoFechar: { backgroundColor: "#e74c3c", borderColor: "#922b21" },
});

export default Lista;
