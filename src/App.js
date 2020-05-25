import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import TagSidebar from "./components/tagSidebar/TagSidebar";
import FilesScreen from "./screens/FilesScreen";
import ControlSidebar from "./components/controlSidebar/ControlSidebar";
import { useSelector } from "react-redux";

function App() {
  const [visible, setiVisible] = useState(false);
  const { current } = useSelector((state) => state.step);

  function handlePrimaryClick() {
    setiVisible(true);
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <Header current={current} handlePrimaryClick={handlePrimaryClick} />
        </header>
        <aside className="aside">
          <TagSidebar />
        </aside>
        <main className="main">
          <Switch>
            <Route exact path="/" component={FilesScreen} />
            <Route path="/tags/:tagName" component={FilesScreen} />
            <Redirect to="/" />
          </Switch>
        </main>
        <footer className="footer">底部</footer>
        <ControlSidebar visible={visible} onClose={() => setiVisible(false)} />
      </div>
    </BrowserRouter>
  );
}

export default App;
