import { Container, NewNote, Content } from "./styles";
import { Header } from "../../components/Header";
import { FiPlus } from "react-icons/fi";
import { Note } from "../../components/Note";

export function Home() {
    return (
        <Container>

            <Header />

            <Content>
                <div>
                    <h1>Meus filmes</h1>
                    <NewNote to="/new">
                        <FiPlus />
                        Adicionar filme
                    </NewNote>
                </div>

                <Note data={{
                    title: "React",
                    tags: [
                        { id: "1", name: "React" },
                        { id: "2", name: "Next" }
                    ]
                }}/>

            </Content>


        </Container>
    )
};
