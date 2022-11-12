import { Container } from "./styles";
import { Tag } from "../Tag";
import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Note({ data, onClick, ...rest }) {
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>
            <button
                type="button"
                onClick={onClick}
            >
                <FiStar size={12} className="button-qualified" />
                <FiStar size={12} className="button-qualified" />
                <FiStar size={12} className="button-qualified" />
                <FiStar size={12} className="button-qualified" />
                <FiStar size={12}/>
            </button>

            <Link 
                className="button-resume"
                to="/details/1"
            >
                <p>{data.text}</p>
            </Link>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map( tag => <Tag key={ tag.id } title={ tag.name }/>)
                    }
                </footer>
            }
        </Container>
    );
};