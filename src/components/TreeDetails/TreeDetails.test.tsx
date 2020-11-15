import React from 'react';
import { render, screen } from '@testing-library/react';
import TreeDetails from '.';

test('renders TreeDetails correctly', async () => {
    const tree = {
        name: 'Baobab',
        speciesName: 'Adansonia',
        image: 'tes.jpg'
    };

    render(<TreeDetails name={tree.name} speciesName={tree.speciesName} image={tree.image} />);

    const treeName = screen.queryByText(/Baobab/i);
    expect(treeName).toBeInTheDocument();
    expect(treeName?.textContent).toEqual(tree.name);
    const treeSpecie = screen.queryByText(/Adansonia/i);
    expect(treeSpecie).toBeInTheDocument();
    expect(treeSpecie?.textContent).toEqual(tree.speciesName);
    const btn = screen.queryByText(/Show Image/);
    expect(btn).toBeInTheDocument();
});

test('toggles tree image', async () => {
     const tree = {
        name: 'Baobab',
        speciesName: 'Adansonia',
        image: 'tes.jpg'
    };

    render(<TreeDetails name={tree.name} speciesName={tree.speciesName} image={tree.image} />);

    const unRenderedImage = screen.queryByAltText(/Baobab/i);
    expect(unRenderedImage).not.toBeInTheDocument();

    const showBtn = screen.queryByText(/Show Image/);
    showBtn?.click();
    const renderedImage = screen.queryByAltText(/Baobab/i);
    const hideBtn = screen.queryByText(/Hide Image/);
    expect(renderedImage).toBeInTheDocument();
    expect(hideBtn).toBeInTheDocument();
});
