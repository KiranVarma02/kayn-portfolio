const TimelineItem = ({date, company, summary, skills}) => {
    return (
        <div className="timeline-item is-success">
            <div className="timeline-marker is-image is-32x32">
                <img src="" alt=""/>
            </div>

            <div className="timeline-content">
                <p className="heading">{date}</p>
                <h1 className="title is-4">{company}</h1>
                {/*<span className={`skill-icon has-text-link is-size-4 fa-solid ${company}`}></span>*/}
                <p className="content" style={{maxWidth: "25em"}}><strong>Summary: </strong>{summary}</p>
                <p className="content" style={{maxWidth: "25em"}}><strong>Skills: </strong>{skills}</p>
            </div>
        </div>
    )
}

export default TimelineItem;