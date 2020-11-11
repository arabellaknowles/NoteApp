(function () {
  var mynotelist = new NoteList();
  mynotelist.add("this is a new note");
  mynotelist.add("this is another new note");

  function testNoteListIsInstantiatedWithEmptyArray() {
    assert.isTrue(Array.isArray(mynotelist.notes));
  };


  function testNoteListCanAddANoteToArray() {
    assert.isTrue(mynotelist.notes[0].text === "this is a new note");
  };

  function testNoteListCanReturnAllNotesInNotes() {
    assert.isTrue(mynotelist.all() === mynotelist.notes);
  };
  testNoteListIsInstantiatedWithEmptyArray();
  testNoteListCanReturnAllNotesInNotes();
  testNoteListIsInstantiatedWithEmptyArray();
})
  ();