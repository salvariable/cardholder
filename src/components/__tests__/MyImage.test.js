import React from 'react';
import {render} from '@testing-library/react-native';
import {MyImage} from '../MyImage';

describe('MyImage', () => {
  it('renders with the correct source and size', () => {
    const {getByTestId} = render(
      <MyImage size={100} source="https://example.com/image.jpg" />,
    );
    const image = getByTestId('my-image');
    expect(image.props.source.uri).toBe('https://example.com/image.jpg');
    expect(image.props.style.width).toBe(100);
    expect(image.props.style.height).toBe(100);
  });

  it('renders with default source and size', () => {
    const {getByTestId} = render(<MyImage size={123} />);
    const image = getByTestId('my-image');
    expect(image.props.source.uri).toBe(
      'https://www.shutterstock.com/image-vector/profile-sign-user-thumbnail-icon-260nw-1915203964.jpg',
    );
    expect(image.props.style.width).toBe(123);
    expect(image.props.style.height).toBe(123);
  });

  it('renders with borderRadius 10 when size <= 60', () => {
    const {getByTestId} = render(<MyImage size={50} />);
    const image = getByTestId('my-image');
    expect(image.props.style.borderRadius).toBe(10);
  });

  it('renders with borderRadius 0 when size > 60', () => {
    const {getByTestId} = render(<MyImage size={100} />);
    const image = getByTestId('my-image');
    expect(image.props.style.borderRadius).toBe(0);
  });
});
