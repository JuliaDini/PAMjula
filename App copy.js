import { useState } from 'react'; 
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('não');
  const [img, setImg] = useState(require('./imagenspam/steve.jpg'));


  const [darkMode, setDarkMode] = useState(false);

  const trocaImagem = (x) => {
    x = x.toLowerCase();
    if (x === "img1") {
      setImg(require('./imagenspam/steve.jpg'));
    }
    if (x === "img2") {
      setImg(require('./imagenspam/paisagemmine.jpg'));
    }
    if (x === "img3") {
      setImg(require('./imagenspam/frog.jpg'));
    }
        if (x === "img4") {
      setImg(require('./imagenspam/axolotl.jpg'));
    }
    if (x === "img5") {
      setImg(require('./imagenspam/cow.jpg'));
    }
    if (x === "img6") {
      setImg(require('./imagenspam/skeleton.jpg'));
    }
        if (x === "img7") {
      setImg(require('./imagenspam/cat.jpg'));
    }
    if (x === "img8") {
      setImg(require('./imagenspam/bee.jpg'));
    }
  };

  const tema = {
    background: darkMode ? '#2c2c54' : '#3d9970', 
    text: darkMode ? '#f5f6fa' : '#ffffff',
    inputBg: darkMode ? '#40407a' : '#7bed9f', 
    inputBorder: darkMode ? '#706fd3' : '#2ecc71',
    botaoBg: darkMode ? '#706fd3' : '#27ae60',
    botaoBorda: darkMode ? '#474787' : '#145a32',
    nomeColor: darkMode ? '#fbc531' : '#ffdd59',
  };

  return (
    <ScrollView contentContainerStyle={[styles.scroll, { backgroundColor: tema.background }]}>
      <View style={styles.container}>

        <View style={styles.switchContainer}>
          <Text style={{ color: tema.text, fontSize: 16, marginRight: 10 }}>
            {darkMode ? '🌑 Tema Escuro' : '☀️ Tema Claro'}
          </Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>

        <Text style={[styles.titulo, { color: tema.text }]}>⛏️ DIGITE "img"+ UM NÚMERO DE 1 A 8:</Text>

        <TextInput
          style={[
            styles.input,
            { backgroundColor: tema.inputBg, borderColor: tema.inputBorder, color: tema.text },
          ]}
          placeholder="Digite algo..."
          placeholderTextColor={darkMode ? '#aaa' : '#2c3e50'}
          onChangeText={(x) => setNome(x)}
        />

        <Text style={[styles.nomeDigitado, { color: tema.nomeColor }]}>
          {nome ? `👤 Nome Digitado: ${nome}` : 'Digite um nome...'}
        </Text>

        <TouchableOpacity
          style={[
            styles.botao,
            { backgroundColor: tema.botaoBg, borderColor: tema.botaoBorda },
          ]}
          onPress={() => trocaImagem(nome)}
        >
          <Text style={[styles.botaoTexto, { color: tema.text }]}>🎮 CLICAR</Text>
        </TouchableOpacity>

        <Image source={img} style={styles.img} />

        <Image
          source={{ uri: 'https://static.cdnlogo.com/logos/m/29/minecraft.png' }}
          style={styles.logo}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform: 'uppercase',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
  input: {
    width: '90%',
    borderWidth: 3,
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  nomeDigitado: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  botao: {
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12, 
    marginBottom: 20,
    borderWidth: 3,
    elevation: 4,
  },
  botaoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  img: {
    width: 220,
    height: 220,
    borderWidth: 5,
    borderColor: '#2c3e50',
    borderRadius: 20, 
    marginBottom: 25,
  },
  logo: {
    width: 400,
    height: 200,
    marginTop: 10,
  },
});


  const trocaImagem = (x) => {
    x = x.toLowerCase();
    if (x === "img1") {
      setImg(require('./imagenspam/steve.jpg'));
    }
    if (x === "img2") {
      setImg(require('./imagenspam/paisagemmine.jpg'));
    }
    if (x === "img3") {
      setImg(require('./imagenspam/frog.jpg'));
    }
        if (x === "img4") {
      setImg(require('./imagenspam/axolotl.jpg'));
    }
    if (x === "img5") {
      setImg(require('./imagenspam/cow.jpg'));
    }
    if (x === "img6") {
      setImg(require('./imagenspam/skeleton.jpg'));
    }
        if (x === "img7") {
      setImg(require('./imagenspam/cat.jpg'));
    }
    if (x === "img8") {
      setImg(require('./imagenspam/bee.jpg'));
    }
  };