export default function Navbar(){
    return (
        <>
            <div className="flex w-screen justify-center font-medium text-white ">
                <a href="/home" className="p-8">Home</a>
                <a href="/movies" className="p-8">Movies</a>
                <a href="/series" className="p-8">TV Series</a>
                <a href="/popular" className="p-8">Popular</a>
                <a href="/top" className="p-8">Top Airing</a>
                <a href="/test" className="p-8">Test</a>
            </div>
        </>
    )
}