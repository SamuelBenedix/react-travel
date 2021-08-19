import React from "react";
import {
  styContainerDesktop,
  styLimiterMenu,
  styMainMenu,
  styMainMenuLink,
  styWrapMenu,
} from "./styles";

const Header = () => {
  const mainMenu = ["Home", "About", "Gallery", "Article", "Contact"];

  return (
    <header>
      <div className={styContainerDesktop}>
        <div className={styWrapMenu}>
          <nav className={styLimiterMenu}>
            <ul className={styMainMenu}>
              {mainMenu.map((item, index) => {
                return (
                  <li key={index} className={styMainMenuLink}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
