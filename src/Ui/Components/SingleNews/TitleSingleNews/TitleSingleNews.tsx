import React from "react";
import { NavLink } from "react-router-dom";
import { BreadcrumbItem } from "reactstrap";

type titleSingleNews = {
  title: string;
};

const TitleSingleNews = ({ title }: titleSingleNews) => {
  return (
    <div>
      <BreadcrumbItem>
        <NavLink
          className="titleCrumb text-Main-green text-xl hover:text-Main-green"
          to=""
        >
          {title}
        </NavLink>
      </BreadcrumbItem>
    </div>
  );
};

export default TitleSingleNews;
