import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Page from './components/Page';
import List from './components/DiaryTable';
import DiaryWrite from './components/DiaryWrite';
import WriteButton from './components/WriteButton';
import DiaryTable from './component/DiaryTable';

function App() {
  const [diaries, setDiaries] = useState([]);
  const [isWriting, setIsWriting] = useState(false);
  const [isReversed, setIsReversed] = useState(false);

  const addDiary = (date, content) => {
    setDiaries([...diaries, { date, content }]);
    setIsWriting(false);
  };
  const toggleOrdern = () => {
    setIsReversed(!isReversed);
  };

  const displayedDiaries = isReversed ? [...diaries].reverse() : diaries;

  return (
    <div style={{ width: '600px', margin: 'auto', padding: '20px', borderRadius: '15px', backgroundColor: '#EAE6F8', position: 'relative' }}>
      <Title />
      <DiaryTable diaries={diaries} />
      <Page />
      <WriteButton onClick={() => setIsWriting(true)} />
      {isWriting && <DiaryWrite onSave={addDiary} onCancel={() => setIsWriting(false)} />}
    </div>
  );
}

export default App;
