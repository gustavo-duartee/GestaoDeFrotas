﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DriveSync.Migrations
{
    /// <inheritdoc />
    public partial class addManutencao : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Manutencao",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    dt_manutencao = table.Column<DateTime>(type: "datetime2", nullable: false),
                    fornecedor = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    valor = table.Column<float>(type: "real", nullable: false),
                    descricao = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false),
                    pecas_trocadas = table.Column<string>(type: "nvarchar(1000)", maxLength: 1000, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Manutencao", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Manutencao");
        }
    }
}