import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import './singleComic.scss';
import xMen from '../../resources/img/x-men.png';

const SingleComic = (props) => {
    const [comic, setComic] = useState(null);

    const {loading, error, getComic, clearError} = useMarvelService();

    useEffect(() => {
        updateComic()
    }, [props.comicId])

    const updateComic = () => {
        clearError();
        const {comicId} = props
        if (!comicId) {
            return;
        }
        console.log(`Вошёл`);
        getComic(comicId)
            .then(setComic)
        console.log(`Вышел`);
    }

    const View = ({comic}) => {
        console.log(comic);
        const {title, description, thumbnail, pages, language, price} = comic;
        return(
            <>
                <img src={thumbnail} alt={title} className="single-comic__img"/>
                    <div className="single-comic__info">
                        <h2 className="single-comic__name">{title}</h2>
                        <p className="single-comic__descr">{description}</p>
                        <p className="single-comic__descr">{pages} pages</p>
                        <p className="single-comic__descr">Language: {language}</p>
                        <div className="single-comic__price">{price}$</div>
                    </div>
                <a href="#" className="single-comic__back">Back to all</a>
            </>
        );
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !comic) ? <View comic={comic}/> : null;

    return (
        <div className="single-comic">
            {errorMessage}
            {spinner}
            {content}
        </div>
    )
}

export default SingleComic;