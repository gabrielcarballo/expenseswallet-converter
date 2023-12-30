# Expense Tracker Project

## Project Overview

This project is a web application that allows users to manage their expenses and convert them into different currencies. Developed as part of a bootcamp, the project involves implementing various features using React with Class components and Classic Redux. The primary focus is on enhancing front-end skills while simulating a real-world financial scenario.

## Development

### Project Structure

The project is structured around multiple React components, each serving a specific function:

- **Login:** This component facilitates user authentication based on email and password.
- **Wallet:** Responsible for managing and displaying the user's expenses.
- **ExpenseForm:** Renders a form for adding, editing, and removing expenses.
- **ExpenseTable:** Displays a table of all the user's expenses, allowing them to be edited or removed.
- **TotalExpenses:** Displays the total amount of expenses converted to a chosen currency.

### Project Requirements

The project successfully meets the specified requirements from the bootcamp readme:

1. **User Authentication:** Implementation of a login page for user authentication.
2. **Expense Management:** Creation of a wallet page where users can add, edit, and remove expenses.
3. **Expense Conversion:** Ability to convert the total expenses into a chosen currency.
4. **Redux Integration:** Use of Redux for state management, including creating a store, reducers, actions, and dispatchers, and connecting Redux to the React components.
5. **Asynchronous Actions:** Implementation of asynchronous actions in the React application that uses Redux.
6. **Unit Testing:** Development of unit tests to achieve 60% and 90% coverage of the application.

## Code Annotations

The global state of the application is structured as follows:

```jsx
{ 
  user: { 
    email: '', // string that stores the user's email 
  }, 
  wallet: { 
    currencies: [], // array of strings 
    expenses: [], // array of objects, with each object having the keys id, value, currency, method, tag, description, and exchangeRates 
    editor: false, // boolean value that indicates whether an expense is being edited 
    idToEdit: 0, // numeric value that stores the id of the expense being edited 
  } 
}

##Feedback

Your feedback is invaluable! Please share your thoughts and suggestions regarding the project. I am eager to incorporate any insights you may have.

##Portfolio

Check out my [portfolio](my-folio-weld.vercel.app/) for more of my work!