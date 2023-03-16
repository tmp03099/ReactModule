import CardImage from './CardImage';
import CardBody from './CardBody';

function Card(props){
    return(
        <div className="card" style={{ width: '18rem' }}>
            <CardImage img={props.img}/>
            <CardBody {...props}/>
        </div>
    )

}

export default Card;