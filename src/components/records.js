import React from 'react'
import Record from './record'
import RecordForm from './recordForm'

export default class Records extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [
        {id:1,date: '2018-09-11',title: '收入', amount: '100'}
      ]
    }
  }
  add(row){
    
    let max = Math.max(...this.state.list.map(item=>item.id))
    row = Object.assign({},row,{id: max+1})
    console.log(111,row)
    this.setState({
      list: [...this.state.list,row]
    })
    
  }
  delete(id){
    this.setState({
      list : this.state.list.filter(item=>item.id!==id)
    })
  }
  editConfirm(row){
    // console.log(row)
    let list = this.state.list
    let index = list.findIndex(item=>item.id=== row.id)
    list.splice(index, 1, row)
    this.setState({
      list : list
    })
  }
  render() {
    return (
      <div>
        Account
      <RecordForm add={(row)=>this.add(row)}></RecordForm>
      <table className='table border'>
        <thead className="thead-dark">
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Amount</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {this.state.list.map(item=>
            <Record key={item.id} {...item} delete={(id)=>this.delete(id)} 
              editConfirm={(row)=>this.editConfirm(row)}>
            </Record>
            )
          }
        </tbody>
        
      </table>
      </div>
    )
  }
}