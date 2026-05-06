import Header from "./Header";
const Layout = ({ children }) => {

  return (
    <>
    
<Header
  title="My Ecommerce Store"
  subTitle="welcome to My Store"
/>
      <main>{children}</main>
    </>
  );
};

export default Layout;