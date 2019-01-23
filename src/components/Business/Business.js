import React from 'react';
import './Business.css';

//React component class, which will be used to render information about each business
export class Business extends React.Component {
    render() {
        const business = this.props.business;
        
        return (
            <div className="Business">
                <div className="image-container">
                    <img 
                        src={business.imageSrc} 
                        alt=""
                    />    

                    <h2>{business.name}</h2>  
                    <div className="Business-information">
                        <div className="Business-address">
                            <p>{business.address}</p>
                            <p>{business.city}</p>
                            <p>{business.state} {business.zipCode}</p>
                            <p>{business.phone}</p>
                        </div>

                        <div className="Business-reviews">
                            <h3>{business.category}</h3>
                            <h3>{business.priceRange}</h3>
                            <h3 className="rating">{business.rating} star{business.rating > 0 && business.rating <= 1 ? "" : "s"}</h3>
                            <p>{business.reviewCount} review{business.reviewCount === 1 ? "" : "s"}</p>
                            <a href={business.url} target="_blank" rel="noopener noreferrer">Open restaurant's page</a>
                        </div>
                    </div>   
                </div>           
            </div>
        );
    }
}