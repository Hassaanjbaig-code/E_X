import Navbar from "./Components/Navbar";
import PromoScreen from "./Components/Promo_Screen";
import Products from "./Components/Products";

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        {/* For the contant to be center */}
        <PromoScreen />
          <Products />
      </div>
    </>
  );
}

export default App;
