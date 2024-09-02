// import Arrivals from './theme/arrivals/Arrivals';
// import Brands from './theme/brands/Brands';
// import Header from './theme/header/Header'
// import Promo from './theme/promo/Promo';


import Arrivals from './theme/fashion_shop/arrivals/Arrival';
import Brands from './theme/fashion_shop/brands/Brand';
import Header from './theme/fashion_shop/Header_fashion/Header_fashion'
import Promo from './theme/fashion_shop/promo/Promo';

function App() {

  return (
		<div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
		</div>
  );
}

export default App;