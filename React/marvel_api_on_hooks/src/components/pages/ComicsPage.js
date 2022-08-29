import { useState } from "react";

import ComicsList from '../comicsList/ComicsList'
import AppBanner from "../appBanner/AppBanner";
import SingleComic from "../singleComic/SingleComic";

const ComicsPage = () => {
    const [selectedComic, setComic] = useState(null);

    const onComicSelected = (id) => {
        setComic(id);
    }

    return (
        <>
            <AppBanner/>
            <ComicsList onComicsSelected={onComicSelected}/>
            {/* <SingleComic comicId={101153}/> */}
        </>
    )
}

export default ComicsPage;