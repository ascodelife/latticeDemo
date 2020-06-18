import React from "react";
import Popup from "reactjs-popup";
import "./Menu.css";
import MenuItem from "./MenuItem";

function Menu(props) {
  const { menuData, style, onClick: handleClick } = props;
  return (
    <div className="menu" style={style}>
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
