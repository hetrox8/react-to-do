import { useState, useRef } from "react";
import useOnClickOutside from './useOnclickOutside';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  
  useOnClickOutside(ref, dropdown, () => setDropdown(false));
  return (
    // ...
    document.removeEventListener("mousedown")
  );
};
export default Navbar;
