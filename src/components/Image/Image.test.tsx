import React from 'react';
import { render, screen } from '@testing-library/react';
import Image from '.';

test('renders image when toggleImage is true', async () => {
    render(<Image src='' title='test' toggleImage={true} />);
    const image = screen.queryByAltText(/test/i);
    expect(image).toBeInTheDocument();
});

test('does not render image when toggleImage is false', async () => {
    render(<Image src='' title='test' toggleImage={false} />);
    const image = screen.queryByAltText(/test/i);
        // await screen.findAllByAltText(/test/i)
    expect(image).not.toBeInTheDocument();
});