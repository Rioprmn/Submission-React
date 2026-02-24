import { useState } from 'react';
import {
  getActiveNotes,
  deleteNote,
  archiveNote,
} from '../utils/local-data';

import Searchbar from '../components/searchbar';
import Notelist from '../components/notelist';

function Homepage() {
  const [notes, setNotes] = useState(getActiveNotes());
  const [keyword, setKeyword] = useState('');

  function onDeleteHandler(id) {
    deleteNote(id);
    setNotes(getActiveNotes());
  }

  function onArchiveHandler(id) {
    archiveNote(id);
    setNotes(getActiveNotes());
  }

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <section className="homepage">

      <Searchbar keyword={keyword} onKeywordChange={setKeyword} />
      <Notelist
        notes={filteredNotes}
        onDelete={onDeleteHandler}
        onArchive={onArchiveHandler}
      />
    </section>
  );
}

export default Homepage;