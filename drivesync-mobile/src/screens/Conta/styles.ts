import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',  // Fundo mais suave
    justifyContent: 'flex-start',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  profileInfo: {
    flexDirection: 'row',  // Organiza os elementos em linha
    alignItems: 'center',  // Alinha verticalmente os itens no centro
    marginBottom: 50,  // Espaçamento entre o perfil e as outras informações
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#007aff', // Cor de fundo mais atraente para o círculo
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,  // Espaçamento entre o círculo e o texto
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4, // Mais sutil, mas ainda visível no Android
  },
  initialsText: {
    fontSize: 28, // Tamanho de fonte maior para as iniciais
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase', // Garante que as iniciais estarão em maiúsculas
  },
  userDetails: {
    flexDirection: 'column',  // Empilha os elementos verticalmente
    justifyContent: 'center',
  },
  userName: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
  },
  userPosition: {
    fontSize: 18,
    color: '#555',  // Cor mais suave para o cargo
    marginTop: 2,  // Espaçamento entre nome e cargo
  },
  userInfo: {
    marginBottom: 0,
    width: '100%',
  },
  titleInfo: {
    fontSize: 17,
    color: '#666',
    fontWeight: '600',
    marginBottom: 8,
  },
  info: {
    fontSize: 20,
    fontWeight: '400',
    color: '#333',
    marginBottom: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 30,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    marginRight: 12,
    fontWeight: '600',
  }
});

export default styles;
