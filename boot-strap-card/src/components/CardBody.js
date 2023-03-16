import CardImage from './CardImage';
import Button from './Button';

function CardBody(props){
    return(
        <div className="card-body" style={{ width: '18rem' }}>
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <Button url={props.url}/>
        </div>
    )

}

export default CardBody;