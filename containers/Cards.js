import React from 'react';

import Card from '../components/Card/Card';

import classes from './Cards.module.css';

const cards = props => {
  console.log(props.searchRobot);
  return (
    <div className={classes.Container}>
      {props.robots.map(el => {
        console.log(el);
        return <Card name={el.name} email={el.email} id={el.id} key={el.id} />;
      })}
    </div>
  );
};

export default cards;
