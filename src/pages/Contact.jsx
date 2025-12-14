import { Link as LINK } from 'react-router-dom';

function Contact () {
    return (
        <>
            <div className="bg-dark text-light py-4 mb-2 rounded">
                <h1 className="mx-4 mb-2 pb-4">
                    <i className="fa-solid fa-phone me-2"></i> Contact Page
                </h1>

                <pre className="mx-4 text-wrap fs-5">
                    <i class="fa-solid fa-circle-info text-info"></i> Data here is currently unavailable. 
                    Till then visit 👉🏻 <LINK to={'/profile'} className='text-light text-decoration-none'><strong>Profile</strong></LINK>
                </pre>

            </div>
        </>
    )
}

export default Contact;