import React from 'react';

// BEGIN (write your solution here)
const getCard = (obj) => {
    if (obj.title === undefined && obj.text === undefined) {
        return null;
    }
    else if (obj.title === undefined) {
        return <div className="card">
               <div className="card-body">
                 <p className="card-text">{obj.text}</p>
               </div>
             </div>
    }
    else if (obj.text === undefined) {
        return <div className="card">
               <div className="card-body">
                 <h4 className="card-title">{obj.title}</h4>
               </div>
             </div>
    }
    else return <div className="card">
               <div className="card-body">
                 <h4 className="card-title">{obj.title}</h4>
                 <p className="card-text">{obj.text}</p>
               </div>
             </div>
}
export default getCard;
// END
