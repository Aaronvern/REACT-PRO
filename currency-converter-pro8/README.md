# Currency Converter App

## Overview

This project is a currency converter web application built using React. It allows users to convert between different currencies using real-time exchange rates fetched from an API.

## Features

- Allows users to input an amount to convert.
- Provides a selection of currencies to convert from and to.
- Swapping functionality to quickly switch between conversion directions.
- Fetches real-time exchange rate data from an API.

## Components

### App.jsx

- **Description**: The main component that orchestrates the application's logic and UI.
- **Hooks Used**:
  - `useState`: Manages state variables for amount, from currency, to currency, and converted amount.
  - `useCurrencyInfo`: Custom hook to fetch currency exchange rate information.
- **Functionality**:
  - Converts currency based on user input.
  - Implements swapping functionality to switch between currencies.
  - Renders input boxes for amount and currency selection.

### InputBox.jsx

- **Description**: A reusable component for input fields related to currency conversion.
- **Props**:
  - `label`: The label for the input field.
  - `amount`: The amount to convert.
  - `onAmountChange`: Handler function for amount change.
  - `onCurrencyChange`: Handler function for currency change.
  - `currencyOptions`: Array of currency options.
  - `selectCurrency`: The currently selected currency.
  - `amountDisable`: Boolean to disable amount input.
  - `currencyDisable`: Boolean to disable currency selection.
- **Functionality**:
  - Renders input fields for amount and currency selection.
  - Handles user input and triggers appropriate change handlers.

### useCurrencyInfo.js

- **Description**: Custom hook to fetch currency exchange rate data from an external API.
- **Hooks Used**:
  - `useEffect`: Executes side effects like data fetching.
  - `useState`: Manages state for fetched currency data.
- **Functionality**:
  - Fetches currency exchange rate data from an external API (`https://latest.currency-api.pages.dev/v1/currencies/{currency}.json`).
  - Returns the fetched data to be used in components.

## Tailwind CSS

- **Usage**: Utilizes Tailwind CSS for responsive layout design.
- **Benefits**: Enables rapid development through utility-first styling, ensuring a consistent user experience across devices.

## preview
![preview ](assets/Screenshot%202024-04-22%20234504.png)