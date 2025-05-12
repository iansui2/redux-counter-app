import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';
import ThemeToggle from '../theme/ThemeToggle';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dark = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();

  return (
    <div className={`flex flex-col items-center justify-center h-screen ${dark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className={`shadow-md rounded-2xl px-10 py-8 text-center max-w-sm w-full ${dark ? 'bg-gray-800' : 'bg-white'}`}>
        <h1 className={`text-3xl font-semibold mb-4 ${dark ? 'text-white' : 'text-gray-800'}`}>Redux Counter</h1>
        <div className={`text-6xl font-bold mb-6 ${dark ? 'text-indigo-300' : 'text-indigo-600'}`}>{count}</div>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => dispatch(decrement())}
            className="px-6 py-3 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-full shadow-md hover:from-red-500 hover:to-red-700 transform hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-red-300"
          >
            −
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="px-6 py-3 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded-lg shadow-md hover:from-gray-500 hover:to-gray-700 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Reset
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="px-6 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full shadow-md hover:from-green-500 hover:to-green-700 transform hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            +
          </button>
        </div>
        <div className="mt-8">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Counter;