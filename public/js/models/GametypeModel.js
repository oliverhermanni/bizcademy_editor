CourseEditor.service('GametypeModel', function(CourseModel, ChapterModel) {
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

});