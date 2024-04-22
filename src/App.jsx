
//import avatarImg from '/public/Avatars/AvatarLogo.jpg'
import SkillTag from "./Components/JSX/SkillTag"
import './App.css'
import Logos from "./Components/JS/LogoSelector"


function App() {

  return (
    <>
      <div>
        <SkillTag name={Logos[0]["name"]} img={Logos[0]["img"]} />
        <SkillTag name={Logos[1]["name"]} img={Logos[1]["img"]} />
        <SkillTag name={Logos[2]["name"]} img={Logos[2]["img"]} />
        <SkillTag name={Logos[3]["name"]} img={Logos[3]["img"]} />
        <SkillTag name={Logos[4]["name"]} img={Logos[4]["img"]} />
        <SkillTag name={Logos[5]["name"]} img={Logos[5]["img"]} />
        <SkillTag name={Logos[6]["name"]} img={Logos[6]["img"]} />
      </div>

    </>
  )
}

export default App

