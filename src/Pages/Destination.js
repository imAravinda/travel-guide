import Cover from "../Component/Cover";
import Destinations from "../Component/Destinations";
import StroryIntro from "../Component/StoryIntro"
import Testimonials from "../Component/userReview&Q&A";
const Destination = (props) => {
    return ( 
        <div>
             <Cover Cover1text = {props.Covertext}/>
             <StroryIntro/>
             <Destinations />
             <Testimonials/>
        </div>
     );
}
 
export default Destination;