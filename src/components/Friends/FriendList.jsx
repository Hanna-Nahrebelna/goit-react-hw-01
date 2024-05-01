import FriendListItem from "../Friends/FriendListItem";
import css from "./Friend.module.css"


export default function FriendList({friends}) {
  return (
    <div className={css.container}>
    < ul className = {css.listFriends}>
        {friends.map((friend) => (
          <li className={css.listFriendItem} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>        
        ))}   
      </ul>
    </div>    
  )
}
