import PropTypes from 'prop-types';
import { CardContainer, UserMainInfo, UserMainInfoAvatar, UserMainInfoName, UserStatsList, UserStatsListItem, UserStatsListItemText } from '../Profile/Profile.styled'

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <CardContainer key={username}>
            <UserMainInfo>
                <UserMainInfoAvatar
                src={avatar}
                alt={username}
                />
                <UserMainInfoName>{username}</UserMainInfoName>
                <p>{tag}</p>
                <p>{location}</p>
            </UserMainInfo>

            <UserStatsList>
                <UserStatsListItem>
                    <UserStatsListItemText>Followers</UserStatsListItemText>
                    <UserStatsListItemText>{stats.followers}</UserStatsListItemText>
                </UserStatsListItem>
                <UserStatsListItem>
                    <UserStatsListItemText>Views</UserStatsListItemText>
                    <UserStatsListItemText>{stats.views}</UserStatsListItemText>
                </UserStatsListItem>
                <UserStatsListItem>
                    <UserStatsListItemText>Likes</UserStatsListItemText>
                    <UserStatsListItemText>{stats.likes}</UserStatsListItemText>
                </UserStatsListItem>
            </UserStatsList>
        </CardContainer>
}

Profile.propTypes = {
  username: PropTypes.string.isRequired, 
  tag: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired, 
  avatar: PropTypes.string.isRequired, 
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })
}