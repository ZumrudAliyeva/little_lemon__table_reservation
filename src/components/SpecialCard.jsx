import React from 'react'

const SpecialCard = ({title, price, description, image}) => {
  return (
    <>
    <div className='special_card'>
<figure>
    <img src={image} alt={title} />
</figure>
<article>
    <div className="card_header">
    <h4 className="card_title">{title}</h4>
    <span className="price">$ {price}</span>
    </div>
    <p className="card_desc">{description}</p>
    <p>Order a delivery</p>
</article>
    </div>
    </>
  )
}

export default SpecialCard