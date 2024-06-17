import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: "#29292E",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
  },
  iconSquare: {
    width: 60,
    height: 60,
    backgroundColor: "#323238",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 10,
  },
  icon: {
    color: '#00B37E',
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
