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

let body = document.getElementsByTagName("body")[0];
let tbl = document.createElement("table");
let hrow = document.createElement("tr");
let cell1 = document.createElement("th");
let cell2 = document.createElement("th");
let cell3 = document.createElement("th");
let cell4 = document.createElement("th");
let cell5 = document.createElement("th");
let cell6 = document.createElement("th");
let cell7 = document.createElement("th");
cell1.innerText = "Topic";
cell2.innerText = "Tasks Finished%";
cell3.innerText = "Tasks Finished";
cell4.innerText = "Tasks Given";
cell5.innerText = "Total Time Spent";
cell6.innerText = "Finished At";
cell7.innerText = "Started At";
hrow.append(cell1);
hrow.append(cell2);
hrow.append(cell3);
hrow.append(cell4);
hrow.append(cell5);
hrow.append(cell6);
hrow.append(cell7);
tbl.append(hrow);

for (let i = 0; i < objects.length; i++) {
  let row = document.createElement("tr");
  for (let j = 0; j < 7; j++) {
    let cell = document.createElement("td");
    let cellText = PropNum(objects[i], j);
    if (j === 1) {
      cellText += "%";
      let p = objects[i].percentDone;
      cell.className = perBGColor(p);
    }
    if (j === 4) {
      let t = objects[i].totalTime;
      cell.className = timeBGColor(t);
    }

    cell.innerText = cellText;
    row.append(cell);
  }
  tbl.append(row);
}
body.append(tbl);

function PropNum(object, num) {
  switch (num < 7) {
    case num === 0:
      return object.topic;
    case num === 1:
      return object.percentDone;
    case num === 2:
      return object.tasksFinished;
    case num === 3:
      return object.tasksGiven;
    case num === 4:
      return object.totalTime;
    case num === 5:
      return object.finishedAt;
    case num === 6:
      return object.startedAt;
  }
}
function perBGColor(num) {
  if (num <= 50) {
    return "bad";
  } else if (85 > num) {
    return "good";
  } else {
    return "avg";
  }
}
function timeBGColor(t) {
  if (t <= 24) {
    return "fast";
  } else if (80 >= t) {
    return "med";
  } else {
    return "slow";
  }
}
