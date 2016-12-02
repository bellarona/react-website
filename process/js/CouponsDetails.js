var React = require('react');

var CouponsDetails = React.createClass({

    render: function() {
        return (
        <span>            
        
            <div className="media-list">
                <h3>Holiday Sale Entire Store 50% Off</h3>    
            </div>
            <div className="media-list">
                <a className="link-to-amazon" href="https://www.amazon.com/s/ref=bl_dp_s_web_0?ie=UTF8&search-alias=aps&field-keywords=BellaRona">For All Electric Lighters.</a><br/><span className="coupon-percentage">50%</span> Off Your Purchase, Coupon: <span className="coupon-code">offarc50</span> 
            </div>
            <div className="media-list">
                <a className="link-to-amazon" href="https://www.amazon.com/gp/product/B011KPUDLO">Multi-Color Flashflight LED Flying Disc</a><br/> <span className="coupon-percentage">50%</span> Off Your Purchase, Coupon: <span className="coupon-code">offmulti</span> 
            </div>
            <div className="media-list">
                <a className="link-to-amazon" href="https://www.amazon.com/gp/product/B010ZHPRWI">Silicone Baking Cups + Cake Decoration Pen</a><br/> <span className="coupon-percentage">50%</span> Off Your Purchase, Coupon: <span className="coupon-code">bake4all</span> 
            </div>
            <div className="media-list">
                <a className="link-to-amazon" href="https://www.amazon.com/gp/product/B011KPUDHS">Blue Color Flashflight LED Flying Disc</a><br/> <span className="coupon-percentage">50%</span> Off Your Purchase, Coupon: <span className="coupon-code">bluefris</span> 
            </div>
        </span>
        )// return
    }// render
});// CouponsDetails


module.exports = CouponsDetails;