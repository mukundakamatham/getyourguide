import { data } from "../../../components/homepage/data"
import "./homeloca.scss"
export const HomeLoc=()=>{
const data=[{"img":"https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt97d281f70edf02e3/6225cbf62f117523f14ad6e4/NYC_Day-01_(1)_copy.png","title":"48 Hours in New York"},
{"img":"https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt2d5c8123269fa1f6/6225cbed4142c3684bf52689/Chicago-Maps-Day_1_(1)_copy.png","title":"48 Hours in Los Chicago"},
{"img":"https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt369aa58acf07364a/62285e9feda9a1043584a62e/Vegas_Maps-Day_01_1x_copy.png","title":"48 Hours in Los Vegas"}]
    return (
        <div id="homelocs">
            {data.map((e)=>
            <div id="homeloc">
                <div><img src={e.img} alt=""/></div>
                <button >Itinerary</button>
                <p>{e.title}</p>

                </div>
            )}
        </div>
    )
}