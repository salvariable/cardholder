import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {Details} from '../Details';

const mockItem = {
  product: 'Product Name',
  createdAt: '2022-05-02T14:22:13.385Z',
  image: require('../product-image.png'),
  points: 100,
};

describe('Details component', () => {
  it('renders correctly', () => {
    const {getByText, getByTestId} = render(
      <Details route={{params: {item: mockItem}}} />,
    );
    expect(getByTestId('details-image')).toBeDefined();
    expect(getByText('Detalles del producto:')).toBeDefined();
    expect(getByText(`Comprado el 02 de mayo, 2022`)).toBeDefined();
    expect(getByText(`Con esta compra acumulaste`)).toBeDefined();
    expect(getByText(`100 puntos`)).toBeDefined();
    expect(getByText(`Aceptar`)).toBeDefined();
  });

  it('navigates to Dashboard on button press', () => {
    const mockNavigate = jest.fn();
    const {getByTestId} = render(
      <Details
        route={{params: {item: mockItem}}}
        navigation={{navigate: mockNavigate}}
      />,
    );
    fireEvent.press(getByTestId('details-button'));
    expect(mockNavigate).toHaveBeenCalledWith('Dashboard');
  });
});
