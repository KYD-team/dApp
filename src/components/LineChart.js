import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

function LineChart({ data }) {
  const chartRef = useRef(null)

  useEffect(() => {
    if (!data) return

    const margin = { top: 20, right: 20, bottom: 50, left: 50 }
    const width = 600 - margin.left - margin.right
    const height = 400 - margin.top - margin.bottom

    const svg = d3
      .select(chartRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

    // Create X axis
    const x = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d) => d.month))
      .padding(0.2)
    svg.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(x))

    // Create Y axis
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => Number(d.commits))])
      .range([height, 0])

    // Add trend line
    const line = d3
      .line()
      .x((d) => x(d.month) + x.bandwidth() / 2)
      .y((d) => y(d.commits))
    svg.append('path').datum(data).attr('fill', 'none').attr('stroke', 'violet').attr('stroke-width', 2).attr('d', line)

    // Add horizontal guides
    const guides = [0.25, 0.5, 0.75]
    guides.forEach((guide) => {
      svg
        .append('line')
        .attr('class', 'guide')
        .attr('x1', 0)
        .attr('y1', y(y.domain()[1] * guide))
        .attr('x2', width)
        .attr('y2', y(y.domain()[1] * guide))
        .attr('stroke', 'grey')
        .attr('stroke-dasharray', '4 4')
    })
  }, [data])

  return <svg ref={chartRef} />
}

export default LineChart
