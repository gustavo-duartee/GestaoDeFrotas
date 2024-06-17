import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: '#202024'
    },
    text: {
      fontSize: 25,
      fontWeight: "bold",
      marginBottom: 20,
      color: '#fff'
    },
    circle: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#29292E',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
    },
    initials: {
      fontSize: 40,
      color: '#fff',
      fontWeight: 'bold',
    },
    userInfo: {
      flexDirection: "row",
      marginBottom: 10,
    },
    label: {
      fontSize: 18,
      fontWeight: "bold",
      marginRight: 10,
      color: '#fff'
    },
    info: {
      fontSize: 18,
      color: '#fff'
    },
    button: {
      backgroundColor: '#00875F',
      paddingVertical: 10,
      paddingHorizontal: 50,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      marginRight: 10, // Espaçamento entre o texto e o ícone
    },
  });

  export default styles;