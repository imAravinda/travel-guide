import styled from 'styled-components';

const CoverContent = (props) => {
        const Sec = styled.div`
        position: absolute;
        top: 30%;
        z-index: 2;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    `
    const Divsec = styled.div`
        flex-basis: 80%;
        margin: 0 0px 20px 35px ;
        
    `
    const H1 = styled.h1`
        font-size: 75px;
        color: #FFF8E1;
        text-align: left;
    `
    const HR = styled.hr`
        width: 10%;
        height: 3px;
        background: #FFA000;
        border: none;
        margin-bottom: 10px;
    `
    const P = styled.p`
        text-align:justify;
        color: #FFF8E1;
    `
    const Button = styled.button`
    &{
        width: 85px;
        height: 40px;
        color:#fff;
        background: #FFA000;
        border: none;
        margin-top: 8%;
        cursor: pointer;
        position: relative;
        right: 1.5%;
    }
    &:active{
        transform: scale(0.95);
    }
    `
    return ( 
            <Sec>
                <Divsec data-aos={"fade-right"}>   
                    <H1 >{props.text.header}</H1>
                    <HR />
                </Divsec>
                <Divsec data-aos={"fade-right"}>
                    <P>{props.text.desc}</P>
                </Divsec>
                <Divsec data-aos={"fade-right"}>
                    <Button>Book Now</Button>
                </Divsec>
            </Sec>
     );
}
 
export default CoverContent;