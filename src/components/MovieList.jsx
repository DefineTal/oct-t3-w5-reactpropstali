


let favouriteMovies = [
    "Aliens",
    "Dune",
    "Hot Fuzz",
    "Anchorman",
    "Lock Stock and 2 Smoking Barrels",
    "Shrek",
    "Pokemon",
    "Blazing Saddles",
    "Snatch",
    "Shrek 2",
    "The good, the bad, and the ugly",
    "Robocop",
    "Bladerunner",
    "Lord of the Rings 1-3"
];


export default function Movielist(){

    return ( 
    <section>
        {favouriteMovies.map((movie, index) => {
            return <MovieCard key={inedx} movieName={movie} />
        })}
    </section>

    );
}