import React from "react";

function DescriptiveCards(props){
/*
    The variables I can change on this page
    Each state needs to contain the following properties: class-img, Title, P

    The buttons will remain the same

    However, on the skills state call, I will need to call the slide component with it instead
*/
    return (
        <div className="description-grid">
            <div className="description-grid-1"><div className={"description-grid-1-content-"+props.cardName}></div></div>
            <div className="description-grid-2">
                <div className="description-grid-2-title">{props.title}</div>
                <div className="description-grid-2-p">{props.description}</div>
            </div>
        </div>
    )
}

export default DescriptiveCards;