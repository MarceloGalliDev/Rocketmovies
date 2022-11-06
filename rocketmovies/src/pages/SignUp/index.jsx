import { Container, Form, Background, BackLogin } from "./styles";
import { Input } from "../../components/Input";
import { FiLogIn, FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom";


export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>Rocket Movies</h1>
                <p>Aplicação para acompanhar tudo que assistir</p>
                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={ FiUser }
                />

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

                <Button title="Cadastrar" />

                <BackLogin>
                    <FiArrowLeft size={24}/>
                    <Link to="/">Voltar para o login</Link>
                </BackLogin>

            </Form>
            <Background />
        </Container>
    )
}