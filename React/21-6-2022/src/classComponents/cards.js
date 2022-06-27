import React from 'react';
import './cards.css';
import image from './coding.png'

class Cards extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='row'>
                <div className="card col-3" >
                    <img src={image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Ahmad</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>

                <div className="card col-3" >
                    <img src={image}  className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Ali</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>

                <div className="card col-3" >
                    <img src={image}  className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Maher</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>

                <div className="card col-3" >
                    <img src={image}  className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Khaled</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>

            </div>
        </div>
        );
    }
}

export default Cards;