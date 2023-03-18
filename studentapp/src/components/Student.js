import Score from "./Score";

function Student({students}){

    return (
        <div className="student">  
           <h2>{students.name}</h2> 
           <p>{students.bio}</p> 
            {students.scores.map((item, idx)=>(
             <Score studentScore={item} key={idx}/>
           ))}

           
        </div>
    )
}
export default Student;