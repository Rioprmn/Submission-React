import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';

function Addnotepage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function onTitleChangeHandler(event) {
    setTitle(event.target.value);
  }

  function onBodyChangeHandler(event) {
    setBody(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    addNote({ title, body });
    navigate('/');
  }

  return (
    <section className="add-new-page">
      <h1>Tambah Catatan</h1>

      <form className="add-new-page__input" onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Judul"
          value={title}
          onChange={onTitleChangeHandler}
          required
        />

        <textarea
          placeholder="Isi catatan..."
          value={body}
          onChange={onBodyChangeHandler}
          required
        />

        <button type="submit">Simpan</button>
      </form>
    </section>
  );
}

export default Addnotepage;