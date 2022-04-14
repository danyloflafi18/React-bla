import React, { useState } from "react";
import Papa from "papaparse";

const Movie = () => {
    const [numbers, setData] = useState({});
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSQRqssImw92Wb3gQOPZqOhMkbW00_DbepngfbSxydj134Hi2pU41byP08fIM9xNIA4IpCtGyIQ_pYS/pub?output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
    const movies = Array.from(numbers);
    return (
      <ul>
        {movies.map((data1) => (
          <li key={data1.asd}>
            {data1.asd} ({data1.dsa}) - Rating {data1.sdf}
          </li>
        ))}
      </ul>
    );
  };

export default Movie;