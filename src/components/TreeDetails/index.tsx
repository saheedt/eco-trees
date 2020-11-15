import React, { useState } from 'react';
import './TreeDetails.css';

import Button from '../Button';
import Image from '../Image';

interface Props {
    name: string;
    speciesName: string;
    image: string;
}

const TreeDetails: React.FC<Props> = ({ name, speciesName, image }) => {

    const [displayImage, toggleDisplayImage] = useState(false);
    
    const toggleImage = () => {
        toggleDisplayImage(!displayImage);
    }

    return (
        <div className="tree-details-container shadow">
            <article className="tree-details-holder">
                <div className="tree-name-holder" aria-label="tree name">
                    <strong><h3>{name}</h3></strong>
                </div>
                <div className="tree-species-holder" aria-label="tree species name">
                    <h4>{speciesName}</h4>
                </div>
                <Image src={image} title={name} toggleImage={displayImage} />
                <div className="tree-image-toggle-btn-holder">
                    <Button title={`${displayImage ? 'Hide' : 'Show'} Image`} clickHandler={toggleImage} extraStyle={{width: '50%', minHeight: '3rem'}} />
                </div>
            </article>
        </div>
    )
};

export default TreeDetails;

