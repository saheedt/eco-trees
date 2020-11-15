import React from 'react';
import TreeDetails from '../../components/TreeDetails';

import './TreeList.css';

interface Tree {
    name: string;
    species_name: string;
    image: string;
}

interface Props {
    trees: Tree[]
}

const TreeList: React.FC<Props> = ({ trees }) => {

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
        <h3>No trees found!</h3>
    };

    return (
        <section className="tree-list-container">
            {renderTrees()}
        </section>
    )
};

export default TreeList;
