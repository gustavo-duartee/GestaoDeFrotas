using System.ComponentModel.DataAnnotations;

namespace DriveSync.ViewModel
{
    public class RegisterModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Senha { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirma senha")]
        [Compare("Senha", ErrorMessage = "As senhas não conferem")]
        public string ConfirmaSenha { get; set;}
    }
}
