import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Product from "./Product";
class Products extends Component {
  render() {
    var products = [
      {
        id: 1,
        slug: "iphone",
        name: "iPhone X 256GB",
        price: 2500,
        des: "This is des iPhone",
      },
      {
        id: 2,
        slug: "samsung",
        name: "Samsung A71",
        price: 3500,
        des: "This is des Samsung",
      },
      {
        id: 3,
        slug: "oppo",
        name: "OPPO XS ",
        price: 1500,
        des: "This is des OPPO",
      },
    ];
    return (
      <div className="container">
        <h1 className="text-danger mt-3 text-center">List Products</h1>
        <div className="row">{this.showProducts(products)}</div>
        <div class="row">
          <Route path="/products/:slug" component={Product}></Route>
        </div>
      </div>
    );
  }

  showProducts = (products) => {
    var { match } = this.props;
    // console.log(match);
    var url = match.url;
    console.log(match);
    var { location } = this.props;
    console.log(location);
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <div className="col-4">
            <NavLink to={`${url}/${product.slug}`} key={index}>
              <div className="card ">
                <div className="card-header text-center bg-danger text-white text-uppercase fw-bold">
                  {product.name}
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.price}</h5>
                  <p className="card-text">{product.des}</p>
                  <a className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </NavLink>
          </div>
          // </NavLink>
        );
      });
    }
    return result;
  };
}

export default Products;
