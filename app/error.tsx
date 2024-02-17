'use client';
import { useEffect } from 'react';

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className='p-5'>
      <h1>Ouch !! Something went wrong !</h1>
      <button onClick={reset}>Try Again</button>
    </div>
  );
}
