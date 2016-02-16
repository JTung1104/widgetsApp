var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('./tabs.jsx');
var Clock = require('./clock.jsx');

var Widgets = React.createClass({
  render: function () {
    var panes = [
      {title: "Tab 1", content: "Tab 1 Content"},
      {title: "Tab 2", content: "Tab 2 Content"}
      ];

    return(

      <div>
        Hello World
        <Tabs panes={panes}/>
        <Clock/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets/>, document.getElementById('main'));
});
