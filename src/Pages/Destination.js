import Cover from "../Component/Cover/Cover";
import Destinations from "../Component/Destination/Destinations";
import StroryIntro from "../Component/StoryIntro/StoryIntro"
// import Testimonials from "../Component/userReview&Q&A";
const Destination = (props) => {
    return ( 
        <div>
             <Cover Cover1text = {props.Covertext}/>
             <StroryIntro/>
             <Destinations />
             {/* <Testimonials/> */}
        </div>
     );
}
 
export default Destination;