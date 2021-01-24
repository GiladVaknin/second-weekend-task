let objects = [
  {
    topic: "HTML",
    startedAt: new Date("2021-01-16:15:00"),
    finishedAt: new Date("2021-01-26:11:00"),
    tasksGiven: 9,
    tasksFinished: 5,
  },
  {
    topic: "CSS",
    startedAt: new Date("2021-01-01:13:00"),
    finishedAt: new Date("2021-01-08:00:00"),
    tasksGiven: 7,
    tasksFinished: 5,
  },
  {
    topic: "JavaScript",
    startedAt: new Date("2021-01-25:13:40"),
    finishedAt: new Date("2021-01-28:20:00"),
    tasksGiven: 16,
    tasksFinished: 15,
  },
  {
    topic: "Github",
    startedAt: new Date("2021-01-24:11:00"),
    finishedAt: new Date("2021-01-27:18:00"),
    tasksGiven: 20,
    tasksFinished: 19,
  },
  {
    topic: "Fcc",
    startedAt: new Date("2021-01-20:07:50"),
    finishedAt: new Date("2021-01-20:19:00"),
    tasksGiven: 14,
    tasksFinished: 12,
  },
  {
    topic: "More HTML",
    startedAt: new Date("2021-01-23:09:00"),
    finishedAt: new Date("2021-01-25:17:00"),
    tasksGiven: 6,
    tasksFinished: 5,
  },
  {
    topic: "Loops",
    startedAt: new Date("2021-01-20:17:25"),
    finishedAt: new Date("2021-01-28:11:00"),
    tasksGiven: 5,
    tasksFinished: 5,
  },
  {
    topic: "Objects",
    startedAt: new Date("2021-01-12:11:30"),
    finishedAt: new Date("2021-01-22:14:00"),
    tasksGiven: 9,
    tasksFinished: 8,
  },
  {
    topic: "Arrays",
    startedAt: new Date("2021-01-20:12:40"),
    finishedAt: new Date("2021-01-21:13:00"),
    tasksGiven: 12,
    tasksFinished: 5,
  },
  {
    topic: "Conditions",
    startedAt: new Date("2021-01-20:11:00"),
    finishedAt: new Date("2021-01-20:13:00"),
    tasksGiven: 6,
    tasksFinished: 3,
  },
];
for (let object of objects) {
  object.totalTime = Math.floor(
    Math.abs(object.finishedAt - object.startedAt) / 36e5
  );
  object.percentDone = Math.floor(
    (object.tasksFinished / object.tasksGiven) * 100
  );
  object.startedAt = object.startedAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  object.finishedAt = object.finishedAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}
document.write("<table>");
document.write("<th>Topic</th>");
document.write("<th>Tasks Finished %</th>");
document.write("<th>Tasks Finished</th>");
document.write("<th>Tasks Given</th>");
document.write("<th>Total Time</th>");
document.write("<th>Finished At</th>");
document.write("<th>Started At</th>");
for (let i = 0; i < objects.length; i++) {
  let p = objects[i].percentDone;
  let t = objects[i].totalTime;
  let classNamePercent;
  let classNameTime;
  if (t <= 24) {
    classNameTime = "fast";
  } else if (72 >= t >= 24) {
    classNameTime = "med";
  } else {
    classNameTime = "slow";
  }
  if (p <= 50) {
    classNamePercent = "bad";
  } else if (80 >= p > 50) {
    classNamePercent = "good";
  } else {
    classNamePercent = "avg";
  }

  //   for (let data of objects) {
  document.write(`<tr>
  <td>${objects[i].topic}</td>
  <td class="${classNamePercent}">${objects[i].percentDone}%</td>
  <td>${objects[i].tasksFinished}</td>
  <td>${objects[i].tasksGiven}</td>
  <td class="${classNameTime}">${objects[i].totalTime}</td>
  <td>${objects[i].finishedAt}</td>
  <td>${objects[i].startedAt}</td>
  </tr>`);
  //   }
}
document.write("</table>");
// for (let percent of objects) {
//   let p = percent.percentDone;
//   let classNamePrecent;
//   let classNameTime;
//   if (p > 0) {
//     classNameTime = "good";
//   }
// }
