var React = require('react');

var Clock = React.createClass({
  getInitialState: function(){
    return { date: new Date(), coords: [] };
  },

  componentDidMount: function(){
    this.intervalId =
    setInterval(this._tick, 1000);

    this.weatherAPI = navigator.geolocation.getCurrentPosition(this._api);

    this.xml = this._xmlHttpRequest(this.weatherAPI);
  },

  componentWillUnmount: function() {
    clearInterval(this.intervalId);
  },

  _tick: function(){
    var sec = this.state.date.getSeconds() + 1;
    this.state.date.setSeconds(sec);
    this.setState({ date: this.state.date});
  },

  _api: function(coords){
    return "api.openweathermap.org/data/2.5/weather?lat=" + coords.coords.latitude + "&lon=" + coords.coords.longitude+"/js?key=645c5d39c7603f17e23fcaffcea1a3c1";
  },

  _xmlHttpRequest: function(weatherAPI){
    function reqListener () {
      console.log(this.responseText);
    }
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", this.weatherAPI);
    oReq.send();
    return oReq;
  },

  render: function () {
    return (
      <div className="theClock">
        {this.state.date.getHours()}:{this.state.date.getMinutes()}:{this.state.date.getSeconds()}
        {this.state.xml}
      </div>
    );
  }
});

module.exports = Clock;
