import '@/Components/CSS/SkillTag.scss'
const SkillTag = ({ name, img }) => {
    return (
        <div className="skill">
            <div className="skill__icon">
                <img src={img} alt={"логотип" + name} />
            </div>
            <div className="Tag">
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default SkillTag;