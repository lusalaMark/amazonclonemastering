import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          {/*} <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
            <FooterLogin />
          </Route>
          <Route path="/register">
            <Register />
            <FooterLogin />
          </Route>*/}
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/*<Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/product">
            <Header />
            <ProductLists productLists={allProductList} />
            <Footer />
          </Route>*/}
          <Route path="/">
            <Home />
            {/* <Footer />*/}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
