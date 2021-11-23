import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
	const USERS = [
  { heading:"What is an Urban ledger referral program?", para: 'Urban Ledger is currently offering the opportunity for users to earn a bonus for inviting their family members and friends. Once the referred users meet all reward program terms and conditions, the coupon card is awarded to the individual who submitted the referral and friends who use referral links. See program terms and conditions for complete details.',points:[]},
  { heading:"How do I refer to a friend? How does this referral program work?", para: '',points:["Share the referral link with your friend (“Referee”) through social media or email.","Your friend uses your referral link to sign up or enters a referral code while creating their Urban Ledger account","Your friend makes the first payment to another user. Additional terms apply. (Link)"]},
  { heading:"What rewards can I earn", para: 'On successful referral, both users will get a coupon of AED 50.00 as a reward.',points:[]},
  { heading:"Where can I reach out if my question wasn't answered here?", para: 'All the requirements are completed It’s been at least 30 days since all the requirements have been completed. ',points:[".Check your email account to confirm you haven’t received the e-gift code","If you verified all the above and still haven’t received your reward, please contact us at admin@urbanleger.app"]}
];
function App() {
	
	  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.heading.toLowerCase().startsWith(keyword.toLowerCase()) || user.para.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
    }

    setName(keyword);
  };


  return (
<div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <div key={user.heading} className="user">
              <h1 className="user-heading">{user.heading}</h1>
              <p className="user-para">{user.para}</p>
			 <ul>
     { user.points.map((list) => (
              <li>{list}</li>
          ))}
      </ul>

            </div>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default App;
