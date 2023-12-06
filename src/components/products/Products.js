import { useState, useEffect } from 'react';
import React, { useContext } from "react";
import axios from 'axios';
import './Products.css'; // Import your CSS file for styling
import { loginContext } from "../../contexts/loginContext";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { BsFillCartFill } from "react-icons/bs";
import { Outlet } from "react-router-dom";
import { useForm } from "react-hook-form";
import Footer from '../footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Products() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err1, setError1] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(false);
  const [selectedPostIndex, setSelectedPostIndex] = useState(-1);
  const [currentUser, error, userLoginStatus, loginUser, logoutUser] = useContext(loginContext);
  const navigate = useNavigate();
  const [postImage, setPostImage] = useState(null);
  const [message, setMessage] = useState("");
  const [isToggleOn, setIsToggleOn] = useState(true); // Set sidebar to be open by default
  const [showModal, setShowModal] = useState(false);
  const [err, setErr] = useState("");
  const [user, setUser] = useState({});
  const [showSearchResult, setShowSearchResult] = useState(false); // Whether to show search results or products
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    // Fetch product data from the server
    axios
      .get('http://localhost:4000/user-api/product') 
      .then((response) => {
        const { message, payload } = response.data;
        if (message === 'Data found') {
          setProducts(payload);
          setLoading(false);
        } else {
          setError1('Error retrieving data');
          setLoading(false);
        }
      })
      .catch((error) => {
        setError1(error.message);
        setLoading(false);
      });
  }, []);
  const placeOrder = (product)=>{
    navigate("/Order");
  }

  const addToCart = (product) => {
    const user = product.username;
    const username = currentUser.username;

    axios
      .put(`http://localhost:4000/user-api/cart/${user}/${username}`)
      .then((response) => {
        // Display success message using toast
        toast.success('Product added to cart successfully');
        console.log(response.message);
      })
      .catch((error) => {
        // Display error message using toast
        toast.error('Error adding product to cart');
        console.log(error.message);
      });
    };

  const handleImageClick = (index) => {
    setSelectedPostIndex(index);
    setSelectedPosts(products[index].posts);
    setShowPosts(true);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (err1) {
    return <p>Error: {err1}</p>;
  }

  
  // search

  const handleSearch = (data) => {
    const username = data.search;
    console.log(username);
    axios
      .get(`http://localhost:4000/user-api/search/${username}`)
      .then((response) => {
        const { message, payload } = response.data;
        if (message === "found") {
          setUser(payload);
          setShowSearchResult(true); // Display search results
        } else if (message === "not_found") {
          setUser({}); // Clear previous search results
          setShowSearchResult(true); // Display no results found
        } else {
          setErr("Error retrieving data");
        }
      })
      .catch((error) => {
        setErr(error.message);
      });
  };
 
  
  

  const handleCloseSearch = () => {
    setUser({}); // Clear search results
    setShowSearchResult(false); // Hide search results and show products
  };

  const handlePostSubmit = () => {
    const formData = new FormData();
    formData.append("user", JSON.stringify(currentUser));
    formData.append("image", postImage);

    const token = localStorage.getItem("token");
    if (!userLoginStatus) {
      logoutUser();
      navigate("/login");
    }

    axios
    .post("http://localhost:4000/user-api/posts", formData, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((response) => {
      setPostImage(null);
      setShowModal(false); // Close the modal

      // Display success message using toast
      toast.success("Post submitted successfully");

      setTimeout(() => {
        setMessage("");
      }, 5000);
    })
    .catch((error) => {
      // ... (your error handling)

      // Display error message using toast
      toast.error("Post Request Failed ");
    });

return (
  <div>
    {/* Your component content */}

    {/* ToastContainer for displaying toasts */}
    <ToastContainer />
  </div>
);
};

  const toggleButton = () => {
    setIsToggleOn(!isToggleOn);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openCart = () => {
    navigate("cart");
  };

  return (
    <div className="product-container">
       <ToastContainer />
      {/* <div className="toggle-button" onClick={toggleButton}>
        {isToggleOn ? "Less.." : "More.."}
      </div> */}
      <div className={`content ${isToggleOn ? "with-sidebar" : ""}`}>
        <div className="main-content">
          <div className="search-bar">
            <form onSubmit={handleSubmit(handleSearch)}>
              <div className="mb-3">
                <label htmlFor="search"></label>
                <input
                  type="text"
                  id="search"
                  className="form-control  search-input"
                  placeholder="Search..."
                  {...register("search")}
                />
              </div>
              <Button type="submit" variant="primary" className="search-button">
                Search
              </Button>
            </form>
          </div>
          {showSearchResult ? (
  <>
    {user && user._id ? (
      <div className="user-profile">
        <h2>{user.username}</h2>
        <p>Email: {user.email}</p>
        <p>Date of Birth: {user.dob}</p>
        <img src={user.image} alt={user.username} />
      </div>
    ) : (
      <p>No results found.</p>
    )}
    <Button variant="secondary" onClick={handleCloseSearch}>
      Close Search
    </Button>
  </>
) : (
  <>
    <p className="display-2">Products</p>
    {message && <p className="message">{message}</p>}
    <Outlet />
  </>
)}
        </div>
        <div className={`sidebar ${isToggleOn ? "sidebar-open" : "sidebar-closed"}`}>
          {isToggleOn && (
            <>
              <p>
                <button type="button" className="btn btn-primary create-post-button" onClick={openModal}>
                  Post
                </button>
              </p>
              <button type="button" className="btn btn-primary Cart-button" onClick={openCart}>
                   <BsFillCartFill style={{ fontSize: '24px' }} />
              </button>
              <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Create Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <input type="file" accept="image/*" onChange={(e) => setPostImage(e.target.files[0])} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={closeModal}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handlePostSubmit}>
                    Submit Post
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          )}
        </div>
      </div>
   
      {!showPosts ? (
  products.length > 0 ? (
    products.map((product, index) => (
      <div className="product" key={product._id}>
        <h2>{product.name}</h2>
        <p>Price: ${1000}</p>
        <div className="product-details">
          <img
            src={product.image}
            alt={product.name}
            className={`product-image ${selectedPostIndex === index ? 'selected' : ''}`}
            onClick={() => handleImageClick(index)}
          />
          <div className="details-container">
            <p>Username: {product.username}</p>
            <p>Email: {product.email}</p>
            <p>Date of Birth: {product.dob}</p>
          </div>
        </div>
        <button className="add-to-cart-button" onClick={() => addToCart(product)}>
          Add Cart
        </button>
        {/* New button for placing an order */}
        <button className="product-button" onClick={() => placeOrder(product)}>
          Order
        </button>
        </div>
    ))
  ) : (
    <p>No products found.</p>
  )
) : (
  <div className="selected-posts">
    <h3>User Posts</h3>
    <button className="close-posts-button" onClick={() => setShowPosts(false)}>
      Close Posts
    </button>
    {selectedPosts && selectedPosts.length > 0 ? (
      <div className="post-grid">
        {selectedPosts.map((post, index) => (
          <div key={index} className="post-container">
            {post ? (
              <img src={post} alt={`Post ${index + 1}`} className="post-image" />
            ) : (
              <p>Error loading post {index + 1}.</p>
            )}
          </div>
        ))}
      </div>
    ) : (
      <p>No posts available.</p>
    )}
  </div>
)}

      <Footer/>
    </div>
  );
}

export default Products;
