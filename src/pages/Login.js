import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleLogin } from '../redux/actions';

const acceptablePassword = 5;

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(handleLogin(email));
    history.push('/carteira');
  };

  render() {
    const { email, password } = this.state;
    const passwordValidation = String(password).length > acceptablePassword;
    const emailValidation = String(email)
      .toLowerCase()
      .match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
    const enable = emailValidation && passwordValidation;
    return (
      <div>
        <form>
          Email:
          <input
            data-testid="email-input"
            name="email"
            onChange={ this.handleChange }
          />
          Senha:
          <input
            data-testid="password-input"
            type="password"
            name="password"
            onChange={ this.handleChange }
          />
          <button
            type="button"
            disabled={ !enable }
            onClick={ this.handleSubmit }
          >
            Entrar
          </button>

        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = ({ email }) => ({ email });

export default connect(mapStateToProps)(Login);
