import React from 'react';

const Try = ({ tryInfo }) => { // props
  return (
    <li>
      <div>{tryInfo.try}</div> 
      <div>{tryInfo.result}</div>
    </li> 
  )
}
// {props.tryInfo.try}
export default Try;
