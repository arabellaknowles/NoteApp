(function () {
  var controller = new NoteController
  var noteListViewDouble = {}
  noteListViewDouble.returnHTML = function () {
    return '<ul><li><div>Favourite food: pesto</div></li></ul>'
  }

  function controllerCanBeInstantiated() {
    assert.isTrue(controller instanceof NoteController)
  }

  function divIsChangedToViewList() {
    assert.isTrue(document.getElementById('app').innerHTML === '<ul><li><div>Favourite food: pesto</div></li></ul>')
  }

  controllerCanBeInstantiated()

  controller.render(noteListViewDouble)
  divIsChangedToViewList()
})()