import PropTypes from 'prop-types'
import { Profile } from "components/Profile/Profile";
import user from '../database/user.json';

export const App = () => {
  return (
    <div>
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} 
      />
    </div>
  );
};

user.PropTypes = {
  username: PropTypes.string.isRequired, 
  tag: PropTypes.string.isRequired, 
  location: PropTypes.string.isRequired, 
  avatar: PropTypes.string.isRequired, 
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })
}
