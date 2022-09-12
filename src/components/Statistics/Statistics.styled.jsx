import styled from "styled-components";

export const StatsSection = styled.section`
    width: 300px;
    margin: 20px auto;

    text-align: center;

    border: 5px solid #c5c1c1;
`

export const Title = styled.h2`
    text-transform: uppercase;
    font-weight: bold;
`

export const StatsList = styled.ul`
    display: flex;
    justify-content: space-between;
    height: 40px;

    padding-inline-start: 0;
    padding-left: 10px;
    padding-right: 10px;
    
    margin-bottom: 0;

    background-color: #c5c1c1;

    list-style: none;
`

// export const StatsListItem = styled.li`
//     width: ${300/5}px;
    
// `

export const StatsListInfo = styled.span`
    display: block;

    &:not(:first-child) {
        font-weight: bold;
    }
`