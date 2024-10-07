import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  card: {
    backgroundColor: "#161616",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    position: 'relative',
    borderBottomColor: '#383838',
    borderBottomWidth: 1,
  },
  iconSquare: {
    width: 70,
    height: 70,
    backgroundColor: "#383838",
    marginRight: 15,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconSquareCheck: {
    marginRight: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#f4f5f7',
  },
  iconCheck: {
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
  value: {
    fontSize: 16,
    color: "#C4C4CC",
  },
  valueTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  valueDate: {
    fontSize: 16,
    color: "#C4C4CC",
  }
});

export default styles;
