import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

import ProblemView from '../../components/controls/ProblemView';
import InfiniteScroll from "react-infinite-scroll-component";

import {
  loadPage,
} from "../../redux/actions";

export class ProblemsPage extends Component {

    constructor(props) {
      super(props);
      this.fetchMoreData = this.fetchMoreData.bind(this);
    }

    componentDidMount() {
      this.props.loadPage('problems', 0);
    }

    fetchMoreData()  {
      const {problems_page, problems_pages} = this.props.api;
      if (problems_page < problems_pages) {
        this.props.loadPage('problems', problems_page + 1);
      }
    };

    render() {
      const {
        problems,
        problems_page,
      } = this.props.api;

      console.log('component ', problems, problems_page);
      return (
          <Fragment>
          <Row>
            <Colxx xxs="12">
              <Breadcrumb heading="menu.problems" match={this.props.match} />
              <Separator className="mb-5" />
            </Colxx>
          </Row>
          <Row>
            <Colxx xxs="12" className="mb-4">
              <InfiniteScroll
                dataLength={problems.length}
                next={this.fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
              >
                {problems.map((data, index) => (
                  <div key={index}>
                    <ProblemView itemData={data} title={"Problem" + String(index)} />
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
  )(ProblemsPage)
);
