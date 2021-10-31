import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  HomePage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout style={{ minHeight: "85vh" }}>
          <div className="routes">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/exchanges" component={Exchanges} />
              <Route
                exact
                path="/cryptocurrencies"
                component={Cryptocurrencies}
              />
              <Route exact path="/crypto/:coinId" component={CryptoDetails} />
              <Route exact path="/news" component={News} />
              {/*<Route exact component={NotFound} />*/}
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={3}
            style={{ color: "white", textAlign: "center" }}
          >
            Cryptoverse <br />
            All Rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
