import Cover from "../Component/Cover";
import StroryIntro from "../Component/StoryIntro";

const Blog = (props) => {
    return ( 
        <div>
            <Cover Cover1text = {props.Covertext}/>
            <StroryIntro/>
        </div>
     );
}
 
export default Blog;