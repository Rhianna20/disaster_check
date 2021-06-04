const React = require('react');
 
 
 



const homepage = props => {
    return (
            <div>

          <div className='recentEarthquakes' id='recentEarthquakes'>
           
            <strong><p className='headingtwo'>Earthquakes gone of in the past hour:</p></strong>
          
           {/* <p> {JSON.stringify(props.data)} </p> */}
           {props.data.map(earthquake => {
               return (
                <center>   <p className='earthquakeDescription' >{earthquake.properties.place}</p> </center>
                   
               )
           })}

            {props.data.map(earthquake => {
               return (
                <p className='earthquakeDescription'>{earthquake.properties.mag}</p>
                   
               )
           })}
            </div>
            <button className='button' value='press'>Click</button>
           <p id='eqdescription' className='eqdescription hide'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ea minima doloribus vitae reiciendis, a consequuntur, ipsam eveniet error perferendis nam modi delectus laboriosam pariatur, libero itaque tempore earum? Sunt.</p>
        

           </div>
  
      
    )
}

module.exports = { homepage }

