CourseEditor.service('ChapterModel', function (CourseModel) {

  this.getChapters = function (courseId) {
    var course = CourseModel.getCourseById(courseId);

    if (!course || !course.chapters) {
      return []
    } else {

      for(var m = 0; m < course.chapters.length; m++) {
        var modules_list = JSON.parse(window.localStorage.getItem(course.chapters[m].id));

        var ccm = course.chapters[m];

        var ccl = {
          id: ccm.id,
          title: ccm.title,
          summary: ccm.summary,
          advice: ccm.advice,
          modules: modules_list
        }

        course.chapters[m] = ccl;
      }
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

  this.getModulesByChapterId = function (chapterId) {
    var modules = JSON.parse(window.localStorage.getItem(chapterId));

    return modules;
  }

  this.addChapter = function (courseId, chapter, editorContent) {

    var chapter = {
      id: Math.random().toString(36).substring(7),
      title: chapter.title,
      summary: editorContent,
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