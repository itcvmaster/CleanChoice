import React from 'react';
import './ItemView.css';

class ProblemView extends React.PureComponent {
  render() {
    let { itemData, title} = this.props;
    return (
      <div className="item-card">
        <div className="card-left" />
        <div className="card-body">
          <div className="card-title">{title}</div>
          <div className="row-dir">
            <span className="card-label">ID:</span>
            <span className="card-value">{itemData['id']}</span>
          </div>
          <div className="row-dir">
            <span className="card-label">Format:</span>
            <span className="card-value">{itemData['format']}</span>
          </div>
          <div className="row-dir">
            <span className="card-label">Difficulty:</span>
            <span className="card-value">{itemData['difficulty']}</span>
          </div>
          <div className="row-dir">
            <span className="card-label">Text:</span>
            <span className="card-value">{itemData['text']}</span>
          </div>

        </div>
        <div className="card-right" />
      </div>
    )
  }
}

export default ProblemView;