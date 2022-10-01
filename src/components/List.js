import React from "react";

const List = ({arr, setArr, index, title="제목", content="내용", done=false}) => {
    const ListStyle = {
        margin:"12px", 
        alignItems:"center", 
        borderStyle: 'solid', 
        borderWidth:4, 
        borderColor: "green", 
        borderRadius: "10px", 
        height:"200px", 
        width:"344px",
        padding: "12px 12px 12px 12px"
    }
    const buttonStyle = {
        display: "block",
        height: "40px",
        width : "135px",
        margin:"5px auto 5px auto",
        justifyContent: "center",
        border: "0",
        borderRadius: "15px",
        backgroundColor: "aquamarine",
    }
    const toggleClick = (ev) => {setArr(arr.map((prop,ind)=> {if (ind ===index) {prop.done = !prop.done} return prop}))}
    const clickDelete = () => {setArr(arr.filter((prop,ind)=> ind !==index ))}
    return (
        <div style={ListStyle}>
            <div style={{height:"130px"}}>
                <h2>{title}</h2>
                <p style={{margin:"8px 0 5px 0",wordBreak:"break-all"}}>{content}</p>
            </div>
            <div style={{height:"50px", display:"flex"}}>
                <button onClick={clickDelete} style={buttonStyle}>삭제하기</button>
                {/* 완료 버튼을 삼항연산자 돌려줄꺼임 done을 트루 퍼스 판단해서 워킹 or 돈으로 */}
                { done ? <button onClick={toggleClick} style={buttonStyle}>취소</button> : <button onClick={toggleClick} style={buttonStyle}>완료</button>}
            </div>
        </div>
    )
}

export default List;