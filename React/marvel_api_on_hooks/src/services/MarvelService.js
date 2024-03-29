import {useHttp} from '../hooks/http.hook';

const useMarvelService = () => {
    const {loading, request, error, clearError, setLoading} = useHttp();

    const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    const _apiKey = 'apikey=80054140392ea531ca5ce6f94f95af91';
    const _baseOffset = 210;

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
        return _transformCharacter(res.data.results[0]);
    }

    const _transformCharacter = (character) => {
        return {
            id: character.id,
            name: character.name,
            description: character.description,
            thumbnail: character.thumbnail.path + '.' + character.thumbnail.extension,
            homepage: character.urls[0].url,
            wiki: character.urls[1].url,
            comics: character.comics.items
        }
    }

    const getAllComics = async (offset) => {
        const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformComics);
    }

    const getComic = async (id) => {
        const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
        return _transformComics(res.data.results[0]);
    }

    const _transformComics = (comics) => {
        // console.log(comics)
        return {
            id: comics.id,
            title: comics.title,
            description: comics.description ?? 'Description is not defined',
            pages: comics.pageCount,
            language: comics.textObjects?.length ? comics.textObjects[0].language : "en",
            price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'Not available',
            thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            url: comics.urls[0].url
        }
    }

    return {loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComic, setLoading}
}

export default useMarvelService;