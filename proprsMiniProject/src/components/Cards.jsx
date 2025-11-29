import React from 'react'
import { Star } from 'lucide-react'

const Cards = (props) => {
return (
<div className="product-card">
    <div className="product-image">
        <img src={props.laptops.img} alt="Laptop" />
    </div>

    <div className="product-info">
        <div className="price-section">
            <span className="current-price">${props.laptops.currentPrice}</span>
            <span className="original-price">${props.laptops.oldPrice}</span>
        </div>

        <h3 className="product-title">
            {props.laptops.title}
        </h3>

        <div className="product-footer">
            <div className="rating-badge">
                <span>★ {props.laptops.rating}</span>
            </div>

            <span className="sold-count">Sold {props.laptops.soldCount}</span>
            <button className="cart-button">
                <svg className="cart-icon" viewBox="0 0 24 24">
                    <path d="M9 2L6 6M18 6L15 2M6 6H18M6 6L3 11V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V11L18 6M10 12H14" />
                </svg>
            </button>
        </div>
    </div>
</div>
)
}

export default Cards