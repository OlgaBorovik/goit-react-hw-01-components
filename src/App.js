import React from 'react'
import logo from './logo.svg';
import './App.css';
import { Profile } from './components/profile';
import { Statistics } from './components/statistics';
import data from './data.json'
import user from './user.json'
import { FriendList } from './components/friendlist';
import friends from './friends.json'
import { TransactionHistory } from './components/transactionHistory';
import items from './transactions.json'

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
      {/* <Statistics
        title="Upload stats"
        stats={data}
      /> */}

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

