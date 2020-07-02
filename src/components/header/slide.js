import React from 'react';



function slide(props) {
  return (
            
       
          
          <div className="carousel-inner">

            <div className="carousel-item active">
              <img src={props.imgName} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1>Travel Across The Globe</h1>
                <p>Travel is our passion </p>
                
              </div>
            </div>
          
        </div>

     
        
  );
}

export default slide;
