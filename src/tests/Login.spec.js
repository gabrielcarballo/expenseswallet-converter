import React from 'react';
/* import { screen, waitFor } from '@testing-library/react'; */
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';
/* import mock from './helpers/mockData'; */

describe('Login component tests', () => {
  it('Tests if elements are rendered correctly', () => {
    const { getByRole, getByTestId } = renderWithRouterAndRedux(<App />);
    const enterBtn = getByRole('button', { name: /entrar/i });
    const emailInput = getByRole('textbox');
    const passwordInput = getByTestId('password-input');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(enterBtn).toBeInTheDocument();
    expect(enterBtn).toBeDisabled();
    userEvent.type(emailInput, 'teste@teste.com');
    userEvent.type(passwordInput, '123456789');
    expect(enterBtn).toBeEnabled();
    userEvent.click(enterBtn);
  });
});
