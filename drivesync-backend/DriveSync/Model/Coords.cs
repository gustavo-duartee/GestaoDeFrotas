using System;
using System.ComponentModel.DataAnnotations;

namespace YourNamespace.Models
{
    public class Coords
    {
        [Required]
        public double Latitude { get; set; }

        [Required]
        public double Longitude { get; set; }

        [Required]
        public long Timestamp { get; set; }
    }
}
