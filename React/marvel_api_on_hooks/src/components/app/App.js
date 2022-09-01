import {lazy, Suspense} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// import {MainPage, ComicsPage, SingleComicPage} from '../pages'; // По умолчанию WebPack ищет именно в папке index.js
import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const Page404 = lazy(() => import('../pages/404')); // динамические импорты идут после статических
const MainPage = lazy(() => import('../pages/MainPage')); 
const ComicsPage = lazy(() => import('../pages/ComicsPage')); 
const SingleComicPage = lazy(() => import('../pages/SingleComicPage')); 

const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Routes>
                            <Route path="/" 
                                element={<MainPage/>}/> 
                            <Route path="/comics" 
                                element={<ComicsPage/>}/>
                            <Route path="/comics/:comicId"
                                element={<SingleComicPage/>}/>


                            <Route
                                path="*"
                                element={
                                    <Page404/>
                                }
                                />
                        </Routes>
                    </Suspense>
                </main>
            </div>
        </Router>
    )
}

export default App;