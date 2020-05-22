import React from "react";
import FriendList from ".././FriendList/FriendList";
import friends from "../../Data/friends.json";
function App() {
  return <FriendList friends={friends} />;
}

export default App;
