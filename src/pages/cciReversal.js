import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CciReversal() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8000/nodeapi/v1/stock/fetch-data')
      .then((response) => {
        setData(response.data[3]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!data) {
    return null;
  }

  const firstText = data.criteria[0].text.split('$')[0];
  const secondText = data.criteria[0].text.split('$')[1].split('1')[1];
  const cciDefaultValue = data.criteria[0].variable['$1'].default_value;
  const value2 = data.criteria[0].variable['$2'].values[0];

  return (
    <div className="phone-section">
          <div className="header-section">
          <div className="header">{data.name}</div>
          <div className={`subtext ${data.color === 'green' ? 'green' : 'red'}`}>{data.tag}</div>
       </div>		
       <div className="body-section">
       {firstText} <a href="cci_period_params.html">({cciDefaultValue})</a> {secondText} <a href="cci_array_params.html">({value2})</a>
       </div>
         </div>
  );
}

export default CciReversal;
