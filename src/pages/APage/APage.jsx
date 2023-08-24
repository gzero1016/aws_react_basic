import React, { useEffect, useState } from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';

function APage(props) {
    const menus = [
        {
            id: 1,
            name: "나의 프로젝트"
        },
        {
            id: 2,
            name: "나에게 공유된 프로젝트"
        },
    ];

    const [ result, setResult ] = useState(0);

    const [ inputValueObjs, setInputValueObjs ] = useState({
        firstNum: 0,
        secondNum: 0
    });

    const [ name, setName ] = useState("");

    // useEffect: 위 상태가 state 여야지 동작함
    // 사라지는거 언마운트 리턴사용
    useEffect(
        () => {
            console.log("useEffect 실행");
            calc(inputValueObjs.firstNum, inputValueObjs.secondNum);
            // calc(10, 20);
            return () => {
                console.log("언마운트");
            };
        }, []     // [의존대상]: inputValueObjs의 상태변화만 useEffect 하겠다. (아무것도 적지않을때는 All이다.)
    );

    const calc = (x, y) => {
        setResult(x + y);
    }

    const handleInputChange = (e) => {
        setInputValueObjs({
            ...inputValueObjs,
            [e.target.name]: parseInt(e.target.value)
        });
    }

    const handleNameInputChange = (e) => {
        setName(e.target.value);
    }

    return (
        <MainLayout Title={"A페이지"} menus={menus}>
            <div>{ result }</div>
            <div>{ name }</div>
            <div>
                <input type="text" name='firstNum' onChange={handleInputChange} placeholder='1번 값'/>
                <input type="text" name='secondNum' onChange={handleInputChange} placeholder='2번 값'/>
                <input type="text" name='name' onChange={handleNameInputChange} placeholder='이름'/>
            </div>
        </MainLayout>
    );
}

export default APage;