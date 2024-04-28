import FriendListItem from "../Friends/FriendListItem";
import css from "./Friend.module.css"

export default function FriendList({friends}) {
  return (
    <div className={css.container}>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendListItem friend={friend} />
          </li>        
        ))}   
      </ul>
    </div>    
  )
}
