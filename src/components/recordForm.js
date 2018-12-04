import  React, { Component } from 'react'

export default class recordForm extends Component {
  constructor() {
    super()
    this.state = {
      date: '',
      title: '',
      amount: '',
      disabled: true
    }
  }
  onChange(e){
    e.persist()
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  sumbit(e){
    this.props.add(this.state)
    this.setState({
      date: '',
      title: '',
      amount: ''
    })
  }
  // 计算是否禁用按钮
  sumbitDisable(){
    let {date, title, amount} = this.state 
    return date && title && amount
  }
  KeyDown(e){
    if(e.keyCode ===13 && this.sumbitDisable()){
      this.sumbit()
    }
  }
  render() {
    return (
      <div onKeyDown={(e)=>this.KeyDown(e)}>
        <form >
          <input type='text' onChange={this.onChange.bind(this)} name='date'
            value={this.state.date}>
          </input>
          <input type='text' onChange={this.onChange.bind(this)} name='title'
            value={this.state.title}>
          </input>
          <input type='text' onChange={this.onChange.bind(this)} name='amount'
            value={this.state.amount}>
          </input>
          <button type="button" className="btn btn-primary" disabled={!this.sumbitDisable()}
            onClick={this.sumbit.bind(this)}>提交
          </button>
        </form>
      </div>
    )
  }
}
