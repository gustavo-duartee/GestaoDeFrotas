using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DriveSync.Migrations
{
    /// <inheritdoc />
    public partial class UpdateViagemIdsToGuid : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            // Adicionar coluna temporária para conversão
            migrationBuilder.AddColumn<Guid>(
                name: "TempMotoristaId",
                table: "Viagens",
                type: "uniqueidentifier",
                nullable: true);

            // Copiar dados da coluna antiga para a nova coluna
            migrationBuilder.Sql(@"
                UPDATE [Viagens]
                SET [TempMotoristaId] = NEWID(); -- Substitua esta linha com a lógica de conversão adequada, se necessário
            ");

            // Remover a coluna antiga
            migrationBuilder.DropColumn(
                name: "MotoristaId",
                table: "Viagens");

            // Renomear a nova coluna para o nome antigo
            migrationBuilder.RenameColumn(
                name: "TempMotoristaId",
                table: "Viagens",
                newName: "MotoristaId");

            // Aplicar a restrição de NOT NULL
            migrationBuilder.AlterColumn<Guid>(
                name: "MotoristaId",
                table: "Viagens",
                type: "uniqueidentifier",
                nullable: false,
                oldClrType: typeof(Guid),
                oldType: "uniqueidentifier",
                oldNullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            // Adicionar coluna temporária para conversão de volta
            migrationBuilder.AddColumn<int>(
                name: "TempMotoristaId",
                table: "Viagens",
                type: "int",
                nullable: true);

            // Copiar dados da coluna nova para a coluna temporária
            migrationBuilder.Sql(@"
                UPDATE [Viagens]
                SET [TempMotoristaId] = CONVERT(int, [MotoristaId]);
            ");

            // Remover a coluna nova
            migrationBuilder.DropColumn(
                name: "MotoristaId",
                table: "Viagens");

            // Renomear a coluna temporária para o nome antigo
            migrationBuilder.RenameColumn(
                name: "TempMotoristaId",
                table: "Viagens",
                newName: "MotoristaId");

            // Aplicar a restrição de NOT NULL
            migrationBuilder.AlterColumn<int>(
                name: "MotoristaId",
                table: "Viagens",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);
        }
    }
}
