import { useState } from 'react';
import './App.css';

function App() {
  const [components, setComponents] = useState([
    {
      id: 1,
      artTitle: "5 Consigli per una vita più produttiva",
      artText: "Lorem ipsum, siat amet consectetur adipisicing elit. Omnis quisquam ut aperiam hic atque at ab rem corporis veniam repudiandae nihil, dolores ipsa laboriosam, recusandae soluta quo impedit. Unde, tempora.",
    },
    {
      id: 2,
      artTitle: "Come scegliere il tuo smartphone ideale",
      artText: "Lorem ipsum, siat amet consectetur adipisicing elit. Omnis quisquam ut aperiam hic atque at ab rem corporis veniam repudiandae nihil, dolores ipsa laboriosam, recusandae soluta quo impedit. Unde, tempora.",
    },
    {
      id: 3,
      artTitle: "La storia di un imprenditore che ha cambiato la sua vita",
      artText: "Lorem ipsum, siat amet consectetur adipisicing elit. Omnis quisquam ut aperiam hic atque at ab rem corporis veniam repudiandae nihil, dolores ipsa laboriosam, recusandae soluta quo impedit. Unde, tempora.",
    }
  ]);

  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');

  // Funzione per aggiungere un nuovo articolo
  function addArticle() {
    if (title.trim() && article.trim()) {
      const newArticle = {
        id: components.length + 1, // Genera un nuovo ID unico
        artTitle: title,
        artText: article,
      };
      setComponents([...components, newArticle]); // Aggiorna lo stato
      setTitle(''); // Resetta l'input del titolo
      setArticle(''); // Resetta l'input dell'articolo
    } else {
      alert("Inserisci un titolo e un articolo validi!");
    }
  }

  return (
    <>
      <h1>Inserisci il titolo</h1>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <h1>Inserisci l'articolo</h1>
      <input
        type="text"
        name="article"
        id="article"
        value={article}
        onChange={(e) => setArticle(e.target.value)}
      />

      <div>
        <button type="button" id="btn" onClick={addArticle}>Invia</button>
      </div>

      <div className="components">
        {components.map((component) => (
          <div key={component.id}>
            <h2>{component.artTitle}</h2>
            <div>{component.artText}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
