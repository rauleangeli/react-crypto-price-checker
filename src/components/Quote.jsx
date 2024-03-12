import styled from "@emotion/styled"

const ContainerResult = styled.div`
    color: #fff;
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Image = styled.img`
    display: block;
    width: 150px;
    width: 120px;

`

const Text = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Price = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`



const Quote = ({ quote }) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = quote

    return (
        <ContainerResult>
            <Image
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="crypto image"
            />
            <div>
                <Price>The price is: <span>{PRICE}</span></Price>
                <Text>The highest price of the day: <span>{HIGHDAY}</span></Text>
                <Text>The lowest price of the day: <span>{LOWDAY}</span></Text>
                <Text>Change in the last 24 hours: <span>{CHANGEPCT24HOUR}</span></Text>
                <Text>Last update: <span>{LASTUPDATE}</span></Text>
            </div>
        </ContainerResult>
    )
}

export default Quote