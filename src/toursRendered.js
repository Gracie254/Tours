import React, {useEffect, useState} from 'react'
import destination from './destinations'


const UseStateTours = () => {
 const [isLoading, setIsLoading] = useState(true)
const [showMore, setShowMore] = useState(false)
const [trip, setTrip] = useState(destination)  
const getData = ()=>{
    
    setTrip(trip)
}
const removeItem =(id) => {
    setTrip((trip)=>{
        let newTrips = trip.filter((tour)=> tour.id !== id)
        return newTrips
    })
}

   useEffect(()=>{
    getData()
    
    setTimeout(()=>{
        setIsLoading(false)
    }, 2000)
    
   }, [])
  if(isLoading){
      return(
          <div>
              <h1>Loading...</h1>
          </div>
      )
  }

    return (
        <>
        {trip.map((tour)=>{
            const {id, image, name, price, info, extra} = tour
          
            return (
                <article key={id} className="tour">
                    <img src={image} alt={name} />
                    <div className="extra">
                    <h3>{name}</h3>
                    <h2>{price}</h2>
                    <p>{info}<span onClick={()=> setShowMore(!showMore)}> Read More... </span>{showMore && <p>{extra}</p>}</p>
                    <button onClick={()=> removeItem(id)}>Not Interested</button>
                    </div>
                    
                </article>
            )
           
        })}
        </>
    )
    
}

export default UseStateTours;