import NavLinks from "./NavLinks";
import styles from "../../styles/mobile.module.css";
import { AiOutlineClose } from "react-icons/ai";

const MobileMenu = ({ setState }: { setState: any }) => {
  return (
    <div className={styles.mobilemenu}>
      <span>
        <AiOutlineClose onClick={() => setState(false)} />
      </span>
      <NavLinks />
    </div>
  );
};

export default MobileMenu;
