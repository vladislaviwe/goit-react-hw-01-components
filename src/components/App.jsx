import { Profile } from "components/Profile/Profile";
import user from 'database/user.json';
import { StatisticsCard } from './Statistics/StatisticsCard';
import data from "database/data.json";
import { FriendList } from "./FriendList/FriendList";
import friends from "database/friends.json";
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from 'database/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile 
      key={user.username}
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} 
      />
      <StatisticsCard title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
