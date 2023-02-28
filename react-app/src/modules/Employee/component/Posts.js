import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onGetUsers } from "../../action";

const Posts = () => {
  const users = useSelector((state) => state.users);
  console.log(users);

  const usersList = users.length ? (
    users.map((user) => {
      return <p>{user.name}</p>;
    })
  ) : (
    <p>No Post Yet</p>
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onGetUsers());
  }, []);

  return <>{usersList}</>;
};

export default Posts;
