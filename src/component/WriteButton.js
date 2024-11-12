import React from 'react';
import './WriteButton.css';

const WriteButton = ({ onClick }) => (
    <button className="write-button" onClick={onClick}>
      일기 쓰기
    </button>
 
);

export default WriteButton;