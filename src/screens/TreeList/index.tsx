import React from 'react';
import TreeDetails from '../../components/TreeDetails';
import NotFound from '../../components/NotFound';
import Button from '../../components/Button';

import './TreeList.css';

interface Tree {
    name: string;
    species_name: string;
    image: string;
}

interface Props {
    trees: Tree[],
    retry?: () => void
}

const TreeList: React.FC<Props> = ({ trees, retry }) => {

    const renderTrees = () => {
        return (trees && trees.length) ?
            trees.map((tree, index) => (
                <TreeDetails
                key={`${tree.name}__${index}`}
                name={tree.name}
                speciesName={tree.species_name}
                image={tree.image}
                />
            ))
            :
            <NotFound message="No trees found!">
                <Button title="Retry" extraStyle={{ height: '50px' }} clickHandler={retry} />
            </NotFound>
    };

    return (
        <section className="tree-list-container">
            {renderTrees()}
        </section>
    )
};

export default TreeList;
