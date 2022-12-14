import { Container, Form, Background, CreateAccount } from "./styles";
import { Input } from "../../components/Input";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"


export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>Rocket Movies</h1>
                <p>Aplicação para acompanhar tudo que assistir</p>
                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={ FiMail }
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={ FiLock }
                />

                <Button title="Entrar" />

                <CreateAccount to="/register">
                    Criar conta
                </CreateAccount>

            </Form>
            <Background />
        </Container>
    )
}