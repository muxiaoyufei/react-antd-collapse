import React,{Component} from 'react';
import {Icon,Button,Collapse,Col,Popover,Row} from 'antd';
import './style.scss';
import fetchData from '../utils/fetch.js';
import Demo from './demo.jsx'
const Panel = Collapse.Panel;

class Assistant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assistData:[{
        title:"今天为您分配的新建潜在客户",
        name:"test",
        iphone:"13877777777",
        holder:"Richard-ADM",
        possible:"50%",
        money:10100,
        customer:"microsoft0",
        type:"Existing"
      },{
        title:"业务机会包含过期任务",
        name:"业务机会-测试消息通知02",
        possible:"40%",
        money:10030,
        customer:"microsoft1",
        type:"Existing Customer-Replace"
      },{
        title:"30天没有任何活动",
        name:"test",
        possible:"20%",
        money:14000,
        customer:"microsoft2",
        type:"Customer-Replace"
      },{
        title:"30天没有任何活动",
        name:"业务机会测试010-测试微帖跟踪",
        possible:"30%",
        money:10005,
        customer:"microsoft3",
        type:"Existing Customer"
      }],
    }
  }
  componentDidMount() {

  }
  showDetail(res){
    return(
      <div className="detail">
        <Row>
          <Col span={12}>
            <span style={{color:this.props.text}}>可能性(%)</span>
            <span style={{color:this.props.text}}>{res.possible}</span>
          </Col>
          <Col span={12}>
            <span style={{color:this.props.text}}>金额</span>
            <span style={{color:this.props.text}}>￥{res.money}</span>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <span style={{color:this.props.text}}>客户名</span>
            <a style={{color:this.props.link}}>{res.customer}</a>
          </Col>
          <Col span={12}>
            <span style={{color:this.props.text}}>类型</span>
            <span style={{color:this.props.text}}>{res.type}</span>
          </Col>
        </Row>
      </div>
    )
  }
  render() {
    const {assistData}=this.state;
    let assistLenght=false;
    if(!assistData || assistData.length===0){
      assistLenght=false
    }else{
      assistLenght=true
    }
    return (
      <div className="assistant">
        <h3 style={{color:this.props.text}}>助理</h3>
        {assistData?<Collapse bordered={false} defaultActiveKey={['0']}>
          {
            assistData.map((res,i)=>{
              switch(res.title){
                case "今天为您分配的新建潜在客户":
                  return (
                    <Panel  key={i}
                      header={
                        <dl>
                          <dt><Icon className="star" type="star" /></dt>
                          <Col span={16} style={{color:this.props.text}}>{res.title}</Col>
                          <Col span={16} className="fold">
                            <Popover overlayClassName="assistantPopover"
                              content={this.showDetail(res)} trigger="hover"
                              title={
                                <div className="popoverTitle">
                                  <Icon className="star" type="star" />
                                  <span style={{color:this.props.text}}>{res.name}</span>
                                </div>
                              }
                            >
                              <a style={{color:this.props.link}}>{res.name}</a>
                            </Popover>
                          </Col>
                        </dl>
                      }
                    >
                      <div >
                        <Popover overlayClassName="assistantPopover"
                        content={this.showDetail(res)} trigger="hover"
                        title={
                          <div className="popoverTitle">
                            <Icon className="star" type="star" />
                            <span style={{color:this.props.text}}>{res.name}</span>
                          </div>
                        }
                      >
                        <a style={{color:this.props.link}}>{res.name}</a>
                      </Popover>
                        <p style={{color:this.props.text}}>{res.iphone}·<a style={{color:this.props.link}}>{res.holder}</a></p>
                      </div>
                    </Panel>
                  );
                break;
                case "业务机会包含过期任务":
                  return(
                    <Panel  key={i}
                      header={
                        <dl>
                          <dt><Icon type="heart" /></dt>
                          <Col span={16} style={{color:this.props.text}}>{res.title}</Col>
                          <Col span={16} className="fold">
                            <Popover overlayClassName="assistantPopover"
                              content={this.showDetail(res)} trigger="hover"
                              title={
                                <div className="popoverTitle">
                                  <Icon type="heart" />
                                  <span style={{color:this.props.text}}>{res.name}</span>
                                </div>
                              }
                            >
                              <a style={{color:this.props.link}}>{res.name}</a>
                            </Popover>
                          </Col>
                        </dl>
                      }
                    >
                      <Popover overlayClassName="assistantPopover"
                        content={this.showDetail(res)} trigger="hover"
                        title={
                          <div className="popoverTitle">
                            <Icon type="heart" />
                            <span style={{color:this.props.text}}>{res.name}</span>
                          </div>
                        }
                      >
                        <a style={{color:this.props.link}}>{res.name}</a>
                      </Popover>
                    </Panel>
                  );
                break;
                case "30天没有任何活动" :
                  return (
                    <Panel  key={i}
                      header={
                        <dl>
                          <dt><Icon type="heart" /></dt>
                          <dd>
                          <Col span={16} style={{color:this.props.text}}>{res.title}</Col>
                          <Col span={16} className="fold">
                            <Popover overlayClassName="assistantPopover"
                              content={this.showDetail(res)}  trigger="hover"
                              title={
                                <div className="popoverTitle">
                                  <Icon type="heart" />
                                  <span style={{color:this.props.text}}>{res.name}</span>
                                </div>}>
                              <a style={{color:this.props.link}}>{res.name}</a>
                          </Popover>
                          </Col>
                          </dd>
                          <dd className="createIcon">
                            <em className="leftIcon"><Icon type="bars" /></em>
                            <em><Icon type="calendar" /></em>
                          </dd>
                        </dl>
                      }
                    >
                      <div>
                        <Row>
                          <Popover overlayClassName="assistantPopover"
                            content={this.showDetail(res)} trigger="hover"
                            title={
                              <div className="popoverTitle">
                                <Icon type="heart" />
                                <span style={{color:this.props.text}}>{res.name}</span>
                              </div>}>
                              <a style={{color:this.props.link}}>{res.name}</a>
                          </Popover>
                        </Row>
                        <Row className="Btn">
                          <Col span={8}><Button style={{color:this.props.btnText}}>新建任务</Button></Col>
                          <Col span={8}><Button style={{color:this.props.btnText}}>新建事件</Button></Col>
                        </Row>
                      </div>
                      
                    </Panel>
                  );
                break;
              }
            })
          }
        </Collapse>:<div className="freeAssist" style={{color:this.props.text}}>
            目前，无注意事项。请稍后检查
        </div>}
        <Demo />
      </div>
    )
  }
}

export default Assistant
