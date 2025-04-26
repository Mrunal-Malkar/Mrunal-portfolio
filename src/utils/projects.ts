export const AllProject = [
  {
    name1: "ChAtTeR",
    gihub1: "https://github.com/Mrunal-Malkar/chatter--Mern-stack-chat-app",
    about1: "Real time chat application",
    image1: "projectimage/chatterimage.png",
    livelink1: "https://chatter-mern-stack-chat-app.vercel.app/",
    name2: "Musical",
    about2: "Listen according to listeners!",
    gihub2: "https://github.com/Mrunal-Malkar/Musical",
    image2: "musicalimage",
    livelink2: "https://musical-eosin.vercel.app/",
  },
];

// name1: "",
// gihub1: "",
// about1: "",
// image1: "",
// livelink1: "",

function getTopProjects() {
  if (AllProject.length == 0) {
    return null;
  }
  const no = [];
  const topProject = AllProject.map((val) => {
    if (no.length >= 3) {
      return null;
    }
    if (
      val.name1 &&
      val.gihub1 &&
      val.about1 &&
      val.name2 &&
      val.about2 &&
      val.gihub2
    ) {
      no.push("1", "1");
      return val;
    } else if (val.name1 && val.gihub1 && val.about1) {
      no.push("1");
      return val;
    }
  });
  return topProject;
}

export const latest3Project = getTopProjects();
