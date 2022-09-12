import PropTypes from 'prop-types';
import { FriendsListItem, FriendName, FriendAvatar, FriendListIndicator, Indicator } from './FriendList.styled';

console.log(Indicator);

export const Friend = ({ avatar, name, isOnline, id }) => {
    return (
        <FriendsListItem>
            <FriendListIndicator viewBox="0 0 10 10" width="10" height="10">
                {isOnline ? (
                    <Indicator className='green' cx="5" cy="5" r="5" />
                ) : (
                    <Indicator className='red' cx="5" cy="5" r="5"/>
                )}
            </FriendListIndicator>
            <FriendAvatar src={avatar} alt={name} width="48" />
            <FriendName>{name}</FriendName>
        </FriendsListItem>
    )
}

Friend.propTypes = {
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}