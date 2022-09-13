import React from 'react';





const Card = (props) => {
  return (
    <div className='card'>
        <div className='card-body'>
            <img src={props.img} class='card-img'
            />
            <h2 className='card-title'>
                {props.title}</h2>
            <p className='card-description'>
                {props.description}</p>
        </div>
    </div>
  )
}

export default Card