import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './components/store/configureStore';

import Header from './components/header/header';
import App from './App';

const MockApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

describe('Integration Test', () => {
  it('MockApp', async () => {
    render(<MockApp />);
    expect(screen.getByText('Collection of Cards Magic The Gatering')).toBeInTheDocument();
  });
});

test('Header displayed', () => {
  render(<Header />, { wrapper: BrowserRouter });
  expect(screen.getByAltText('Logo of Magic The Gatering')).toBeInTheDocument();
});