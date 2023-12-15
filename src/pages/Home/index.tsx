import { StyleMain } from "../../components/main/StyleMain";
import { ContactsSection } from "../../components/sections/ContactsSection/ContactsSection";
import { FooterSection } from "../../components/sections/footerSection/FooterSection";
import { HomeSection } from "../../components/sections/homeSections/HomeSecetion";
import { ProjectsSection } from "../../components/sections/projectsSection/ProjectsSection";


export function Home(){
    return (
        <StyleMain>
            <HomeSection/>
            <ProjectsSection/>
            <ContactsSection/>
            <FooterSection />
        </StyleMain>
    );
}
