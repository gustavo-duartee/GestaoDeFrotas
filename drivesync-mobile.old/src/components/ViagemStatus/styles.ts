import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  card: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 8,
    paddingVertical: 20
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
  valueTitle: {
    color: '#181818',
    fontSize: 18,
    fontWeight: 'bold',
  },
  valueSubtitle: {
    fontSize: 14,
    color: "#545454",
  },

  valueStatus: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  iconChevron: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  locationContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#f3f3f3',
    marginBottom: 20,
    backgroundColor: '#000'
  },
  input: {
    backgroundColor: '#f3f3f3',
    color: '#000000',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 16,
    width: '100%',
  },
  subtitle: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  cardContent:{
    marginTop: 10
  },
  valueStatusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
    borderRadius: 20,
  },
  statusCircle: {
    width: 10,
    height: 10,
    borderRadius: 5, // Isso cria o círculo
    backgroundColor: '#00B37E',
    marginLeft: 5
  },
});

export default styles;
