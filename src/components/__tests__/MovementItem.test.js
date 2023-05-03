import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {MovementItem} from '../MovementItem';

const mockedNavigation = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigation,
    }),
  };
});

describe('MovementItem', () => {
  const item = {
    product: 'Test Product',
    createdAt: '2022-01-01T00:00:00.000Z',
    points: 100,
    image: 'test_image',
    is_redemption: false,
  };

  const negativeItem = {
    product: 'Test Product',
    createdAt: '2022-02-01T00:00:00.000Z',
    points: 102,
    image: 'test_image',
    is_redemption: true,
  };

  it('should render the correct product name', () => {
    const {getByTestId} = render(<MovementItem item={item} />);
    expect(getByTestId('movement-item-product').props.value).toBe(item.product);
  });

  it('should render the correct date in Spanish format', () => {
    const {getByTestId} = render(<MovementItem item={item} />);
    expect(getByTestId('movement-item-date').props.value).toBe(
      '01 de enero, 2022',
    );
  });

  it('should render the positive points indicator', () => {
    const {getByTestId} = render(<MovementItem item={item} />);
    expect(getByTestId('movement-item-points-indicator').props.value).toBe('+');
  });

  it('should render the negative points indicator', () => {
    const {getByTestId} = render(<MovementItem item={negativeItem} />);
    expect(getByTestId('movement-item-points-indicator').props.value).toBe('-');
  });

  it('should render the correct points', () => {
    const {getByTestId} = render(<MovementItem item={item} />);
    expect(getByTestId('movement-item-points').props.value).toBe(item.points);
  });

  it('should render the image component with the correct source', () => {
    const {getByTestId} = render(<MovementItem item={item} />);
    const image = getByTestId('movement-item-image');
    expect(image.props.source).toBe(item.image);
  });

  it('should navigate to Details when pressed', () => {
    const {getByTestId} = render(<MovementItem item={item} />);
    const touchable = getByTestId('movement-item-touchable');

    fireEvent.press(touchable);
    expect(mockedNavigation.mock.calls[0][0]).toBe('Details');
  });
});
