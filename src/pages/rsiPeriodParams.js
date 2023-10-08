import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CciPeriodParams() {
  const [data, setData] = useState(null);

  const handleChange = () => {

  }

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

  const parameter_name = data.criteria[2].variable['$4'].parameter_name;
  const default_value = data.criteria[2].variable['$4'].default_value;

  return (
    <div className="phone-section">
          <div className="text-left mb-4 margin-btm-10 indicator-header">RSI</div>
	<div className="text-left mb-4 margin-btm-10 indicator-sub-header">Set Parameters</div>
	<div className="mb-4 indicator-variable-section">
		<div className="left">{parameter_name}</div>
		<input type="text" name="" value={default_value} onChange={handleChange} className="right" />
	</div>
         </div>
  );
}

export default CciPeriodParams;
