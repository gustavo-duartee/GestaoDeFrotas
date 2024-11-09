import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  card: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e8e8e8',
    borderRadius: 8
  },
  iconSquare: {
    width: 60,
    height: 60,
    backgroundColor: "#FF5733", // Alterar para uma cor vibrante
    marginRight: 16, // Aumenta o espaçamento entre o ícone e o conteúdo
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8, // Aumenta o espaçamento entre os elementos
    marginBottom: 5, // Adiciona um pequeno espaçamento entre as linhas
  },
  valueTitle: {
    color: '#181818',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1, // Ajusta para o texto se expandir
  },
  valueSubtitle: {
    fontSize: 16,
    color: "#545454",
  },
  valueStatusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#F0F0F0', // Um fundo suave para o status
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginTop: 8, // Adiciona um pequeno espaço entre a data e o status
  },
  valueStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF5733', // Cor vibrante para o status
  },
  iconChevron: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  }
});

export default styles;
