import React, { useState } from "react"
import styled from "styled-components"
const Button = styled.button`
color: white;
border: none;
border-radius: 5px;
padding: 0px 15px;
height: 100%;
background-color: #2f69ff;
`
const Btn_checked = styled.span`
display:flex;
align-items: center;
justify-content: center;
  padding: 0px 7px;
  font-size: 16px;
  background: ${(props) => props.currentPage === props.classValue ? "#2f69ff" : "#fff"};
  border: 1px solid rgba(0,0,0,0.1);
  color: ${(props) => props.currentPage === props.classValue && "white"};
  height: 100%;
`
const Container = styled.div`
height: 35px;
display:flex;
align-items: center;
margin-bottom: 5px;
justify-content: center;
`
const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize)
  let pages = []
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i)
  }
  let portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setportionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize
  return (
    <Container>
      {portionNumber > 1 && (
        <Button
          onClick={() => {
            setportionNumber(portionNumber - 1)
          }}
        >
          Prev
        </Button>
      )}
      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((item) => {
          return (
            <Btn_checked
              key={item}
              onClick={() => {
                onPageChanged(item)
              }}
              currentPage={currentPage}
              classValue={item}
            >
              {item}
            </Btn_checked>
          )
        })}
      {portionCount > portionNumber && (
        <Button
          onClick={() => {
            setportionNumber(portionNumber + 1)
          }}
        >
          Next
        </Button>
      )}
    </Container>
  )
}

export default Paginator
