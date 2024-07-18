//#region imports
import React, { useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";
import { ModalCriarVeiculo } from '../components/Veiculos/ModalCriarVeiculos';
import { ModalEditarVeiculo } from '../components/Veiculos/ModalEditarVeiculos';
import api from '../services/api';
import * as React from 'react';
import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, TablePagination } from '@mui/material';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
import { KeyboardArrowDownIcon, KeyboardArrowUpIcon } from '@mui/icons-material';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
//#endregion

export function Veiculos() {
  const [searchInput, setSearchInput] = useState('');
  const [filtro, setFiltro] = useState([]);
  const [veiculos, setVeiculos] = useState([]);
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [veiculoId, setVeiculoId] = useState(null);
  const [manutencao, getManutencao] = useState(''),
  const [manutencaoId, getManutencaoId] = useState(''),

  const token = localStorage.getItem('token');
  const authorization = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

//#region chamadas de api

  useEffect(() => {
    api.get('api/veiculos', authorization)
      .then(response => {
        setVeiculos(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter veículo: ', error);
      });
  }, []);

  useEffect(() => {
    api.get('api/mantencoes', authorization)
        .then(response => {
            getManutencao(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error('Erro ao obter manutenção: ', error);
        });
}, []);

  const searchVeiculos = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const dadosFiltrados = veiculos.filter((item) => {
        return Object.values(item).join('').toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase())
      });
      setFiltro(dadosFiltrados);
    }
    else {
      setFiltro(veiculos);
    }
  }
  const editVeiculo = async (id) => {
    try {
      console.log(`Editar veículo com ID: ${id}`);
      closeModal();
    } catch (error) {
      alert("Não foi possível editar o veículo")
    }
  }

  const excluirVeiculo = async (id) => {
    if (!window.confirm(`Deseja realmente excluir o veículo ${id}?`)) {
      return;
    }

    try {
      await api.delete(`api/veiculos/${id}`, authorization);
      alert("Veiculo excluído com sucesso!");
      window.location.reload();
    } catch (error) {
      let errorMessage = "Não foi possível deletar o veículo";

      if (error.response) {
        const { data, status } = error.response;
        if (status === 400) {
          errorMessage = "Veículo não encontrado";
        } else if (status >= 500) {
          errorMessage = "Falha na comunicação com o servidor";
        } else {
          errorMessage = data.message || errorMessage;
        }
      }

      alert(errorMessage);
    }
  }
  //#endregion

