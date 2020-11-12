(function () {
  var myNoteList = new NoteList()
  myNoteList.add("this is a new note")
  myNoteList.add("this is another new note")

  function testNoteListIsInstantiatedWithEmptyArray() {
    assert.isTrue(Array.isArray(myNoteList.notes))
  }


  function testNoteListCanAddANoteToArray() {
    assert.isTrue(myNoteList.notes[0].text() === "this is a new note")
  }

  function testNoteListCanReturnAllNotesInNotes() {
    assert.isTrue(myNoteList.all() === myNoteList.notes)
  };

  function testCreatesFirstNoteWithID0(){
    assert.isTrue(myNoteList.notes[0].id === 0)
  }

  function testCreatesFirstNoteWithID1(){
    assert.isTrue(myNoteList.notes[1].id === 1)
  }

  testNoteListIsInstantiatedWithEmptyArray()
  testNoteListCanReturnAllNotesInNotes()
  testNoteListCanAddANoteToArray()
  testCreatesFirstNoteWithID0()
  testCreatesFirstNoteWithID1()
})()