export default function Top10({name, poster}){
    return (
        <>
            <div className="flex pt-4 w-80 h-28 border-b-2">
                <img src={poster} alt={name} className="h-20 w-14"/>
                <p>{name}</p>
            </div>
        </>
    )
}