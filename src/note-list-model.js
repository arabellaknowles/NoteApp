class NoteList {
  constructor() {
    this.notes = [];
  }

  add(text) {
    let id = this.notes.length
    let newNote = new Note(text, id)
    this.notes.push(newNote)
  }

  get(n) {
    return this.notes[n]
  }

  all() {
    return this.notes
  }
}