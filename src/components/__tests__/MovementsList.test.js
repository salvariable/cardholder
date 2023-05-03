import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {MovementsList} from '../MovementsList';

const mockData = [
  {
    id: 1,
    is_redemption: true,
    title: 'Redemption 1',
    date: '2022-05-01',
    amount: 100,
  },
  {
    id: 2,
    is_redemption: false,
    title: 'Earning 1',
    date: '2022-04-29',
    amount: 50,
  },
  {
    id: 3,
    is_redemption: true,
    title: 'Redemption 2',
    date: '2022-04-28',
    amount: 75,
  },
];

describe('MovementsList component', () => {
  it('should render all movements by default', () => {
    const {getByTestId} = render(<MovementsList data={mockData} />);
    const flatList = getByTestId('movements-list-flatlist');
    expect(flatList.props.data).toEqual(mockData);
  });

  it('should filter by redemptions', () => {
    const {getByTestId} = render(<MovementsList data={mockData} />);
    const redeemedButton = getByTestId('movements-list-button-redeemed');
    fireEvent.press(redeemedButton);
    const flatList = getByTestId('movements-list-flatlist');
    expect(flatList.props.data).toEqual([mockData[0], mockData[2]]);
  });

  it('should filter by earnings', () => {
    const {getByTestId} = render(<MovementsList data={mockData} />);
    const earnedButton = getByTestId('movements-list-button-earned');
    fireEvent.press(earnedButton);
    const flatList = getByTestId('movements-list-flatlist');
    expect(flatList.props.data).toEqual([mockData[1]]);
  });

  it('should show all movements when "Todos" button is pressed', () => {
    const {getByTestId} = render(<MovementsList data={mockData} />);
    const redeemedButton = getByTestId('movements-list-button-redeemed');
    fireEvent.press(redeemedButton);
    const allButton = getByTestId('movements-list-button-all');
    fireEvent.press(allButton);
    const flatList = getByTestId('movements-list-flatlist');
    expect(flatList.props.data).toEqual(mockData);
  });
});
