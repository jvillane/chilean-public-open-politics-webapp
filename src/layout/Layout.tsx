import React from "react";
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";

export const Layout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}
