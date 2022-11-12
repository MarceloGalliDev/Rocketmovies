import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Container, Form } from "./styles";
import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack"

export function New() {
    return(
        <Container>
            <Header />
            <main>
                <Form>
                    <ButtonBack
                        className="buttonBack" 
                        title="Voltar"
                        to="/"
                    />
                    <header>
                        <h1>Novo Filme</h1>
                    </header>

                    <div>
                        <Input
                            placeholder="Título"
                        />
                        <Input
                            placeholder="Sua nota (de 0 a 5)"
                        />
                    </div>

                    <Textarea placeholder="Observação"/>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="React"/>
                            <NoteItem isNew placeholder="Novo marcador"/>
                        </div>
                    </Section>
                    <div className="boxButton">
                        <Button 
                            title="Excluir filme"
                            isDelete
                        />
                        <Button title="Salvar alterações"/>
                    </div>
                </Form>
            </main>
        </Container>
    )
}