import React from 'react';

import useVocab from './useVocab';

const App: React.FunctionComponent = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>('');

  const onSearchTermChanged: React.ChangeEventHandler<HTMLInputElement> =
    ({ target: { value } }) => setSearchTerm(value);

  const vocab = useVocab(searchTerm);

  return (
    <div>
      <h1>Computer Science Vocabulary</h1>

      <form>
        <label>Search Term</label>
        <input type='text' value={searchTerm} onChange={onSearchTermChanged}></input>
      </form>

      <table id='definitions'>
        <thead>
          <tr>
            <th className='lesson'>Lesson</th>
            <th className='word'>Word</th>
            <th className='definition'>Definition</th>
          </tr>
        </thead>
        <tbody>
          {vocab.map(({ lessons, word, definition }, i) => (<tr key={i}>
            <td>{lessons.map(l => <div>{l}</div>)}</td>
            <td>{word}</td>
            <td>{definition}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
