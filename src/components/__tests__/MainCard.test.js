import React from 'react';
import {render} from '@testing-library/react-native';
import {MainCard} from '../MainCard';

describe('MainCard', () => {
  it('renders correctly', () => {
    const {getByText, getByTestId} = render(<MainCard points={12345.67} />);
    const pointsText = getByText(/12,345.67 pts/i);
    const issuedText = getByText(/diciembre/i);
    const container = getByTestId('main-card-container');

    expect(pointsText).toBeTruthy();
    expect(issuedText).toBeTruthy();
    expect(container.props.style.borderRadius).toBe(20);
  });
});
