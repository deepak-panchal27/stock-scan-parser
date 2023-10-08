import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OpenHigh() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8000/nodeapi/v1/stock/fetch-data')
      .then((response) => {
        setData(response.data[2]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!data) {
    return null;
  }

  const textString = data.criteria[0].text.split('$')[0];
  const valueAtIndex0 = data.criteria[0].variable['$1'].values[0];

  return (
    <div className="phone-section">
          <div className="header-section">
          <div className="header">{data.name}</div>
          <div className={`subtext ${data.color === 'green' ? 'green' : 'red'}`}>{data.tag}</div>
       </div>		
       <div className="body-section">{textString}
          <a className="params" href="open_high_params.html">
            ({valueAtIndex0})
          </a> %
       </div>
         </div>
  );
}

export default OpenHigh;
