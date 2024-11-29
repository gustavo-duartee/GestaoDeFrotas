export type RootStackParamList = {
    Veiculos: undefined;
    DetalhesVeiculo: { veiculo: VeiculoType };
  };
  
  export type VeiculoType = {
    id: number;
    marca: string;
    modelo: string;
    ano: number;
    placa: string;
    quilometragem: number;
    tp_combustivel: string;
    dt_aquisicao: string;
    status: string;
  };
  