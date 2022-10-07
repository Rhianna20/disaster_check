const React = require("react");

const homepage = (props, ) => {
  return (

    <div >
      <div className="group">
      <button className="button" id="hourButton" type="button" > <a href="/hourlyEarthquakes">Hourly</a></button>
      <button className="button" id="dayButton" type="button"> <a href="/dailyEarthquakes" >Daily </a></button>
      <button className="button" id="weekButton" type="button"> <a href="/weeklyEarthquakes">Weekly </a></button>
      <button className="button" id="monthButton" type="button"> <a href="/monthlyEarthquakes">Monthly</a></button>
      </div>
      <div className="recentEarthquakes" id="recentEarthquakes">
        <strong>
          <p className="headingtwo">Earthquakes gone of in the past hour:</p>
        </strong>

        {/* <p> {JSON.stringify(props.data)} </p> */}
        {props.data.map((earthquake) => {
          return (
              <>
            <center>
              {" "}
              <p className="earthquakeDescription">
                {earthquake.properties.place}
              </p>{" "}
              <p className="earthquakeDescription">{earthquake.properties.mag}</p>
            </center>
            </>
          );
        })}
      </div>
      {/* <p>A map of Earthquakes that have gone off in the last hours</p> */}
      <button className="button" id="factButton" value="press">
     
      </button>


 
<div id="revealInfo" onScroll="reveal()">
        <p id="eqdescription" className="eqdescription hide">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat ea
          minima doloribus vitae reiciendis, a consequuntur, ipsam eveniet error
          perferendis nam modi delectus laboriosam pariatur, libero itaque
          tempore earum? Sunt.
        </p>
      </div>
    </div> 
  );
};

module.exports = { homepage };
