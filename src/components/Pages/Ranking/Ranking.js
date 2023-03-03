import short from "../../../Images/short.png"
import ranking from "../../../Images/ranking.png"
import styled from "styled-components";
import { API } from "../../API_URL";
export default function Ranking() {
    console.log(API)
    return(<>
    <Content>
    <TopBar>
        <h1>Shortly</h1>
        <img src={short} alt="short"></img>
    </TopBar>
    <LogoRank>
        <img src={ranking} alt="short"></img>
        <h2>Ranking</h2>
    </LogoRank>
    <TableRank>
        <List>
            <li>1. fulana - 32 link - 1.2323.323 vizualizações</li>
            <li>2. fulana - 32 link - 1.2323.323 vizualizações</li>
            <li>3. fulana - 32 link - 1.2323.323 vizualizações</li>
            <li>4. fulana - 32 link - 1.2323.323 vizualizações</li>
            <li>5. fulana - 32 link - 1.2323.323 vizualizações</li>
            <li>6. fulana - 32 link - 1.2323.323 vizualizações</li>
            <li>7. fulana - 32 link - 1.2323.323 vizualizações</li>
            <li>8. fulana - 32 link - 1.2323.323 vizualizações</li>
            <li>9. fulana - 32 link - 1.2323.323 vizualizações</li>
            <li>10. fulana - 32 link - 1.2323.323 vizualizações</li>          
        </List>
    </TableRank>

    <Redirect>
        <h2>Crie sua conta para usar nosso serviço!</h2>
    </Redirect>
    </Content>
    </>)
}
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const TopBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 87px;
    img{
        width: 102px;
        height: 97px;
    }
`
const LogoRank = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 57px;
    
    img{
        width: 56px;
        height: 50px;
    }
`
const TableRank = styled.div`
    width: 1017px;
    height: 241px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;
    overflow: auto;
    flex-wrap: wrap;
`
const List = styled.ul` 
    padding: 0 40px ;
    li{
        padding: 13px;
    }
`
const Redirect = styled.div`
    margin-top: 82px;

`