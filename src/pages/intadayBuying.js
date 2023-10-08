import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IntadayBuying() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8000/nodeapi/v1/stock/fetch-data')
      .then((response) => {
        setData(response.data[1]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div className="phone-section">
          <div className="header-section">
          <div className="header">{data.name}</div>
          <div className={`subtext ${data.color === 'green' ? 'green' : 'red'}`}>{data.tag}</div>
       </div>		
       <div className="body-section">
       <div className="margin-btm-10">{data?.criteria[0].text}</div>
 		<div className="subtext margin-btm-10">and</div>
 		<div className="margin-btm-10">{data?.criteria[1].text}</div>
 		<div className="subtext margin-btm-10">and</div>
 		<div className="margin-btm-10">{data?.criteria[2].text}</div>
       </div>
         </div>
  );
}

export default IntadayBuying;
