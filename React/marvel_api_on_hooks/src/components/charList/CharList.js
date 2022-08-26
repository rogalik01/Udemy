import { useState, useEffect, useRef } from 'react';
import './charList.scss';
import Spinner from '../spinner/Spinner';

import PropTypes from 'prop-types'

import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';


const CharList = (props) => {
    const [characters, setCharacters] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(true);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const {loading, error, getAllCharacters} = useMarvelService();

    useEffect(() => { // запускается уже после рендера, что позволяет нам использовать функции до их объявления
        window.addEventListener('scroll',  onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, [])

    useEffect(() => {
        if(newItemLoading) {
            onRequest(offset);
        }
    }, [newItemLoading])

    const onScroll = () => {
        if (window.pageYOffset // прокрученная часть
            + document.documentElement.clientHeight // видимая часть без прокрутки 
            >= document.documentElement.scrollHeight - 1) { // высота с учётом прокрутки
                setNewItemLoading(true);
        }
    }

    const onRequest = (offset) => {
        getAllCharacters(offset)
            .then(onCharListLoaded)
    }

    const onCharListLoaded = (newCharacters) => {
        let ended = false;
        if (newCharacters.length < 9) {
            ended = true;
        }

        setCharacters(characters => [...characters, ...newCharacters]);
        setNewItemLoading(newItemLoading => false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => ended);
    }

    const itemRefs = useRef([]);

    function view() {
        const elements = characters.map((item, i) => {
            const {thumbnail, name, id} = item;
            let style = {'objectFit': 'cover'};
            if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                style = {'objectFit': 'unset'};
            }
            return (
                <li 
                    tabIndex={0}
                    ref={item => itemRefs.current[i] = item}
                    className={"char__item " + (selectedItem === i ? 'char__item_selected' : '' )}
                    key={id}
                    onClick={(elem) => {
                            props.onCharSelected(id);
                            setSelectedItem(i);
                            itemRefs.current[i].focus();
                        }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            props.onCharSelected(id);
                            setSelectedItem(i);
                            itemRefs.current[i].focus();
                        }
                    }}>
                        <img src={thumbnail} style={style} alt={name}/>
                        <div className="char__name">{name}</div>
                </li>
            )
        })
    
        return (
            <ul className="char__grid">
                {elements}
            </ul>
        )
    }

    
    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {view()}
            <button
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': charEnded ? 'none' : 'block'}}
                onClick={() => onRequest(offset)}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;