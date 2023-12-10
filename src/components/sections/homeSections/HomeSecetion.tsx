import { StyleHomeSection } from "./StyleHomeSection";
import { PageContainer } from "../../containers/pageContainer/PageContainer";
import { PerfilArtcle } from "./articles/perfil/PerfilArticle";
import { TechList } from "../../lists/techs/TechList";
import { DescriptionArticle } from "./articles/description/DescriptionArticle";


export function HomeSection() {
  return (
    <StyleHomeSection>
      <PageContainer >
        <PerfilArtcle />
      </PageContainer>
      <TechList />
      <PageContainer>
        <DescriptionArticle />
      </PageContainer>
    </StyleHomeSection>
  );
}
