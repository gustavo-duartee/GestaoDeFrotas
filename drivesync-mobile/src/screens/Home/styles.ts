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
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#29292E',
    color: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#444',
    marginVertical: 20,
  },
  userInfo: {
    flexDirection: "row",
    marginBottom: 15,
  },
  info: {
    color: '#E1E1E6',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#E1E1E6',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    color: '#E1E1E6',
    fontSize: 16,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#29292E',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  cardIcon: {
    marginBottom: 10,
  },
  cardText: {
    color: '#E1E1E6',
    fontSize: 16,
    textAlign: 'center',
  },
  tip: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  tipIcon: {
    marginRight: 10,
  },
  tipText: {
    flex: 1,
    color: '#E1E1E6',
    fontSize: 16,
  },
});

export default styles;
