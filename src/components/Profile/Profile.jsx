import css from "./Profile.module.css"

export default function Profile({
  user: { avatar, username, tag, location, stats },
}) {
  return ( 
  <div>
    <div className={css.container}>
        <img className={css.imgAvatar} src={avatar} alt="User avatar" />
        <p className={css.pName}><b>{username}</b></p>
        <p className={css.pTag}>@{tag}</p>
      <p className={css.pLocation}>{location}</p>
      </div>

  <ul className={css.listStats}>
    <li className={css.listStatsColumn}>
      <span className={css.listStatsSpanFollowers}>Followers</span>
      <span className={css.numberStatsSpan}><b>{stats.followers}</b></span>
    </li>
    <li className={css.listStatsColumn}>
      <span className={css.listStatsSpanViews}>Views</span>
      <span className={css.numberStatsSpan}><b>{stats.views}</b></span>
    </li>
    <li className={css.listStatsColumn}>
      <span className={css.listStatsSpanLikes}>Likes</span>
      <span className={css.numberStatsSpan}><b>{stats.likes}</b></span>
    </li>
  </ul>
</div>
)
}




