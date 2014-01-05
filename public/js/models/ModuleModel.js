CourseEditor.service('ModuleModel', function(CourseModel, ChapterModel) {
  this.getModuleById = function (courseId, chapterId, moduleId) {

    var chapter =  JSON.parse(window.localStorage.getItem(chapterId));

    if (!chapter) {
      return []
    }

    for (var i = 0; i < chapter.length; i++) {
      if (chapter[i].id === moduleId) {
        return chapter[i];
      }
    }
  }

  this.deleteModule = function (chapterId, moduleId) {
    var chapter =  JSON.parse(window.localStorage.getItem(chapterId));

    if (!chapter) {
      return [];
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