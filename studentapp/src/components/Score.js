function Score({studentScore}){
    return (
        <div class="score">
            <h4>Date: {studentScore.date}</h4>
            <p>Score: {studentScore.score}</p>
        </div>
    )
}
export default Score;