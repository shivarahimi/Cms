import { Helmet } from "react-helmet";
import { Outlet, useLocation } from "react-router-dom";
import { UseGetSetting } from "src/Core/services/public/api-footer";
import Navbar from "src/Ui/Components/Common/Navbar/Navbar";
import { useState, useEffect } from "react";

const Layout = () => {
  const location = useLocation();
  const [Footer, setFooter] = useState<any>();
  const { data, isLoading } = UseGetSetting();
  useEffect(() => {
    const footerData = data?.data.result;
    setFooter(footerData);
  }, [isLoading]);
  return (
    <>
      <Helmet>
        <title>{Footer?.name}</title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href={`https://adminapi.agroom.org/${Footer?.logoImageAddress}`}
        />
      </Helmet>
      <Navbar isHome={location.pathname === "/"} />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
