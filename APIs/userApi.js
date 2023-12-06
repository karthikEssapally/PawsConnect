const exp = require("express");
const userApp = exp.Router();

require("dotenv").config();

const expressAsyncHandler = require("express-async-handler");
const multerObj = require("./middlewares/cloudinaryConfig");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const verifyToken = require("./middlewares/verifyToken");

userApp.use(exp.json());





// CREATE USER API

// Register User (Seller)
// PUBLIC ROUTE
userApp.post(
  "/register-seller",
  multerObj.single("photo"),
  expressAsyncHandler(async (request, response) => {
    const userCollectionObj = request.app.get("userCollection");
    const newSeller = JSON.parse(request.body.user);
    const sellerOfDB = await userCollectionObj.findOne({
      username: newSeller.username,
    });

    if (sellerOfDB !== null) {
      response.status(200).send({ message: "Seller already existed" });
    } else {
      newSeller.image = request.file.path;
      let hashedPassword = await bcryptjs.hash(newSeller.password, 6);
      newSeller.password = hashedPassword;
      await userCollectionObj.insertOne(newSeller);
      response.status(201).send({ message: "Seller created" });
    }
  })
);

// Register User (Buyer)

// PUBLIC ROUTE
userApp.post(
  "/register-buyer",
  multerObj.single("photo"),
  expressAsyncHandler(async (request, response) => {
    const userCollectionObj = request.app.get("userCollection");
    const newBuyer = JSON.parse(request.body.user);
    const buyerOfDB = await userCollectionObj.findOne({
      username: newBuyer.username,
    });

    if (buyerOfDB !== null) {
      response.status(200).send({ message: "Buyer already existed" });
    } else {
      newBuyer.image = request.file.path;
      let hashedPassword = await bcryptjs.hash(newBuyer.password, 6);
      newBuyer.password = hashedPassword;
      await userCollectionObj.insertOne(newBuyer);
      response.status(201).send({ message: "Buyer created" });
    }
  })
);







//update 


//posts
userApp.post("/posts", multerObj.single("image"), expressAsyncHandler(async (request, response) => {
  try {
    // Get the user collection
    const userCollectionObj = request.app.get("userCollection");

    // Get the user from the client
    const currentUser = JSON.parse(request.body.user);

    // Verify if the user already exists
    const userOfDB = await userCollectionObj.findOne({ username: currentUser.username });

    // If user does not exist
    if (!userOfDB) {
      return response.status(404).send({ message: "User not found" });
    }

    // Check if the user has the 'posts' array
    if (!currentUser.posts) {
      currentUser.posts = []; // Create the 'posts' array
    }

    // Add CDN link of cloudinary image to user object
    const post = request.file.path;
    currentUser.posts.push(post);



    // Update the user document with the new post
    await userCollectionObj.findOneAndUpdate(
      { username: currentUser.username },
      { $set: { posts: currentUser.posts } }
    );

    return response.status(201).send({ message: "Post created" });
  } catch (error) {
    return response.status(500).send({ message: "Internal server error" });
  }
}));






// Route handler for searching by username
userApp.get("/search/:username", (req, res) => {
  let usern = req.params.username;
  const userCollectionObj = req.app.get("userCollection");

  // Find user
  userCollectionObj
    .findOne({ username: usern })
    .then((user) => {
      res.status(200).send({ message: "found", payload: user });
    })
    .catch((error) => {
      res.status(500).send({ message: "Error retrieving data", error });
    });
});

userApp.get("/product", (request, response) => {
  // Get user collection
  const userCollectionObj = request.app.get("userCollection");

  // Find non-seller users
  userCollectionObj
    .find({ isSeller: { $ne: false } }) // Exclude sellers
    .toArray()
    .then((users) => {
      response.status(200).send({ message: "Data found", payload: users });
    })
    .catch((error) => {
      response.status(500).send({ message: "Error retrieving data", error });
    });
});



//cart 

userApp.put("/cart/:user/:username", (req, res) => {
  const user = req.params.user;
  const id = req.params.username;
  const userCollectionObj = req.app.get("userCollection");
  userCollectionObj
    .findOne({ username:id })
    .then((usern) => {
      // Check if the user has the 'carts' array
      if (!usern.carts) {
        usern.carts = []; // Create the 'carts' array
      }
      usern.carts.push(user);
      
      // Update the 'carts' array in the user document
      userCollectionObj.findOneAndUpdate(
        { username: id },
        { $set: { carts: usern.carts } }
      )
        .then(() => {
          res.status(200).send({ message: "Added to cart" });
        })
        .catch((error) => {
          res.status(500).send({ message: "Error updating data", error });
        });
    })
    .catch((error) => {
      res.status(500).send({ message: "Error retrieving data", error });
    });
});


// Route handler for searching by username
userApp.get("/cart/:username", (req, res) => {
  let usern = req.params.username;
  const userCollectionObj = req.app.get("userCollection");

  // Find user
  userCollectionObj
    .findOne({ username: usern })
    .then((user) => {
      res.status(200).send({ message: "found", payload: user });
    })
    .catch((error) => {
      res.status(500).send({ message: "Error retrieving data", error });
    });
});


 
//user login
//PUBLIC ROUTE
userApp.post('/login-user',expressAsyncHandler(async(request,response)=>{

  //get user collection
  const userCollectionObj=request.app.get("userCollection")

  //get user from client
  const userCredentialsObj=request.body;

  //verify username of userCredentialsObj
  let userOfDB=await userCollectionObj.findOne({username:userCredentialsObj.username})

  //if username is invalid
  if(userOfDB===null){
    response.status(200).send({message:"Invalid username"})
  }
  //if username is valid
  else{
    //compare passwords
    let isEqual=await bcryptjs.compare(userCredentialsObj.password,userOfDB.password)
    //if passwords not matched
    if(isEqual===false){
      response.status(200).send({message:"Invalid password"})
    }
    //passwords are matched
    else{
      //create JWT token
      let signedJWTToken=jwt.sign({username:userOfDB.username},process.env.SECRET_KEY,{expiresIn:"1d"})
      //send token in response
      response.status(200).send({message:"success",token:signedJWTToken,user:userOfDB})
    }

  }

}))






//get user by username
//PRIVATE ROUTE
userApp.get("/get-user/:username",verifyToken,expressAsyncHandler(async(request,response)=>{

  console.log(request.headers)
     //get user collection
    const userCollectionObj=request.app.get("userCollection")

    //get username from url
    let usernameOfUrl=request.params.username;

    //find user by iusername
    let user=await userCollectionObj.findOne({username:usernameOfUrl})

    //send res
    response.status(200).send({message:"User",payload:user})

}))



//delete user by username
//PRIVATE ROUTE
userApp.delete("/remove-user/:username",verifyToken,expressAsyncHandler(async(request,response)=>{

  //get user collection
  const userCollectionObj=request.app.get("userCollection")

  //get username from url
  let usernameOfUrl=request.params.username;

  //delete user by username
  await userCollectionObj.deleteOne({username:usernameOfUrl})
 //send res
 response.status(200).send({message:"User removed"})

}))



//protected route
userApp.get("/test",verifyToken,(request,response)=>{
  response.send({message:"Message from Protected route"})
})



//PUBLIC ROUTES
  //route to send all led tvs
  //route to send detailes of a selected product
  //route to send reviews of a selected product

//PRIVATE /PROTECTED ROUTES
  //route to write a review
  //route to buy a product

//export express app
module.exports = userApp;
