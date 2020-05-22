import React from "react";
import s from "./FriendListItem.module.css";

function FriendListItem({ user }) {
  return (
    <li className={s.item}>
      <span
        className={`${s.status} ${
          user.isOnline ? s.status_green : s.status_red
        }`}
      ></span>
      <img className={s.avatar} src={user.avatar} alt="" width="48" />
      <p className={s.name}> {user.name}</p>
    </li>
  );
}
export default FriendListItem;
