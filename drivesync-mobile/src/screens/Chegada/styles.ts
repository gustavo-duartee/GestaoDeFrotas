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
    marginBottom: 16,
  },
  inputsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    gap: 8
  },

  locationContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#f3f3f3',
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#f3f3f3',
    color: '#000000',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 16,
    width: '100%',
  },
  pickerContainer: {
    backgroundColor: '#f3f3f3',
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 16,
    width: '100%',
  },
  picker: {
    color: '#000000',
    backgroundColor: '#f3f3f3',
  },
  checkListContainer: {
    paddingVertical: 10,
    marginBottom: 20,
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
    marginBottom: 10,
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
    marginBottom: 10,
    width: '100%',
    textAlignVertical: 'top',
  },

  buttonContainer: {
    flexDirection: 'row', // Para colocar os botões lado a lado
    justifyContent: 'space-between', // Para espaçar os botões igualmente
    marginBottom: 20, // Ajuste conforme necessário
    gap: 5
  },

  button: {
    backgroundColor: '#4CAF50', // Cor de fundo do botão
    paddingVertical: 10, // Espaçamento vertical
    paddingHorizontal: 20, // Espaçamento horizontal
    borderRadius: 5, // Bordas arredondadas
    width: '48%', // A largura de cada botão ocupa quase metade da tela
  },

  buttonText: {
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
    marginTop: 20,
    fontSize: 14,
    color: '#956404', // Cor de destaque (exemplo, pode ser alterado)
    textAlign: 'center',
    fontWeight: 'bold',
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#fff3cd',
    borderColor: '#ffeeba'
  },
});

export default styles;
