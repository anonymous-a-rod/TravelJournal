const Card = (props) => {
    console.log(props)
    return ( 
        <div className="card-container">
            <div className="card">
                <img src={props.img} alt="" className="card-img"/>
                <div className="container">
                    <img src="./assets/location.png" alt="location" className="location-icon"/>
                    <h4 className="location">{props.country.toUpperCase()}</h4>
                    <a 
                        href={props.googleHref} 
                        className="google"
                        target="_blank"
                        rel="noreferrer"
                    >View on Google Maps</a>
                    <h1 className="title">{props.title}</h1>
                    <p className="date">{props.date}</p>
                    <p className="description">{props.description}</p>
                    
                </div>
            </div>
            {props.last && <hr />}
            
        </div>
     );
}
 
export default Card;
