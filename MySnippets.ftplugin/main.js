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
\n1st pomodoro for 25 minutes\
\nBreak for 5 minutes\
\n2nd pomodoro for 25 minutes\
\nBreak for 5 minutes\
\n3rd pomodoro for 25 minutes\
\nBreak for 5 minutes\
\n4th pomodoro for 25 minutes\
\nLong break for 10 minutes';

var pomodoroLongStr = pomodoroStr + '\
\n5th pomodoro for 25 minutes\
\nBreak for 5 minutes\
\n6th pomodoro for 25 minutes\
\nBreak for 5 minutes\
\n7th pomodoro for 25 minutes\
\nBreak for 5 minutes\
\n8th pomodoro for 25 minutes\
\nLong break for 10 minutes';

var pomodoroDayStr = '# ' + currentDay() + '\
\n## Todo.todo\
\n  - Plan the day @max(1)\
\n\n' + pomodoroLongStr;

define(function(require, exports, module) {
    var Extensions = require('ft/core/extensions').Extensions;
    Extensions.addSnippet({ ';pmd': pomodoroStr });
    Extensions.addSnippet({ ';pmdL': pomodoroLongStr });
    Extensions.addSnippet({ ';pmdD': pomodoroDayStr });
});
