import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#202024",
  },
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  inputsContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#29292E',
    color: '#fff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pickerContainer: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: '100%',
  },
});

export default styles;
