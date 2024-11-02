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
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8'
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
  icon: {
    color: '#727272',
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
    color: '#181818',
    fontSize: 18,
    fontWeight: 'bold',
  },
  valueSubtitle: {
    fontSize: 16,
    color: "#545454",
  },

  valueStatusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 0,
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
