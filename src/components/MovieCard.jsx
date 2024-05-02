

export default function MovieCard (props){

    return(
        <div key={props.index}>
            <h1>{props.movieName}</h1>
        </div>
    )
}