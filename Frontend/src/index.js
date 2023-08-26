import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { AppProvider } from './components/context/productcontext';
import { FilterContextProvider } from './components/context/filter_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </AppProvider>

);

reportWebVitals();
