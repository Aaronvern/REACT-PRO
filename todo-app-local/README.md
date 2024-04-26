# Todo App

This is a simple todo application built using React. It allows users to add, edit, delete, and mark todo items as completed.

## Technologies Used

- **React**: Used for building the user interface and managing state.
- **Context API**: Utilized to manage global state for todo items.

## Usage

To run the application:

1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the app using `npm start`.

## Features

- Add todo items.
- Edit existing todo items.
- Mark todo items as completed.
- Delete todo items.
- **Persistent Data**: Utilizes local storage to persist todo data, ensuring that data is retained even after page refreshes.



## How Context API is Used

In the todo app, the Context API plays a central role in managing the state of todo items across the application. Here's a detailed breakdown of its implementation:

### 1. Context Creation

- **TodoContext**: Created using React's `createContext` function, the `TodoContext` defines the shape of the global state and the methods to interact with it.

### 2. Context Provider

- **TodoProvider**: This component acts as the provider for the todo state and related functions, wrapping the entire application within its scope. By doing so, it ensures that any component within its hierarchy can access the todo data.

### 3. Custom Hook

- **useTodo**: A custom hook is created to streamline the usage of the `TodoContext`. Internally, it utilizes the `useContext` hook to retrieve the todo state and methods from the context.

### 4. State Management

- Within the `App` component, the `todos` state and related functions (`addTodo`, `updateTodo`, `deleteTodo`, `toggleComplete`) are defined. These functions are passed down to the `TodoProvider` as part of the context value.

- **Consuming Context**: In components such as `TodoForm` and `TodoItem`, the `useTodo` hook is used to access the todo context. This allows these components to interact with the global todo state and perform actions like adding, updating, deleting, and toggling todo items.

By utilizing the Context API in this manner, the todo app achieves efficient state management and ensures that the state is easily accessible to any part of the application that needs it. This approach also facilitates cleaner component composition and reduces prop drilling, leading to more maintainable code.

## Project Structure

The project structure is organized as follows:

- **components**: Contains reusable UI components.
- **contexts**: Contains the Context API setup and custom hooks.
- **App.js**: Main component that renders the todo application.
- **TodoForm.js**: Component for adding new todo items.
- **TodoItem.js**: Component for displaying individual todo items.

![todo app preview](./assets/Screenshot%202024-04-26%20210637.png)