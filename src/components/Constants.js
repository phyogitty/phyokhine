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

export const advancers = {
  banner: advancersPic,
  name: "Advancers.ai",
  animate: "fade-right",
};

export const carbonprint = {
  banner: carbonprintPic,
  name: "Carbonprint",
  animate: "fade-right",
};

export const civildiscord = {
  banner: civildiscordPic,
  name: "Civil Discord",
  animate: "fade-right",
};

export const flippo = {
  banner: flippoPic,
  name: "Flippopotamus",
  animate: "fade-right",
};

export const yse = {
  banner: ysePic,
  name: "Youth Society for Education",
  animate: "fade-right",
};

export const shewhocodes = {
  banner: shewhocodesPic,
  name: "She Who Codes",
  animate: "fade-right",
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

const treehacks2021 = new CycleLink(
  { pic: treehacksPic, year: "2021" },
  new CycleLink({ pic: techtogetherPic, year: "2020" }, null)
);
let curr = treehacks2021.getNext();

for (var i = 0; i < picArray.length; i++) {
  curr.setNext(new CycleLink(picArray[i], null));
  curr = curr.getNext();
}

curr.setNext(treehacks2021);

var currEvent = treehacks2021;
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
