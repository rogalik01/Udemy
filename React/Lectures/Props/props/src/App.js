import './App.css';

function WhoAmI ({name, surname, link}) { // props - Объект
    return ( // динамически изменить значение его свойства нельзя, для этого необходимо полностью пересоздать объект
             // передавать через свойства м/о что угодно
        <div>
            <h1>My name is {name.firstName}, surname - {surname()}</h1>
            <a href={link}>My profile</a>
        </div>
    )
}

function App() {
  return (
    <div className="App">
      <WhoAmI name={{firstName: "John"}} surname={() => {return 'Smith'}} link="facebook.com"/>
      <WhoAmI name={{firstName: 'Alex'}} surname={() => {return 'Shepard'}} link="vk.com"/>
    </div>
  );
}

export default App;
