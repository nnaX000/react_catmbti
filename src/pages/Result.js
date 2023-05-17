import React from 'react';
import styled from 'styled-components';
import PangImage from '../assets/cat.jpeg';
import Button from 'react-bootstrap/Button';
import  {useSearchParams,useNavigate} from 'react-router-dom'
import {ResultData} from '../assets/data/resultdata.js';

const Result=() =>{
    const navigate=useNavigate();
    const [searchParams] = useSearchParams();
    const mbti=searchParams.get('mbti');
    const [resultData, setResultData] = React.useState({});


    React.useEffect(()=>{
        const result=ResultData.find((s)=>s.best===mbti);
        setResultData(result);
    },[mbti])

    return(
        <Wrapper>
            <Header>예비집사 판별기</Header>
            <Contents>
                <Title>결과보기</Title>
                <LogoImage>
                    <img src={resultData.image} className="rounded-circle" width={350} height={350}></img>
                </LogoImage>
                <Desc>예비 집사님과 찰떡궁합인 고양이는 {resultData.name}입니다.</Desc>
                <Button style={{fontFamily: "Dovemayo_wild"}} onClick={()=>navigate("/")}>테스트 다시하기</Button>
            </Contents>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height:100vh;
    width:100%;
`
const Header =styled.div`
    font-size:40pt;
    display: flex;
    justify-content:center;
    align-items:center;
    font-family:"Dovemayo_wild";
`

const Contents=styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    font-family:"Dovemayo_wild";
`

const  Title=styled.div`
    font-size:30pt;
    margin-top:40px;
    font-family:"Dovemayo_wild";
`

const LogoImage=styled.div`
    margin-top:10px;
`

const Desc=styled.div`
    font-size:20pt;
    margin-top:20px;
    font-family:"Dovemayo_wild";
`

export default Result;