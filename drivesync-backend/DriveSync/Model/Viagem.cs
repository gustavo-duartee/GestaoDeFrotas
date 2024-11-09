using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DriveSync.Model
{
    public class Viagem
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string MotoristaId { get; set; }

        [Required]
        public int VeiculoId { get; set; }
        public virtual Veiculo Veiculo { get; set; }

        [Required]
        public DateTime DataInicio { get; set; }
        public DateTime? DataEncerramento { get; set; }

        public string? LocalizacaoInicio { get; set; }
        public string? LocalizacaoEncerramento { get; set; }

        [Required]
        public StatusViagem Status { get; set; } = StatusViagem.EmAndamento;

        public int? ChecklistId { get; set; }
        public virtual Checklists Checklist { get; set; }

        public string? ObservacoesInicio { get; set; }
        public string? ObservacoesEncerramento { get; set; }

        public int? DiagnosticoInicioId { get; set; }
        public virtual DiagnosticosInicio DiagnosticoInicio { get; set; }

        public int? DiagnosticoEncerramentoId { get; set; }
        public virtual DiagnosticosEncerramento DiagnosticoEncerramento { get; set; }
    }

    public enum StatusViagem
    {
        EmAndamento,
        Encerrada
    }

    public class Checklists
    {
        [Key]
        public int Id { get; set; }
        public bool Freios { get; set; }
        public bool Pneus { get; set; }
        public bool Luzes { get; set; }
        public bool Combustivel { get; set; }
        public bool Equipamentos { get; set; }
        public bool Estepe { get; set; }
        public bool Extintor { get; set; }
    }

    public class DiagnosticosInicio
    {
        [Key]
        public int Id { get; set; }

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
        public DateTime DataHoraDiagnosticoInicio { get; set; }
    }

    public class DiagnosticosEncerramento
    {
        [Key]
        public int Id { get; set; }
        public double? NivelCombustivelEncerramento { get; set; }
        public bool? StatusControleEmissaoEncerramento { get; set; }
        public bool? MonitorCatalisadorEncerramento { get; set; }
        public bool? MonitorSensor02Encerramento { get; set; }
        public double? TemperaturaSensor02Encerramento { get; set; }
        public double? TemperaturaTransmissaoEncerramento { get; set; }
        public string? StatusTransmissaoEncerramento { get; set; }
        public string? CodigoFalhaEncerramento { get; set; }
        public bool? StatusMonitoresEmissaoEncerramento { get; set; }
        public double? VoltagemBateriaEncerramento { get; set; }
        public DateTime? DataHoraDiagnosticoEncerramento { get; set; }
    }
}
