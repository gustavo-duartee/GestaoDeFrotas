import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: "#161616",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderBottomColor: '#383838',
    borderBottomWidth: 1
  },
  iconSquare: {
    width: 60,
    height: 60,
    backgroundColor: "#383838",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 10,
  },
  icon: {
    color: '#f4f5f7',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  valueTitle: {
    color: '#E1E1E6',
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    color: '#E1E1E6',
    fontSize: 15,
  },
  valueDate: {
    color: '#888',
    fontSize: 13,
    marginBottom: 5,
  },
  contentDescription: {
  },
});

export default styles;
