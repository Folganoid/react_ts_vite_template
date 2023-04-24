import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setCountUp } from '../../store/countSlice';

export default function Home() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.count);

  return (
    <main className={'main'}>
      <h1>Home</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(setCountUp(10))}>UP</button>
    </main>
  );
}
