(function() {
    var mynotelist = new noteList();
    for (let i = 1; i <= 3; i++) {
        mynotelist.add(`Note ${i}`);
    }
    var mynoteListView = new noteListView(mynotelist);


    function testInitializesWithNoteList() {
        assert.isTrue(mynoteListView.list === mynotelist.all());
    };

    function testReturnsHTMLList() {
        assert.isTrue(mynoteListView.returnHTML() === "<ul><li><div>Note 1</div></li><li><div>Note 2</div></li><li><div>Note 3</div></li></ul>")
    };



    testInitializesWithNoteList();
    testReturnsHTMLList();

})();