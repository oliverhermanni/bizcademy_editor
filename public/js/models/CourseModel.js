CourseEditor.service('CourseModel', function () {

  this.getCourses = function () {

    var courses = JSON.parse(window.localStorage.getItem("courses"));

    if (!courses) {
      return []
    }

    return courses.myCourses;
  };

  this.getCourseById = function (courseId) {
    var courses = JSON.parse(window.localStorage.getItem("courses"));

    for (var i = 0; i < courses.myCourses.length; i++) {
      if (courses.myCourses[i].id === courseId) {
        return courses.myCourses[i];
      }
    }
  }

  this.addCourse = function (courseData) {

    var courses = JSON.parse(window.localStorage.getItem("courses"));

    if(!courses) {
      courses = {
        myCourses: []
      }
    }

    var course = {
      id: Math.random().toString(36).substring(7),
      title: courseData.title,
      summary: courseData.summary,
      advice: courseData.advice
    }

    courses.myCourses.push(course);

    window.localStorage.setItem("courses", JSON.stringify(courses));
  };

  this.saveCourse = function (courseId, courseData) {
    var courses = JSON.parse(window.localStorage.getItem("courses"));

    for (var i = 0; i < courses.myCourses.length; i++) {
      if (courses.myCourses[i].id === courseId) {
        courses.myCourses[i] = {
          id: courseData.id,
          title: courseData.title,
          summary: courseData.summary,
          advice: courseData.advice,
          chapters: courseData.chapters
        };
        window.localStorage.setItem("courses", JSON.stringify(courses));
      }
    }
  }

});
