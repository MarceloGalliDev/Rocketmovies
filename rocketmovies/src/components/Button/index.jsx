import { Container } from "./styled";

export function Button({ title, loading = false, isDelete, ...rest }) {
    return (
        <Container
            isDelete={isDelete}
            type= "button"
            disabled={loading}
            {...rest}
        >
            { loading ? 'Carregando...' : title }
        </Container>
    )
}