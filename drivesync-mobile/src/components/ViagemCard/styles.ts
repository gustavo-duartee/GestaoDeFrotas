import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202024",
    alignItems: "center",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#29292E",
    borderRadius: 10,
    padding: 15,
    width: 364,
    height: 100,
    flexDirection: "row",
    position: 'relative', // Para permitir posicionamento absoluto do border
  },
  leftBorder: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 5, // Largura da borda
    backgroundColor: '#00B37E',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  iconSquare: {
    width: 70,
    height: 70,
    backgroundColor: "#323238",
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
    color: '#00B37E',
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
  valueDescricao: {
    fontSize: 16,
    color: "#C4C4CC",
    marginTop: 10,
    borderRadius: 6,
    borderColor: '#aaa',
  },
  valueTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  valueDate: {
    fontSize: 16,
    color: "#C4C4CC",
  },
});

export default styles;
