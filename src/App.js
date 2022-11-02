import React from "react";
import Header from "./Component/Header/Header";
import Main from "./Component/Main/Main";
import Info from "./Component/Info/Info";
import Footer from './Component/Footer/Footer';
import Equipment from "./Component/Equipment/Equipment";
import {Routes, Route} from 'react-router-dom'
import Product_motobur from "./Component/Main/Products/Product_motobur/ProductMotobur";
import Product_pompa from "./Component/Main/Products/Product_pompa/ProductPompa";
import Product_drill from "./Component/Main/Products/Product_drill/ProductDrill";
import Modal from "./Component/Modal/Modal";
import { useState } from "react";


function  App(){
  const[open, setOpen] = useState(false);
  return (
   <div className="wrapper">
     <Header/>
     <Routes>
        <Route path="/" element={<Main setActive={setOpen}/>}/> 
        <Route path="/main" element={<Main setActive={setOpen}/>}/>
        <Route path="/equipment" element={<Equipment setActive={setOpen}/>}/>
        <Route path="/info" element={<Info setActive={setOpen}/>}/>
        <Route path="/product_motobur" element={<Product_motobur  setActive={setOpen}/>}/>
        <Route path="/pompa" element={<Product_pompa  setActive={setOpen}/>}/>
        <Route path="/drill" element={<Product_drill setActive={setOpen}/>}/>
     </Routes>
     <Modal open={open} setOpen={setOpen}/>
     <Footer/>
   </div>
    )
}

export default App;

