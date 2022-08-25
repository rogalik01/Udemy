import { Component } from 'react';
import './charList.scss';
import Spinner from '../spinner/Spinner';

import PropTypes from 'prop-types'

import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';


class CharList extends Component {
    state = {
        characters: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 210,
        charEnded: false,
        selectedItem: null
    }

    marvelService = new MarvelService();

    componentDidMount() {
        window.addEventListener('scroll',  this.onScroll);
        this.onRequest();
    }

    onScroll = () => {
        if (!this.state.newItemLoading &&
            (window.pageYOffset // прокрученная часть
            + document.documentElement.clientHeight // видимая часть без прокрутки 
            >= document.documentElement.scrollHeight - 1)) { // высота с учётом прокрутки
                this.onRequest(this.state.offset);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onRequest = (offset) => {
        this.setState({newItemLoading: true});
        this.marvelService.getAllCharacters(offset)
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoaded = (newCharacters) => {
        let ended = false;
        if (newCharacters.length < 9) {
            ended = true;
        }

        this.setState(({offset, characters}) => ({
            characters: [...characters, ...newCharacters],
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended
        }));
    }

    onError = (res) => {
        this.setState({
            loading: false,
            error: true
        })
    }

    render() {
        const {loading, newItemLoading, offset, charEnded, error} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? this.view() : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button
                    className="button button__main button__long"
                    disabled={newItemLoading}
                    style={{'display': charEnded ? 'none' : 'block'}}
                    onClick={() => this.onRequest(offset)}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }

    view = () => {
        const elements = this.state.characters.map((item, i) => {
            const {thumbnail, name, id} = item;
            let style = {'objectFit': 'cover'};
            if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                style = {'objectFit': 'unset'};
            }
            return (
                <li 
                    tabIndex={0}
                    ref={this.setRef}
                    className={"char__item " + (this.selectedItem === i ? 'char__item_selected' : '' )}
                    key={id}
                    onClick={(elem) => {
                            this.props.onCharSelected(id);
                            this.selectedItem = i;
                            this.itemRefs[i].focus();
                        }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            this.props.onCharSelected(id);
                            this.selectedItem = i;
                            this.itemRefs[i].focus();
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

    itemRefs = [];

    setRef = (ref) => {
        this.itemRefs.push(ref);
    }
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;