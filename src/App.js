import React from 'react'
import './App.css';
import { Profile } from './components/Profile/profile';
import { Statistics } from './components/Statistics/statistics';
import data from './components/Statistics/data.json';
import user from './components/Profile/user.json'
import { FriendList } from './components/Friends/friendlist';
import friends from './components/Friends/friends.json'
import { TransactionHistory } from './components/Transactions/transactionHistory';
import items from './components/Transactions/transactions.json'
function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <Statistics
        
        stats={data}
      />

     <>
      <FriendList friends={(friends)}
      
        />
      </>
      <>
      <TransactionHistory items = {(items)} />
      </>
    </div>
    

  );
}

export default App;

