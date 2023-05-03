import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {MyButton} from '../MyButton';

describe('MyButton', () => {
  it('renders correctly with regular size', () => {
    const onPress = jest.fn();
    const {getByText} = render(<MyButton title="Click Me" onPress={onPress} />);

    const button = getByText('Click Me');

    expect(button).toBeDefined();
    expect(button.props.style[1].fontSize).toBe(16);

    fireEvent.press(button);

    expect(onPress).toHaveBeenCalled();
  });

  it('renders correctly with small size', () => {
    const onPress = jest.fn();
    const {getByText} = render(<MyButton title="Ganados" onPress={onPress} />);

    const button = getByText('Ganados');

    expect(button).toBeDefined();
    expect(button.props.style[1].fontSize).toBe(12);
  });
});
