import {useLocation} from "react-router-dom";

const LocationDisplay = () => {
    const location = useLocation();
    return <h1 data-testid="location-display">{location.pathname}</h1>
}

export default LocationDisplay;