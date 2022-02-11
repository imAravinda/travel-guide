import Cover from "../Component/Cover";
import Gallery from "../Component/Gallery";
const Destination = (props) => {
    return ( 
        <div>
             <Cover Cover1text = {props.Covertext}/>
             <Gallery/>
        </div>
     );
}
 
export default Destination;