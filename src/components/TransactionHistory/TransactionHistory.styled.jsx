import styled from "styled-components";

export const Table = styled.table`
    width: 310px;
    margin: 20px auto;

    border: 5px solid #c5c1c1;
	border-collapse: collapse;

    text-align: center;
`

export const TableHead = styled.th`
	background: #c5c1c1;
	border: 2px solid gray;
    padding: 5px;
`

export const TableData = styled.td`
    border: 2px solid gray;
    padding: 5px;
`

export const TableRow = styled.tr`
    &:nth-child(odd) {
        background-color: white;
    }
    &:nth-child(even) {
        background-color: #e3dfdf;
    }
`