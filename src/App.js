import React, { Component , PureComponent } from 'react';
import './App.css';
import { scaleRotate as Menu } from 'react-burger-menu';
import { InputGroup, InputGroupAddon, InputGroupText, Input ,Badge , Media, Row, Col} from 'reactstrap';
import { Bell , ArrowUp ,ArrowRight ,Book , Clipboard ,FileText ,Map } from 'react-feather';
import logo from '../src/logo.png';
import gplay from '../src/gplay.png';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,PieChart, Pie, Sector, Cell,
} from 'recharts';

const data = [
  {
    name: '1', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: '2', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: '3', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: '4', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: '5', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: '6', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: '7', uv: 3490, pv: 4300, amt: 2100,
  },
];
const TiniCharts = [
  {
    name: '1', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: '2', uv: 1000, pv: 1398, amt: 2210,
  },
  {
    name: '3', uv: 5000, pv: 9800, amt: 2290,
  },
  {
    name: '4', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: '5', uv: 4890, pv: 4800, amt: 2181,
  },
  {
    name: '6', uv: -2090, pv: 3800, amt: 2500,
  },
  {
    name: '7', uv: 3490, pv: 4300, amt: 2100,
  },
  {
    name: '8', uv: 1490, pv: 4300, amt: 2100,
  },
  
];

const PieChartData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
];

const COLORS = [ '#00C49F', '#f2f2f2'];

