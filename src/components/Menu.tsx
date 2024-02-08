import React from "react";
import { useRouter } from "next/router";
import HamburgerMenu from "react-burger-menu";

const Menu = () => {
  const router = useRouter();

  const handleMenuClick = (item) => {
    router.push(item.path);
  };

  return (
    <HamburgerMenu
      isOpen={true}
      onMenuClick={handleMenuClick}
      items={[
        {
          path: "/",
          label: "Home",
        },
        {
          path: "/about",
          label: "About",
        },
        {
          path: "/contact",
          label: "Contact",
        },
      ]}
    />
  );
};

export default Menu;