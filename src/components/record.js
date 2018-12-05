import React from 'react'

export default class record extends React.Component {
  constructor(){
    super()
    this.state = {
      edit: false
    }
  }
  delete(){
    this.props.delete(this.props.id)
  }
  edit(){
    this.setState({
      edit: true
    })
  }
  editConfirm(){
    console.log(this.refs.date.value)
    let params = {
      id: this.props.id
    }
    for (const key in this.refs) {
      params[key] = this.refs[key].value
    }
    this.props.editConfirm(params)
    this.setState({
      edit: false
    })
  }
  recordDOM(){
    return (
      <tr>
        <td>{this.props.date}</td>
        <td>{this.props.title}</td>
        <td>{this.props.amount}</td>
        <td>
          <button className="btn btn-primary" onClick={()=>this.edit()}>编辑</button>
          <button className="btn btn-primary" onClick={()=>this.delete()}>删除</button>
        </td>
      </tr>
    )
  }
  editDOM(){
    return (
      <tr>
        <td><input type='text' defaultValue={this.props.date} ref='date'></input></td>
        <td><input type='text' defaultValue={this.props.title} ref='title'></input></td>
        <td><input type='text' defaultValue={this.props.amount} ref='amount'></input></td>
        <td>
          <button className="btn btn-primary" onClick={()=>this.editConfirm()}>确定</button>
        </td>
      </tr>
    )
  }
  render() {
    if(this.state.edit){
      return this.editDOM()
    }else{
      return this.recordDOM()
    }
  }
}