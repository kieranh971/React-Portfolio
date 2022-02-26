import Pdf from "../../assets/Resume.pdf"

export default function Resume(){
    return (
        <object className='pdf-container' data={Pdf} type="application/pdf" width="100%" height="100%">
            <p className='text-center'>Click here for <a href={Pdf}>a PDF of my most up to date resume.</a></p>
        </object>
        )
}