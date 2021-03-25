import advancersPic from "../images/projects/advancers.png";
import carbonprintPic from "../images/projects/carbonprint-logo.png";
import civildiscordPic from "../images/projects/civil-discord.png";
import flippoPic from "../images/projects/flippo.png";
import ysePic from "../images/projects/yse-light.png";
import shewhocodesPic from "../images/projects/shewhocodes-light.png";
import angelhacksPic from "../images/events/angelhacks.jpg";
import superpositionPic from "../images/events/superposition2017.png";
import calhacksPic from "../images/events/calhacks2019-1.png";
import treehacksPic from "../images/events/treehacks2021.jpg";
import catalyst2018Pic from "../images/events/catalyst2019-1.webp";
import catalyst2019Pic from "../images/events/catalyst2019.jpg";
import techtogetherPic from "../images/events/techtogether.jpg";
import tcsessionPic from "../images/events/tcsession.png";
import wecodePic from "../images/events/wecode2018.jpg";
import rassPic from "../images/projects/logo-rass.png";
import ciscohackathonPic from "../images/events/ciscohack2021.png";

import java from "../images/techstack/java.svg";
import python from "../images/techstack/python.png";
import mysql from "../images/techstack/mysql.svg";
import react from "../images/techstack/react.png";
import html from "../images/techstack/html.png";
import css from "../images/techstack/css.png";
import javascript from "../images/techstack/javascript.png";

import visual from "../images/tools/visual-studio-code.svg";
import github from "../images/tools/github.png";
import jupyternotebook from "../images/tools/jupyternotebook.png";
import firebase from "../images/tools/firebase.png";

export const quotes = [
  {
    text:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: "Oprah Winfrey",
  },
  {
    text:
      "Imagination is more important than knowledge. knowledge is limited. Imagination encircles the world",
    author: "Albert Einstein",
  },
  {
    text: "Success is only meaningful and enjoyable if it feels like your own",
    author: "Michelle Obama",
  },
  {
    text:
      "Computer Science is no more about computers than astronomy is about telescopes.",
    author: "Theodore Roosevelt",
  },
];
export const advancers = {
  banner: advancersPic,
  name: "Advancers.ai",
  animate: "fade-right",
  when: "May 2019 - Jan 2020",
  award: "Grand Prize @ AngelHacks, Silicon Valley",
  title: "Start-up, Malaria Diagnosis Using Machine Learning (Mobile/Web)",
  role: "Android Developer & Team Member",
};

export const rass = {
  banner: rassPic,
  name: "Rass",
  animate: "fade-right",
  when: "March 11-14th 2021",
  award: "UR Winner @ Cisco ENHack@Home",
  title: "Working Assistant Tool: Notification Filter for Emails",
  role: "Data Scientist(Machine Learning)",
  link: "https://github.com/phyogitty/rass-ciscohackathon",
};
export const carbonprint = {
  banner: carbonprintPic,
  name: "Carbonprint",
  animate: "fade-left",
  link: "https://devpost.com/software/carbonprint",
  when: "Nov 2020 @ TechTogether Boston",
  award: "Best Sustainability Hack Sponsored by BostonHacks",
  title:
    "A Social Mobile App That Tracks and Awards for Sustainable Activities",
  role: "Front-end Engineer",
};

export const civildiscord = {
  banner: civildiscordPic,
  name: "Civil Discord",
  animate: "fade-left",
  link: "https://devpost.com/software/civil-discord",
  when: "Feb 2021 @ TreeHacks Stanford",
  role: "Flutter Web Developer",
  title:
    "A Social Web Platform for Compassionate Discussion Around Civil Topics",
};

export const flippo = {
  banner: flippoPic,
  name: "Flippopotamus",
  animate: "fade-right",
  link: "https://github.com/phyogitty/flippopotamus2",
  when: "Apr 2020",
  title: "A Memory Flipping Mobile Game",
  role: "Personal Project",
};

export const yse = {
  banner: ysePic,
  name: "Youth Society for Education",
  animate: "fade-right",
  when: "Jan 2019 - Aug 2020",
  title:
    "501(c)(3) Non-profit Organization for Underprivileged Youths in Myanmar",
  role: "Tech Officer",
};

export const shewhocodes = {
  banner: shewhocodesPic,
  name: "She Who Codes",
  animate: "fade-left",
  when: "June 2017 - May 2018",
  title: "Computer Science Club at CCSF Led by Female & Non-Binary Students",
  role: "Co-President",
};
class CycleLink {
  constructor(info, next) {
    this.state = { info, next };
  }
  getInfo = () => this.state.info;
  getNext = () => this.state.next;
  setNext = (newNext) => {
    this.state.next = newNext;
  };
}

const picArray = [
  { pic: calhacksPic, year: "2019" },
  { pic: angelhacksPic, year: "2019" },
  { pic: catalyst2019Pic, year: "2019" },
  { pic: tcsessionPic, year: "2018" },
  { pic: catalyst2018Pic, year: "2018" },
  { pic: wecodePic, year: "2018" },
  { pic: superpositionPic, year: "2017" },
];

const ciscohackathon2021 = new CycleLink(
  { pic: ciscohackathonPic, year: "2021" },
  null
);
const treehacks2021 = new CycleLink(
  { pic: treehacksPic, year: "2021" },
  new CycleLink({ pic: techtogetherPic, year: "2020" }, null)
);
ciscohackathon2021.setNext(treehacks2021);
let curr = ciscohackathon2021.getNext();

for (var i = 0; i < picArray.length; i++) {
  curr.setNext(new CycleLink(picArray[i], null));
  curr = curr.getNext();
}

curr.setNext(ciscohackathon2021);

var currEvent = ciscohackathon2021;
export const getNextFour = () => {
  let tempEvent = currEvent;
  let retList = [];
  for (var j = 0; j < 4; j++) {
    retList.push(tempEvent.getInfo());
    tempEvent = tempEvent.getNext();
  }
  currEvent = currEvent.getNext();
  return retList;
};

export const themeLight = {
  textColour: "tc-black",
  // blurColour1: "bg-white-blur",
  blurColour1: "bg-white-blur",
  blurColour2: "bg-white-blur",
  otherBgLight: "bg-blue",
  otherBgDark: "bg-blue-medium",
  textFieldColour: "bg-light",
  isDarkMode: false,
};

export const themeDark = {
  textColour: "tc-gray",
  blurColour1: "bg-black-blur",
  blurColour2: "bg-black-blur",
  otherBgLight: "bg-dark-blue",
  otherBgDark: "bg-dark",
  textFieldColour: "bg-secondary",
  isDarkMode: true,
};

export const techstack = [java, python, mysql, html, css, javascript, react];

export const tools = [jupyternotebook, visual, firebase, github];
