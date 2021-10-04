import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
const Cards = () => {
    return ( 
        <div>
            <OwlCarousel>
                <Slider>
                    <img src={img1} alt="" />
                    <p></p>
                </Slider>
                <Slider><img src={img2} alt="" /></Slider>
                <Slider><img src={img3} alt="" /></Slider>
                <Slider><img src={img4} alt="" /></Slider>
            </OwlCarousel>
        </div>
     );
}
 
export default Cards;