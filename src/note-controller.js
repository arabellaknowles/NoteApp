class NoteController {
  constructor(noteList = new NoteList) {
    this.list = noteList
    this.list.add("Favourite drink: seltzer")
    this.view = new NoteListView(this.list)
  }

  render(view = this.view) {
    console.log(document.getElementById('app'))
    document.getElementById('app').innerHTML = view.returnHTML()
  }
}