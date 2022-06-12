import styled from "styled-components";
const StroryIntro = () => {
    const Div = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        background-color: #FFF8E1;
        padding: 5% 0;
    `
    const H1 = styled.h1`
        text-align: center;
        font-size: 40px;
        color: #0e0900;
        font-variant: small-caps;
        font-weight: bold;
        position: relative;
        border-bottom: 3px solid #FFA000;
        display: inline;
    `
    const P = styled.p`
        text-align:center;
        color: #0e0900;
    `
    const Button = styled.button`
    &{
        width: 100px;
        height: 45px;
        color: #0e0900;
        background-color: transparent;
        transition: color 0.3s;
        font-weight:bold;
        cursor: pointer;
        position: relative;
        z-index:1;
        border: 2px solid #FFA000;
    }
    &:hover{
        color: #ffffff;
    }   
    &:active{
        transform: scale(0.95);
    }     
    `
    const Span = styled.span`
        width: 0;
        height: 100%;
        position: absolute;
        background: #FFA000;
        opacity: 1;
        top: 0;
        left: 0;
        right: 0;
        z-index: -1;
        transition: 0.5s;
    `
    const Sec = styled.div`
        flex-basis: 60%;
        padding:20px
    `
    return ( 
        <Div>
            <Sec data-aos="zoom-in">
                <H1> This Is Our Story</H1>
            </Sec>
            <Sec data-aos="fade-up">
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Pariatur quidem provident suscipit soluta, maiores ut explicabo voluptatibus aliquid fuga quas consequatur aperiam quod animi. 
                    Odio consequatur accusamus et amet iste. Iste impedit dicta ex aperiam.</P>
            </Sec>
            <Sec data-aos="fade-up">
                <Button><Span></Span>Read More</Button>
            </Sec>
        </Div>
     );
}
 
export default StroryIntro;