import Avatar from "./components/Avatar";
import Intro from "./components/Intro";
import Skillset from "./components/Skillset";
let skilSet = [
  {
    skillName: "HTML+CSS",
    level: "Advance",
    color: "#3333cc",
  },
  {
    skillName: "Javascript",
    level: "Advance",
    color: "#ffff4d",
  },
  {
    skillName: "Web Design",
    level: "Advance",
    color: "#79d279",
  },
  {
    skillName: "Git and Github",
    level: "Intermediate",
    color: "#ff0000",
  },
  {
    skillName: "React",
    level: "Intermediate",
    color: "#00ffff",
  },
  {
    skillName: "Next.Js",
    level: "Beginner",
    color: " #ff4dc4",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <ul className="skill-list">
          {skilSet.map((skill, i) => (
            <li key={i}>
              <Skillset skill={skill} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
