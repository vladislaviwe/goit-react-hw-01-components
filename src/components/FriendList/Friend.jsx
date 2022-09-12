import { FriendsListItem, FriendName, FriendAvatar, FriendListIndicator, FriendIndicatorRed, FriendIndicatorGreen } from './FriendList.styled';

export const Friend = ({ avatar, name, isOnline, id }) => {
    return (
        <FriendsListItem key={id}>
            <FriendListIndicator viewBox="0 0 10 10" width="10" height="10">
                {isOnline ? (
                    <FriendIndicatorGreen cx="5" cy="5" r="5" />
                ) : (
                <FriendIndicatorRed cx="5" cy="5" r="5"/>
                )}
            </FriendListIndicator>
            <FriendAvatar src={avatar} alt={name} width="48" />
            <FriendName>{name}</FriendName>
        </FriendsListItem>
    )
}