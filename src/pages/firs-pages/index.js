import React from "react";

import "./style.scss";
import img1 from "../../imges/img1.svg";
import img2 from "../../imges/img2.png";
import img3 from "../../imges/img3.png";
import img4 from "../../imges/img4.png";
import img5 from "../../imges/img5.png";
import cardimg1 from "../../imges/cardimg1.png";
import cardimg2 from "../../imges/caardimg2.png";
import cardimg3 from "../../imges/cardimg3.png";
import { NavLink } from "react-router-dom";
import img  from  "../../imges/backgroindimg1.png"
let arry = [
  {
    date: "11.22.2022",
    text: "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
  },
  {
    date: "11.22.2022",
    text: "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
  },
  {
    date: "11.22.2022",
    text: "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
  },
  {
    date: "11.22.2022",
    text: "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
  },
  {
    date: "11.22.2022",
    text: "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
  },
  {
    date: "11.22.2022",
    text: "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
  },
  {
    date: "11.22.2022",
    text: "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
  },
  {
    date: "11.22.2022",
    text: "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
  },
  {
    date: "11.22.2022",
    text: "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
  },
  {
    date: "11.22.2022",
    text: "Հայաստանի Հանրապետության պաշտպանության նախարարության Վ.Սարգսյանի անվան ռազմական համալսարանը կազմավորվել է Հայաստանի Հանրապետության Կառավարության թիվ 279 որոշմամբ",
  },
];
let arry22 = [
  {
    img: cardimg1,
    title: "Դիմորդ",
    links: [
      {
        title: "-Ուսումնական ծրագրերր ",
        link: "http:/aa",
      },
      {
        title: "-Գրանցվե ",
        link: "http:/aa",
      },
      {
        title: "-Ընդունելության կարգ և պայմաններ ",
        link: "http:/aa",
      },
    ],
  },
  {
    img: cardimg2,
    title: "Կրթություն ",
    links: [
      {
        title: "-Ուսումնական ծրագրերր ",
        link: "http:/aa",
      },
      {
        title: "-Գրանցվե ",
        link: "http:/aa",
      },
      {
        title: "-Ընդունելության կարգ և պայմաններ ",
        link: "http:/aa",
      },
    ],
  },
  {
    img: cardimg3,
    title: "Մեր մասին",
    links: [
      {
        title: "-Ուսումնական ծրագրերր ",
        link: "http:/aa",
      },
      {
        title: "-Գրանցվե ",
        link: "http:/aa",
      },
      {
        title: "-Ընդունելության կարգ և պայմաններ ",
        link: "http:/aa",
      },
    ],
  },
];
export default function FirstPage() {
  return (
    <div className="first-page">
      <div className="under-menu">
        <img src={img}></img>
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
      <div className="news-section">
        <div className="news-img-section">
          <div className="history-img">
            <img src={img1}></img>
            <div className="histry-text">
              <p>Պատմական ակնարկ</p>
            </div>
          </div>
          <div className="grid-img">
            <img src={img2}></img>
            <img src={img3}></img>
            <img src={img4}></img>
            <img src={img5}></img>
          </div>
        </div>
        <div className="news-text-section">
          <div className="news-text-col">
            <div className="news-title">
              <p>Լրահոս</p>
            </div>
            <div className="date-news">
              {arry.map((i) => {
                return (
                  <div>
                    <h5>{i.date}</h5>
                    <p>{i.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="main-parts">
        <div className="part-titel">
          <p>Հիմնական մասեր </p>
        </div>
        <div className="part-cards">
          {arry22.map((i) => {
            return (
              <div className="card">
                <div className="card-img">
                  <img src={i.img} />
                </div>
                <div className="liks-div">
                    
                    <p>{i.title}</p>
                  {
                    i.links.map(item=>{
                      return  (
                         <>
                          <NavLink to={item.link}> {item.title}</NavLink>
                         </> 
                        )
                    })
                  }
                </div>
                <button> Ավելին</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
