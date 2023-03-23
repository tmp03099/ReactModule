import Disney from '../components/Disney';
function Home({character}){
    return (
        <div>
            {character.map((item, idx)=>(
            <Disney character={item} key={idx}/>
            ))}
        </div>
    )
}
export default Home;