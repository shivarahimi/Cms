import Slider from "src/Ui/Components/Landing/Slider/Slider"
import style from "../Header/Header.module.css";

const Header = () => {
  return (
    <>
      <div className={style.backHeader}>
        <Slider />
      </div>
    </>
  );
};

export default Header;
