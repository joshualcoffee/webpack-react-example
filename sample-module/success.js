/** @jsx React.DOM */

var Success = React.createClass({

  render: function(){
    return <div className="successMessage">
      holy shit you got a success message *boom*
      <br/>
      This could simply be another compononent to add guest
    </div>
    ;
  }
});

module.exports = Success;