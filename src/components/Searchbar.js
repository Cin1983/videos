import React, { useState } from "react";


const Searchbar = ({onMyInputSubmit}) => {
  const [myInput, setMyInput] = useState("");


  const onSubmit= (e) => {
    e.preventDefault();
    
    onMyInputSubmit(myInput);
  };

  return (
    <div className=" search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="ui fluid action input">
          <input
            type="text"
            value={myInput}
            onChange={(e)=>setMyInput(e.target.value)}
            placeholder="Video search..."
          />
          
 
          <div className="ui button">Search</div>
        </div>
      </form>
    </div>
  );
};



export default Searchbar;
