//either flip back, or flip front

import React from 'react';

function Card(props) {

    //props contain 1) card back or card front; 2) question/answer on card front

    return (
        <>
        <div className="Card">
            <img src="../Assets/Images/card_back.png" alt="" />
        </div>
        </>
    )
}

export default Card;


