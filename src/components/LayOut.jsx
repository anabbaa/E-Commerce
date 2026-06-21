import Header from "./Header";
const Layout = ({ children }) => {

  return (
    <>    
<Header
  title="My Ecommerce Store"
  subTitle="welcome to My Store"
/>
<div className="w-[98vw] flex flex-col justify-evenly items-center">
  <main className="flex justify-center items-center flex-col  w-[77vw]">
  {children}
</main>  
</div>  
</>
  );
};

export default Layout;