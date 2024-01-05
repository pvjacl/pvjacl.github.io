import React, { useState, useEffect } from 'react';

import './BambooChart.css';

type Props = {
  amount: number;
  width: number;
  height: number;
}
const goal = 2000000;

const BambooChart = ({ amount, width, height }: Props) => {
  let [percent, setPercent] = useState(0);
  useEffect(() => {

    setTimeout(() => {
      setPercent(amount / goal * 100);
      console.log('set the percent')
    }, 10);
  }, []);

  return (
    <div id="bamboo-background" style={{height, width}}>
      <div id="bamboo-color" style={{ height: `${percent}%`}}/>
      <img id="hollow-bamboo" src="/hollow-bamboo.png" alt="image of bamboo plant" />
    </div>
  );
}

export default BambooChart;