import React, { Component } from "react";

class Product extends Component {
  render() {
    var { match } = this.props;
    console.log(match);
    var slug = match.params.slug;
    console.log(slug);
    return (
      <div>
        <h3 className="text-secondary mt-3 text-center">
          Product details of {slug}
        </h3>
      </div>
    );
  }
}

export default Product;
