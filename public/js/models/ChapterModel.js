CourseEditor.service('ChapterModel', function () {

  this.getChapters = function (courseId) {

    var course = JSON.parse(window.localStorage.getItem(courseId));

    if (!course) {
      return []
    } else {
      return course.chapters;
    }
  };

  this.getChapterById = function (courseId, chapterId) {
    var course = JSON.parse(window.localStorage.getItem(courseId));

    if (!course) {
      return []
    }

    for (var i = 0; i < course.chapters.length; i++) {
      if (course.chapters[i].id === chapterId) {
        return course.chapters[i];
      }
    }
  }

  this.addChapter = function (courseId, chapter) {
    var chapter = {
      title: chapter.title,
      summary: chapter.summary,
      advice: chapter.advice,
      id: Math.random().toString(36).substring(7)
    }

    var course = JSON.parse(window.localStorage.getItem(courseId));

    if (!course) {
      course = {
        id: courseId,
        chapters: []
      }
    }
    course.chapters.push(chapter);
    window.localStorage.setItem(courseId, JSON.stringify(course));
  };

  this.deleteChapter = function (courseId, chapterId) {
    var course = JSON.parse(window.localStorage.getItem(courseId));
    console.log('test');

    if (!course || !course.chapters) {
      return;
    }
    for (var i = 0; i < course.chapters.length; i++) {
      if (course.chapters[i].id === chapterId) {
        course.chapters.splice(i, 1);
        window.localStorage.setItem(courseId, JSON.stringify(course));
        break;
      }
    }
  }

});