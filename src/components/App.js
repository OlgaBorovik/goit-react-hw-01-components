import React from 'react'
import '../App.css';
import { Profile } from './Profile/profile';
import { Statistics } from './Statistics/statistics';
import { FriendList } from './Friends/friendlist';
import { TransactionHistory } from './Transactions/transactionHistory';

import user from './Profile/user.json'
import data from './Statistics/data.json';
import friends from './Friends/friends.json'
import items from './Transactions/transactions.json'

import { Section } from './section.styled';

export const App = () => {
  return (
    <Section>
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
      <Statistics stats={data}/>
      <FriendList friends={(friends)}/>
      <TransactionHistory items = {(items)} />
      
    </Section>
    

  );
}



