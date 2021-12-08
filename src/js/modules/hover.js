import * as d3 from 'd3';
import * as data from '../../data.json';

// Activates on hover bar chart
function onMouseMoveMap(d) {
    const xPosition = d.clientX;
    const yPosition = d.clientY;
    const transportID = d.currentTarget.dataset.transport
    const dataSet = data.default[transportID]

    d3.select('#tooltip')
        .classed('hidden', false)
        .style('left', xPosition + -90 + 'px')
        .style('top', yPosition + -40 + 'px');

    d3.select('#content')
        .classed('hidden', false)
        .text(`${dataSet.vervoer}: ${dataSet.snelheid}, ${dataSet.reistijd}`);
}

// Activates on stop hovering bar chart
function onMouseOut() {
    d3.select('#tooltip').classed('hidden', true);
    d3.select('#content').classed('hidden', true);
}

export { onMouseMoveMap, onMouseOut };