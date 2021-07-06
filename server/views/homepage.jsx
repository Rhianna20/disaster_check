const React = require("react");

const homepage = (props) => {
  return (
    <div>
      <div className="recentEarthquakes" id="recentEarthquakes">
        <strong>
          <p className="headingtwo">Earthquakes gone of in the past hour:</p>
        </strong>

        {/* <p> {JSON.stringify(props.data)} </p> */}
        {props.data.map((earthquake) => {
          return (
            <center>
              {" "}
              <p className="earthquakeDescription">
                {earthquake.properties.place}
              </p>{" "}
              <p className="earthquakeDescription">{earthquake.properties.mag}</p>
            </center>
          );
        })}
      </div>
      <button className="button" value="press">
        Click
      </button>

        <h3>Fun Facts</h3>
      <p> An earthquake is what occurs when ground shaking is caused by a sudden
      slip or a fault. A fault is a thin zone of crushed rock separating blocks
      of the earth's crust. The fault surface can be vertical, horizontal, or at
      some angle to the surface of the earth.
      are caused by the Tectonic Plates </p>
      <p>The earth is made up of different layers:</p>
      <ul>
        {" "}
        <li>
          The Core which is at the centre, is a dense solid made from iron and
          nickel.
        </li>
        <li>
          {" "}
          The Mantle is mainly made up of a semi-molten rock called magma. In
          the upper parts of the mantle the rock is hard, but lower down the
          rock is soft and beginning to melt​. The mantle has a diameter of approximately 2,900 km! 
        </li>
        <li>
          {" "}
          The Crust is a
          thin layer between 5-70 km thick. The crust is the solid rock layer is
          the part we can see!
        </li>
      </ul>
      <p>Earthquakes can strike any location at any time. But history shows they occur in the same general patterns over time
</p>
<p>Minor earthquakes induced by human activity have been documented in the United States, Japan, and Canada</p>
 <p> Deep mining can cause small to moderate quakes and nuclear testing has caused small earthquakes in the immediate area surrounding the test site, but other human activities have not been shown to trigger subsequent earthquakes.</p>     
 <p>The largest recorded earthquake in the world was a magnitude 9.5 (Mw) in Chile on May 22, 1960. </p>

 <p>Moonquakes (“earthquakes” on the moon) do occur, but they happen less frequently and have smaller magnitudes than earthquakes on the Earth. </p>
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
