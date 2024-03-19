import React, { useState } from 'react';

const InputBox = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendClick = () => {
    // Handle send button click
    console.log('Send button clicked');
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type your question here..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {inputValue.trim() !== '' && (
        <button
          onClick={handleSendClick}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-md"
        >
          Send
        </button>
      )}
    </div>
  );
};

export default InputBox;