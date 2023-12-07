import React, { useEffect } from 'react'
import '../App.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Details from './Details'

const Movies = () => {

    
 
    let i = document.querySelector('input')
    const[film,setFilm] = useState("harry")
    const[ text,setText] = useState([])
    useEffect(() => {
      fetch(`https://www.omdbapi.com/?s=${film.split(" ").join("%20")}&apikey=3003361e`)
      .then(res =>{
        return res.json();
      })
      .then(data =>{ 
        console.log(data);
        setText(data.Search)
        console.log(text)
        
      })
    },[film])
    
    function searchMovies(){
      setFilm(document.querySelector('.inputt').value)
      console.log(text)
    }
    function searchDetails(){
      <Link to={`/details/`}></Link>
    }
  
    return (
    <div>
      <nav>
        <h1>MOvies</h1>
        <div className='div1'>
        <button className='section1' > <Link to={'/'}>Home</Link> </button>
        <button className='section2'><Link to={'/details'}>List</Link></button>
        </div>
      </nav>
      <div className='div1'>
      <input  className="inputt" placeholder='   search...' type="text"  />

      <button  className='buttonSearch' onClick={searchMovies}  >search</button>
      </div>
     <main>
       
     { 
     
      text.map(e => (
       
        <div className='card'>
         <img src={e.Poster}/> 
        <p> {e.Title}</p><span>({e.Year})</span>
        <button className='button' onClick={()=>}>Add list</button>
        <div className='list'>{e.Title}</div>
         <button className='button'><Link  to={`/details/${e.imdbID}`}>details</Link></button>
        </div>
      ))
     
       
     }
     </main>
      
     
      <Details/>
      
    </div>
  )
}

export default Movies
