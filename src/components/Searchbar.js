import React from "react";

class Searchbar extends React.Component {
    state = { myInput: '' };

     onInputChange = () => {
    
}

  render() {
    return (
        <div className=" search-bar ui segment">
            
        <form className="ui form">
                <div className="ui fluid action input">
                   
                    <input type="text"
                        value={this.state.myInput}
                        onChange={this.onInputChange}
                        placeholder="Video search..." />
            <div className="ui button">Search</div>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
