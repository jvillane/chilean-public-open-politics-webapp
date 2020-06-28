import React from "react";
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";

import '../assets/base.scss';
import '../css/style.scss';
import '../css/style-messenger.scss';

export const Layout: React.FC = ({children}) => {
  return (
    <div style={{opacity: 1}}>
      <Header/>
      <Body>
        {children}
      </Body>
      <Footer/>
    </div>
  )
}
