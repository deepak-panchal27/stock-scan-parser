import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/nodeapi/v1/stock/fetch-data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const itemUrls = [
    '/top_gainers.html',
    '/intraday_buying.html',
    '/open_high.html',
    '/cci_reversal.html',
    '/rsi_overbought.html',
  ];

  return (
    <div className="phone-section">
      <ul className="text-left mb-4 headers">
        {data.map((item, index) => (
          <li key={index}>
            <a href={itemUrls[index]}>
              <div>{item.name}</div>
              <div className={`subtext ${item.color === 'green' ? 'green' : 'red'}`}>{item.tag}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
