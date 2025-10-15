// Importing necessary libraries
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Updated to import the new component

// Main application component
const MainApp = () => <App />;

// Rendering the application to the DOM
ReactDOM.render(<MainApp />, document.getElementById('root'));