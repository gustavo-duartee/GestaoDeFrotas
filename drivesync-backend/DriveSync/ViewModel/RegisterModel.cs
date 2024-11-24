using System.ComponentModel.DataAnnotations;

namespace DriveSync.ViewModel
{
    public class RegisterModel
    {
        [Required]
        [EmailAddress(ErrorMessage = "O e-mail não é válido.")]
        public string Email { get; set; }

        [Required]
        public string Nome { get; set; }  // Não é necessário EmailAddress aqui

        [Required]
        [Phone(ErrorMessage = "O telefone não é válido.")]
        public string Telefone { get; set; }  // Use Phone para validar números de telefone

        [Required]
        public string Cargo { get; set; }  // Não é necessário EmailAddress aqui

        [Required]
        [DataType(DataType.Password)]
        public string Senha { get; set; }

        [DataType(DataType.Password)]
        [Display(Name = "Confirma senha")]
        [Compare("Senha", ErrorMessage = "As senhas não conferem")]
        public string ConfirmaSenha { get; set; }
    }
}
