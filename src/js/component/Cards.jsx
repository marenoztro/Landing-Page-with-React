import React from 'react';


//create your first component
const Cards = () => {
    return (
        <div className="text-center">
    
            <div className="card" style={{width: 18+ 'rem'}}>
            <img src="https://pbs.twimg.com/media/E5-5QemWUAIu83g.jpg:large" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            </div>
    
        </div>
    );
};

export default Cards;

// style={{marginRight: spacing + 'em'}}


