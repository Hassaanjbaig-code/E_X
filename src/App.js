import Navbar from "./Components/Navbar";
import PromoScreen from "./Components/Promo_Screen";

function App() {
  return (
    <>
      <Navbar />
      <div className='main'>     {/* For the contant to be center */}
        <PromoScreen />
      </div>
    </>
  );
}

export default App;
