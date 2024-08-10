namespace DriveSync.Model
{
    public class Viagem
    {
        public Guid Id { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime? DataFim { get; set; }
        public string LocalInicio { get; set; }
        public string LocalFim { get; set; }
        public double Distancia { get; set; }
        public int Duracao { get; set; }
        public Guid MotoristaId { get; set; }
        public string Notas { get; set; }
        public Guid VeiculoId { get; set; }
        public bool Ativa { get; set; } 
    }
}
