import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161616",
    alignItems: "center",
    marginBottom: 20
  },
  card: {
    backgroundColor: "#161616",
    borderRadius: 6,
    padding: 15,
    width: 364,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#383838',
  },
  iconSquare: {
    width: 70,
    height: 70,
    backgroundColor: "#323238",
    marginRight: 15,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconSquareCheck: {
    marginRight: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    color: '#00B37E',
  },

  content: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  title:{
    color: '#E1E1E6',
    fontSize: 15,
    fontWeight: 'bold'
  },
  subtitle:{
    color: '#00B37E',
    fontSize: 15,
    fontWeight: 'bold'
  }
});

export default styles;
