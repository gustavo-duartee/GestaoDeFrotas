import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  subtitle: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  inputsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    gap: 10
  },

  locationContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#f3f3f3',
  },

  input: {
    backgroundColor: '#f3f3f3',
    color: '#000000',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    width: '100%',
  },
  pickerContainer: {
    backgroundColor: '#f3f3f3',
    borderRadius: 5,
    fontSize: 16,
    width: '100%',
  },
  picker: {
    color: '#000000',
    backgroundColor: '#f3f3f3',
  },


  checkListContainer: {
    paddingVertical: 10,
  },
  checkListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  checkListText: {
    color: '#000000',
    fontSize: 18,
  },
  checkBox: {
    width: 24,
    height: 24,
  },

  label:{

  },

  obsInput: {
    backgroundColor: '#f3f3f3',
    color: '#000000',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    width: '100%',
    textAlignVertical: 'top',
  },

  buttonContainer: {
    flexDirection: 'row', // Para colocar os botões lado a lado
    justifyContent: 'space-between', // Para espaçar os botões igualmente
    gap: 5,
    marginBottom: 20
  },

  buttonContainerSend: {
    flexDirection: 'row', // Para colocar os botões lado a lado
    marginBottom: 30,
    width: '100%', // Faz o contêiner ocupar 100% da largura
    marginTop: 20
  },

  button: {
    paddingVertical: 10, // Espaçamento vertical
    paddingHorizontal: 20, // Espaçamento horizontal
    borderRadius: 5, // Bordas arredondadas
    width: '48%', // A largura de cada botão ocupa quase metade da tela
    borderWidth: 1,
    borderColor: '#000',

  },
  buttonText: {
    color: '#000', // Cor do texto
    textAlign: 'center', // Alinhamento centralizado
    fontSize: 16, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
  },

  buttonSend: {
    flex: 1, // Faz o botão ocupar todo o espaço disponível dentro do contêiner
    paddingVertical: 12, // Ajuste para dar uma boa altura ao botão
    backgroundColor: '#000', // Cor de fundo do botão (exemplo)
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5, // Bordas arredondadas
  },
  buttonTextSend: {
    color: '#fff', // Cor do texto
    textAlign: 'center', // Alinhamento centralizado
    fontSize: 16, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
  },

  divider: {
    height: 1,
    backgroundColor: '#f3f3f3',
    marginVertical: 10,
  },
  testMessage: {
    fontSize: 14,
    color: '#956404', // Cor de destaque (exemplo, pode ser alterado)
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#fff3cd',
    borderColor: '#ffeeba',
    marginBottom: 10,
    marginTop: 10
  },
});

export default styles;
