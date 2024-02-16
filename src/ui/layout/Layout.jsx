import PropTypes from "prop-types";

import { Menu } from "./menu/Menu";
import { Navbar } from "./navbar/Navbar";

export function Layout({ children }) {
  return (
    <div className="w-full">
      <Navbar />
      <Menu />
      <main
        id="main-content"
        className="ml-[275px] bg-[#edeff2] mt-[50px] p-5"
        style={{ minHeight: "calc(100vh - 50px)", width: "calc(100% - 275px)" }}
      >
        {children}
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
