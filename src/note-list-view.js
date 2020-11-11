class NoteListView {
  constructor(noteList) {
    this.list = noteList.all();
  };

  returnHTML() {
    let htmlOutput = "";
    for (let i = 0; i < this.list.length; i++) {
      var limitedNote = this.list[i].text().substring(0, 20)
      console.log(limitedNote)
      htmlOutput += "<li><div>" + limitedNote + "</div></li>"
    }
    return "<ul>" + htmlOutput + "</ul>"
  };
};