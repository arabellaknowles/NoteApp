class NoteList {
  constructor() {
    this.notes = [];
  }

  add(text) {
    var newNote = new Note(text);
    this.notes.push(newNote);
  }

  all() {
    return this.notes;
  }
};