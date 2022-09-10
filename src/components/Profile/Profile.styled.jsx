import styled from "styled-components";

export const CardContainer = styled.div`
    width: 300px;
    padding-top: 10px;
    margin: 0 auto;
    margin-top: 40px;

    border: 5px solid #c5c1c1;
`

export const UserMainInfo = styled.div`
    text-align: center;

    color: gray;
`

export const UserMainInfoAvatar = styled.img`
    width: 100%;
`

export const UserMainInfoName = styled.p`
    color: black;
    text-transform: uppercase;
    font-weight: bold;
`

export const UserStatsList = styled.ul`
    padding-inline-start: 0;
    margin-bottom: 0;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;

    background-color: #c5c1c1;
`

export const UserStatsListItem = styled.li`
    &:not(:last-child) {
        margin-right: 10px;
    }
`

export const UserStatsListItemText = styled.span`
    &:not(:last-child) {
        margin-right: 5px;
    }

    &:not(:first-child) {
        font-weight: bold;
    }
`