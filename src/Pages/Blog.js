import Cover from "../Component/Cover";
import StroryIntro from "../Component/StoryIntro";
import BlogsComponent from "../Component/blog";
// import Testimonials from "../Component/userReview&Q&A";
const Blogs = (props) => {
    return ( 
        <div>
            <Cover Cover1text = {props.Covertext}/>
            <StroryIntro/>
            <BlogsComponent/>
            {/* <Testimonials/> */}
        </div>
     );
}
 
export default Blogs;