import React from 'react';
import {render} from '@testing-library/react-native';

import {DetailsHeader} from '../DetailsHeader';

describe('DetailsHeader', () => {
  it('renders the title text', () => {
    const title = 'Details Page';
    const {getByText} = render(<DetailsHeader title={title} />);
    const titleText = getByText(title);

    expect(titleText).toBeDefined();
  });

  it('renders with the correct background color', () => {
    const {getByTestId} = render(<DetailsHeader title="Details Page" />);
    const container = getByTestId('details-header-container');

    expect(container.props.style.backgroundColor).toBe('#CFD6FF');
  });

  it('renders with the correct height', () => {
    const {getByTestId} = render(<DetailsHeader title="Details Page" />);
    const container = getByTestId('details-header-container');

    expect(container.props.style.height).toBe(130);
  });

  it('renders the title text with the correct font size and weight', () => {
    const {getByText} = render(<DetailsHeader title="Details Page" />);
    const titleText = getByText('Details Page');

    expect(titleText.props.style.fontSize).toBe(24);
  });
});
