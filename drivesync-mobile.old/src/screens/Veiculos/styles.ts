import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 13,
    backgroundColor: '#fff',
    borderRadius: 0,
  },
  filterButtonSelected: {
    backgroundColor: '#fff',
    borderBottomColor: '#000',
    borderBottomWidth: 3,
  },
  filterButtonText: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  filterButtonTextSelected: {
    color: '#000',
  },
  cardContainer: {
    paddingBottom: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#f3f3f3',
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
