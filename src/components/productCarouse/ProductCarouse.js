import React from 'react';
import { FaShoppingCart, FaEye } from 'react-icons/fa';

const ProductCarousel = () => {
  const iconStyle = {
    backgroundColor: 'rgb(86, 14, 14)',
  };

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="border-start border-5 border-primary ps-5 mb-4" style={{ maxWidth: '600px' }}>
          <h2 className="text text-uppercase">Products</h2>
          <h1 className="display-6 text-uppercase mb-0">Products For Your Best Friends</h1>
        </div>
        <div className="owl-carousel product-carousel d-flex flex-row flex-nowrap overflow-auto">
          {/* Product 1 */}
          <div className="pb-5 pe-4">
            <div className="product-item position-relative bg-light d-flex flex-column text-center">
              <img className="img-fluid mb-4 product-image" src="img/product-1.png" alt="Product 1" />
              <h6 className="text-uppercase">Quality Pet Foods</h6>
              <h5 className="text mb-0">$199.00</h5>
              <div className="btn-action d-flex justify-content-center">
                <a className="btn btn py-2 px-3" href="" style={iconStyle}><FaShoppingCart size={20} /></a>
                <a className="btn btn py-2 px-3" href="" style={iconStyle}><FaEye size={20} /></a>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="pb-5 pe-4">
            <div className="product-item position-relative bg-light d-flex flex-column text-center">
              <img className="img-fluid mb-4 product-image" src="img/product-2.png" alt="Product 2" />
              <h6 className="text-uppercase">Quality Pet Foods</h6>
              <h5 className="text mb-0">$199.00</h5>
              <div className="btn-action d-flex justify-content-center">
                <a className="btn btn py-2 px-3" href="" style={iconStyle}><FaShoppingCart size={20} /></a>
                <a className="btn btn py-2 px-3" href="" style={iconStyle}><FaEye size={20} /></a>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="pb-5 pe-4">
            <div className="product-item position-relative bg-light d-flex flex-column text-center">
              <img className="img-fluid mb-4 product-image" src="img/product-3.png" alt="Product 3" />
              <h6 className="text-uppercase">Quality Pet Foods</h6>
              <h5 className="text mb-0">$199.00</h5>
              <div className="btn-action d-flex justify-content-center">
                <a className="btn btn py-2 px-3" href="" style={iconStyle}><FaShoppingCart size={20} /></a>
                <a className="btn btn py-2 px-3" href="" style={iconStyle}><FaEye size={20} /></a>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="pb-5 pe-4">
            <div className="product-item position-relative bg-light d-flex flex-column text-center">
              <img className="img-fluid mb-4 product-image" src="img/product-4.png" alt="Product 4" />
              <h6 className="text-uppercase">Quality Pet Foods</h6>
              <h5 className="text mb-0">$199.00</h5>
              <div className="btn-action d-flex justify-content-center">
                <a className="btn btn py-2 px-3" href="" style={iconStyle}><FaShoppingCart size={20} /></a>
                <a className="btn btn py-2 px-3" href="" style={iconStyle}><FaEye size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
