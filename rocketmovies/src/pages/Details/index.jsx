import { ButtonBack } from "../../components/ButtonBack"
import { Header } from "../../components/Header"
import { Container, Content } from "./styles"
import { DetailsNote } from "../../components/DetailsNote";

export function Details() {
    return (
        <Container>

            <Header />

            <ButtonBack
                className="buttonBack" 
                title="Voltar"
                to="/"
            />

            <Content>

                <DetailsNote data={{
                    title: "Anéis do Poder",
                    author: "Marcelo L Galli",
                    text: "Quando O Senhor dos Anéis: Os Anéis de Poder estrear no Prime Video, às 22h da próxima quinta-feira (1º), uma extensa e importante porção do mundo criado por J.R.R. Tolkien chegará às telas pela primeira vez. Trata-se da Segunda Era, que marca a queda de Númenor e a forja dos anéis. O universo criado pelo professor e escritor nascido na África do Sul é dos mais complexos e detalhados de que se tem registro na literatura de alta fantasia, e inspirou sagas que vão de 'Star Wars' às 'Crônicas de Gelo e Fogo'. O fato de a história do período ser marcada pela ascensão do grande vilão Sauron foi, claro, um grande atrativo para a dupla. “É a história de Sauron, da forja dos anéis e de como ele engana os povos da Terra Média, o que por fim culmina na queda de alguns dos maiores reinos, e na união de todos para derrotá-lo. Como Sauron será retratado, inclusive, é um dos grandes mistérios da série – e McKay guarda bem o segredo. “Tudo o que posso dizer é que Sauron é muito poderoso, um enganador. Quando o nome dele surge, ele significa algo para todo mundo”, afirma."
                    ,
                    tags: [
                        { id: "1", name: "Ficção Científica" },
                        { id: "2", name: "Drama" },
                        { id: "3", name: "Família" }
                    ]
                }}/>

            </Content>
        </Container>
    )
}

//children está pegando tudo que está dentro do section e repassando para a pagina