import React, { useState } from 'react';

const DiaryWrite = ({ onSave, onCancel }) => {
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    onSave(date, content);
    setDate('');
    setContent('');
  };

  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
      <h3>일기 작성</h3>
      <label>
        날짜:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ marginLeft: '10px' }} />
      </label>
      <div style={{ marginTop: '10px' }}>
        <label>
          일기 내용:
          <textarea value={content} onChange={(e) => setContent(e.target.value)} rows="4" style={{ width: '100%', marginTop: '5px' }} />
        </label>
      </div>
      <div style={{ marginTop: '10px', textAlign: 'right' }}>
        <button onClick={onCancel} style={{ marginRight: '10px' }}>취소</button>
        <button onClick={handleSave}>저장</button>
      </div>
    </div>
  );
};

export default DiaryWrite;