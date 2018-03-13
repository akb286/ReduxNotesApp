import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <div className="App">
    <TodoForm />
    <TodoList />
    <Footer />
  </div>
);


export default App;
