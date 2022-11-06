import { Container, Profile, Search, Brand } from "./styles";
import { FiSearch } from "react-icons/fi";
import { Input } from "../../components/Input";


export function Header() {
    return (
        <Container>

            <Brand>
                <h1>RocketMovies</h1>
            </Brand>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
            </Search>


            <Profile to="/profile">

                <div>
                    <strong>Marcelo L. Galli</strong>
                    <span>Bem-Vindo</span>
                </div>
                <img 
                    src="https://github.com/MarceloGalliDev.png"
                    alt="Foto de perfil do usuário"
                />
            </Profile>


        </Container>
    )
}