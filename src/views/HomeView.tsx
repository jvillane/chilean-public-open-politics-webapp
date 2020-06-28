import React from "react";
import {Intro} from "../components/home/Intro";
import {Sources} from "../components/home/Sources";

export const HomeView: React.FC = () => {
  return (
    <>
      <Intro/>
      <Sources/>
    </>
  )
}
