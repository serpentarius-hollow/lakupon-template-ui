import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Search from './components/Search'
import Alert from './components/Alert'
import Carousel from './components/Carousel'
import Menu from './components/Menu'
import List from './components/List'

import { Layout, Row, Col, Divider, BackTop } from 'antd'

const { Header, Footer, Content } = Layout

class App extends Component {
  state = {
    visibleAlert: true
  };

  handleCloseAlert = () => {
    this.setState({ visibleAlert: false });
  };

  render() {
    return (
      <div>
        <Layout>
          <Header>
            <Search />
          </Header>
          <Content>
            <Row>
              <Col span={24}>
                <Carousel />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div>
                  { this.state.visibleAlert ? (
                    <Alert closed={this.handleCloseAlert} />
                  ) : null }
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Menu />
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col span={24}>
                <p>Lakupon Spesial
                  <span style={{float: 'right'}}>
                    <a href="#" style={{color: 'white'}}>Lihat Semua</a>
                  </span>
                </p>
                <Carousel />
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col span={24}>
                <p>Produk Terbaru
                  <span style={{float: 'right'}}>
                    <a href="#" style={{color: 'white'}}>Lihat Semua</a>
                  </span>
                </p>
                <List />
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col span={24}>
                <p>Rekomendasi Kami
                  <span style={{float: 'right'}}>
                    <a href="#" style={{color: 'white'}}>Lihat Semua</a>
                  </span>
                </p>
                <List />
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col span={24}>
                <p>Produk Terpopuler
                  <span style={{float: 'right'}}>
                    <a href="#" style={{color: 'white'}}>Lihat Semua</a>
                  </span>
                </p>
                <List />
              </Col>
            </Row>
          </Content>
          <Footer>
            Footer
            {/* <Tabs defaultActiveKey="1" onChange={this.callbackTab}>
              <TabPane tab={<span><Icon type="home" /></span>} key="1" />
              <TabPane tab={<span><Icon type="compass" /></span>} key="2" />
              <TabPane tab={<span><Icon type="heart" /></span>} key="3" />
              <TabPane tab={<span><Icon type="user" /></span>} key="4" />
            </Tabs> */}
          </Footer>
          <BackTop />
        </Layout>
      </div>
    );
  }
}

export default App;
