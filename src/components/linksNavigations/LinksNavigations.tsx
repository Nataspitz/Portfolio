import { StyleLinksNavigations } from "./StyleLinksNavigations";
import gitHub from "../../assets/Bt-Circle.png"


export function LinksNavigations() {
    return(
        <StyleLinksNavigations>
            <a className="projects" href="https://github.com/Nataspitz?tab=repositories" target="_blank"
                >See All Projects
            </a>
            <a  className="github" href="https://github.com/Nataspitz"  target="_blank">
                <img src={gitHub} alt="GitHub" />
            </a>
        </StyleLinksNavigations>
    )
}