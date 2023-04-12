import {Button} from 'react-bootstrap'
import {AiOutlineDownload} from 'react-icons/ai'
// import cvPdf from '../../Assets/Kiran_Varma.pdf'
import {Document, Page, pdfjs} from 'react-pdf'
import {useEffect, useState} from 'react'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const cvPdf = 'https://github.com/KiranVarma02/kayn-portfolio/blob/main/src/Assets/Kiran_Varma.pdf'

const CV = () => {
    const [width, setWidth] = useState(1200)
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages)
        setPageNumber(1)
    }

    const changePage = (offset: number) => {
        setPageNumber((prevPageNumber: number) => prevPageNumber + offset)
    }

    const previousPage = () => {
        changePage(-1)
    }

    const nextPage = () => {
        changePage(1)
    }

    return (
        <div id="cv">
            <section className="section has-bg-image">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-half">
                            <Button
                                className="button is-success"
                                variant="primary"
                                href={cvPdf}
                                target="_blank"
                            >
                                <AiOutlineDownload/>Download CV
                            </Button>

                            <p className="is-success">
                                Page {pageNumber || (numPages ? 1 : '--')} of {numPages ?? '--'}
                            </p>
                            <button
                                className="button is-success"
                                disabled={pageNumber <= 1}
                                onClick={previousPage}>
                                Previous
                            </button>
                            <button
                                className="button is-success"
                                disabled={pageNumber > 3}
                                onClick={nextPage}
                            >
                                Next
                            </button>
                        </div>

                    </div>

                </div>

                <section className="resume">
                    <Document
                        file={cvPdf}
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page pageNumber={pageNumber} scale={width > 786 ? 1.7 : 0.6} renderTextLayer={false}/>
                    </Document>
                </section>

            </section>

        </div>
    )
}

export default CV
