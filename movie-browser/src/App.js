
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/Aboutus';
// import Hero from './components/Hero'
import Search from './components/Search';
import MovieView from './components/movieView';
import { Switch, Route } from 'react-router-dom';
import { useState,useEffect } from 'react';

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(()=>{
    if(searchText)
    {fetch(`https://api.themoviedb.org/3/search/movie?api_key=9a07857692d5c9aaec99b7a5182567db&language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then(res=>res.json())
    .then(data=> {
      // console.log(data)
      setSearchResult(data.results)
    })}
  },[searchText])
  return (

    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
        {/* <Hero/> */}
        <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/search">
          <Search keyword={searchText} searchResult={searchResult}/>
        </Route>
        <Route path="/movie/:id" component={MovieView} />
        
        
      </Switch>
      
      
    </div>
  );
}

export default App;
