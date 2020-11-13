(function () {
  var note1 = {
    text: function () { return 'Test note' },
    id: function(){ return 0 }
  }

  var noteList = {
    get: function () { return note1 },
    add: function () { },
    all: function () { }
  }
  var controller = new NoteController(noteList)
  var noteListViewDouble = {}
  noteListViewDouble.returnHTML = function () {
    return '<ul><li><div>Favourite food: pes</div></li></ul>'
  }

  function controllerCanBeInstantiated() {
    assert.isTrue(controller instanceof NoteController)
  }

  function divIsChangedToViewList() {
    assert.isTrue(document.getElementById('app').innerHTML === '<ul><li><div>Favourite food: pes</div></li></ul>')
  }

  function loadContentOfNoteWhenVisitCorresspondingURL() {
    controller.renderNote(0)
    console.log(document.getElementById('app').innerHTML)
    assert.isTrue(document.getElementById('app').innerHTML === '<div>Test note</div>')
  }

  controllerCanBeInstantiated()

  controller.render(noteListViewDouble)
  divIsChangedToViewList()
  loadContentOfNoteWhenVisitCorresspondingURL()
})()