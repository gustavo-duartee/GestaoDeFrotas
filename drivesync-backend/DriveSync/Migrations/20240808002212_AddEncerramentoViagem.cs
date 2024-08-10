using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DriveSync.Migrations
{
    /// <inheritdoc />
    public partial class AddEncerramentoViagem : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Criar uma nova coluna temporária para 'MotoristaId' para manter os dados
            migrationBuilder.AddColumn<Guid>(
                name: "MotoristaIdTemp",
                table: "Viagens",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: Guid.Empty);

            // Copiar os dados da coluna antiga 'MotoristaId' para a nova coluna 'MotoristaIdTemp'
            migrationBuilder.Sql(
                "UPDATE Viagens SET MotoristaIdTemp = CAST(MotoristaId AS uniqueidentifier)");

            // Remover a coluna antiga 'MotoristaId'
            migrationBuilder.DropColumn(
                name: "MotoristaId",
                table: "Viagens");

            // Renomear a nova coluna 'MotoristaIdTemp' para 'MotoristaId'
            migrationBuilder.RenameColumn(
                name: "MotoristaIdTemp",
                table: "Viagens",
                newName: "MotoristaId");

            // Verificar se as colunas já existem antes de adicioná-las
            migrationBuilder.Sql(@"
                IF COL_LENGTH('Viagens', 'LocalFim') IS NULL
                BEGIN
                    ALTER TABLE [Viagens] ADD [LocalFim] nvarchar(max) NULL;
                END
            ");

            migrationBuilder.Sql(@"
                IF COL_LENGTH('Viagens', 'DataFim') IS NULL
                BEGIN
                    ALTER TABLE [Viagens] ADD [DataFim] datetime2 NULL;
                END
            ");

            migrationBuilder.Sql(@"
                IF COL_LENGTH('Viagens', 'Distancia') IS NULL
                BEGIN
                    ALTER TABLE [Viagens] ADD [Distancia] float NULL;
                END
            ");

            migrationBuilder.Sql(@"
                IF COL_LENGTH('Viagens', 'Duracao') IS NULL
                BEGIN
                    ALTER TABLE [Viagens] ADD [Duracao] int NULL;
                END
            ");

            migrationBuilder.Sql(@"
                IF COL_LENGTH('Viagens', 'Notas') IS NULL
                BEGIN
                    ALTER TABLE [Viagens] ADD [Notas] nvarchar(max) NULL;
                END
            ");

            migrationBuilder.Sql(@"
                IF COL_LENGTH('Viagens', 'Ativa') IS NULL
                BEGIN
                    ALTER TABLE [Viagens] ADD [Ativa] bit NOT NULL DEFAULT 0;
                END
            ");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // Reverter as operações adicionando a coluna original 'MotoristaId' como int
            migrationBuilder.AddColumn<int>(
                name: "MotoristaId",
                table: "Viagens",
                type: "int",
                nullable: false,
                defaultValue: 0);

            // Remover a coluna 'MotoristaId' que foi convertida para GUID
            migrationBuilder.DropColumn(
                name: "MotoristaId",
                table: "Viagens");

            // Remover as colunas adicionadas para o encerramento da viagem
            migrationBuilder.DropColumn(
                name: "LocalFim",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "DataFim",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "Distancia",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "Duracao",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "Notas",
                table: "Viagens");

            migrationBuilder.DropColumn(
                name: "Ativa",
                table: "Viagens");
        }
    }
}
