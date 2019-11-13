import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";
import { injectIntl } from "react-intl";
import { connect } from "react-redux";

import PassView from '../../components/controls/PassView';
import InfiniteScroll from "react-infinite-scroll-component";

import {
  loadPage,
} from "../../redux/actions";

export class PassagesPage extends Component {

    constructor(props) {
      super(props);
      this.fetchMoreData = this.fetchMoreData.bind(this);
    }

    componentDidMount() {
      this.props.loadPage('passages', 0);
    }

    fetchMoreData()  {
      const {passages_page, passages_pages} = this.props.api;
      if (passages_page < passages_pages) {
        this.props.loadPage('passages', passages_page + 1);
      }
    };

    render() {
      const {
        passages,
        passages_page,
      } = this.props.api;

      console.log('component ', passages, passages_page);
      return (
          <Fragment>
          <Row>
            <Colxx xxs="12">
              <Breadcrumb heading="menu.passages" match={this.props.match} />
              <Separator className="mb-5" />
            </Colxx>
          </Row>
          <Row>
            <Colxx xxs="12" className="mb-4">
              <InfiniteScroll
                dataLength={passages.length}
                next={this.fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
              >
                {passages.map((data, index) => (
                  <div key={index}>
                    <PassView itemData={data} title={"Passage" + String(index)} />
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
  )(PassagesPage)
);
