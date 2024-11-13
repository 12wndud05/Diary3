import React from 'react';
import './List.css';
import WriteButton from './WriteButton';

const List = ({ diaries, onToggleOrder }) => (
  <div className="table-container">
    <div className="table-header">
      <h2>목록</h2>
      <button className="sort-button" onClick={onToggleOrder}>
        ↕️
      </button>
    </div>
    <table className="diary-table">
      <thead>
        <tr>
          <th colSpan="3"></th>
        </tr>
        <tr>
          <th></th>
          <th style={{ textAlign: 'center' }}>날짜</th>
          <th style={{ textAlign: 'center' }}>일기</th>
        </tr>
      </thead>
      <tbody>
        {diaries.map((diary, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td style={{ textAlign: 'center' }}>{diary.date}</td>
            <td style={{ textAlign: 'center' }}>{diary.content}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default List;
