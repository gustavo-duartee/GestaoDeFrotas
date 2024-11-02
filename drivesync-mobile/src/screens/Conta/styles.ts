import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "flex-start",
      padding: 15,
      backgroundColor: '#fff',
      gap: 20,
      width: '100%', // Faz o contêiner preencher 100% da tela
    },
    text: {
      fontSize: 25,
      fontWeight: "bold",
      color: '#000'
    },
    circle: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#f3f3f3',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 10
    },
    initials: {
      fontSize: 40,
      color: '#000',
      fontWeight: 'bold',
    },
    userInfo: {
      flexDirection: 'column', // Alinha os elementos em colunas (linhas separadas)
      marginBottom: 10,
      borderBottomWidth: 1,
      borderColor: '#a2a2a2',
      width: '100%', // Faz o contêiner preencher 100% da largura disponível
      gap: 5,
    },
    label: {
      fontSize: 18,
      fontWeight: "bold",
      marginRight: 10,
      color: '#000'
    },
    info: {
      fontSize: 18,
      color: '#777777',
      marginBottom: 10
    },
    titleInfo: {
      fontSize: 18,
      color: '#000',
      marginBottom: 10,
      fontWeight: "semibold",
    },
    button: {
      backgroundColor: '#000',
      paddingVertical: 10,
      paddingHorizontal: 50,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      width: '100%',
      justifyContent: "center"
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      marginRight: 10, // Espaçamento entre o texto e o ícone
    },
  });

  export default styles;
