import * as d3 from 'd3';
import * as dataTravel from '../../dataTravel.json';
import * as dataWait from '../../dataWait.json';

// Activates on hover Map
function onMouseMoveMap(d) {
    const xPosition = d.clientX;
    const yPosition = d.clientY;
    const transportID = d.currentTarget.dataset.transport;
    const dataSetTravel = dataTravel.default[transportID];
    const dataSetWait = dataWait.default[transportID];

    d3.select(d.target)
        .style('opacity', 0.75)
        .style('cursor', 'pointer')

    d3.select('#tooltip')
        .classed('hidden', false)
        .style('left', xPosition + -90 + 'px')
        .style('top', yPosition + -40 + 'px');

    if (dataSetTravel) {
        d3.select('#content')
            .classed('hidden', false)
            .text(`${dataSetTravel.vervoer}: ${dataSetTravel.snelheid}, ${dataSetTravel.reistijd}`);
    }
    if (dataSetWait) {
        d3.select('#content')
            .classed('hidden', false)
            .text(`Maximale minuten wachten: ${dataSetWait.minWachten}`);
    }
}

function onMouseMoveGraph(d) {
    const xPosition = d.clientX;
    const yPosition = d.clientY;
    const transportID = d.currentTarget.dataset.transport
    const dataSet = dataTravel.default[transportID]

    d3.select(d.target)
        .style('opacity', 0.75)
        .style('cursor', 'pointer')

    d3.select('#tooltip')
        .classed('hidden', false)
        .style('left', xPosition + -150 + 'px')
        .style('top', yPosition + -40 + 'px');

    if (transportID !== 'wachten') {
        d3.select('#content')
            .classed('hidden', false)
            .text(`Vanaf ${dataSet.beginpunt} naar ${dataSet.eindpunt}`);
    }
    else {
        d3.select('#content')
            .classed('hidden', false)
            .text(`Aan het wachten op de tram bij ${dataSet.beginpunt}`);
    }


}

// Activates on stop hovering
function onMouseOut() {
    d3.select('#tooltip').classed('hidden', true);
    d3.select('#content').classed('hidden', true);

    d3.selectAll('path').style('opacity', 1)
}

export { onMouseMoveMap, onMouseMoveGraph, onMouseOut };