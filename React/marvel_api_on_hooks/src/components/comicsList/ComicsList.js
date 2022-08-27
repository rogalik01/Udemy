import { useState, useEffect, useRef } from 'react';
import './comicsList.scss';
import uw from '../../resources/img/UW.png';
import xMen from '../../resources/img/x-men.png';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';


const ComicsList = (props) => {
    const [comics, setComics] = useState([]);
    const [offset, setOffset] = useState(123);
    const [newItemLoading, setNewItemLoading] = useState(true);
    const {loading, error, getAllComics} = useMarvelService();
    const [comicsEnded, setCharEnded] = useState(false);

    useEffect(() => { // запускается уже после рендера, что позволяет нам использовать функции до их объявления
        window.addEventListener('scroll',  onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])

    const onScroll = () => {
        if (window.pageYOffset // прокрученная часть
            + document.documentElement.clientHeight // видимая часть без прокрутки 
            >= document.documentElement.scrollHeight - 1) { // высота с учётом прокрутки
                setNewItemLoading(true);
        }
    }
    
    useEffect(() => {
        if(newItemLoading) {
            onRequest(offset);
        }
    }, [newItemLoading])

    const onRequest = (offset) => {
        getAllComics(offset)
            .then(onComicsListLoaded)
    }

    const onComicsListLoaded = (newComics) => {
        let ended = false;
        if (newComics.length < 8) {
            ended = true;
        }

        setComics(comics => [...comics, ...newComics]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 8);
        setCharEnded(comicsEnded => ended);
    }

    function view() {
        const elements = comics.map((item, i) => {
            const {thumbnail, title, id, url, price} = item;
            // let style = {'objectFit': 'cover'};
            // if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            //     style = {'objectFit': 'unset'};
            // }
            return (
                <li 
                    className={"comics__item"}
                    key={i}
                    onClick={(elem) => props.onComicsSelected(id)}>
                    <a href={url}>
                        <img src={thumbnail} alt={title} className="comics__item-img"/>
                        <div className="comics__item-name">{title}</div>
                        <div className="comics__item-price">{price}$</div>
                    </a>
                </li>
            )
        })
    
        return (
            <ul className="comics__grid">
                {elements}
            </ul>
        )
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;



    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {view()}
            <button
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': comicsEnded ? 'none' : 'block'}}
                onClick={() => setNewItemLoading(newItemLoading => true)}>
                    <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;