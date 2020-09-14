import React from 'react';
import logoMain from './logo.png';
import rightNav from './rightNav.png';
import shopNav from './shopNav.png';
import searchIcon from './searchIcon.png';
import filterIcon from './filterIcon.png';

import './App.css';

import Products from './components/products/products';
//import { ShopifyProduct } from './models/Product';

import { Provider } from "react-redux";
import { ApplicationState } from "./store";
import { Store } from "redux";

interface MainProps {
  store: Store<ApplicationState>;
}

const App: React.FC<MainProps> = ({ store }) => {
//  const dispatch = useDispatch();
  //fetchProducts()(dispatch);
  return (
    <Provider store={store}>
      <div className="App">
        <div className="header">
          <div className="top-menu">
            <div className="logo">
              <img src={logoMain} className="page-logo" alt="logo" />
            </div>
            <ul className="top-menu-list">
              <li>Home</li>
              <li>Shop</li>
              <li>Track</li>
              <li>FAQ</li>
              <li>Refer a friend</li>
            </ul>
            <div className="profile">
              <img src={rightNav} className="page-logo" alt="logo" />
            </div>
          </div>
        </div>
        <div className="shopNav">
        <img src={shopNav} className="shop-nav" alt="nav" />
        </div>
        <div className="search-wrap">
          <div className="search">
            <button type="submit" className="search-button">
              <img src={searchIcon} alt="logo" />
            </button>
            <input className="search-term" type="text" placeholder="Search.."></input>
            <button type="submit" className="filter-button">
              <img src={filterIcon} alt="logo" />
            </button>
          </div>
        </div>
        <Products></Products>
      </div>
    </Provider>
  );
}

export default App;
