CourseEditor.service('ModuleModel', function(CourseModel, ChapterModel) {
  this.getModelById = function (courseId, chapterId, moduleId) {
    alert('test');

    var chapter = ChapterModel.getChapterById(courseId, chapterId)

    if (!chapter) {
      return []
    }

    for (var i = 0; i < chapter.myCourses.length; i++) {
      if (chapter.myCourses[i].id === moduleId) {
        return chapter.myCourses[i];
      }
    }
  }

  this.deleteModule = function (chapterId, moduleId) {
    var chapter =  JSON.parse(window.localStorage.getItem(chapterId));


    if (!chapter) {
      return;
    }


    for (var i = 0; i < chapter.length; i++) {
      if (chapter[i].id === moduleId) {
        chapter.splice(i, 1);
        ChapterModel.saveChapter(chapterId, chapter);
        break;
      }
    }
  }


});