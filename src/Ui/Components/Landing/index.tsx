import Header from "../Landing/Header/Header";
import Services from "../Landing/Services/Services";
import Descreption from "./Descreption/Descreption";
import Footer from "./Footer/footer";
import LatestNews from "./latestnews/latestnews";
import IranMap from "./Map/Iranmap/IranMap";
import Statements from "./statements/statements";
import Video from "./video/video";

const index = () => {
  return (
    <>
      <Header />
      <Services />
      <Descreption />
      <LatestNews />
      <Video />
      <Statements />
      <IranMap />
      <Footer />
    </>
  );
};

export default index;
