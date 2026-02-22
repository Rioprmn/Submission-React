import { useState } from 'react';
import {
  getArchivedNotes,
  deleteNote,
  unarchiveNote,
} from '../utils/local-data';

import Notelist from '../components/notelist';

function Archivepage() {
  const [notes, setNotes] = useState(getArchivedNotes());

  function onDeleteHandler(id) {
    deleteNote(id);
    setNotes(getArchivedNotes());
  }

  function onArchiveHandler(id) {
    unarchiveNote(id);
    setNotes(getArchivedNotes());
  }

  return (
    <section className="archives-page">
      <h1>Arsip</h1>

      <Notelist
        notes={notes}
        onDelete={onDeleteHandler}
        onArchive={onArchiveHandler}
      />
    </section>
  );
}

export default Archivepage;