import Cover from "../Component/Cover";
import StroryIntro from "../Component/StoryIntro";
import BlogsComponent from "../Component/blog";
const Blogs = (props) => {
    return ( 
        <div>
            <Cover Cover1text = {props.Covertext}/>
            <StroryIntro/>
            <BlogsComponent/>
        </div>
     );
}
 
export default Blogs;