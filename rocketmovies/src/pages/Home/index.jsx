import { Container, NewNote, Content, SubTitle } from "./styles";
import { Header } from "../../components/Header";
import { FiPlus } from "react-icons/fi";
import { Note } from "../../components/Note";

export function Home() {
    return (
        <Container>

            <Header />

            <SubTitle >
                <h1>Meus filmes</h1>
                <NewNote to="/new">
                    <FiPlus />
                    Adicionar filme
                </NewNote>
            </SubTitle>

            <Content>

                <Note data={{
                    title: "Anéis do Poder",
                    text: "O fato de a história do período ser marcada pela ascensão do grande vilão Sauron foi, claro, um grande atrativo para a dupla. “É a história de Sauron, da forja dos anéis e de como ele engana os povos da Terra Média, o que por fim culmina na queda de alguns dos maiores reinos, e na união de todos para derrotá-lo. Como Sauron será retratado, inclusive, é um dos grandes mistérios da série – e McKay guarda bem o segredo. “Tudo o que posso dizer é que Sauron é muito poderoso, um enganador. Quando o nome dele surge, ele significa algo para todo mundo”, afirma.",
                    tags: [
                        { id: "1", name: "Ficção Científica" },
                        { id: "2", name: "Drama" },
                        { id: "3", name: "Família" }
                    ]
                }}/>
                <Note data={{
                    title: "Anéis do Poder",
                    text: "O fato de a história do período ser marcada pela ascensão do grande vilão Sauron foi, claro, um grande atrativo para a dupla. “É a história de Sauron, da forja dos anéis e de como ele engana os povos da Terra Média, o que por fim culmina na queda de alguns dos maiores reinos, e na união de todos para derrotá-lo. Como Sauron será retratado, inclusive, é um dos grandes mistérios da série – e McKay guarda bem o segredo. “Tudo o que posso dizer é que Sauron é muito poderoso, um enganador. Quando o nome dele surge, ele significa algo para todo mundo”, afirma.",
                    tags: [
                        { id: "1", name: "Ficção Científica" },
                        { id: "2", name: "Drama" },
                        { id: "3", name: "Família" }
                    ]
                }}/>
                <Note data={{
                    title: "Anéis do Poder",
                    text: "O fato de a história do período ser marcada pela ascensão do grande vilão Sauron foi, claro, um grande atrativo para a dupla. “É a história de Sauron, da forja dos anéis e de como ele engana os povos da Terra Média, o que por fim culmina na queda de alguns dos maiores reinos, e na união de todos para derrotá-lo. Como Sauron será retratado, inclusive, é um dos grandes mistérios da série – e McKay guarda bem o segredo. “Tudo o que posso dizer é que Sauron é muito poderoso, um enganador. Quando o nome dele surge, ele significa algo para todo mundo”, afirma.",
                    tags: [
                        { id: "1", name: "Ficção Científica" },
                        { id: "2", name: "Drama" },
                        { id: "3", name: "Família" }
                    ]
                }}/>
                <Note data={{
                    title: "Anéis do Poder",
                    text: "O fato de a história do período ser marcada pela ascensão do grande vilão Sauron foi, claro, um grande atrativo para a dupla. “É a história de Sauron, da forja dos anéis e de como ele engana os povos da Terra Média, o que por fim culmina na queda de alguns dos maiores reinos, e na união de todos para derrotá-lo. Como Sauron será retratado, inclusive, é um dos grandes mistérios da série – e McKay guarda bem o segredo. “Tudo o que posso dizer é que Sauron é muito poderoso, um enganador. Quando o nome dele surge, ele significa algo para todo mundo”, afirma.",
                    tags: [
                        { id: "1", name: "Ficção Científica" },
                        { id: "2", name: "Drama" },
                        { id: "3", name: "Família" }
                    ]
                }}/>
                

            </Content>


        </Container>
    )
};
