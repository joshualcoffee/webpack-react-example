/** @jsx React.DOM */

var Success = require("./success.js");

var Rsvp = React.createClass({
  getInitialState: function(){
    return { rsvpd: "false" };
  },

  mockApiRequest: function(){
    var mockResponse =  {
      user_uid: 1000,
      event_uid: 12,
      rsvpd: (this.state.rsvpd == "false" ? "true" : "false")
    }

    this.setState({ rsvpd: mockResponse.rsvpd});
  },
 
  handleMouseDown: function(){
    this.mockApiRequest();
  },

  rsvpd: function(){
    return this.state.rsvpd == "true"
  },

  render: function(){
    var rsvpButton;
    if(this.rsvpd()){
      rsvpButton = <button className="btn btn-danger" onMouseDown={this.handleMouseDown}> Remove RSVP </button>; 
    }else{
      rsvpButton = <button className="btn btn-success" onMouseDown={this.handleMouseDown} >RSVP</button>; 
    }

    return <div>
      {rsvpButton}
      {this.rsvpd() ? <Success /> : ''}
    </div>
    ;
  }
});
 
React.renderComponent(<Rsvp/>,
                  document.body);

module.exports = Rsvp;