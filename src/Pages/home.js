import React from 'react';
import { useSelector } from 'react-redux';

export const Home = () => {
  const username = useSelector((state) => state.user.value.username);

  return <h1>THIS IS A HOME PAGE {username}</h1>;
};
