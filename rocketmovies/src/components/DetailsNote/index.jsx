import { Container, Author } from "./styles";
import { Tag } from "../Tag";
import { FiStar, FiClock } from "react-icons/fi";
import { Link } from "react-router-dom";

export function DetailsNote({ data, onClick, ...rest }) {
    return (
        <Container {...rest}>
            <div>
                <h1>{data.title}</h1>
                
                <button
                    type="button"
                    onClick={onClick}
                >
                    <FiStar size={20} className="button-qualified" />
                    <FiStar size={20} className="button-qualified" />
                    <FiStar size={20} className="button-qualified" />
                    <FiStar size={20} className="button-qualified" />
                    <FiStar size={20}/>
                </button>
            </div>
            
            <Author to="/profile">
                <div>
                    <img 
                        src="https://github.com/MarceloGalliDev.png"
                        alt="Foto de perfil do usuário"
                    />
                    <strong>Por {data.author}</strong>
                    <FiClock size={20}/>
                    <span>06/11/22 ás 23:40</span>
                </div>
            </Author>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map( tag => <Tag key={ tag.id } title={ tag.name }/>)
                    }
                </footer>
            }

            <p>{data.text}</p>

        </Container>
    );
};