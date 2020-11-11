class NoteController {
  constructor(noteList = new NoteList) {
    this.list = noteList
    this.list.add("Favourite drink: seltzer")
    this.list.add("Favourite food: pizzzaa")
    this.view = new NoteListView(this.list)
  }

  render(view = this.view) {
    console.log(document.getElementById('app'))
    document.getElementById('app').innerHTML = view.returnHTML()
  }
}

var noteController = new NoteController
noteController.render()