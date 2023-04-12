import PropTypes from 'prop-types'

const Skill = ({icon, text}) => {
    return (
        <div className="card has-background-grey-lighter">
            <div className="card-header-icon">
                <span className={`skill-icon has-text-link is-size-4 fa-solid ${icon}`}></span>
            </div>

            <div className="card-footer-item">
                <p className="skill-title is-size-6">{text}</p>
            </div>
        </div>
    )
}

export default Skill

Skill.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string
}
