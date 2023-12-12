// import React, { createContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const orderContextprovider = createContext();

// function OrderContextProvider({ children }) {
//   const navigate = useNavigate();
//   const [usernames, setusername] = useState({});

//   const orderkaro = (username) => {
//     setusername(username);
//     navigate('/Order');
//   };

//   return (
//     <orderContextprovider.Provider value={[usernames, orderkaro]}>
//       {children}
//     </orderContextprovider.Provider>
//   );
// }

// export default OrderContextProvider;
