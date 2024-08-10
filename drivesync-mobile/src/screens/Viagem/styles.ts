import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import theme from "../../theme";

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
  planButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  planButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#444',
    marginVertical: 20,
  },
});

export default styles;

export const Message = styled.Text`
  color: '#FFFFF;
  textAlign: center;
  margin: 24px;
`;
