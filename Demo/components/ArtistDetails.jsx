export default function ArtistDetails(props) {
    return (
        <>
            {/* <div className="artistContainer">
                <img className="artistImage" src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Beatles_ad_1965_just_the_beatles_crop.jpg" alt="" />
                <div className="artistDescription">
                    <h2>The Beatles</h2>
                    <p>Country: United Kingdom</p>
                    <p>Years active: 1960-1970</p>
                </div>
            </div> */}
            <div className="artistContainer">
                <img className="artistImage" src={props.url} alt="" />
                <div className="artistDescription">
                    <h2>{props.name}</h2>
                    <p>Country: {props.country}</p>
                    <p>Years active: {props.active}</p>
                </div>
            </div>
        </>
    )
}