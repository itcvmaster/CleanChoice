import React from 'react';
import './ItemView.css';

class PassView extends React.PureComponent {
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
            <span className="card-label">Title:</span>
            <span className="card-value">{itemData['title']}</span>
          </div>
          <div className="row-dir">
            <span className="card-label">Notes:</span>
            <span className="card-value">{itemData['notes']}</span>
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

export default PassView;