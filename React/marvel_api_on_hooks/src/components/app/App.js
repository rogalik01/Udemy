import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {MainPage, ComicsPage} from '../pages'; // По умолчанию WebPack ищет именно в папке index.js
import AppHeader from "../appHeader/AppHeader";


const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Switch> {/* без exact позволяет избежать композиции элементво */}
                        <Route exact path="/"> {/* Могли просто поставить последним, т.к. Switch выдает первый совпавший элемент */}
                            <MainPage/>
                        </Route>
                        <Route exact path="/comics">
                            <ComicsPage/>
                        </Route>
                        {/* <Route exact path="/comics/singleComics">
                        </Route> */}
                    </Switch>
                </main>
            </div>
        </Router>
    )
}

export default App;