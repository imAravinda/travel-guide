import styled from 'styled-components';
import img1 from './Images/ali-maah-zyOeEm4NsPM-unsplash.jpg';
import img2 from './Images/iswanto-arif-u0lAovoUsaU-unsplash.jpg';
import img3 from './Images/kal-visuals-Bt_J-VvC9-A-unsplash.jpg';
import img4 from './Images/klickors-moe-82c8EfTvixk-unsplash.jpg';
import img5 from './Images/markus-winkler-byZq8FXicQs-unsplash.jpg';
import img6 from './Images/mike-swigunski-k9Zeq6EH_bk-unsplash.jpg';
import img7 from './Images/daniele-franchi-S9LN3vb47gw-unsplash.jpg';
import img8 from './Images/jess-snoek-rDud6SN-ZVo-unsplash.jpg';
import img9 from './Images/mitchell-orr-rcG2VqAKJdA-unsplash.jpg';
import img10 from './Images/ludovico-lovisetto-t-BU61kt6Cw-unsplash.jpg';
import img11 from './Images/mateus-pontes-x2TDul-JMl8-unsplash.jpg';
import img12 from './Images/max-vertsanov-Sr5sVt9UG4Q-unsplash.jpg';
import img13 from './Images/ludovico-lovisetto-t-BU61kt6Cw-unsplash.jpg';
import img14 from './Images/mateus-pontes-x2TDul-JMl8-unsplash.jpg';
import img15 from './Images/max-vertsanov-Sr5sVt9UG4Q-unsplash.jpg';
const Container = styled.div`
  padding: 5%;
`
const Header = styled.h1`
  text-align: center;
  font-size: 40px;
  color: #0e0900;
  font-variant: small-caps;
  font-weight: bold;
  position: relative;
  left: 0;
  margin-bottom: 40px;
  border-bottom: 3px solid #FFA000;
  display: inline;
`
const Row = styled.div`
  display: -ms-flexbox; 
  display: flex;
  -ms-flex-wrap: wrap; 
  flex-wrap: wrap;
  padding: 0 4px;
  margin-top: 2%;
`
const Column = styled.div`
  -ms-flex: 25%; /* IE10 */
  flex: 25%;
  max-width: 50%;
  padding: 0 4px;
`
const Image = styled.img`
  &{  margin-top: 8px;
      vertical-align: middle;
      width: 100%;
      transition: 0.5s ease-out;
  }
  &:hover{
    cursor: pointer;
    transform: scaleX(0.95);
  }
`

const Gallery = () => {
  return (
    <Container>
      <Header>Gallery</Header>
        <Row>
        <Column>
          <Image src = {img1}/>
          <Image src = {img2}/>
          <Image src = {img3}/>
          <Image src = {img4}/>
          <Image src = {img5}/>
        </Column>
        <Column>
          <Image src = {img6}/>
          <Image src = {img7}/>
          <Image src = {img8}/>
          <Image src = {img9}/>
          <Image src = {img10}/>
        </Column>
        <Column>
          <Image src = {img11}/>
          <Image src = {img12}/>
          <Image src = {img13}/>
          <Image src = {img14}/>
          <Image src = {img15}/>
        </Column>
      </Row>
    </Container> 
   );
}
 
export default Gallery;