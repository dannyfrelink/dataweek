import { ReactComponent as ReactMap } from './map.svg';

function Map() {
    function onClick(d) {
        const transportType = d.currentTarget.dataset.transport;
    }

    // SVG of Mickey's route
    return (
        <ReactMap />
    );
}

export default Map;