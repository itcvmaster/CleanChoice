import React from 'react';
import './ItemView.css';

class LessonView extends React.PureComponent {
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
            <span className="card-label">Name:</span>
            <span className="card-value">{itemData['name']}</span>
          </div>
          <div className="row-dir">
            <span className="card-label">Created at:</span>
            <span className="card-value">{itemData['created_at']}</span>
          </div>
          <div className="row-dir">
            <span className="card-label">Update at:</span>
            <span className="card-value">{itemData['updated_at']}</span>
          </div>

        </div>
        <div className="card-right" />
      </div>
    )
  }
}

export default LessonView;