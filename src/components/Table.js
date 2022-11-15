import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Table extends Component {
  logExpenses = () => {
    const { expenses } = this.props;
    console.log(expenses);
  };

  render() {
    /* const { expenses } = this.props; */
    return (
      <table>
        <th onClick={ this.logExpenses }>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.func.isRequired,
};

const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

export default connect(mapStateToProps)(Table);
