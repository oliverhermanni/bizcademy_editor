CourseEditor.service('QuizModuleModel', function() {
  this.addQuizModule = function(chapterId, moduleData, editorContent) {
    var current_chapter = JSON.parse(window.localStorage.getItem(chapterId));

    if (!current_chapter) {
      current_chapter = []
    }

    var quizModule = {
      id: Math.random().toString(36).substring(7),
      type: 'quiz',
      title: moduleData.title,
      text: editorContent,
      advice: moduleData.advice,
      theme: moduleData.theme,
      answers: moduleData.answers,
      hints: moduleData.hints
    }

    current_chapter.push(quizModule);

    window.localStorage.setItem(chapterId, JSON.stringify(current_chapter));

  }
});