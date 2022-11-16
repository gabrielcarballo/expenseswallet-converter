import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { renderWithRouterAndRedux as render } from './helpers/renderWith';

describe('Wallet page tests', () => {
  it('Test if elements renders correctly', async () => {
    const emailTest = 'teste@teste.com';
    const { getByRole, getByText, store, getByTestId } = render(<App />, {
      initialState: {
        user: {
          email: emailTest,
        },
      },
      initialEntries: (['/carteira']) });

    expect(store.getState().user).toEqual({
      email: emailTest,
    });
    const email = getByText(emailTest);
    const totalField = getByTestId('total-field');
    expect(email).toBeInTheDocument();
    const valueField = getByTestId('value-input');
    userEvent.type(valueField, '10');
    const descriptionField = getByTestId('description-input');
    userEvent.type(descriptionField, 'textExpense');
    const submitExpenseBtn = getByRole('button', { name: /adicionar despesa/i });
    userEvent.click(submitExpenseBtn);
    expect(totalField).not.toBe(0.00);
    // Usar o findByRole(assincrono) com screen e await faz eu conseguir puxar o elemento da tela após a interação esperada//
    expect(await screen.findByRole('cell', {
      name: /dólar americano\/real brasileiro/i,
    })).toBeInTheDocument();
  });
});
