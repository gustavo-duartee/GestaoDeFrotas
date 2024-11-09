using DriveSync.Model;
using DriveSync.Dtos;
using Microsoft.EntityFrameworkCore;
using System;
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

            // Cria um novo Checklist
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

            _context.Checklists.Add(novoChecklist);
            await _context.SaveChangesAsync();

            // Cria o Diagnóstico de Início
            var diagnosticoInicio = new DiagnosticosInicio
            {
                NivelCombustivelInicio = viagemDto.DiagnosticoInicio.NivelCombustivelInicio,
                StatusControleEmissaoInicio = viagemDto.DiagnosticoInicio.StatusControleEmissaoInicio,
                MonitorCatalisadorInicio = viagemDto.DiagnosticoInicio.MonitorCatalisadorInicio,
                MonitorSensor02Inicio = viagemDto.DiagnosticoInicio.MonitorSensor02Inicio,
                TemperaturaSensor02Inicio = viagemDto.DiagnosticoInicio.TemperaturaSensor02Inicio,
                TemperaturaTransmissaoInicio = viagemDto.DiagnosticoInicio.TemperaturaTransmissaoInicio,
                StatusTransmissaoInicio = viagemDto.DiagnosticoInicio.StatusTransmissaoInicio,
                CodigoFalhaInicio = viagemDto.DiagnosticoInicio.CodigoFalhaInicio,
                StatusMonitoresEmissaoInicio = viagemDto.DiagnosticoInicio.StatusMonitoresEmissaoInicio,
                VoltagemBateriaInicio = viagemDto.DiagnosticoInicio.VoltagemBateriaInicio,
                DataHoraDiagnosticoInicio = DateTime.UtcNow
            };

            _context.DiagnosticosInicio.Add(diagnosticoInicio);
            await _context.SaveChangesAsync();

            // Cria a nova viagem
            var novaViagem = new Viagem
            {
                MotoristaId = viagemDto.MotoristaId,
                VeiculoId = viagemDto.VeiculoId,
                DataInicio = DateTime.UtcNow,
                LocalizacaoInicio = viagemDto.Localizacao,
                Status = StatusViagem.EmAndamento,
                ChecklistId = novoChecklist.Id,
                DiagnosticoInicioId = diagnosticoInicio.Id,
                ObservacoesInicio = viagemDto.Observacoes
            };

            _context.Viagens.Add(novaViagem);
            await _context.SaveChangesAsync();

            return novaViagem;
        }

        public async Task<IEnumerable<Viagem>> ListarViagensAsync()
        {
            return await _context.Viagens
                .Include(v => v.Checklist)
                .Include(v => v.DiagnosticoInicio)
                .Include(v => v.DiagnosticoEncerramento)
                .ToListAsync();
        }

        public async Task<Viagem> ObterViagemPorIdAsync(int id)
        {
            return await _context.Viagens
                .Include(v => v.Checklist)
                .Include(v => v.DiagnosticoInicio)
                .Include(v => v.DiagnosticoEncerramento)
                .FirstOrDefaultAsync(v => v.Id == id);
        }

        public async Task<Viagem> EncerrarViagemAsync(int viagemId, ViagemEncerramentoDto viagemEncerramentoDto)
        {
            var viagem = await _context.Viagens.FindAsync(viagemId);
            if (viagem == null)
            {
                return null; // Viagem não encontrada
            }

            // Criar ou obter o Diagnóstico de Encerramento
            var diagnosticoEncerramento = new DiagnosticosEncerramento
            {
                NivelCombustivelEncerramento = viagemEncerramentoDto.NivelCombustivelEncerramento,
                StatusControleEmissaoEncerramento = viagemEncerramentoDto.StatusControleEmissaoEncerramento,
                // Preencher com os outros campos...
            };

            _context.DiagnosticosEncerramento.Add(diagnosticoEncerramento);
            await _context.SaveChangesAsync(); // Salva o diagnóstico para garantir que ele tenha um ID válido

            // Agora associamos o Diagnóstico de Encerramento à Viagem
            viagem.Status = StatusViagem.Encerrada;
            viagem.DataEncerramento = DateTime.Now;
            viagem.LocalizacaoEncerramento = viagemEncerramentoDto.LocalizacaoEncerramento;
            viagem.ObservacoesEncerramento = viagemEncerramentoDto.ObservacoesEncerramento;
            viagem.DiagnosticoEncerramentoId = diagnosticoEncerramento.Id; // Associando o Diagnóstico

            // Salvar alterações na viagem
            await _context.SaveChangesAsync();

            return viagem;
        }

    }
}
