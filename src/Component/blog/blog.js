import { blogs } from '../../Data/Content';
import styled from 'styled-components';
const BlogsComponent = () => {
    
const Container = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  margin-top: 5%;
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
    padding: 1.5rem ;
    margin: 5rem 0;
    height: 25rem;
`
const BlogImage = styled.img`
    width: 100%;
    height: 15rem;
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
`
const BlogDate = styled.p`
    text-align: center;
    font-size: 15px;
    opacity: 0.5;
`
const BlogDesc = styled.p`
    text-align: justify;
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