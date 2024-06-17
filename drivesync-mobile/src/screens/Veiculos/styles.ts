import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202024",
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
    backgroundColor: '#29292E',
    borderRadius: 6,
    marginRight: 5,
  },
  filterButtonSelected: {
    backgroundColor: '#3E3E48',
  },
  filterButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  filterButtonTextSelected: {
    color: '#fff',
  },
  cardContainer: {
    paddingBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#29292E',
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
