import Score from "./Score";

function Student({students}){

    return (
        <div class="student">  
           <h2>{students.name}</h2> 
           <p>{students.bio}</p> 
            {students.scores.map((item)=>(
             <Score studentScore={item}/>
           ))}

           
        </div>
    )
}
export default Student;