
//import avatarImg from '/public/Avatars/AvatarLogo.jpg'
//import SkillTag from "./Components/JSX/SkillTag"
import CurrentSkills from "./Components/CurrentSkillsCard/CurrentSkills"
import FutureSkills from "./Components/FutureSkillsCard/FutureSkills"
import './App.scss'
import ProfileRender from "./Components/Profile/Profile"
import Contacts from "./Components/Contacts/Contacts"

function App() {

  return (
    <div className="mainWindow">
      <ProfileRender />
      {/* <Contacts /> */}
      <CurrentSkills />
      <FutureSkills />



    </div>
  )
}

export default App

{/* <SkillTag name={Logos[0]["name"]} img={Logos[0]["img"]} />
        <SkillTag name={Logos[1]["name"]} img={Logos[1]["img"]} />
        <SkillTag name={Logos[2]["name"]} img={Logos[2]["img"]} />
        <SkillTag name={Logos[3]["name"]} img={Logos[3]["img"]} />
        <SkillTag name={Logos[4]["name"]} img={Logos[4]["img"]} />
        <SkillTag name={Logos[5]["name"]} img={Logos[5]["img"]} />
        <SkillTag name={Logos[6]["name"]} img={Logos[6]["img"]} />
        <SkillTag name={Logos[7]["name"]} img={Logos[7]["img"]} />
        <SkillTag name={Logos[8]["name"]} img={Logos[8]["img"]} />
        <SkillTag name={Logos[9]["name"]} img={Logos[9]["img"]} />
        <SkillTag name={Logos[10]["name"]} img={Logos[10]["img"]} />
        <SkillTag name={Logos[11]["name"]} img={Logos[11]["img"]} /> */}