//#region chamada de modais
  const openEditModal = (id) => {
    setVeiculoId(id);
    setModalEditIsOpen(true); // Abre o modal de edição
  }

  const openCreateModal = () => {
    setModalCreateIsOpen(true); // Abre o modal de criação
  }

  const closeModal = () => {
    setModalCreateIsOpen(false); // Fecha o modal de criação
    setModalEditIsOpen(false); // Fecha o modal de edição
    setVeiculoId(null);
  }

  //#endregion

  function createData(
    marca,
    modelo,
    ano,
    placa,
    quilometragem,
    tp_combustivel,
    dt_aquisicao,
    status,
  ) {
    return {
      marca,
      modelo,
      ano,
      placa,
      quilometragem,
      tp_combustivel,
      dt_aquisicao,
      status,
      manutencoes: [
        {
          dt_manutencao,
          dt_proxmanutencao,
          tp_manutencao,
          servico,
          valor,
          descricao,
        },
      ],
    };
  }


  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {veiculo.id}
          </TableCell>
          <TableCell align="right">{veiculo.placa}</TableCell>
          <TableCell align="right">{veiculo.marca}</TableCell>
          <TableCell align="right">{veiculo.modelo}</TableCell>
          <TableCell align="right">{veiculo.ano}</TableCell>
          <TableCell align="right">{veiculo.quilometragem}</TableCell>
          <TableCell align="right">{veiculo.dt_aquisicao}</TableCell>
          <TableCell align="right">{veiculo.tp_combustivel}</TableCell>
          <TableCell align="right">{veiculo.status}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Manutenção
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Data da Última Manutenção</TableCell>
                      <TableCell>Próxima Manutenção</TableCell>
                      <TableCell>Tipo da Manutenção</TableCell>
                      <TableCell>Veículo</TableCell>
                      <TableCell>Serviço</TableCell>
                      <TableCell>Valor</TableCell>
                      <TableCell>Descrição</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.manutencoes.map((manutencao) => (
                      <TableRow key={manutencao.id}>
                        <TableCell component="th" scope="row">{historyRow.date}</TableCell>
                        <TableCell align="right">{manutencao.dt_manutencao}</TableCell>
                        <TableCell align="right">{manutencao.dt_prox_manutencao}</TableCell>
                        <TableCell align="right">{manutencao.tp_manutencao}</TableCell>
                        <TableCell align="right">{manutencao.veiculo}</TableCell>
                        <TableCell align="right">{manutencao.servico}</TableCell>
                        <TableCell align="right">{manutencao.valor}</TableCell>
                        <TableCell align="right">{manutencao.descricao}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  //   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  //   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
  // ];

  export default function CollapsibleTable() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              {/* <TableCell>Dessert (100g serving)</TableCell> */}
              <TableCell align="right">Marca</TableCell>
              <TableCell align="right">Modelo</TableCell>
              <TableCell align="right">Ano</TableCell>
              <TableCell align="right">Placa</TableCell>
              <TableCell align="right">Quilometragem</TableCell>
              <TableCell align="right">Tipo&nbsp;de Combustível</TableCell>
              <TableCell align="right">Data&nbsp;Aquisição</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {veiculos.map((veiculo) => (
              <Row key={veiculo.id} row={veiculo} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
























  return (
    <div>
      <Sidebar />
      <div style={{ flex: 1, marginTop: '4rem', marginLeft: '16rem' }} >
        <div id="main-content" className="h-full w-full bg-gray-100 relative overflow-y-auto ">
          <main>
            <div className="pt-6 px-4">

              {/* Header da página */}
              <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                <h1 className="text-2xl font-medium tracking-tight text-gray-900">Veículos</h1>
                <div className="relative">
                  <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="text" onChange={(e) => searchVeiculos(e.target.value)} id="table-search-users" className="pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Pesquisar veículo" />
                </div>
                <button type="button" onClick={openCreateModal} className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Novo Veículo +</button>
              </div>

              {/* Corpo da página */}
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white mb-20" style={{ maxHeight: "40rem", overflow: "auto" }}>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  {/* Cabeçalho da tabela */}
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 border">
                    <tr>
                      <th scope="col" className="px-6 py-3">Placa</th>
                      <th scope="col" className="px-6 py-3">Marca</th>
                      <th scope="col" className="px-6 py-3">Modelo</th>
                      <th scope="col" className="px-6 py-3">Ano</th>
                      <th scope="col" className="px-6 py-3">Quilometragem</th>
                      <th scope="col" className="px-6 py-3">Aquisição</th>
                      <th scope="col" className="px-6 py-3">Tipo do Combustível</th>
                      <th scope="col" className="px-6 py-3">Status</th>
                      <th scope="col" className="px-6 py-3">Ações</th>
                    </tr>
                  </thead>
                  {/* Linha da tabela */}
                  <tbody>
                    {searchInput.length > 1 ? (
                      filtro.map(veiculo => (
                        <tr key={veiculo.id} className="bg-white border-b">
                          <td className="px-6 py-4">{veiculo.placa}</td>
                          <td className="px-6 py-4">{veiculo.marca}</td>
                          <td className="px-6 py-4">{veiculo.modelo}</td>
                          <td className="px-6 py-4">{veiculo.ano}</td>
                          <td className="px-6 py-4">{veiculo.quilometragem}</td>
                          <td className="px-6 py-4">{veiculo.dt_aquisicao}</td>
                          <td className="px-6 py-4">{veiculo.tp_combustivel}</td>
                          <td className="px-6 py-4">{veiculo.status}</td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex gap-2">
                              <button type="button" onClick={() => excluirVeiculo(veiculo.id)} className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Excluir</button>
                              <button type="button" onClick={() => openEditModal(veiculo.id)} className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Editar</button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      veiculos.map(veiculo => (
                        <tr key={veiculo.id} className="bg-white border-b">
                          <td className="px-6 py-4">{veiculo.placa}</td>
                          <td className="px-6 py-4">{veiculo.marca}</td>
                          <td className="px-6 py-4">{veiculo.modelo}</td>
                          <td className="px-6 py-4">{veiculo.ano}</td>
                          <td className="px-6 py-4">{veiculo.quilometragem}</td>
                          <td className="px-6 py-4">{veiculo.dt_aquisicao}</td>
                          <td className="px-6 py-4">{veiculo.tp_combustivel}</td>
                          <td className="px-6 py-4">{veiculo.status}</td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex gap-2">
                              <button type="button" onClick={() => excluirVeiculo(veiculo.id)} className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Excluir</button>
                              <button type="button" onClick={() => openEditModal(veiculo.id)} className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Editar</button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>


      {/* Chamando os modais na tela */}
      <ModalEditarVeiculo
        isOpen={modalEditIsOpen} // Passa o estado de abertura do modal de edição
        onRequestClose={closeModal} // Passa a função para fechar o modal de edição
        veiculoId={veiculoId}
        editVeiculo={editVeiculo}
      />
      <ModalCriarVeiculo
        isOpen={modalCreateIsOpen} // Passa o estado de abertura do modal de criação
        onRequestClose={closeModal} // Passa a função para fechar o modal de criação
      />
    </div>
  );
}
