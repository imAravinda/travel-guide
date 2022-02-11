import styled from 'styled-components';
import img1 from './Images/ali-maah-zyOeEm4NsPM-unsplash.jpg';
import img2 from './Images/iswanto-arif-u0lAovoUsaU-unsplash.jpg';
import img3 from './Images/kal-visuals-Bt_J-VvC9-A-unsplash.jpg';
import img4 from './Images/klickors-moe-82c8EfTvixk-unsplash.jpg';
import img5 from './Images/markus-winkler-byZq8FXicQs-unsplash.jpg';
import img6 from './Images/mike-swigunski-k9Zeq6EH_bk-unsplash.jpg';
// import img7 from './Images/mitchell-orr-rcG2VqAKJdA-unsplash.jpg';
const Gallery = () => {

    const GallaryContainer =styled.div`
        width: 100%;
        height: auto;
        margin-bottom: 5% ;
        
    `
    const GallaryHeader =styled.div`
        text-align: center;
        font-size: 40px;
        color: #0e0900;
        font-variant: small-caps;
        font-weight: bold;
        position: relative;
        border-bottom: 3px solid #FFA000;
        display: inline;
    `
    const GallaryRows =styled.div`
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        background:#FFF8E1;
        margin:0 55px;
        padding: 5% 0;
        border-radius:10px;
        box-shadow: 0px 10px 20px 2px #0000005d;
        margin-top: 3%;
    `
    const GallaryFirstRow =styled.div`
        display: flex;
        align-items: center;
        margin-bottom:10px;
    `
    const GallatyImgContainer =styled.div`
        width: 33%;
    `
    const GallaryImg =styled.img`
        &{  width: 350px;
            height: 350px;
            //padding: 10px;
            margin: 10px 40px;
            border-radius:40px;
            transition: 0.3s;
            position: relative;
        }
        &::before{
                position: absolute;
                height: 100%;
                z-index:2;
                content: '';
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
                background-color: #339BFF;
            }
        &:hover{
            transform: translateY(-10px);
            cursor: pointer;
        }
    `
    return (  
        <GallaryContainer>
        <GallaryHeader>Gallery</GallaryHeader>
      <GallaryRows>
        <GallaryFirstRow>
          <GallatyImgContainer >
            <GallaryImg src={img1} />
          </GallatyImgContainer>
          <GallatyImgContainer>
            <GallaryImg src={img2} />
          </GallatyImgContainer>
          <GallatyImgContainer>
            <GallaryImg src={img3} />
          </GallatyImgContainer>
         
        </GallaryFirstRow>

        <GallaryFirstRow>
          <GallatyImgContainer>
            <GallaryImg src={img4} />
          </GallatyImgContainer>
          <GallatyImgContainer>
            <GallaryImg src={img5} />
          </GallatyImgContainer>
          <GallatyImgContainer>
            <GallaryImg src={img6} />
          </GallatyImgContainer>
          
        </GallaryFirstRow>
      </GallaryRows>
    </GallaryContainer>
    );
}
 
export default Gallery;