import { blogs } from '../../Data/Content';
import styled from 'styled-components';
const BlogsComponent = () => {
    
const Container = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  margin-top: 5%;
  @media screen and (max-width: 800px){
       margin-top: 40%;
    }
`

const Sec = styled.div`
    width: 100%;
    margin-bottom : 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
const BlogContainer = styled.div`
    flex: 0 1 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5% ;
    margin: 5% 0;
    height: 50%;
    @media screen and (max-width: 800px){
       margin-top: -30%;
       flex: 0 1 40%;
    }
`
const BlogImage = styled.img`
    width: 100%;
    height: 15rem;
    @media screen and (max-width: 800px){
       height : 7.5rem;
    }
`
const ImageContainer = styled.div`
    width: 100%;
`
const ButtonContainer = styled.div`
    height: 10rem;
    margin: 2rem 0;
`
const BlogHeader = styled.h2`
    text-align: left;
    font-size: 35px;
    font-variant: small-caps;
    padding-bottom: 1.5rem;
    line-height: 2rem;
    @media screen and (max-width: 800px){
       font-size: 17.5px;
       line-height: 1rem;
    }
`
const BlogDate = styled.p`
    text-align: center;
    font-size: 15px;
    opacity: 0.5;
    @media screen and (max-width: 800px){
       font-size: 12px;
    }
`
const BlogDesc = styled.p`
    text-align: justify;
    @media screen and (max-width: 800px){
       font-size: 12px;
       text-align: center;
    }
`
const BlogMore = styled.button`
&{
    width: 100px;
    height: 45px;
    color: #fff;
    background-color: #FFA000;
    transition: color 0.3s;
    font-weight:bold;
    cursor: pointer;
    position: relative;
    z-index:1;
    border: none;
}
&:active{
    transform: scale(0.95);
}   
    @media screen and (max-width: 800px){
       width: 80px;
       height: 35px;
       font-size: 10px;
    }  
`
return ( 
        <Container>
           
            <Sec>
                {
                    blogs.map(blog=>{
                        return(
                            <BlogContainer data-aos="fade-up" >
                                <ImageContainer><BlogImage src={blog.img}/></ImageContainer>
                                <BlogDate>{blog.date}</BlogDate>
                                <BlogHeader>{blog.heading}</BlogHeader>
                                <BlogDesc>{blog.desc}</BlogDesc>
                                <ButtonContainer><BlogMore>Read More </BlogMore></ButtonContainer>
                            </BlogContainer>
                        )
                    })
                }
            </Sec>
        </Container>
     );
}
 
export default BlogsComponent;