import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 11,
    backgroundColor: '#292929',
    borderRadius: 6,
    marginRight: 5,
  },
  filterButtonSelected: {
    backgroundColor: '#292929',
    borderBottomColor: '#04D361',
    borderBottomWidth: 3,
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  filterButtonTextSelected: {
    color: '#04D361',
  },
  cardContainer: {
    paddingBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#292929',
    color: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  }
});

export default styles;
