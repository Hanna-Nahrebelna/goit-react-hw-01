import Profile from "../Profile/Profile";
import userData from "../../userData.json";

import FriendList from "../Friends/FriendList";
import friends from "../../friends.json"

import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../transactions.json";

import css from "./App.module.css"



export default function App() {
  return (
    <div className={css.container}>
    <ul className={css.list}>
        {userData.map((user) => (
          <li className={css.listItem} key={user.tag}>
            <Profile user={user} />
          </li>
        ))}
    </ul>

      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
  </div>
  );
}

