import { createRoot } from 'react-dom/client';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { fetchRandomGreeting } from './redux/actions';
import store from './redux/store';
import App from './components/App';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  const app = (
    <Provider store={store}>
      <App />
    </Provider>
  );

  if (rootElement.hasChildNodes()) {
    createRoot(rootElement).hydrate(app);
  } else {
    createRoot(rootElement).render(app);
  }

  store.dispatch(fetchRandomGreeting());
});
