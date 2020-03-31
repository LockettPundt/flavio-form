import React from 'react';


const Card = (props) => (
  <div style={{ margin: '1em' }}>
    <img alt="avatar" style={{ width: '70px' }} src={props.avatar_url} />
    <div>
      <div style={{ fontWeight: 'bold' }}>{props.name}</div>
      <div>{props.blog}</div>
    </div>
  </div>
);


export default Card;
