var currentDay = function(){
  var d = new Date();
  var weekday = new Array(7);
  weekday[0]=  "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  return weekday[d.getDay()];
};

var pomodoroStr = '## Pomodoro.timer\
\nFirst pomodoro for 25 minutes\
\nBreak for 5 minutes\
\nSecond pomodoro for 25 minutes\
\nBreak for 5 minutes\
\nThird pomodoro for 25 minutes\
\nBreak for 5 minutes\
\nFourth pomodoro for 25 minutes\
\nLong break for 10 minutes';

var pomodoroDayStr = '# ' + currentDay() + '\
\n## Todo.todo\
\n  - Plan the day @max(1)\
\n\n' + pomodoroStr;

define(function(require, exports, module) {
    var Extensions = require('ft/core/extensions').Extensions;
    Extensions.addSnippet({ ';pmd': pomodoroStr });
    Extensions.addSnippet({ ';pmdD': pomodoroDayStr });
});
