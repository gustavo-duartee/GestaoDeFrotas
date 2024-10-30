using DriveSync.Model;
using DriveSync.Service;
using DriveSync.Dtos;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using DriveSync.Context;

namespace DriveSync.Service
{
    public class ViagemService : IViagemService
    {
        private readonly AppDbContext _context;

        public ViagemService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Viagem> IniciarViagemAsync(ViagemDto viagemDto)
        {
            // Cria um novo Checklist sem definir o ID (o banco de dados cuidará disso)
            var novoChecklist = new Checklists
            {
                Freios = viagemDto.Checklist.Freios,
                Pneus = viagemDto.Checklist.Pneus,
                Luzes = viagemDto.Checklist.Luzes,
                Combustivel = viagemDto.Checklist.Combustivel,
                Equipamentos = viagemDto.Checklist.Equipamentos,
                Estepe = viagemDto.Checklist.Estepe,
                Extintor = viagemDto.Checklist.Extintor
            };

            // Adiciona o novo Checklist ao contexto
            _context.Checklists.Add(novoChecklist);
            await _context.SaveChangesAsync(); // Salva o Checklist primeiro para gerar o ID

            // Agora, cria a nova viagem com o Checklist recém-criado
            var novaViagem = new Viagem
            {
                MotoristaId = viagemDto.MotoristaId, 
                VeiculoId = viagemDto.VeiculoId, // VeiculoId como int
                DataInicio = DateTime.UtcNow,
                Localizacao = viagemDto.Localizacao,
                Status = "em_andamento",
                ChecklistId = novoChecklist.Id, // Aqui, referenciamos o ID do Checklist criado
                Observacoes = viagemDto.Observacoes
            };

            // Adiciona a nova viagem ao contexto
            _context.Viagens.Add(novaViagem);
            await _context.SaveChangesAsync(); // Salva a nova viagem

            return novaViagem;
        }

        public async Task<IEnumerable<Viagem>> ListarViagensAsync()
        {
            return await _context.Viagens.Include(v => v.Checklist).ToListAsync();
        }

        public async Task<Viagem> ObterViagemPorIdAsync(int id)
        {
            return await _context.Viagens.Include(v => v.Checklist).FirstOrDefaultAsync(v => v.Id == id);
        }


        public async Task<Viagem> EncerrarViagemAsync(int viagemId)
        {
            // Busca a viagem pelo ID
            var viagem = await _context.Viagens.FirstOrDefaultAsync(v => v.Id == viagemId);

            // Verifica se a viagem existe
            if (viagem == null)
            {
                throw new Exception("Viagem não encontrada.");
            }

            // Atualiza o status e a data de encerramento
            viagem.Status = "Encerrada";
            viagem.DataEncerramento = DateTime.UtcNow;

            // Salva as alterações no banco de dados
            await _context.SaveChangesAsync();

            return viagem;
        }

    }
}
