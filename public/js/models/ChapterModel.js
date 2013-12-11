CourseEditor.service('ChapterModel', function (CourseModel) {

  this.getChapters = function (courseId) {
    var course = CourseModel.getCourseById(courseId);

    if (!course || !course.chapters) {
      return []
    } else {
      return course.chapters;
    }
  };

  this.getChapterById = function (courseId, chapterId) {
    var course = CourseModel.getCourseById(courseId)

    if (!course || !course.chapters) {
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
      id: Math.random().toString(36).substring(7),
      title: chapter.title,
      summary: chapter.summary,
      advice: chapter.advice
    }

    var course = CourseModel.getCourseById(courseId)

    if (!course.chapters) {
      course = {
        id: course.id,
        title: course.title,
        summary: course.summary,
        advice: course.advice,
        chapters: []
      }
    }
    course.chapters.push(chapter);
    CourseModel.saveCourse(course.id, course);
  };

  this.deleteChapter = function (courseId, chapterId) {
    var course = CourseModel.getCourseById(courseId)

    if (!course || !course.chapters) {
      return;
    }
    for (var i = 0; i < course.chapters.length; i++) {
      if (course.chapters[i].id === chapterId) {
        course.chapters.splice(i, 1);
       CourseModel.saveCourse(course.id, course);
        break;
      }
    }
  }

});