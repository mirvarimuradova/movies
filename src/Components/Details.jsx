import React, { useEffect } from 'react'
import {Link, useParams} from 'react-router-dom';
import { useState } from 'react';
const Details = () => {
    const {id} = useParams();
    const [datas,setDatas] = useState(null)
    useEffect(()=>{
     
        fetch(`https://www.omdbapi.com/?i=${id}&apikey=3003361e`)
        .then( res =>{
            return res.json()
        })
        .then(data =>{
          setDatas(data)
            console.log(data)
            
          })
        },[])
        console.log(datas)
  return (
    <div>
      
      {datas !== null && ( 
        <div>
          <img src={datas.Poster} alt={datas.Title} />
          <h2>Title: {datas.Title}</h2>
          <p>Actors: {datas.Actors}</p>
          
          <p>Released:{datas.Released}</p>
          <button><Link  to= {`https://www.imdb.com/title/${id}/`} >Details</Link></button>
        </div>
      )}
        
       

      
        
        
      
    </div>
  )
}

export default Details
