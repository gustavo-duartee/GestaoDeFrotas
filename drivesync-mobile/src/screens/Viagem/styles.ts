import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202024",
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  subtitle: {
    color: '#E1E1E6',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    backgroundColor: '#29292E',
    color: '#fff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 16,
    width: '100%',
  },
  pickerContainer: {
    backgroundColor: '#29292E',
    color: '#fff',
    borderRadius: 5,
    paddingVertical: 0,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 16,
    width: '100%',
  },
  picker: {
    color: '#aaa',
    backgroundColor: '#29292E',
  },
  checkListContainer: {
  },
  checkListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  checkListText: {
    color: '#fff',
    fontSize: 16,
  },
  checkBox: {
    width: 24,
    height: 24,
  },
  obsInput: {
    backgroundColor: '#29292E',
    color: '#fff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    width: '100%',
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#00875F',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 40
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#444',
    marginVertical: 20,
  },
});

export default styles;
