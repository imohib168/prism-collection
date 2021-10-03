import React from 'react'
import './HoverCard.css';

export const HoverCard = ({ id, name, collectionType, price, image, description }) => {
    return (
        <div className="Card" key={id}>
            <img className="CardImage" src={image} alt={name} />
            <div className="info">
                <div className="productNameAndType">
                    <h1 className="productName">{name}</h1>
                    <span className="collectionType">{collectionType}</span>
                </div>
                <p className="description">{description}</p>
                <div className="price">{price}</div>
            </div>
        </div>
    )
}
