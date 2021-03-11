import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const AppHeader = () => {
  return (
    <h1>Title</h1>
    <decr> Опис </decr>
  );
}

const AppLayout = () => {
  return (
    <h2>Title 2</h2>
  );
}
const AppFooter = () => {
  return (
    <h3>Title 2</h3>
  );
}

const App = () => {
  return (
  <>
  <AppHeader />
  <AppLayout />
  <AppLayout />
  <AppLayout />
  <AppFooter />
  </>
);
}
ReactDOM.render(<App />, document.getElementById('root'));