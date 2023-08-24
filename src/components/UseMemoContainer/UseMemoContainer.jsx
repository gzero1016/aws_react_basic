import React, { useCallback, useMemo } from 'react';

function getStudentYear(studentYear) {
    console.log("getStudentYear");
    
    switch(studentYear) {
        case "1":
            return "1학년"
        case "2":
            return "2학년"
        case "3":
            return "3학년"
        case "4":
            return "4학년"
        case "5":
            return "5학년"
        default:
            return "오류"
    }
}

function getHobbyKor(hobby) {
    console.log("getHobbyKor");

    switch(hobby) {
        case "soccer":
            return "축구"
        case "basketball":
            return "농구"
        case "baseball":
            return "야구"
        case "golf":
            return "골프"
        default:
            return "오류"
    }
}

function UseMemoContainer({ studentYear, hobby }) {
    // useMemo: [] 안에있는 함수가 변하면 실행시켜라 (필요할때만 호출해서 재사용하기 떄문에 최적화)
    // useCallback: 함수를 통으로 리턴
    const transStudentYear = useMemo(() => getStudentYear(studentYear), [studentYear]);
    const hobbyKor = useMemo(() => getHobbyKor(hobby), [hobby]);

    return (
        <>
            <div> 나의 학년은 { transStudentYear } 이고 </div>
            <div> 취미는 { hobbyKor }입니다. </div>
        </>
    );
}

export default UseMemoContainer;