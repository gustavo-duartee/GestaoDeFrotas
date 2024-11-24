using Microsoft.AspNetCore.Mvc;
using DriveSync.Service;
using System.Threading.Tasks;

namespace DriveSync.Controllers
{
    [ApiController]
    [Route("api/formulario")]
    public class EmailController : ControllerBase
    {
        private readonly EmailService _emailService;

        // Injetando o EmailService
        public EmailController(EmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpPost("entrar")]
        public IActionResult EnviarFormulario([FromBody] FormularioRequest request)
        {
            // Usando o EmailService para enviar o e-mail
            _emailService.EnviarFormulario(request.Email, "Testando o Teste Grátis", $"Olá {request.Nome},\n\nObrigado por se inscrever para o teste grátis.");

            return Ok(new { message = "Formulário enviado com sucesso!" });
        }

        public class FormularioRequest
        {
            public string Nome { get; set; }
            public string Email { get; set; }
        }
    }
}
