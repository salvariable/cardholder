import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {Dashboard} from '../Dashboard';

jest.mock('../../hooks/getProducts', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    products: [
      {
        id: 1,
        name: 'Product 1',
        points: 100,
        is_redemption: false,
      },
      {
        id: 2,
        name: 'Product 2',
        points: 400,
        is_redemption: true,
      },
    ],
    loading: false,
  })),
}));

it('renders without crashing', async () => {
  const {getByText} = render(<Dashboard />);
  await waitFor(() => {
    expect(getByText('¡Bienvenido de vuelta!')).toBeTruthy();
  });
});
