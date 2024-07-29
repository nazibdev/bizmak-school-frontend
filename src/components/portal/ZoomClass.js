
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ZoomClass = () => {
    const navigate = useHistory();

    const ZoomClass = async () => {
        try {
            const response = await axios.get('http://localhost:8080/vehicle/api/v1/');
            console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };

    return (
        <div>
        <h5>Class</h5>
        {/* <button onClick={ZoomClass}>Zoom Class</button> */}
        Todays Class: <Link to={{ pathname: "https://us02web.zoom.us/j/4703000552" }} target="_blank">Join Class</Link>
        </div>
    )
};

export default ZoomClass;