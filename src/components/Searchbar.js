import React from "react";

class Searchbar extends React.Component {
    state = { myInput: '' };

     onInputChange = e => {
         this.setState({ myInput: e.target.value });
    }

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onMyInputSubmit (this.state.myInput);
    }


  render() {
    return (
        <div className=" search-bar ui segment">
            
            <form onSubmit={this.onFormSubmit }className="ui form">
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
