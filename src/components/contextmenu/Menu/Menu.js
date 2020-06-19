import React, { useState, useRef, useEffect } from "react";
import Popup from "reactjs-popup";
import "./Menu.css";
import MenuItem from "./MenuItem";

function Menu(props) {
  const { menuData, onClick: handleClick, pos } = props;

  const [menuPos, setMenuPos] = useState({ x: -1, y: -1 });

  const menuRef = useRef();

  useEffect(() => {
    if (menuRef.current) {
      const { clientHeight, clientWidth } = menuRef.current;
      console.log(pos, clientHeight, clientWidth);
      const newMenuPos = { x: pos.x, y: pos.y };
      //检测Y是否越界
      if (pos.y + clientHeight >= pos.height) {
        //菜单向上移动
        newMenuPos.y = pos.y - clientHeight;
      }
      //检测X是否越界
      if (pos.x + clientWidth >= pos.width) {
        //菜单向左移动
        newMenuPos.x = pos.x - clientWidth;
      }
      setMenuPos(newMenuPos);
    }
    return () => {};
  }, [pos]);

  return (
    <div
      ref={menuRef}
      className="menu"
      style={{ position: "fixed", left: menuPos.x, top: menuPos.y }}
    >
      {menuData.map((item) =>
        item.subItem && item.subItem.length ? (
          <Popup
            trigger={<div className="menu-item">{item.name}</div>}
            className="menu"
            key={item.name}
            position="right top"
            on="hover"
            closeOnDocumentClick
            mouseLeaveDelay={300}
            mouseEnterDelay={0}
            arrow={false}
          >
            <>
              {item.subItem.map((subItem) => (
                <MenuItem
                  key={subItem.name}
                  name={subItem.name}
                  checked={subItem.checked}
                  disabled={subItem.disabled}
                  onClick={handleClick}
                />
              ))}
            </>
          </Popup>
        ) : (
          <MenuItem
            key={item.name}
            name={item.name}
            disabled={item.disabled}
            onClick={handleClick}
          />
        )
      )}
    </div>
  );
}
export default Menu;
