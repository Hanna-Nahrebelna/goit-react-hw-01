import FriendListItem from "./FriendListItem";

export default function FriendList({friends}) {
  return (
    <div>
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
