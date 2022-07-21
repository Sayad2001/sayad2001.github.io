import React from "react";

import "./style.scss";
import cardimg1 from "../../imges/cardimg1.png";
import { Pagination } from "@mui/material";
//"../../imges/"
import img  from  "../../imges/backgrondimg2.png"

let arry22 = [
  {
    img: cardimg1,
    date: "11.22.2022",
    text: "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",

  },
  {
    img: cardimg1,
    date: "11.22.2022",
    text: "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",

  }, {
    img: cardimg1,
    date: "11.22.2022",
    text: "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",

  }, {
    img: cardimg1,
    date: "11.22.2022",
    text: "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",

  }, {
    img: cardimg1,
    date: "11.22.2022",
    text: "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",

  },

];
export default function NewsPage() {
  return (
    <div className="first-page">
      <div className="under-menu">
        <img  src={img}/>
        <div className="text">
          <h1>ՀՀ ՊՆ Վ. ՍԱՐԳՍՅԱՆԻ ԱՆՎԱՆ ՌԱԶՄԱԿԱՆ ՀԱՄԱԼՍԱՐԱՆ</h1>
          <div className="aphorism">
            <p>Գիտելիքը Ձեզ, նվաճումները Հայրենիքին․․․</p>
          </div>
        </div>
        <div className="languages-section">
          <div className="languages-div">
            <button>հայերեն</button>
            <button className="russian">русский</button>
            <button>english</button>
          </div>
        </div>
      </div>
      <div className="news-section-news">
         {arry22.map((item, index)=>{
            return (
              <div key={index} className="news-card" >
                <div className="card-img">

                   <img src={item.img}></img>
                </div>
                   <div className="news-card-text">
                      <p>{item.text}</p>
                      <div className="more">
                        <a>ավելին</a>
                        <p>{item.date}</p>
                      </div>
                   </div>
              </div>
            )
         })}
      </div>
      <div className="Pagination">
        <Pagination count={10} variant="outlined" shape="rounded" />
      </div> 
    </div>
  );
}
