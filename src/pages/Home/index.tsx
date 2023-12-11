import { StyleMain } from "../../components/main/StyleMain";
import { ContactsSection } from "../../components/sections/ContactsSection/ContactsSection";
import { HomeSection } from "../../components/sections/homeSections/HomeSecetion";
import { ProjectsSection } from "../../components/sections/projectsSection/ProjectsSection";


export function Home() {
    return(
        <StyleMain>
            <HomeSection />
            <ProjectsSection />
            <ContactsSection />
        </StyleMain>  
    )
}