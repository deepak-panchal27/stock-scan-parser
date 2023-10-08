import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RsiParamsTwo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8000/nodeapi/v1/stock/fetch-data')
      .then((response) => {
        setData(response.data[4]);
        console.log(response.data[4]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!data) {
    return null;
  }

  const valueArr = data.criteria[1].variable['$2'].values.sort((a, b) => a - b);

  return (
    <div className="phone-section">
        <ul className="text-left mb-4 headers params-array">
    {valueArr.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
         </div>
  );
}

export default RsiParamsTwo;
