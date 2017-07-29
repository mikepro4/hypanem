import React, {PropTypes} from 'react';

export default class Timeline extends React.Component {
  render() {
    return (
      <div className="timeline-container" ref="timeline">
        {/* {this.props.timeline.hoverTime && !this.props.timeline.rangeStart ?
          <div className='hoverTime' style={hoverTimePosition}>
            <span>{formatTime(this.props.timeline.hoverTime)}</span>
          </div>
          : ''
        }
        {this.props.timeline.rangeStart && this.props.timeline.rangeLength ?
          <div className={rangeCLases} style={hoverTimePosition}>
            <span className='range_time'>{formatTime(this.props.timeline.rangeStart)} – {formatTime(this.props.analysis.rangeStart + this.props.analysis.rangeLength)}</span>
            <span className='range_total'>({formatTime(this.props.timeline.rangeLength)})</span>
          </div>
          : ''
        }
        <ul className='time_list'>
          {times}
        </ul> */}
      </div>
    );
  }
}
