import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Header from "./components/header/Header";
import TagSidebar from "./components/tagSidebar/TagSidebar";
import FilesScreen from "./screens/FilesScreen/FilesScreen";
import ControlSidebar from "./components/controlSidebar/ControlSidebar";
import Contextmenu from "./components/contextmenu/Contextmenu";
import { GLOBAL_TARGET } from "./constants/contextmenuConstants";
import { showContextmenu, hideContextmenu } from "./actions/contextmenuActions";
import { REQUEST, SUCCESS, FAIL } from "./constants/apiConstants";
import { clear } from "./actions/metaDataActions";
import { successMsg, errorMsg } from "./utils/message";

function App() {
  const [treeNodeCmStyle, setTreeNodeCmStyle] = useState({ display: "none" });
  const [visible, setiVisible] = useState(false);

  const contextmenuState = useSelector((state) => state.contextmenu);
  const { apiState, error } = useSelector((state) => state.metaData);

  const dispatch = useDispatch();
  useEffect(() => {
    if (contextmenuState.show) {
      setTreeNodeCmStyle({
        position: "fixed",
        left: contextmenuState.x,
        top: contextmenuState.y,
      });
    } else {
      setTreeNodeCmStyle({
        display: "none",
      });
    }
    return () => {
      //
    };
  }, [contextmenuState]);

  useEffect(() => {
    if (apiState === REQUEST) {
    } else if (apiState === SUCCESS) {
      successMsg("请求成功");
    } else if (apiState === FAIL) {
      errorMsg(`请求失败:${error}`);
    }
    return () => {};
  }, [apiState, error]);

  function handlePrimaryClick() {
    setiVisible(true);
  }
  function handleClearBtnClick() {
    dispatch(clear());
  }

  function handleCilck() {
    //隐藏菜单
    if (contextmenuState.show) {
      dispatch(hideContextmenu());
    }
  }

  function handleContextMenu(e) {
    //全局菜单
    e.preventDefault();
    dispatch(showContextmenu(e.pageX, e.pageY, [GLOBAL_TARGET]));
  }

  return (
    <BrowserRouter>
      <div
        className="grid-container"
        onClick={handleCilck}
        onContextMenu={handleContextMenu}
      >
        <header className="header">
          <Header handlePrimaryClick={handlePrimaryClick} />
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
        <ControlSidebar
          visible={visible}
          onClose={() => setiVisible(false)}
          onClick={handleClearBtnClick}
        />
      </div>
      {contextmenuState.target && (
        <Contextmenu
          style={treeNodeCmStyle}
          data={contextmenuState.data}
          target={contextmenuState.target}
        />
      )}
    </BrowserRouter>
  );
}

export default App;
