import React from 'react';
import Profile from './Profile/Profile'; 
import user from './Profile/user.json'; 
import Statistics from './Statistics/Statistics';
import data from './Statistics/data.json';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json'
const App = () => {
  return (
    <>
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
    <div>
      <Statistics title="Upload Stats" stats={data} />
    </div>
    <div>
      <FriendList friends={friends} />
    </div>
    <div>
      <TransactionHistory items ={transactions} />
    </div>
    </>
  );
};
export default App;












