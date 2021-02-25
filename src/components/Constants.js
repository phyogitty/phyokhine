import advancersPic from "../images/projects/advancers.png";
import carbonprintPic from "../images/projects/carbonprint-logo.png";
import civildiscordPic from "../images/projects/civil-discord.png";
import flippoPic from "../images/projects/flippo.png";
import ysePic from "../images/projects/yse-light.png";
import shewhocodesPic from "../images/projects/shewhocodes-light.png";
import angelhacksPic from "../images/events/angelhacks.jpg";
import superpositionPic from "../images/events/superposition2017.png";
import calhacksPic from "../images/events/calhacks2019.png";
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
  constructor(pic, next) {
    this.state = { pic, next };
  }
  getPic = () => {
    return this.state.pic;
  };
  getNext = () => {
    return this.state.next;
  };
  setNext = (newNext) => {
    this.state.next = newNext;
  };
}

const picArray = [
  calhacksPic,
  angelhacksPic,
  catalyst2019Pic,
  tcsessionPic,
  catalyst2018Pic,
  wecodePic,
  superpositionPic,
];
const treehacks2021 = new CycleLink(
  treehacksPic,
  new CycleLink(techtogetherPic)
);
let curr = treehacks2021.getNext();

for (var i = 0; i < picArray.length; i++) {
  curr.setNext(new CycleLink(picArray[i]));
  curr = curr.getNext();
}

curr.setNext(treehacks2021);

export const firstEvent = treehacks2021;
