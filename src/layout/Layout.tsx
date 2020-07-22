import React from "react";
import {Header} from "./Header";
import {Body} from "./Body";
import {Footer} from "./Footer";

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
