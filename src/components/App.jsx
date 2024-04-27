import Profile from "./Profile";
import userData from "../userData.json";

import FriendList from "./FriendList";
import friends from "../friends.json"

export default function App() {
  return (
  <>
    <ul>
        {userData.map((user) => (
          <li key={user.tag}>
            <Profile user={user} />
          </li>
        ))}
      </ul>

      <FriendList friends={friends} />
  </>
  );
}

