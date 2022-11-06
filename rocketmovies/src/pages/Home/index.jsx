import { Container, NewNote, Content } from "./styles";
import { Header } from "../../components/Header";
import { FiPlus } from "react-icons/fi";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
import { Button } from "../../components/Button";

export function Home() {
    return (
        <Container>

            <Header />

            <Content>
                
                <NewNote to="/new">
                    <FiPlus />
                    Criar nota
                </NewNote>

                <Section title="Minhas notas"> 
                    <Note data={{
                        title: "React",
                        tags: [
                            { id: "1", name: "React" },
                            { id: "2", name: "Next" }
                        ]
                    }}/>
                </Section>
            </Content>


        </Container>
    )
};
