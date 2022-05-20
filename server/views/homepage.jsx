const React = require("react");

const homepage = (props, ) => {
  return (

    <div>
      
      <a className="buttonTemplate" type="button" href="/dailyEarthquakes" >Daily</a>
      <a className="buttonTemplate" type="button" href="/weeklyEarthquakes">Weekly</a>
      <a className="buttonTemplate" type="button" href="/monthlyEarthquakes">Monthly</a>
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
      <button className="button" value="press">
        Click 
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
