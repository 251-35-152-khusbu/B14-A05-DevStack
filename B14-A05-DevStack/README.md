Dev Stack – React Application

 About The Project

Dev Stack is a simple and user-friendly web application built with React. It helps users explore and manage different developer-related items through an interactive interface.

The project is designed with a clean layout and simple features to make the user experience better.

 Technologies Used

React.js

JavaScript

HTML5

Tailwind CSS

JSON

Vite

Main Features

Dynamic Data Loading: Loads project data from a JSON file and displays it on the website.

Interactive UI: Users can interact with the application and manage items easily.

Conditional Rendering: Shows different messages or content based on the application's current state.

React Questions & Answers

1. What is JSX, and why is it used in React?

JSX is a syntax that looks like HTML inside JavaScript. It helps us write UI elements easily in React.

2. What is the difference between props and state?

Props: Props are used to pass data from a parent component to a child component.

State: State stores data inside a component and can change over time.

3. What does the useState hook do, and where did you use it in this project?

The useState hook helps us store and update data in a component.

I used it to manage the changing data and update the UI when something changes.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook runs code after a component renders.

I used it to load JSON data when the component first appears on the screen.

5. Why does every item in a .map() list need a unique key prop?

A unique key helps React identify each item in a list. It helps React update the UI correctly and efficiently.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing different content based on a condition.

For example, when the stack is empty, I show an empty stack message. When data is available, I show the items.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

We pass data from parent to child using props.

To send information back, the parent passes a function as a prop, and the child calls that function with the required data.

 Author

Developed as a React learning project.

🔗 Live Website

Visit Dev Stack
