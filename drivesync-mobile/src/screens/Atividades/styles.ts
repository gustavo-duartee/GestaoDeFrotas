import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  title: {
    color: '#1f1f1f',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    color: '#333',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  cardContainer: {
    flex: 1,
    marginBottom: 20, // Adiciona um pouco de espaçamento entre os cards
  },
  viagemStatusContainer: {
    backgroundColor: '#000',
    padding: 16,
    marginBottom: 20, // Adiciona uma margem para separar o Card de Status
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e8e8e8',
    borderRadius: 8,
    maxHeight: 100, // Define uma altura mínima para o card
  },
  viagemStatus: {
    color: "#FFA500", // Cor do status
    fontSize: 18,
    fontWeight: "bold",
  },
  noViagemText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
    color: '#888',
  },
});

export default styles;
