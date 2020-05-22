import React from "react";
import FriendListItem from "../FriendListItem/FriendListItem";
import s from "./FriendList.module.css";
function FriendList({ friends }) {
  return (
    <ul className={s.friend_list}>
      {friends.map((user) => (
        <FriendListItem user={user} />
      ))}
    </ul>
  );
}

export default FriendList;
