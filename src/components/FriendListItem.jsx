export default function FriendListItem({
  friend: { avatar, name, isOnline }
}) {
  return (
    <div>
      <img src={avatar} alt="Icon Friend" />
      <p>{name}</p>
      <p>{isOnline === true ? "Online" : "Offline"}</p>
    </div>
  )
}