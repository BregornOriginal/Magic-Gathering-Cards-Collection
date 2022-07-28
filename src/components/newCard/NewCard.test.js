import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import NewMagicCard from './NewCard';

const cardProps = {
  id: '57aaebc1-850c-503d-9f6e-bb8d00d8bf7c',
  name: 'Angel of Mercy',
};

const cardRender = () => (
  <BrowserRouter>
    <NewMagicCard
      id={cardProps.id}
      name={cardProps.name}
    />
  </BrowserRouter>
);

test('Card displayed', () => {
  render(<NewMagicCard id={cardProps.id} title={cardProps.name} />, { wrapper: cardRender });
  expect(screen.getByText('Angel of Mercy')).toBeInTheDocument();
});
