using MailKit.Net.Smtp;
using MimeKit;
using MailKit.Security;
using Microsoft.Extensions.Configuration;
using System;

namespace DriveSync.Service
{
    public class EmailService
    {
        private readonly IConfiguration _configuration;

        // Injetando IConfiguration para acessar as configurações no appsettings.json
        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public void EnviarFormulario(string toEmail, string subject, string body)
        {
            try
            {
                // Configurações de e-mail do arquivo appsettings.json
                var fromEmail = _configuration["EmailSettings:FromEmail"];
                var password = _configuration["EmailSettings:Password"];
                var smtpServer = _configuration["EmailSettings:SmtpServer"];
                var smtpPort = int.Parse(_configuration["EmailSettings:SmtpPort"]);

                // Criação da mensagem de e-mail
                var message = new MimeMessage();
                message.From.Add(new MailboxAddress("Seu Nome", fromEmail));
                message.To.Add(new MailboxAddress("", toEmail));
                message.Subject = subject;

                // Corpo do e-mail
                message.Body = new TextPart("plain")
                {
                    Text = body
                };

                // Enviar e-mail via SMTP
                using (var client = new SmtpClient())
                {
                    client.ServerCertificateValidationCallback = (s, c, h, e) => true; // Ignorar erros de SSL (somente para testes)
                    client.Connect(smtpServer, smtpPort, SecureSocketOptions.StartTls); // Conectar com StartTLS
                    client.Authenticate(fromEmail, password); // Autenticação SMTP
                    client.Send(message); // Enviar o e-mail
                    client.Disconnect(true); // Desconectar do servidor
                }

                Console.WriteLine("E-mail enviado com sucesso!");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao enviar e-mail: {ex.Message}");
                // Aqui você pode registrar o erro ou relatar de alguma forma
            }
        }
    }
}
