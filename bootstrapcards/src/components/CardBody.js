import Button from './Button'

const CardBody = ({title, text, url}) => { //use key name as input parameter that includes all the prop key names
  return (
    <div className="card-body">
      {/* only {title} b/c passing key:value */}
        <h5 className="card-title">{title}</h5> 
        <p className="card-text">{text}</p>
        <Button url={url}/>
      </div>
  );
};

//export the component
export default CardBody