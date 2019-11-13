import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

import LessonView from '../../components/controls/LessonView';
import InfiniteScroll from "react-infinite-scroll-component";

import {
  loadPage,
} from "../../redux/actions";

export class LessonsPage extends Component {

    constructor(props) {
      super(props);
      this.fetchMoreData = this.fetchMoreData.bind(this);
    }

    componentDidMount() {
      this.props.loadPage('lessons', 0);
    }

    fetchMoreData()  {
      const {lessons_page, lessons_pages} = this.props.api;
      if (lessons_page < lessons_pages) {
        this.props.loadPage('lessons', lessons_page + 1);
      }
    };

    render() {
      const {
        lessons,
        lessons_page,
      } = this.props.api;

      console.log('component ', lessons, lessons_page);
      return (
          <Fragment>
          <Row>
            <Colxx xxs="12">
              <Breadcrumb heading="menu.lessons" match={this.props.match} />
              <Separator className="mb-5" />
            </Colxx>
          </Row>
          <Row>
            <Colxx xxs="12" className="mb-4">
              <InfiniteScroll
                dataLength={lessons.length}
                next={this.fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
              >
                {lessons.map((data, index) => (
                  <div key={index}>
                    <LessonView itemData={data} title={"Lesson" + String(index)} />
                  </div>
                ))}
              </InfiniteScroll>
            </Colxx>
          </Row>
        </Fragment>
      )
    }
}

const mapStateToProps = ({ api }) => {
  return {
    api
  };
};
export default injectIntl(
  connect(
    mapStateToProps,
    {
      loadPage
    }
  )(LessonsPage)
);
