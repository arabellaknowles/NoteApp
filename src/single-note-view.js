class SingleNoteView {
  constructor(note = new Note){
    this.note = note
  }

  outputHTML(){
    return `<div>${this.note.text()}</div>`
  }
}