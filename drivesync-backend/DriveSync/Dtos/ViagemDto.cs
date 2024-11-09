using System.ComponentModel.DataAnnotations;

namespace DriveSync.Dtos
{
    public class ViagemDto
    {
        public string MotoristaId { get; set; }
        public int VeiculoId { get; set; }
        public string Localizacao { get; set; }
        public ChecklistDto Checklist { get; set; }
        public DiagnosticoInicioDto? DiagnosticoInicio { get; set; } // Opcional
        public string? Observacoes { get; set; }
    }

    public class ViagemEncerramentoDto
    {
        public string LocalizacaoEncerramento { get; set; }
        public string ObservacoesEncerramento { get; set; }
        public double NivelCombustivelEncerramento { get; set; }
        public double TemperaturaSensor02Encerramento { get; set; }
        public double TemperaturaTransmissaoEncerramento { get; set; }
        public string StatusTransmissaoEncerramento { get; set; }
        public string CodigoFalhaEncerramento { get; set; }
        public bool StatusControleEmissaoEncerramento { get; set; }
        public bool MonitorCatalisadorEncerramento { get; set; }
        public bool MonitorSensor02Encerramento { get; set; }
        public bool StatusMonitoresEmissaoEncerramento { get; set; }
        public double VoltagemBateriaEncerramento { get; set; }
    }

    public class ChecklistDto
    {
        public bool Freios { get; set; }
        public bool Pneus { get; set; }
        public bool Luzes { get; set; }
        public bool Combustivel { get; set; }
        public bool Equipamentos { get; set; }
        public bool Estepe { get; set; }
        public bool Extintor { get; set; }
    }

    public class DiagnosticoInicioDto
    {
        public double NivelCombustivelInicio { get; set; }
        public bool StatusControleEmissaoInicio { get; set; }
        public bool MonitorCatalisadorInicio { get; set; }
        public bool MonitorSensor02Inicio { get; set; }
        public double TemperaturaSensor02Inicio { get; set; }
        public double TemperaturaTransmissaoInicio { get; set; }
        public string StatusTransmissaoInicio { get; set; }
        public string CodigoFalhaInicio { get; set; }
        public bool StatusMonitoresEmissaoInicio { get; set; }
        public double VoltagemBateriaInicio { get; set; }
    }

    public class DiagnosticoEncerramentoDto
    {
        public double NivelCombustivelEncerramento { get; set; }
        public bool StatusControleEmissaoEncerramento { get; set; }
        public bool MonitorCatalisadorEncerramento { get; set; }
        public bool MonitorSensor02Encerramento { get; set; }
        public double TemperaturaSensor02Encerramento { get; set; }
        public double TemperaturaTransmissaoEncerramento { get; set; }
        public string StatusTransmissaoEncerramento { get; set; }
        public string CodigoFalhaEncerramento { get; set; }
        public bool StatusMonitoresEmissaoEncerramento { get; set; }
        public double VoltagemBateriaEncerramento { get; set; }
    }
}
