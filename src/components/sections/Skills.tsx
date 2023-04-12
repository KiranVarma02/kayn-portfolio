import Skill from "../elements/Skill";
import cv from '../../data/cv.json'


const buildSkillsRow = (skills, start, end) => {
    const batch: any[] = skills.slice(start, end)
    let skillsComponents: any[] = []

    batch.forEach((value: any, index) => {
        skillsComponents.push(
            <div key={index} className="column is-3">
                <Skill icon={value.x_icon} text={value.name}/>
            </div>
        )
    })

    return skillsComponents
}

const Skills = () => {
    return (
        <section className="section has-background-grey-light" id="skills">
            <div className="container">
                <h1 className="title">Skills</h1>
                <div className="columns">
                    {buildSkillsRow(cv.skills, 0, 4)}
                </div>
                <div className="columns">
                    {buildSkillsRow(cv.skills, 4, 8)}
                </div>
            </div>
        </section>
    )
}

export default Skills;