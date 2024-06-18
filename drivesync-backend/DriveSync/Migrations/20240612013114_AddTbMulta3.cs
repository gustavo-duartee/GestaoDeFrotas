using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DriveSync.Migrations
{
    /// <inheritdoc />
    public partial class AddTbMulta3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Multas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdVeiculo = table.Column<int>(type: "int", nullable: false),
                    IdViagem = table.Column<int>(type: "int", nullable: false),
                    Codigo = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    DtMulta = table.Column<DateTime>(type: "datetime2", nullable: false),
                    TpInfracao = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Valor = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    PtsCarteira = table.Column<int>(type: "int", nullable: false),
                    Descricao = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Multas", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Multas");
        }
    }
}
