import "./homeplaces.scss"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.7,
      slidesToSlide: 4 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
export const Homeplaces=()=>{
const datas=[{img:"https://cdn.getyourguide.com/img/location/60096cd94f74e.jpeg/87.webp",head:"Niagara falls",button:"37 Tours and activities"},
{img:"https://cdn.getyourguide.com/img/location/60096cee5881e.jpeg/87.webp",head:"san fransisco",button:"37 Tours and activities"},
{img:"https://cdn.getyourguide.com/img/location/5d399514af74d.jpeg/87.webp",head:"orangested",button:"57 Tours and activities"},
{img:"https://cdn.getyourguide.com/img/location/60096e254549c.jpeg/87.webp",head:"los vegas",button:"78 Tours and activities"},
{img:"https://cdn.getyourguide.com/img/location/60096f9321c31.jpeg/87.webp",head:"tamerind",button:"78 Tours and activities"},
{img:"https://cdn.getyourguide.com/img/location/60096cee5881e.jpeg/87.webp",head:"san fransisco",button:"37 Tours and activities"},
{img:"https://cdn.getyourguide.com/img/location/5d399514af74d.jpeg/87.webp",head:"orangested",button:"57 Tours and activities"},
{img:"https://cdn.getyourguide.com/img/location/60096e254549c.jpeg/87.webp",head:"los vegas",button:"78 Tours and activities"},
{img:"https://cdn.getyourguide.com/img/location/60096f9321c31.jpeg/87.webp",head:"tamerind",button:"78 Tours and activities"},





]
    return(
<Carousel
  swipeable={true}
  draggable={true}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  
  autoPlaySpeed={4000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
  
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
{ datas.map((data)=>(<div  className="homeplaces">
        <img src={data.img} alt=""/>
<div className="homeplaces_in"><h1>{data.head}</h1>
{data.button?<button>{data.button}</button>:null}
</div> 
        </div>))}
  
</Carousel>)

       
   
}