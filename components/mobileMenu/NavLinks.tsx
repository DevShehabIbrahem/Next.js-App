import Link from "next/link";
import styles from "../../styles/mobile.module.css";
import { words } from "../../shared/words";
const NavLinks = () => {
  return (
    <ul className={styles.ul_mobile}>
      <li>
        <Link href="/">Home</Link>
      </li>
      {words.navlinkMobile.map((n: any) => (
        <li key={n}>
          <Link href="/">{n}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
