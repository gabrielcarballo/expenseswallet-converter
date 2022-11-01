import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({ email: state.user.email });

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <nav>
          <span
            data-testid="email-field"
          >
            { email }
          </span>
          <span
            data-testid="total-field"
          >
            0
          </span>
          <span
            data-testid="header-currency-field"
          >
            BRL
          </span>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
