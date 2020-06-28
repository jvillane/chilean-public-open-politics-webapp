import React from "react";
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";

import '../assets-messenger/base.scss';
import '../css/style.scss';
import '../css/style-messenger.scss';

export const Layout: React.FC = ({children}) => {
  return (
    <div className="hero-wrapper bg-composed-wrapper bg-light">
      <Header/>
      <Body>
        {children}
      </Body>
      <Footer/>
    </div>
  )
}
