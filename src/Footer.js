import instagram from "./Images/instagram.png"
import wapp from "./Images/social.png"
import facebook from "./Images/facebook.png"
import "./Footer.css"

export function Footer(){
    return <div className="footer">
        Copyright alexandruFercal@2023
        <div>
        <img src={instagram} className="icon"/>
        <img src={wapp} className="icon"/>
        <img src={facebook} className="icon"/>
        </div>

    </div>
}