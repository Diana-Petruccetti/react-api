import { useState } from 'react'
import './App.css'

function App() {

  const components = [
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
  ];

  console.log(components);

  const [title, setTitle] = useState('Title')
  const [article, setArticle] = useState('lorem ipsum asfda dagsg eagadzgaz.')


  function handleTitleChange(e) {
    console.log(e);
    setTitle(e.target.value)
  }

  function handleArticleChange(e) {
    console.log(e);
    setArticle(e.target.value)
  }

  return (
    <>

      <h1>Inserisci il titolo</h1>
      <input type="text" name='title' id='title' value={title} onChange={e => setTitle(e.target.value)} />

      <h1>Inserisci l'articolo</h1>
      <input type='text' name='article' id='article' value={article} onChange={e => setArticle(e.target.value)} />
      <div>
        <input type="submit" />
      </div>

      <div className="components">
        {components.map(component =>
          <div key={component.id}>
            <div>
              <h2>{component.artTitle}</h2>
              <div>{component.artText}</div>
            </div>
          </div>)
        }
      </div>

    </>
  )
}

export default App
