import css from './App.module.css';

import UserProfile from './Profile/UserProfile';
import user from 'AllData/user.json';

import Statistics from './Statistics/Statistics';
import data from 'AllData/data.json';

import FriendList from './FriendList/FriendList';
import friends from 'AllData/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from 'AllData/transactions.json';

const App = () => {
  return (
    <div className={css.app}>
      <UserProfile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
