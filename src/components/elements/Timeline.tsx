import cv from '../../data/cv.json'
import TimelineHeader from "./TimelineHeader";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
    return (
        <div className="timeline is-centered timeline-is-centered">
            <header className="timeline-header">
                <span className="tag is-medium is-dark">
                    {new Date().getFullYear()}
                </span>
            </header>

            <div className="timeline-item">
                <div className="timeline-marker is-success"></div>
                <div className="timeline-content"></div>
            </div>

            {cv.work
                .map(item => {
                    return new Date(item.startDate).getFullYear()
                })
                .filter((value, index, self) => self.indexOf(value) === index)
                .map((year, index) => {
                    let content: any[] = []
                    content.push(
                        <TimelineHeader key={index} year={year}/>
                    )

                    content.push(
                        cv.work
                            .filter(work => new Date(work.startDate).getFullYear() === year)
                            .map((item, index) => {
                                return (
                                    <TimelineItem
                                        key={index}
                                        date={new Date(item.startDate).toLocaleString("en-UK", {
                                            month: "long",
                                            year: "numeric"
                                        })}
                                        company={item.company}
                                        summary={item.summary}
                                        skills={item.skills}
                                    />
                                )
                            })
                    )

                    return content
                })
            }
        </div>
    )
}

export default Timeline;