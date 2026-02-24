import Detailpage from '../pages/detailpage';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils';


function Noteitem({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
}) {
  return (
    <div className="note-item">
      <h3>{title}</h3>
      <p>{body}</p>
      <small>{showFormattedDate(createdAt)}</small>

      <div className="note-item__action">
        <button onClick={() => onDelete(id)}>Hapus</button>
        <button onClick={() => onArchive(id)}>
          {archived ? 'Pindahkan' : 'Arsipkan'}
        </button>
        <Link to={`/notes/${id}`}>
          <button>Lihat Detail</button>
        </Link>
      </div>
    </div>
  );
}

export default Noteitem;