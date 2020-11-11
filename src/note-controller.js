class NoteController {
  constructor(noteList = new NoteList) {
    this.list = noteList
    this.list.add("Favourite drink: seltzer")
    this.view = new NoteListView(this.list)
  }

  render() {
    document.getElementById('app').innerHTML = this.view.returnHTML()
  }
}