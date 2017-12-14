import React,{Component} from 'react';
import {Icon,Button,Collapse,Col,Popover,Row} from 'antd';
import './demo.scss';
import fetchData from '../utils/fetch.js';

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
      content:{},
    }
  }
  componentDidMount() {

  }

  render() {
    const {assistData,classname}=this.state;
    return (
      <div className="assistant">
        <h3 style={{color:this.props.text}}>助理</h3>
        <div>
        {
          assistData.map((res,i)=>{
            switch(res.title){
              case "今天为您分配的新建潜在客户":
                return (
                  <div key={i}>
                    <NotActivity 
                      res={res}
                    />
                  </div>
                );
              break;
              case "业务机会包含过期任务":
                return(
                  <div key={i}>
                    <NotActivity 
                      res={res}
                    />
                  </div>
                );
              break; 
              case "30天没有任何活动" :
                return (
                  <div key={i}>
                    <NotActivity 
                      res={res}
                    />
                  </div>
                );
              break;
            }
          })
        }
      </div>
      </div>
    )
  }
}

export default Assistant


class NotActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetail:false
    }
  }
  showPopover(res){
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
    const {res}=this.props
    const {showDetail}=this.state
 
      switch(res.title){
        case "今天为您分配的新建潜在客户":
          return (
            <div className="collapse">
              <div className="collapse-header">
                <dl>
                  <span className="arrow" >
                    <Icon type="right" onClick={()=>{this.setState({showDetail:true})}} style={{display:showDetail ? "none" : "block"}} />
                    <Icon type="down" onClick={()=>{this.setState({showDetail:false})}} style={{display:showDetail ? "block" : "none"}} />
                  </span>
                  <dt><Icon className="star" type="star" /></dt>
                  <Col span={16} >
                    <Col span={16} style={{color:this.props.text,lineHeight: showDetail ? "32px" :"16px" }}>{res.title}</Col>
                    <Col span={16} style={{display:showDetail ? "none" : "block"}}>
                      <Popover overlayClassName="assistantPopover"
                        content={this.showPopover(res)} trigger="click"
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
                  </Col>
                </dl>
              </div>
              <div className="collapse-content" style={{display:showDetail? "block":"none"}}>
                <Row>
                  <Popover overlayClassName="assistantPopover"
                    content={this.showPopover(res)} trigger="click"
                    title={
                      <div className="popoverTitle">
                        <Icon className="star" type="star" />
                        <span style={{color:this.props.text}}>{res.name}</span>
                      </div>
                    }
                  >
                    <a style={{color:this.props.link}}>{res.name}</a>
                  </Popover>  
                </Row>
                <Row>
                  <p style={{color:this.props.text}}>{res.iphone}·<a style={{color:this.props.link}}>{res.holder}</a></p>
                </Row>
              </div>
            </div>
          );
        break;
        case "业务机会包含过期任务":
          return(
            <div className="collapse">
              <div className="collapse-header">
                <dl>
                  <span className="arrow" >
                    <Icon type="right" onClick={()=>{this.setState({showDetail:true})}} style={{display:showDetail ? "none" : "block"}} />
                    <Icon type="down" onClick={()=>{this.setState({showDetail:false})}} style={{display:showDetail ? "block" : "none"}} />
                  </span>
                  <dt><Icon type="heart" /></dt>
                  <Col span={16} >
                    <Col span={16} style={{color:this.props.text,lineHeight: showDetail ? "32px" :"16px" }}>{res.title}</Col>
                    <Col span={16} style={{display:showDetail ? "none" : "block"}}>
                      <Popover overlayClassName="assistantPopover"
                        content={this.showPopover(res)} trigger="click"
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
                  </Col>
                </dl>
              </div>
              <div className="collapse-content" style={{display:showDetail? "block":"none"}}>
                <Row>
                  <Popover overlayClassName="assistantPopover"
                    content={this.showPopover(res)} trigger="click"
                    title={
                      <div className="popoverTitle">
                        <Icon type="heart" />
                        <span style={{color:this.props.text}}>{res.name}</span>
                      </div>
                    }
                  >
                    <a style={{color:this.props.link}}>{res.name}</a>
                  </Popover>
                </Row>
              </div>
            </div>
          );
        break; 
        case "30天没有任何活动" :
          return (
            <div className="collapse">
              <div className="collapse-header">
                <dl>
                  <span className="arrow" >
                    <Icon type="right" onClick={()=>{this.setState({showDetail:true})}} style={{display:showDetail ? "none" : "block"}} />
                    <Icon type="down" onClick={()=>{this.setState({showDetail:false})}} style={{display:showDetail ? "block" : "none"}} />
                  </span>
                  <dt><Icon type="heart" /></dt>
                  <Col span={16} >
                    <Col span={16} style={{color:this.props.text,lineHeight: showDetail ? "32px" :"16px" }}>{res.title}</Col>
                    <Col span={16} style={{display:showDetail ? "none" : "block"}}>
                      <Popover overlayClassName="assistantPopover"
                        content={this.showPopover(res)} trigger="click"
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
                  </Col>
                  <dd className="createIcon" style={{display:showDetail ? "none" : "block"}}>
                    <em className="leftIcon"><Icon type="bars" /></em>
                    <em><Icon type="calendar" /></em>
                  </dd>
                </dl>
              </div>
              <div className="collapse-content" style={{display:showDetail? "block":"none"}}>
                <Row>
                  <Popover overlayClassName="assistantPopover"
                    content={this.showPopover(res)} trigger="click"
                    title={
                      <div className="popoverTitle">
                        <Icon type="heart" />
                        <span style={{color:this.props.text}}>{res.name}</span>
                      </div>
                    }
                  >
                    <a style={{color:this.props.link}}>{res.name}</a>
                  </Popover>
                </Row>
                <Row className="Btn">
                  <Col span={8}><Button style={{color:this.props.btnText}}>新建任务</Button></Col>
                  <Col span={8}><Button style={{color:this.props.btnText}}>新建事件</Button></Col>
                </Row>
              </div>
            </div>
          );
        break;
      }      
  }
}
