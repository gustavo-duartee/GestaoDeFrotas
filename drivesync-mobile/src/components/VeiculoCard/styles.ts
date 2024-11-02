// src/components/VeiculoCard/styles.ts
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    position: 'relative',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
  },
  iconSquare: {
    width: 60,
    height: 60,
    backgroundColor: "#e8e8e8",
    marginRight: 15,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconChevron: {
    marginRight: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#727272',
  },
  content: {
    flex: 1,
    gap: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  valueTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  valueSubtitle: {
    fontSize: 16,
    color: "#000",
  },
  valueStatus: {
    fontSize: 15,
    fontWeight: 'bold',
    color: "#00B37E",
  },
  valueStatusBadge: {
    backgroundColor: "#00B37E50",
    width: 95,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
});

export default styles;
