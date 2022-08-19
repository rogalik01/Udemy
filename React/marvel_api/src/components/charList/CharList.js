import { Component } from 'react';
import './charList.scss';
import Spinner from '../spinner/Spinner';

import ErrorMessage from '../errorMessage/ErrorMessage';
import MarvelService from '../../services/MarvelService';


class CharList extends Component {
    state = {
        characters: [],
        loading: true,
        error: false
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.marvelService
            .getAllCharacters()
            .then(this.onCharListLoaded)
            .catch(this.onError)
    }

    onCharListLoaded = (characters) => {
        this.setState({
            characters,
            loading: false
        });
    }

    onError = (res) => {
        this.setState({
            loading: false,
            error: true
        })
    }

    render() {
        const {loading, error} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? this.view() : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }

    view = () => {
        const elements = this.state.characters.map(item => {
            const {thumbnail, name, id} = item;
            let style = 'cover';
            if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
                style = 'unset';
            }
            return (
                <li 
                    className="char__item"
                    key={id}
                    onClick={() => this.props.onCharSelected(id)}>
                        <img src={thumbnail} style={{'objectFit' :style}} alt={name}/>
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
}

export default CharList;