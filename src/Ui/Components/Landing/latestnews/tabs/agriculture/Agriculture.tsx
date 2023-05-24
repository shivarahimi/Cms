import { useState } from "react";
import { Nav, NavLink, NavItem, TabContent, TabPane } from "reactstrap";
// import components
import Slider from "src/Ui/Components/Landing/latestnews/slidercontent/slider";
import { GetCategory } from "src/Core/services/public/api-newstext";

import "../../tabs/tabs.css";

const Agriculture = () => {
  const [activeTab, setActiveTab] = useState("5");
  const [tab, setTab] = useState([]);

  const onSuccess = (data: any) => {
    const category = data?.data.result;
    setTab(category);
  };
  const onError = (data: any) => {
    console.log("its err", data);
  };

  const { data } = GetCategory(onSuccess, onError);
  return (
    <div>
      <Nav tabs className="flex flex-wrap pt-6" id="lastnews">
        {tab?.map((cat: any) => (
          <NavItem key={cat.id} className="cursor-pointer">
            <NavLink
              className={activeTab === `${cat.id}` ? "active" : "navItem"}
              onClick={() => setActiveTab(`${cat.id}`)}
            >
              {cat?.title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent style={{ display: "block" }} activeTab={parseInt(activeTab)}>
        <>
          {tab?.map((cat: any) => (
            <TabPane key={cat.id} tabId={cat.id}>
              <Slider type={cat.id} />
            </TabPane>
          ))}
        </>
      </TabContent>
    </div>
  );
};

export default Agriculture;
