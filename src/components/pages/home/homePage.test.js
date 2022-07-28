import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/configureStore';

import MagicCards from './homePage';

function wrapperPage() {
  return (<Provider store={store}><MagicCards /></Provider>);
}

test('Home displayed', () => {
  render(<MagicCards />, { wrapper: wrapperPage });
  expect(document.querySelector('section')).toBeInTheDocument();
});
