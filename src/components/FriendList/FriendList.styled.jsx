import styled from "styled-components";

export const FriendsList = styled.ul`
    width: 300px;
    margin: 20px auto;
    padding-inline-start: 0;
   

    text-align: center;
    list-style: none;

    border: 5px solid #c5c1c1;
`

export const FriendsListItem = styled.li`
    display: flex;
    align-items: center;

    &:not(:last-child) {
        border-bottom: 5px solid #c5c1c1;
    }
`

export const FriendListIndicator = styled.svg`
    margin-left: 10px;
`

export const FriendAvatar = styled.img`
    margin-left: 20px;
`

export const FriendIndicatorGreen = styled.circle`
    fill: green;
    stroke-width: 10px;
`

export const FriendIndicatorRed = styled.circle`
    fill: red;
    stroke-width: 10px;
`

export const FriendName = styled.p`
    margin-left: 20px;

    font-weight: bold;
`