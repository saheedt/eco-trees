import React, {useState, useEffect} from 'react';
import './Image.css';
import { Helper } from '../../utils';

interface Props {
    src: string;
    title: string;
    toggleImage: boolean;
}

const Image: React.FC<Props> = ({ src, title, toggleImage }) => {

    const fallBackImg = 'https://carolinadojo.com/wp-content/uploads/2017/04/default-image-768x576.jpg'

    const [source, setSource] = useState<HTMLImageElement | undefined>(undefined);

    const loadImage = async (src: string) => {
        try {
            const image = await Helper.loadImage(src);
            setSource(image as HTMLImageElement);
        } catch (error) {
            setSource({src: fallBackImg} as HTMLImageElement)
        }
    }

    useEffect(() => {
        loadImage(src);
    }, [src])


    return (
        <div className="image-holder">
            {toggleImage && <img className="image" src={source?.src} alt={title} />}
        </div>
    );
};

export default Image;
