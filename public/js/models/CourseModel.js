CourseEditor.service('CourseModel', function () {

  this.getCourses = function () {

    var courses = CM.get('courses');

    if (!courses) {
      return []
    }

    return courses.myCourses;
  };

  /*
  this.getCourseById = function (courseId) {
    var courses = JSON.parse(window.localStorage.getItem("courses"));

    for (var i = 0; i < courses.myCourses.length; i++) {
      if (courses.myCourses[i].id === courseId) {
        return courses.myCourses[i];
      }
    }
  })
  */

  this.addCourse = function (courseData, editorData) {

    var courses = CM.get('courses').on('notfound', function(data, response) {
      courses = {
        myCourses: []
      }
    });


    var course = {
      id: Math.random().toString(36).substring(7),
      title: courseData.title,
      summary: editorData,
      advice: courseData.advice
    }

    courses.myCourses.push(course);
    alert(JSON.stringify(courses));

    CM.set(courses).on('error', function(data, response) {
        alert(repsonse);
      });

    alert('test');


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
