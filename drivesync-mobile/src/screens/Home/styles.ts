import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    marginBottom: 10,
  },
  greeting: {
    color: '#E1E1E6',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subGreeting: {
    color: '#4CAF50',
    fontSize: 14,
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
    backgroundColor: '#383838',
    marginVertical: 8,
  },
  section: {
    marginBottom: 20,
  },
  subtitle: {
    color: '#E1E1E6',
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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
});

export default styles;
