CourseEditor.service('CourseModel', function () {

  this.getCourses = function () {

    var courses = JSON.parse(window.localStorage.getItem("courses"));

    if (!courses) {
      return []
    }

    return courses.myCourses;
  };

  this.getCourseById = function (courseId, chapterId) {
    var course = JSON.parse(window.localStorage.getItem("courses"));



    if (!course) {
      return []
    }

    return course;
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

});
