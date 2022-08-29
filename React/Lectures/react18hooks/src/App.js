import data from './data';
import {useState, useMemo, useDeferredValue, useTransition} from 'react';

function App() {
    const [text, setText] = useState('');
    const [posts, setPosts] = useState(data);
    // const defferedValue = useDeferredValue(text); // позволяет реакту откладывает отрисовку этого элемента
    const [isPending, startTransition] = useTransition(); // isPending позволяет отслеживать состояния перехода

    // const filteredPosts = useMemo(() => {
    //     return posts.filter(item => item.name.toLowerCase().includes(text));
    // }, [text]);
    // const filteredPosts = useMemo(() => {
    //     return posts.filter(item => item.name.toLowerCase().includes(defferedValue));
    // }, [defferedValue]);
    const filteredPosts = useMemo(() => {
        return posts.filter(item => item.name.toLowerCase().includes(text));
    }, [text]);

    const onValueChange = (e) => {
        startTransition(() => {
            setText(e.target.value);
        })
    }

    return (
        <>
            <input value={text} type='text' onChange={onValueChange}/>

            <hr/>

            <div>
                {/* {filteredPosts.map(post => (
                    <div key={post._id}>
                        <h4>{post.name}</h4>
                    </div>
                ))} */}
                {isPending ? <h4>Loading...</h4> : 
                filteredPosts.map(post => (
                    <div key={post._id}>
                        <h4>{post.name}</h4>
                    </div>
                    ))}
            </div>
        </>
    );
}

export default App;
