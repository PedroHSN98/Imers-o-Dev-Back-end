import express from 'express';

const posts = [
    { id: 1, descricao: 'Uma foto teste', imagem: 'https://placecats.com/millie/300/150' },
    { id: 2, descricao: 'Gato brincando com um novelo de lã', imagem: 'https://placecats.com/millie/300/150' },
    { id: 3, descricao: 'Gato brincando fazendo panqueca', imagem: 'https://placecats.com/millie/300/150' }, 
  ];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log('Servidor escutando na porta 3000...');
});

app.get('/posts', (req, res) => {
  res.status(200).json(posts);
});

function buscarPostPorID(id) {
  const index = posts.findIndex(post => post.id === Number(id));
  return index;
}

app.get('/posts/:id', (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);

  if (index >= 0) {
    res.status(200).json(posts[index]);
  } else {
    res.status(404).json({ message: 'Post não encontrado' });
  }
});
