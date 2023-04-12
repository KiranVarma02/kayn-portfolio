import PropTypes from 'prop-types'

const TimelineHeader = ({year}) => {
    return (
        <header className="timeline-header">
            <span className="tag is-success">{year}</span>
        </header>
    )
}

export default TimelineHeader

TimelineHeader.propTypes = {
    year: PropTypes.number
}
