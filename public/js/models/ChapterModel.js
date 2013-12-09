CourseEditor.service('ChapterModel', function() {
    this.getChapters = function($courseId) {

        var course = JSON.parse(window.localStorage.getItem($courseId));

        if (!course) {
            return []
        } else {
            return course.chapters;
        }
    };

    this.addChapter = function(courseId, chapterTitle, chapterContent) {
        var chapter = {
            title: chapterTitle,
            content: chapterContent,
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
    }

});