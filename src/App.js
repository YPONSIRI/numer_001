import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { Component } from 'react'
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, CalculatorOutlined, CaretRightOutlined } from '@ant-design/icons';
//Root
import Bisection from './Root/RootofEquation/Bisection';
import Onepoint from './Root/RootofEquation/Onepoint';
import NewtonRaph from './Root/RootofEquation/NewtonRaph';
import FalsePosition from './Root/RootofEquation/FalsePosition';
import Secant from './Root/RootofEquation/Secant';
// import Cramer from './Root/LinearAlgeba/Cramer';
// import Jacobi from './Root/LinearAlgeba/๋Jacobi';
// import NewtonD from './Root/Interpolation/NewtonD';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <Layout>
          <Header style={{ background: "#212F3C", color: "white" }} className="header">
            <div>

            </div>
          </Header>

          <Content style={{ padding: '0 60px' }}>
            <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
              <Sider className="site-layout-background" width={270} >
                <Menu
                  mode="inline"
                  theme="dark"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%' }}
                >
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <CalculatorOutlined />
                      Root of Equation
                </span>
                    }
                  >
                    <Menu.Item key="1"><CaretRightOutlined />Bisection <Link to="/Bisection" />  </Menu.Item>
                    <Menu.Item key="2"><CaretRightOutlined />False Position <Link to="/FalsePosition" /> </Menu.Item>
                    <Menu.Item key="3"><CaretRightOutlined />One Point <Link to="/Onepoint" />  </Menu.Item>
                    <Menu.Item key="4"><CaretRightOutlined />Newton Raphson <Link to="/NewtonRaph" />  </Menu.Item>
                    <Menu.Item key="5"><CaretRightOutlined />Secant <Link to="/Secant" />  </Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={
                      <span>
                        <CalculatorOutlined />
                      Linear Algeba
                </span>
                    }
                  >
                    <Menu.Item key="6"><CaretRightOutlined />Cramer </Menu.Item>
                    <Menu.Item key="7"><CaretRightOutlined />Gauss Jordan </Menu.Item>
                    <Menu.Item key="8"><CaretRightOutlined />Gauss Seidel  </Menu.Item>
                    <Menu.Item key="9"><CaretRightOutlined />Jacobi  </Menu.Item>
                    <Menu.Item key="10"><CaretRightOutlined />Conjugate Gadient  </Menu.Item>
                    <Menu.Item key="11"><CaretRightOutlined />Gauss Elimination  </Menu.Item>
                    <Menu.Item key="12"><CaretRightOutlined />LU </Menu.Item>
                    <Menu.Item key="13"><CaretRightOutlined />Cholesky </Menu.Item>
                  </SubMenu>

                  <SubMenu
                    key="sub3"
                    title={
                      <span>
                        <CalculatorOutlined />
                      Interpolation Technique
                </span>
                    }
                  >
                    <Menu.Item key="14"><CaretRightOutlined />Newton's Divided-Differnce </Menu.Item>
                    <Menu.Item key="15"><CaretRightOutlined />Lagrange  </Menu.Item>
                    <Menu.Item key="16"><CaretRightOutlined />Spline  </Menu.Item>
                  </SubMenu>

                  <SubMenu
                    key="sub4"
                    title={
                      <span>
                        <CalculatorOutlined />
                      Regression
                </span>
                    }
                  >
                    <Menu.Item key="17"><CaretRightOutlined />Linear  </Menu.Item>
                    <Menu.Item key="18"><CaretRightOutlined />Polynomial  </Menu.Item>
                    <Menu.Item key="19"><CaretRightOutlined />Multiple Linear  </Menu.Item>
                  </SubMenu>

                  <SubMenu
                    key="sub5"
                    title={
                      <span>
                        <CalculatorOutlined />
                      Intergration
                </span>
                    }
                  >
                    <Menu.Item key="20"><CaretRightOutlined />Trapzoidal  </Menu.Item>
                    <Menu.Item key="21"><CaretRightOutlined />Composite Trapzoidal  </Menu.Item>
                    <Menu.Item key="22"><CaretRightOutlined />Simpson  </Menu.Item>
                    <Menu.Item key="23"><CaretRightOutlined />Composite Simpson  </Menu.Item>

                  </SubMenu>

                </Menu>
              </Sider>
              <Content style={{ background: "#212F3C", color: "black", padding: '0 24px', minHeight: 750 }}>
                <Route path="/Bisection" component={Bisection} />
                <Route path="/Onepoint" component={Onepoint} />
                <Route path="/NewtonRaph" component={NewtonRaph} />
                <Route path="/FalsePosition" component={FalsePosition} />
                <Route path="/Secant" component={Secant} />
                

              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Router>
    )
  }
}

export default App;