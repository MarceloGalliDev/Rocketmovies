import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

export function ButtonBack({ title, ...rest }) {
    return (
        <Container {...rest}>
            <FiArrowLeft size={20}/>
            { title }
        </Container>
    )
};
