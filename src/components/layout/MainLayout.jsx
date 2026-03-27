 import React from "react";
 import { Outlet } from "react-router-dom";
  import Header from "./Header";
  import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh", padding: "20px" }}>
         <Outlet />
        {children}
      </main>
       
      <Footer />
    </>
  );
}

export default MainLayout; 

 
// import React from "react";
// import { Outlet } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";

// function MainLayout() {
//   return (
//     <>
//       <Header />

//       <main style={{ minHeight: "80vh", padding: "20px" }}>
//         <Outlet />
//       </main>

//       <Footer />
//     </>
//   );
// }

// export default MainLayout;

 