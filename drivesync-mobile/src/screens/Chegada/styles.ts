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
    alignItems: `flex-start`,
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

  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: '#f3f3f3',
    marginVertical: 10,
  },
});

export default styles;
