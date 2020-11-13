class NoteController {
  constructor(noteList = new NoteList) {
    this.list = noteList
    this.list.add("Favourite drink: seltzer")
    this.list.add("Favourite food: pizzzaa")
    this.view = new NoteListView(this.list)
  }

  render(view = this.view) {
    document.getElementById('app').innerHTML = view.returnHTML()
  }

  renderNote(n) {
    var singleNoteView = new SingleNoteView(this.list.get(n))
    document.getElementById('app').innerHTML = singleNoteView.outputHTML()
  }
}

var noteController = new NoteController
noteController.render()

window.addEventListener('hashchange', function(event){
  if (event.newURL.slice(-1) == '/') {
    noteController.render()
  } else {
    let n = event.newURL.slice(-1)
    noteController.renderNote(n)
  }
}, false)


const form = document.getElementById('text')
form.addEventListener('submit', function(event){
  event.preventDefault()
  return console.log(event)
})
