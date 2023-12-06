import NavigationBar from './navbar/NavigationBar'
import Footer from './footer/Footer'
import React from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
        <NavigationBar />
        <div className="container">
          <Outlet />
        </div>
         <div>
          {/* <Footer></Footer> */}
        </div> 
    </div>
  );
}

export default RootLayout;
