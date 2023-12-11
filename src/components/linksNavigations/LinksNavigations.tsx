import { Link } from "react-router-dom";
import { StyleLinksNavigations } from "./StyleLinksNavigations";
import gitHub from "../../assets/Bt-Circle.png"


export function LinksNavigations() {
    return(
        <StyleLinksNavigations>
            <Link to="/pkl">See Projects</Link>
            <div className="">
                <img src={gitHub} alt="GitHub" />
            </div>
        </StyleLinksNavigations>
    )
}