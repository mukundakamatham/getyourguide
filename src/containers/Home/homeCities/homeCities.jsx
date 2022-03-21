import "./homeCities.scss";

export const HomeCities=()=>{
const data=[{
    "img":"https://cdn.getyourguide.com/img/location/5ffeb528d3d6f.jpeg/86.jpg",
    "title":"New York"
},{
    "img":"https://cdn.getyourguide.com/img/location/5ffeb3053cf34.jpeg/86.jpg",
    "title":"Chicago"
},{
    "img":"https://cdn.getyourguide.com/img/location/5ffeb49109bf0.jpeg/86.jpg",
    "title":"Los Vegas"
},{
    "img":"https://cdn.getyourguide.com/img/location/53341bc660f91.jpeg/86.jpg",
    "title":"New Orlands"
},{
    "img":"https://cdn.getyourguide.com/img/location/545b66084d2fb.jpeg/86.jpg",
    "title":"Atlanta"
},{
    "img":"https://cdn.getyourguide.com/img/location/5ffeb3fbe8e4d.jpeg/86.jpg",
    "title":"San Fransisco"
}];
return (
    <div className="homeCities">
        {data.map((e)=>
            <div id="cit"><img src={e.img} alt=""/><p>{e.title}</p></div>
        )}
    </div>
)
}