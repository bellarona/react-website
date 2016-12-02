var React = require('react');



var AptList = React.createClass({
  render: function() {
    return (
      <li className="pet-item media">
        <div className="pet-info media-body">
          <img className="img-product" src={this.props.singleItem.shortname} />
          <img className="img-product" src={this.props.singleItem.shortname2} />
          <div className="pet-head">
            <span className="pet-name">{this.props.singleItem.productName}</span>
          </div>
          <div className="apt-notes">{this.props.singleItem.aptNotes}</div>
          <a className="link-to-amazon" href={this.props.singleItem.linkToAmazon}>
                {this.props.singleItem.subDetails}
          </a>
        </div>
      </li>
    ) //return
  } //render
}); //AptList

module.exports=AptList;