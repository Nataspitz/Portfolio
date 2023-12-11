import { PageContainer } from "../../containers/pageContainer/PageContainer";
import { StyleContactsSection } from "./StyleContactsSection";


export function ContactsSection() {
    
    return(
        <StyleContactsSection>
            <PageContainer>
                <div className="info__cta">
                    <h2>
                        Awaken your creativity! Let's 
                        <span>turn ideas into reality together</span>
                        , get in touch with me!!!
                    </h2>
                </div>
                <div className="medias">

                </div>
            </PageContainer>
        </StyleContactsSection>
    )
}