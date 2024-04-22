using Microsoft.Identity.Client;
using System.ComponentModel.DataAnnotations;

namespace DriveSync.ViewModel
{
    public class LoginModel
    {
        [Required(ErrorMessage ="Email é obrigatório")]
        [EmailAddress(ErrorMessage = "Formato de email inválido")]

        public string Email { get; set; }

        [Required(ErrorMessage = "A senha é obrigatória")]
        [StringLength(20, ErrorMessage = "A {0} deve ter no mínimo {2} e no máximo {1} caracteres.", MinimumLength = 10)]
        [DataType(DataType.Password)]

        public string Senha { get; set; }
    }
}
