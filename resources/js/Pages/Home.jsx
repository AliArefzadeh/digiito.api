import React from "react";

//Components
import Header from "../Components/header/Header";
import Content from "../Components/content/Content";
import Filtersection from "../Components/Filtersection";

const Home = ({ active, setActive }) => {
  return (
    <React.Fragment>
      {active && <div className="fixed top-0 right-0 left-0 bottom-0 z-50 bg-gray-400 opacity-60 md:hidden"></div>}
      <Header setActive={setActive} />
      <Content />
      <Filtersection active={active} setActive={setActive} />
    </React.Fragment>
  );
};

export default Home;
