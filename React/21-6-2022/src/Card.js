import React from 'react';

import Title from './classComponents/title';
import Cards from './classComponents/cards';

class Card extends React.Component{
    render(){
        return(
            <div>
                <h1>Card</h1>
                <Title />
                <Cards />
            </div>
        );
    }
}

export default Card;