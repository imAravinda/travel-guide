import styled from 'styled-components';
import { Images } from '../../Data/Content';

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
      <Header data-aos="zoom-in">Gallery</Header>
        <Row>
          {
            Images.map(images=>{
              return(
                <Column>
                  <Image src={images.img} data-aos="flip-right" data-aos-duration="2000"/>
                </Column>
              )
            })
          }
      </Row>
    </Container> 
   );
}
 
export default Gallery;