﻿using DriveSync.Model;
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

        public async Task<Viagem> IniciarViagemAsync(Viagem viagem)
        {
            // Verifique se o Diagnóstico de Início não é nulo
            if (viagem.dataInicio == null)
            {
                throw new ArgumentNullException(nameof(viagem.dataInicio), "Diagnóstico de início não pode ser nulo.");
            }

            // Cria um novo Checklist
            var novoChecklist = new Checklists
            {
                freios = viagem.checklist.freios,
                pneus = viagem.checklist.pneus,
                luzes = viagem.checklist.luzes,
                combustivel = viagem.checklist.combustivel,
                equipamentos = viagem.checklist.equipamentos,
                estepe = viagem.checklist.estepe,
                extintor = viagem.checklist.extintor
            };

            _context.Checklists.Add(novoChecklist);
            await _context.SaveChangesAsync();

            // Cria a nova viagem
            var novaViagem = new Viagem
            {
                motoristaId = viagem.motoristaId,
                veiculoId = viagem.veiculoId,
                dataInicio = DateTime.UtcNow,
                localizacaoInicio = viagem.localizacaoInicio,
                status = StatusViagem.emAndamento,
                checklistId = novoChecklist.id,
                nivelCombustivelInicio = viagem.nivelCombustivelInicio,
                statusControleEmissaoInicio = viagem.statusControleEmissaoInicio,
                monitorCatalisadorInicio = viagem.monitorCatalisadorInicio,
                monitorSensor02Inicio = viagem.monitorSensor02Inicio,
                temperaturaSensor02Inicio = viagem.temperaturaSensor02Inicio,
                temperaturaTransmissaoInicio = viagem.temperaturaTransmissaoInicio,
                statusTransmissaoInicio = viagem.statusTransmissaoInicio,
                codigoFalhaInicio = viagem.codigoFalhaInicio,
                statusMonitoresEmissaoInicio = viagem.statusMonitoresEmissaoInicio,
                voltagemBateriaInicio = viagem.voltagemBateriaInicio,
                observacoesInicio = viagem.observacoesInicio
            };

            _context.Viagens.Add(novaViagem);
            await _context.SaveChangesAsync();

            return novaViagem;
        }

        public async Task<IEnumerable<Viagem>> ListarViagensAsync()
        {
            return await _context.Viagens
                .Include(v => v.checklist)
                .ToListAsync();
        }

        public async Task<Viagem> ObterViagemPorIdAsync(int id)
        {
            return await _context.Viagens
                .Include(v => v.checklist)
                .FirstOrDefaultAsync(v => v.id == id);
        }

        public async Task<Viagem> EncerrarViagemAsync(int id, Viagem viagemEncerramento)
        {
            // Buscar a viagem existente pelo ID
            var viagemExistente = await _context.Viagens.FindAsync(id);

            // Verificar se a viagem existe e se já foi encerrada (StatusViagem é uma enum)
            if (viagemExistente == null || viagemExistente.status == StatusViagem.encerrada) // Comparando com enum
            {
                return null; // Ou lance uma exceção para indicar que a viagem não pode ser encerrada
            }

            // Atualizar os dados da viagem com os dados do encerramento
            viagemExistente.localizacaoEncerramento = viagemEncerramento.localizacaoEncerramento;
            viagemExistente.observacoesEncerramento = viagemEncerramento.observacoesEncerramento;
            viagemExistente.nivelCombustivelEncerramento = viagemEncerramento.nivelCombustivelEncerramento;
            viagemExistente.statusControleEmissaoEncerramento = viagemEncerramento.statusControleEmissaoEncerramento;
            viagemExistente.monitorCatalisadorEncerramento = viagemEncerramento.monitorCatalisadorEncerramento;
            viagemExistente.monitorSensor02Encerramento = viagemEncerramento.monitorSensor02Encerramento;
            viagemExistente.temperaturaSensor02Encerramento = viagemEncerramento.temperaturaSensor02Encerramento;
            viagemExistente.temperaturaTransmissaoEncerramento = viagemEncerramento.temperaturaTransmissaoEncerramento;
            viagemExistente.statusTransmissaoEncerramento = viagemEncerramento.statusTransmissaoEncerramento;
            viagemExistente.codigoFalhaEncerramento = viagemEncerramento.codigoFalhaEncerramento;
            viagemExistente.statusMonitoresEmissaoEncerramento = viagemEncerramento.statusMonitoresEmissaoEncerramento;
            viagemExistente.voltagemBateriaEncerramento = viagemEncerramento.voltagemBateriaEncerramento;

            // Atualizar o status da viagem para "Encerrada" (StatusViagem.Encerrada é um enum)
            viagemExistente.status = StatusViagem.encerrada; // Atribuindo o valor da enum para Status

            // Salvar as mudanças no banco de dados
            _context.Viagens.Update(viagemExistente);
            await _context.SaveChangesAsync();

            return viagemExistente; // Retorna a viagem com os dados atualizados
        }
    }
}
