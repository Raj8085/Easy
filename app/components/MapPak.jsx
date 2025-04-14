import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/countries/india/india-states.json";

const IndiaMap = () => {
  return (
    <ComposableMap projection="geoMercator" projectionConfig={{ scale: 1000, center: [80, 22] }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#DDD"
              stroke="#999"
              onMouseEnter={() => {
                console.log("State: ", geo.properties.ST_NM);
              }}
              style={{
                default: { outline: "none" },
                hover: { fill: "#F53", outline: "none" },
                pressed: { fill: "#E42", outline: "none" },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default IndiaMap;
