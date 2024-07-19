import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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
  api.get('api/manutencoes', authorization)
    .then(response => {
      setManutencao(response.data);
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


function Row(props) {
  const { veiculo } = props;
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

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
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
