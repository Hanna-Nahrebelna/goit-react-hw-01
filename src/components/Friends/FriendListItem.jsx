import clsx from 'clsx'
import css from "./Friend.module.css"

export default function FriendListItem({
  friend: { avatar, name, isOnline }
}) {
  return (
    <div>
      <img className={css.imgIcon} src={avatar} alt="Icon Friend" />
      <p className={css.avatarName}>{name}</p>
      <p className={clsx(
        css.statusFriend,
        isOnline === true ? css.online : css.ofline
      )}
      >
        {isOnline === true ? "Online" : "Offline"}</p>
    </div>
  )
}