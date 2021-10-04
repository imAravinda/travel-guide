import styled from 'styled-components';
const CoverContent = ({Home}) => {
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
        border-radius: 10px;
        color:#fff;
        background: #FFA000;
        border: none;
        margin-top: 8%;
        cursor: pointer;
    }
    &:active{
        transform: scale(0.95);
    }
    `
    const content = [
        {
            header: "Wellcome to Travel Guide",
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores quam libero consectetur eum incidunt esse, tempora fugit architecto obcaecati hic temporibus voluptates blanditiis ex. Lorem ipsum dolor sit amet consectetur adipisicing elit.  Omnis, vitae suscipit. Provident, natus similique. Explicabo nam quia hic doloremque incidunt atque ab suscipit aspernatur fuga dicta modi sequi placeat, sunt facere consequatur corporis, harum sed esse odio ipsum? Ab nesciunt ad, similique explicabo voluptate alias."
        },
        {
            header : "Choose the Destination",
            desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolores quam libero consectetur eum incidunt esse, tempora fugit architecto obcaecati hic temporibus voluptates blanditiis ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae suscipit. Provident, natus similique. Explicabo nam quia hic doloremque incidunt atque ab suscipit aspernatur fuga dicta modi sequi placeat, sunt facere consequatur corporis, harum sed esse odio ipsum? Ab nesciunt ad, similique explicabo voluptate alias."
        }
    ];
    return ( 
            <Sec>
                <Divsec>   
                    <H1>{content[0].header}</H1>
                    <HR />
                </Divsec>
                <Divsec>
                    <P>{content[0].desc}</P>
                </Divsec>
                <Divsec>
                    <Button>Book Now</Button>
                </Divsec>
            </Sec>
     );
}
 
export default CoverContent;