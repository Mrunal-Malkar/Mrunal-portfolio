export const AllProject = [
  {
    name1: "ChAtTeR",
    github1: "https://github.com/Mrunal-Malkar/chatter--Mern-stack-chat-app",
    about1: "Real time chat application",
    image1: "projectimage/chatterimage.png",
    livelink1: "https://chatter-mern-stack-chat-app.vercel.app/",
    name2: "Musical",
    about2: "Listen according to listeners!",
    github2: "https://github.com/Mrunal-Malkar/Musical",
    image2: "musicalimage",
    livelink2: "https://musical-eosin.vercel.app/",
  },
  {
    name1: "amazon-clone",
    github1: "https://github.com/Mrunal-Malkar/Amazon-clone-using-Html-CSS",
    about1: "Built stunning Amazon clone using HTML and CSS only!",
    image1: "amazon-css.jpg",
    livelink1: "https://mrunal-malkar.github.io/Amazon-clone-using-Html-CSS/",
    name2: "BookStore website",
    about2: "Built using MERN stack, deployed on vercel and railway",
    github2: "https://github.com/Mrunal-Malkar/Bookstore-website-MERN-stack",
    image2: "BookStore.png",
    livelink2: "https://bookstore-website-mern-stack.vercel.app/",
  },
  {
    name1: "Contact-app",
    github1: "https://github.com/Mrunal-Malkar/Contact-app-using-firebase-and-react",
    about1: "This is the contact app made using react and firebase.",
    image1: "contact-app-firebase.png",
    livelink1: "",
    name2: "Font-Awesome",
    about2: "font awesome website clone using bootstrap and css",
    github2: "https://github.com/Mrunal-Malkar/Font-awesome-website-clone-using-bootstrap-CSS",
    image2: "fontawesomeclone.jpg",
    livelink2: "",
  },
  {
    name1: "Rock-paper-scissors",
    github1: "https://github.com/Mrunal-Malkar/Rock-Paper-Scissor-game-using-Javascript-js-",
    about1: "Rock paper scissors game using vanilla css and javascript!",
    image1: "rockpaperscissorgame.jpg",
    livelink1: "https://mrunal-malkar.github.io/Rock-Paper-Scissor-game-using-Javascript-js-/",
    name2: "Todo List App",
    about2: "this is where you store your todos! built using react with super clean UI.",
    github2: "https://github.com/Mrunal-Malkar/To-Do-List-with-React",
    image2: "todolist.jpg",
    livelink2: "",
  },
];

//ADD ONE PROJECT BOILERPLATE

//{ name1: "",
// github1: "",
// about1: "",
// image1: "",
// livelink1: ""},


//ADD TWO PROJECTS BOILERPLATE

// {
//   name1: "",
//   github1: "",
//   about1: "",
//   image1: "",
//   livelink1: "",
//   name2: "",
//   about2: "",
//   github2: "",
//   image2: "",
//   livelink2: "",
// },

function latest3Project() {
  const topProjects = [];
  for (const val of AllProject) {
    if (topProjects.length >= 3) break;
    
    if (val.name1 && val.github1 && val.about1 && val.name2 && val.about2 && val.github2) {
      topProjects.push(val);
    } else if (val.name1 && val.github1 && val.about1) {
      topProjects.push({
        name1: val.name1,
        github1: val.github1,
        about1: val.about1,
        image1: val.image1,
        livelink1: val.livelink1,
      });
    }
  }
  return topProjects;
}

export const LatestWorkedProject = latest3Project();
