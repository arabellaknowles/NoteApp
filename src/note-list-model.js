class NoteList {
  constructor() {
    this.notes = [];
  }

  add(text) {
    let id = this.notes.length
    let newNote = new Note(text, id)
    this.notes.push(newNote)
  }

  all() {
    return this.notes
  }
}