import { useState, useRef } from "react";
import { useOnClickOutside } from "./useOnClickOutside";
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  
  useOnClickOutside(ref, dropdown, () => setDropdown(false));
  return (
    // ...
    document.removeEventListener("mousedown", handler);
  );
};
export default Navbar;
