using DriveSync.Model;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Veiculo
{
    public int Id { get; set; }

    [Required]
    [StringLength(80)]
    public string Marca { get; set; }

    [Required]
    [StringLength(80)]
    public string Modelo { get; set; } 

    [Required]
    public int? Ano { get; set; }

    [Required]
    [StringLength(80)]
    public string Placa { get; set; }

    [Required]
    [Range(0, int.MaxValue, ErrorMessage = "Quilometragem não pode ser negativa.")]
    public int? Quilometragem { get; set; }

    [Required]
    [StringLength(80)]
    public string TpCombustivel { get; set; }

    [Required]
    [DataType(DataType.Date)]
    public DateTime? DtAquisicao { get; set; }

    public string Status { get; set; }

    [Range(1, int.MaxValue, ErrorMessage = "Capacidade de passageiros deve ser um número positivo.")]
    public int? CapPassageiros { get; set; }

    public string Categoria { get; set; }

    [StringLength(12)]
    public string NmrChassi { get; set; }

    public string Renavam { get; set; }

    public string Cor { get; set; }

    public virtual ICollection<Manutencao> Manutencoes { get; } = new List<Manutencao>();

    public virtual ICollection<Viagem> Viagens { get; set; }
}
