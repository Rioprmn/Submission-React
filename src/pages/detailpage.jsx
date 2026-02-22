import { useParams, useNavigate } from 'react-router-dom';
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from '../utils/local-data';

function Detailpage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = getNote(id);

  if (!note) {
    return <p>Catatan tidak ditemukan</p>;
  }

  function onDeleteHandler() {
    deleteNote(id);
    navigate('/');
  }

  function onArchiveHandler() {
    if (note.archived) {
      unarchiveNote(id);
      navigate('/');
    } else {
      archiveNote(id);
      navigate('/archives');
    }
  }

  return (
    <section className="detail-page">
      <h1>{note.title}</h1>
      <p>{new Date(note.createdAt).toLocaleDateString()}</p>

      <article>
        <p>{note.body}</p>
      </article>

      <div className="detail-page__action">
        <button onClick={onArchiveHandler}>
          {note.archived ? 'Batal Arsip' : 'Arsipkan'}
        </button>

        <button onClick={onDeleteHandler}>
          Hapus
        </button>
      </div>
    </section>
  );
}

export default Detailpage;