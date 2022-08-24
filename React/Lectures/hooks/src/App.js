import {/* Component,  */useState, useEffect, useCallback} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';



// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     componentDidMount() {
//         document.title = `Slide: ${this.state.slide}`;
//     }
    
//     componentDidUpdate() {
//         document.title = `Slide: ${this.state.slide}`;  
//     }

//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }

// const calcValue = () => {
//     console.log('random');

//     return Math.random() * 49 + 1;
// }

const Slider = (props) => {


    // const [slide, setSlide] = useState(() => calcValue());
    // const [slide, setSlide] = useState(calcValue); рассчитывается только один раз в начале
    const [slide, setSlide] = useState(0); // Возвращает массив из двух элементов (состояние и функция по его изменению)
    // arg - начальное значение состояния
    const [autoplay, setAutoplay] = useState(false);

    function logging() {
        console.log('log');
    }

    useEffect(() => {
        console.log('effect');
        document.title = `Slide: ${slide}`;

        window.addEventListener('click', logging);

        // аналог componentWillUnmount
        return () => {
            window.removeEventListener('click', logging);
        }

    }, [slide]); // arg2 - массив зависимостей, изменение к-х запускает эффект (пустой массив обеспечит аналог componentDidMount)

    function changeSlide(i) {
        // setSlide(slide + i); если состояние не зависит от предыдущего
        setSlide(slide => slide + i);
    }

    function toggleAutoplay() {
        // setAutoplay(!autoplay);
        setAutoplay(autoplay => !autoplay);
    }

    // аналог с одной переменной (лучше не использовать)
    // const [state, setState] = useState({slide: 0, autoplay: false})
    // function changeSlide(i) {
    //     setSlide(state => ({...state, slide: state.slide + i}));
    // }

    // function toggleAutoplay() {
    //     setAutoplay(state => ({...state, autoplay: !state.autoplay}));
    // }

    const getSomeImages = useCallback(() => {
        console.log('fetching');
        return [
            "https://funart.pro/uploads/posts/2021-07/1627574850_10-funart-pro-p-sinyaya-ptichka-zhivotnie-krasivo-foto-11.jpg",
            "https://i.pinimg.com/originals/1f/2e/48/1f2e48d3589ffbc86805e75dd0e4fce5.jpg"
        ]
    }, []);

    return (
        <Container>
            <div className="slider w-50 m-auto">
                <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />

                {/* {
                    getSomeImages().map((url, i) => { // без useCallback будет вызываться каждый раз при перерисовке страницы
                        return (
                            <img key={i} className="d-block w-100" src={url} alt="slide" />
                        );
                    })
                } */}

                <Slide getSomeImages={getSomeImages}/>

                <div className="text-center mt-5">Active slide {slide} <br/>{autoplay ? 'auto' : null}</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}

const Slide = ({getSomeImages}) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(getSomeImages())
    }, [getSomeImages])

    return (
        <>
            {images.map((url, i) => <img key={i} className="d-block w-100" src={url} alt="slide" />)}
        </>
    )
}

function App() {
    const [slider, setSlider] = useState(true);
    return (
        <>
            <button onClick={() => setSlider(false)}>Click</button>
            {slider ? <Slider/> : null}
        </>
    );
}

export default App;
