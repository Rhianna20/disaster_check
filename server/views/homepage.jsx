const React = require('react');
 
 
 
const mapStyle = {width: 650, height: 600, left: 300};



const homepage = props => {
    return (
    
   
       
            <div>
            
            {/* map box object */}
            

            <script src="../client/mapbox.js"></script>
            
            
            {/* button reveals list of recent earthquakes */}
          <button className='button'>Click</button>

        
          <div className='hazardls' id='hazardls'>
           
            <strong><p className='headingtwo'>Earthquakes gone of in the past hour:</p></strong>
          
           {/* <p> {JSON.stringify(props.data)} </p> */}
           {props.data.map(earthquake => {
               return (
                <center>   <p>{earthquake.properties.place}</p> </center>
                   
               )
           })}

            {props.data.map(earthquake => {
               return (
                   <p >{earthquake.properties.mag}</p>
                   
               )
           })}
            </div>
           <p className='eqdescription'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ea minima doloribus vitae reiciendis, a consequuntur, ipsam eveniet error perferendis nam modi delectus laboriosam pariatur, libero itaque tempore earum? Sunt.</p>


           </div>
  
      
    )
}

module.exports = { homepage }

