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
      <small>{new Date(createdAt).toLocaleDateString()}</small>

      <div className="note-item__action">
        <button onClick={() => onDelete(id)}>Hapus</button>
        <button onClick={() => onArchive(id)}>
          {archived ? 'Pindahkan' : 'Arsipkan'}
        </button>
      </div>
    </div>
  );
}

export default Noteitem;