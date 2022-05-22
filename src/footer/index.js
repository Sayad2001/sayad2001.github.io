import React from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApprovalIcon from '@mui/icons-material/Approval';
import gerb from "../imges/gerb.png"
import "./style.scss"

export default function Footer(){
    return (
        <div className="footer">
            <div className="coll-back">
                 <p>Հետադարձ կապ</p>
                 <div>
                    <LocalPhoneIcon sx={{fill:"white"}} />
                    <a src="">+374 (10) - 66 - 22 - 02</a>
                 </div>
                 <div>
                    <FacebookIcon sx={{fill:"white"}}/>
                    <a src="">ՀՀ ՊՆ Վ.Սարգսյանի անվան ռազմական համալսարան</a>
                 </div>
                 <div>
                    <EmailIcon sx={{fill:"white"}}/>
                    <a src="">mu.vs@mil.am</a>
                 </div>
                 <div>
                    <LocationOnIcon sx={{fill:"white"}}/>
                    <a src="">Նոր նորքի 6րդ զանգված,  Դավիթ Բեկի 155</a>
                 </div>
                 <div>
                    <ApprovalIcon sx={{fill:"white"}}/>
                    <a src="">0090</a>
                 </div>
            </div>
            <div className="gerb">
                <h3>
                ՀՀ Պաշտպանության Նախարարություն
                </h3>
                <img src={gerb}></img>
            </div>
        </div>
    )
}