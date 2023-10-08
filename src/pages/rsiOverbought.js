import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RsiOverbought() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8000/nodeapi/v1/stock/fetch-data')
      .then((response) => {
        setData(response.data[4]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  if (!data) {
    return null;
  }

  const textString1 = data.criteria[0].text.split('$')[0];
  const value1 = data.criteria[0].variable['$1'].values[0];
  const textString2 = data.criteria[1].text.split('$')[0];
  const textString3 = data.criteria[1].text.split('$')[1].split('2')[1];
  const value2 = data.criteria[1].variable['$2'].values[0];
  const value3 = data.criteria[1].variable['$3'].values[0];
  const textString4 = data.criteria[2].text.split('$4')[0];
  const textString5 = data.criteria[2].text.split('$4')[1];
  const value4 = data.criteria[2].variable['$4'].default_value;

  return (
    <div className="phone-section">
          <div className="header-section">
          <div className="header">{data.name}</div>
          <div className={`subtext ${data.color === 'green' ? 'green' : 'red'}`}>{data.tag}</div>
       </div>		
       <div className="body-section">
       <div className="margin-btm-10">{textString1}
          <a className="params" href="/rsi_params_one.html">
            ({value1})
          </a> %</div>
 		<div className="subtext margin-btm-10">and</div>
 		<div className="margin-btm-10">{textString2}
          <a className="params" href="/rsi_params_two.html">
            ({value2})
          </a> {textString3}<a href="/rsi_params_three.html">({value3})</a>x</div>
 		<div className="subtext margin-btm-10">and</div>
 		<div className="margin-btm-10"> {textString4}<a href="rsi_period_params.html">({value4})</a> {textString5}</div>
       </div>
         </div>
  );
}

export default RsiOverbought;
