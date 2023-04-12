import cv from '../../data/cv.json'

export default function AboutMe() {
    return (
        <section className="section has-background-grey" id="about-me">
            <div className="container has-text-centered">
                <figure className="resize container is-180x180">
                    <img
                        src={cv.basics.picture}
                        alt={cv.basics.name}
                        className="is-rounded"
                    />
                </figure>
            </div>

            <div className="container has-text-centered">
                <p className="subtitle is-4 has-text-black has-text-weight-bold">
                    {cv.basics.x_title}
                </p>
                <p className="content has-text-black-bis">
                    {cv.basics.summary}
                </p>
            </div>
        </section>
    )
}
