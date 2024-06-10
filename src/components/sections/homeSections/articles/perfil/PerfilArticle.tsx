import { StylePerfilArticle } from "./StylePerfilAticle";
import perfil from "../../../../../assets/perfil.png";

export function PerfilArtcle() {
    
    return(
        <StylePerfilArticle>
            <div className="image">
                <img src={perfil} alt="Minha foto" />
            </div>
            <p>Hello there!! My name is Natã</p>     
        </StylePerfilArticle>
    )
}