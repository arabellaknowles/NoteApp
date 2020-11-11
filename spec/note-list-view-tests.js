(function () {
  var myNoteList = new NoteList();
  for (let i = 1; i <= 3; i++) {
    myNoteList.add(`Note ${i}`);
  }
  var myNoteListView = new NoteListView(myNoteList);


  function testInitializesWithNoteList() {
    assert.isTrue(myNoteListView.list === myNoteList.all());
  };

  function testReturnsHTMLList() {
    console.log(myNoteListView.returnHTML());
    assert.isTrue(myNoteListView.returnHTML() === "<ul><li><div>Note 1</div></li><li><div>Note 2</div></li><li><div>Note 3</div></li></ul>")
  };



  testInitializesWithNoteList();
  testReturnsHTMLList();

})();