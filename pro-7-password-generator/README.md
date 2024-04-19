# Password Generator

A simple password generator built using React and Tailwind CSS.

## Description

This application generates random passwords based on user preferences for length and character types. It allows users to specify the length of the password and choose whether to include numbers and special characters.

## Features

- **Password Generation:** Random passwords are generated based on user-defined criteria.
- **Customizable Length:** Users can adjust the length of the generated passwords using a range input.
- **Character Type Selection:** Users can choose to include numbers and special characters in the generated passwords by toggling checkboxes.

## Technologies Used

- **React:** Front-end library used to build the user interface and manage state.
- **Tailwind CSS:** Utility-first CSS framework used for styling the application.
- **JavaScript:** Programming language used for logic and functionality.

## React Hooks Used

- **useState:** Used to manage state variables such as `length`, `noAllowed`, `charAllowed`, and `password`.
- **useRef:** Used to create a reference to the password input element.
- **useCallback:** Used to memoize functions like `passwordGenerator` and `copyPasswordToClipboard` to prevent unnecessary re-renders.
- **useEffect:** Used to trigger the `passwordGenerator` function when dependencies like `length`, `noAllowed`, `charAllowed`, or `password` change.

## preview
![preview ](/assets/preview.png)