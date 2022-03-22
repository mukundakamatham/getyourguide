import "./homemail.scss";
import { TextField,Button } from "@mui/material";
export const HomeMail=()=>{
    return (
        <>
        <div id="homeMail">
            <div>
<img src="https://cdn.getyourguide.com/tf/assets/static/newsletter-signup/newsletter-background.jpg" alt=""/>
            </div>
            <div>
<h1>Your travel journey starts here</h1>
<p>Sign up now for travel tips, personalized itineraries, and vacation inspiration straight to your inbox.
    </p>
   <div className="homeMail_text">
       <div className="homeMail_textf"> <TextField id="outlined-basic" fullWidth  label="Your email" variant="outlined" />
   </div>
    <div className="homeMail_textb"><Button variant="contained" size="medium">
          Sign up
        </Button></div>
        </div> 
        </div>
        </div>
        <p style={{marginTop:"5px"}}>By signing up, you agree to receive promotional emails. You can unsubscribe at any time. For more information, read our <span style={{color: "#0071eb"}}> Privacy statement </span>.</p>
   </>
    )
}