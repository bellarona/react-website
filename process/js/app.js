var React = require('react');
var ReactDOM = require('react-dom');
var AptList = require('./AptList');
var AddAppointment = require('./AddAppointment');
var SearchAppointments = require('./SearchAppointments');
var CouponsDetails = require('./CouponsDetails');
var _ = require('lodash');


// var jsonfile = require('jsonfile')
// var file = '/js/data.json'
// jsonfile.readFile(file, function(err, obj) {
//   console.log(obj)
// })


var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      aptBodyVisible:false,
      signupResponseVisible:false,
      signupInvalidEmailVisible:false,
      orderBy: 'productName',
      orderDir: 'asc',
      myAppointments: [],
      queryText: ''
    } //return
  }, //getInitialState

  componentDidMount: function() {
    this.serverRequest = $.get('./js/data.json', function(result) {
      var tempApts = result;
      this.setState({
        myAppointments: tempApts 
      }); //setState
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  toggleAddDisplay: function() {
    var tempVisibility = !this.state.aptBodyVisible;
    this.setState({
      aptBodyVisible: tempVisibility
    });// setState
  },// toggleAddDisplay

  addUser: function(tempItem) {
    console.log(tempItem);
    this.setState({
      signupResponseVisible: true
    });
    this.setState({
      signupInvalidEmailVisible:false
    });
  },// addUser

  showInvalidEmail: function() {
    this.setState({
      signupResponseVisible: false 
    });
    this.setState({
      signupInvalidEmailVisible: true
    });
  },// showInvalidEmail

  reOrder: function(orderBy, orderDir) {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    });// setState
  },// reOrder

  searchApts: function(q) {
    this.setState({
      queryText: q
    });// setState
  },// searchApts

  render: function() {
    var filteredApts = [];
    var orderBy = this.state.orderBy;
    var orderDir = this.state.orderDir;
    var queryText = this.state.queryText; 
    var myAppointments = this.state.myAppointments;

    myAppointments.forEach(function(item) {
      if(
        (item.productName.indexOf(queryText)!=-1) ||
        (item.productName.toLowerCase().indexOf(queryText)!=-1) ||
        (item.aptNotes.indexOf(queryText)!=-1) ||
        (item.aptNotes.toLowerCase().indexOf(queryText)!=-1)
      ) {
        filteredApts.push(item);
      }

    });// forEach

    filteredApts = _.orderBy(filteredApts, function(item) {
      return item[orderBy].toLowerCase();
    }, orderDir);// orderBy

    filteredApts = filteredApts.map(function(item, index) {
      return( 
          <AptList key={index}
            singleItem = {item} />
      ) //return
    }.bind(this)); //filteredApts.map

        // <AddAppointment 
        //  bodyVisible = {this.state.aptBodyVisible}
        //  signupResponseVisible = {this.state.signupResponseVisible}
        //  handleToggle = { this.toggleAddDisplay }
        //  signupUser = {this.addUser }
        //  signupInvalidEmailVisible = {this.state.signupInvalidEmailVisible}
        //  showInvalidEmail = {this.showInvalidEmail}
        // />

    return (
      <div className="interface">

        <CouponsDetails />
        <SearchAppointments 
        orderBy = {this.state.orderBy}
        orderDir = {this.state.orderDir}
        onReOrder = {this.reOrder}
        onSearch = {this.searchApts}
        />
        <ul className="item-list media-list">{filteredApts}</ul>
      </div>
    ) //return
  } //render
}); //MainInterface



ReactDOM.render(
  <MainInterface />,
  document.getElementById('petAppointments')
); //render
