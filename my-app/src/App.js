// import logo from './logo.svg';
import './App.css';
// import Item from './Myitem'
import React from 'react';
class FilmItem extends React.Component{
  render(){
    return(
      <li>
        <a href={this.props.url}>{this.props.url}</a>
      </li>
    )
  }
}
class StarWars extends React.Component{
  constructor(){
    super()
    this.state={
      loadedCharacter: false,
      name: null,
      height:null,
      homeworld:null,
      imageUrl:null,
      flim:[],

    }
  }
  // getNewCharacter(){
  //   const rNum = Math.round(Math.random()*82)
  //   const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${rNum}.json`
  //   // const url = `https://swapi.dev/api/people/${rNum}`
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data =>{
  //     console.log(data)
  //     this.setState({
      
  //     name: data.name,
  //     height:data.height,
  //     homeworld:data.homeworld,
  //     flim:data.films,
  //     loadedCharacter: true,
  //   })
  //   })
    
  // }
  getNewCharacter() {
    const randomNumber = Math.round( Math.random() * 88)
    const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          imageUrl: data.image,
          loadedCharacter: true,
        })
      })
  }

  render(){
    const movies = this.state.flim.map((url, i)=>{
      return <FilmItem key={i} url = {url}/>
    })
    return(
      <div>
    {
      this.state.loadedCharacter &&
      <div>
      <img src={this.state.imageUrl} alt={this.state.imageUrl}/>
      <h1>{this.state.name}</h1>
    <p>{this.state.height+'miter'} </p>
    <p><a href={this.state.homeworld}>Homeworld</a></p>
    <ul>
      {movies}
    </ul>
    </div>
    }
      <button type='button' onClick={()=>this.getNewCharacter()}
       className='btn'>
       Randonmize Charactere
       </button>

      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Item name = "Krishna"/>
        <Item name = "Nitin"/>
        <Item name = "Manish"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <StarWars/>
      </header>
      
    </div>
  );
}

export default App;