class App extends Component  {
  showSettings (event) {
    event.preventDefault();
  }
  render() {
  return (
     <div id="outer-container" style={{"height":"100%"}}> 
      <Menu  pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="" className="menu-item" href="/about">Lead Available</a>
          <a id="" className="menu-item" href="/contact">Lead Purchaser</a>
          <a id="" className="menu-item" href="">Contact Us</a>
          <a id="" className="menu-item" href="">About Us</a>
       
        </Menu>

        <main id="page-wrap">
         
          
          <div className="screen">
            <div className="wrapper">
                <header className="header">
                  <Row className="row">
                    <Col sm={{size:6 , offset:1}} >
                    <img src={logo} className="logo"/>
                    </Col>
                    <Col sm="4" >
                      <InputGroup>
                        <Input placeholder="username" />
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>@</InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                      
                  </Col>
                  <Col sm="1" >
                    <Bell/><Badge color="danger">3</Badge>
                  </Col>
                  
                  </Row>
                </header>
                <section>
                  <Row className="row clearfix">
                    <Col sm="12" className="heading">
                        <h3>Dasboard</h3>
                        <span>Welcome to HomeGator Dashboard</span>
                    </Col> 
                  </Row>
                  <Row className="row clearfix">
                  <Col xs="12" sm="3" >
                      <div className="dashboard_box">
                        <Media>
                          <Media left href="#">
                            <Media object data-src={gplay} /><Book/>
                           </Media>
                          <Media body>
                            <Media heading>
                              LEAD AVAILABLE
                            </Media>
                              1685 <ArrowUp/>
                          </Media>
                        </Media>
                        <div className="bottom-part">
                          <span className="text-left">Since last month </span>
                          <span className="pull-right"> <ArrowRight/></span>
                        </div>
                      </div>
                    </Col>


                    <Col xs="12" sm="3">
                      <div className="dashboard_box">
                        <Media>
                          <Media left href="#">
                            <Media object data-src={gplay} /><Clipboard/>
                          </Media>
                          <Media body>
                            <Media heading>
                              LEAD AVAILABLE
                            </Media>
                              1685 <ArrowUp/>
                          </Media>
                        </Media>
                        <div className="bottom-part">
                          <span className="text-left">Since last month </span>
                          <span className="pull-right"> <ArrowRight/></span>
                        </div>
                      </div>
                    </Col>

                    <Col xs="12" sm="3" >
                      <div className="dashboard_box">
                        <Media>
                          <Media left href="#">
                            <Media object data-src={gplay} /><FileText/>
                          </Media>
                          <Media body>
                            <Media heading>
                              LEAD AVAILABLE
                            </Media>
                              1685 <ArrowUp/>
                          </Media>
                        </Media>
                        <div className="bottom-part">
                          <span className="text-left">Since last month </span>
                          <span className="pull-right"> <ArrowRight/></span>
                        </div>
                      </div>
                    </Col>

                    <Col xs="12" sm="3" >
                      <div className="dashboard_box">
                        <Media>
                          <Media left href="#">
                            <Media object data-src={gplay} /><Map/>
                          </Media>
                          <Media body>
                            <Media heading>
                              LEAD AVAILABLE
                            </Media>
                              1685 <ArrowUp/>
                          </Media>
                        </Media>
                        <div className="bottom-part">
                          <span className="text-left">Since last month </span>
                          <span className="pull-right"> <ArrowRight/></span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm="8" xs="12">
                      <div className="panel">
                        <div className="panel-heading">
                          <h5>Monthly Earning</h5>
                        </div>
                        <div className="panel-body">
                        <Row>
                        <Col sm="8">
                        <AreaChart
                            width={600}
                            height={400}
                            data={data}
                            margin={{
                              top: 10, right: 30, left: 0, bottom: 0,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#00a499" fill="#b9dfdb" />
                          </AreaChart>
                          </Col>
                          <Col sm="2" className="piechart-containter">
                            <span className="month-text">This Month</span>
                            <h3> $34,252 </h3>
                            <p>It will be as simple as in fact it will be occidental</p>
                            <PieChart width={500} height={150} onMouseEnter={this.onPieEnter}>
                                <Pie
                                  data={PieChartData}
                                  cx={45}
                                  cy={80}
                                  innerRadius={30}
                                  outerRadius={50}
                                  fill="#8884d8"
                                  paddingAngle={0}
                                  dataKey="value"
                                >
                                  {
                                    data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                  }
                                </Pie>
                              </PieChart>
                            
                          </Col>
                          <Col sm="2" className="piechart-containter">
                            <span className="month-text">This Month</span>
                            <h3> $34,252 </h3>
                            <p>It will be as simple as in fact it will be occidental</p>
                            <PieChart width={500} height={150} onMouseEnter={this.onPieEnter}>
                                <Pie
                                  data={PieChartData}
                                  cx={50}
                                  cy={80}
                                  innerRadius={30}
                                  outerRadius={50}
                                  fill="#8884d8"
                                  paddingAngle={0}
                                  dataKey="value"
                                >
                                  {
                                    data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                                  }
                                </Pie>
                              </PieChart>
                            
                          </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                    <Col sm="4">
                      <div className="panel">
                        <div className="panel-heading">
                          <h5>Sales Analytics</h5>
                        </div>
                        <div className="panel-body">
                          <Row className="sales_analytics">
                            <Col sm="12">
                              <div>
                                <h6>Online</h6>
                                <h4>1,563</h4>
                              </div>
                              <div className="text-right">
                                  <AreaChart
                                    width={200}
                                    height={60}
                                    data={TiniCharts}
                                    margin={{
                                      top: 5, right: 0, left: 0, bottom: 5,
                                    }}
                                  >
                                    <Area type="monotone" dataKey="uv" stroke="#58b9b0" fill="#c2e4e0" />
                                  </AreaChart>
                              </div>
                            </Col>
                          </Row>
                          <Row className="sales_analytics">
                            <Col sm="12">
                              <div>
                                <h6>Online</h6>
                                <h4>1,563</h4>
                              </div>
                              <div className="text-right">
                                  <AreaChart
                                    width={200}
                                    height={60}
                                    data={TiniCharts}
                                    margin={{
                                      top: 5, right: 0, left: 0, bottom: 5,
                                    }}
                                  >
                                    <Area type="monotone" dataKey="uv" stroke="#58b9b0" fill="#c2e4e0" />
                                  </AreaChart>
                              </div>
                            </Col>
                          </Row>
                          <Row className="sales_analytics">
                            <Col sm="12">
                              <div>
                                <h6>Online</h6>
                                <h4>1,563</h4>
                              </div>
                              <div className="text-right">
                                  <AreaChart
                                    width={200}
                                    height={60}
                                    data={TiniCharts}
                                    margin={{
                                      top: 5, right: 0, left: 0, bottom: 5,
                                    }}
                                  >
                                    <Area type="monotone" dataKey="uv" stroke="#58b9b0" fill="#c2e4e0" />
                                  </AreaChart>
                              </div>
                            </Col>
                          </Row>
                          <Row className="sales_analytics">
                            <Col sm="12">
                              <div>
                                <h6>Online</h6>
                                <h4>1,563</h4>
                              </div>
                              <div className="text-right">
                                  <AreaChart
                                    width={200}
                                    height={60}
                                    data={TiniCharts}
                                    margin={{
                                      top: 5, right: 0, left: 0, bottom: 5,
                                    }}
                                  >
                                    <Area type="monotone" dataKey="uv" stroke="#58b9b0" fill="#c2e4e0" />
                                  </AreaChart>
                              </div>
                            </Col>
                          </Row>
                          
                          
                        </div>
                      </div>
                    </Col>
                  </Row>
                </section>
              
            </div>
          </div>
          
        </main>
      </div>
      
  );
  }
}


export default App;
