import PropTypes from 'prop-types';
import { Friend } from './Friend';
import { FriendsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <Friend
                        key={id}
                        id={id}
                        name={name}
                        isOnline={isOnline}
                        avatar={avatar}
                    />
                )
            })}
        </FriendsList>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
        })
    )
}