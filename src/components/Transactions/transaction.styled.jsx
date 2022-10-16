import styled from "styled-components";

export const Table = styled.table`
width: 480px;
background-color: white;
margin-left: auto;
margin-right: auto;
`;

export const TableHead = styled.thead`
background-color: lightblue;
color: white;
height: 30px;
`

export const TableBodyRow = styled.tr`
height: 30px;
:nth-child(even){
    background-color: lightgrey
}
;
`