import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
  },
  iconSquare: {
    width: 60,
    height: 60,
    backgroundColor: "#383838",
    marginRight: 15,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#f4f5f7',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  valueTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    color: '#000',
    fontSize: 15,
  },
  valueDate: {
    color: '#888',
    fontSize: 15,
    marginBottom: 5,
  },
  contentDescription: {
  },
});

export default styles;
