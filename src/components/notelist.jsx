import Noteitem from './noteitem';

function Notelist({ notes, onDelete, onArchive }) {
  if (notes.length === 0) {
    return <p className="notes-empty">Tidak ada catatan</p>;
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Noteitem
          key={note.id}
          {...note}
          onDelete={onDelete}
          onArchive={onArchive}
        />
      ))}
    </div>
  );
}

export default Notelist;