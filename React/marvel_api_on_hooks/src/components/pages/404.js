import ErrorMessage from "../errorMessage/ErrorMessage"
import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <div>
            <ErrorMessage/>
            <p style={{'fontSize': '22px'}}>Page doesn't exist!</p>
            <Link style ={{'fontSize': '22px', 'marginTop': '10px'}} 
                to="/">
                    Back to the main page...
            </Link>
        </div>
    )
}

export default Page404;