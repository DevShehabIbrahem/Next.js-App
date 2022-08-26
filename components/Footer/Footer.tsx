import { words } from "../../shared/words";
import styles from "../../styles/footer.module.css";

const Footer = () => {
  const { Footer } = words;
  return (
    <div className="bg-black p-[31px] text-[#757575] text-[13px] border-t-8 border-gray-700">
      <div className={styles.ul_wrapper}>
        <h1 className="text-[16px] mb-5">Questions? Contact us.</h1>

        <ul className="space-y-3">
          {Footer.map((l: string) => (
            <li key={l} className="cursor-pointer m-auto ">
              {l}
            </li>
          ))}
        </ul>

        <div className="space-x-10 pt-5">
          <select className="mb-[3rem] md:mb-[3rem]  px-2 py-2 bg-transparent border border-[#757575] text-[#757575] outline-0 text-[16px]">
            <option value="En" className="bg-gray-500 text-white">
              En
            </option>

            <option value="Ar" className="bg-gray-500 text-white">
              العربية
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
