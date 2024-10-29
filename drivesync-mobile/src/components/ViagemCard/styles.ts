import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  noViagemText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
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
  icon: {
    color: '#f4f5f7',
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
    color: '#1C1C1E',
    fontSize: 18,
    fontWeight: 'bold',
  },
  valueSubtitle: {
    fontSize: 16,
    color: "#8D8D99",
  },
  valueStatusBadge: {
    marginTop: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  valueStatus: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  iconChevron: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  }
});

export default styles;
