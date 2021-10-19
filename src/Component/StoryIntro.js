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
    &{
        text-align: center;
        font-size: 40px;
        color: #0e0900;
        font-variant: small-caps;
        font-weight: bold;
        position: relative;
    }
    &::after{
        content: 'This Is Our Story';
        opacity: 0.5;
        position: absolute;
        left: 34.98%;
        top: -1.5px;
    }
        
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
        border-color: #FFA000;
        background-color: transparent;
        transition: 0.5s;
        font-weight:bold;
        cursor: pointer;
    }
    &:hover{
        background-color: #FFA000;
        color: #ffffff;
    }        
    `
    const Sec = styled.div`
        flex-basis: 60%;
        padding:20px
    `
    const HR = styled.hr`
        height: 3px;
        background: #FFA000;
        border: none;
        margin-top: 10px;
    `
    return ( 
        <Div>
            <Sec>
                <H1>This Is Our Story</H1>
                <HR />
            </Sec>
            <Sec>
                <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Pariatur quidem provident suscipit soluta, maiores ut explicabo voluptatibus aliquid fuga quas consequatur aperiam quod animi. 
                    Odio consequatur accusamus et amet iste. Iste impedit dicta ex aperiam.</P>
            </Sec>
            <Sec>
                <Button>Read More</Button>
            </Sec>
        </Div>
     );
}
 
export default StroryIntro;