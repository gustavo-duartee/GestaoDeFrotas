import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',  // Fundo mais suave
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#4CAF50', // Cor vibrante para o perfil
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000', // Sombras para profundidade
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,  // Para Android
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  initials: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  userInfo: {
    marginBottom: 20,
    width: '100%',
  },
  titleInfo: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  info: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f44336',  // Cor mais vibrante para destaque
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 20,
    justifyContent: 'center',
    shadowColor: '#000',  // Sombras no botão para efeito de profundidade
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,  // Para Android
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    marginRight: 10,
    fontWeight: '500',
  },
});

export default styles;
