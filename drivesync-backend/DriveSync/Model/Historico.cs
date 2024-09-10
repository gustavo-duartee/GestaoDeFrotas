using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace YourNamespace.Models
{
    public class Historico
    {
        [Key]
        public Guid Id { get; set; } // Usando Guid para o _id

        [Required]
        public string UserId { get; set; }

        [Required]
        public string LicensePlate { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string Status { get; set; } // Ex: "departure"

        [Required]
        public DateTime CreatedAt { get; set; }

        [Required]
        public DateTime UpdatedAt { get; set; }

        // Relacionamento com Coords
        public List<Coords> Coords { get; set; } = new List<Coords>();
    }
}
