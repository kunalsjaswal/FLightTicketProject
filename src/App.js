import React, { memo } from "react";
import { MainDiv } from "./AppMainStyle";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import RoutesPage from "./components/routes/RoutesPage";
AOS.init();

function App() {


  // showing main home page1

  return (
    <MainDiv>
        
        <RoutesPage/>

    </MainDiv>
  );
}

export default memo(App);
