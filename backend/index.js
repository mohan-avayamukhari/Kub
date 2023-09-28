import express, { json, request, response } from "express"

const app = express()
app.use(express.json())

let notes = []

app.post("/api/notes", (request, response) => {
  const generateId = () => {
    return notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 0
  }
  const body = request.body
  if (!body.content) {
    return response.status(400).json({
      "error": "content missing"
    })
  }
  const note = {
    id: generateId(),
    content: body.content,
    important: body.important || false
  }
  notes = notes.concat(note)
  response.json(request.body)
})

app.get("/api/notes", (request, response) => {
  response.json(notes)
})

app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find(note => note.id == id)
  response.json(note)
})

app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)
  response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
})
