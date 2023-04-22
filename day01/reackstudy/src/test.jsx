import React, { Component } from 'react'; 
import './App.css'; 
import { Input, Button, Table, Pagination, message } from 'antd'; 
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 
import { getTodoList, addTodo, delTodo, editTodo } from './store/action'; 
import './index.css'
function test(){
   
    export default test


    constructor(props){
        super(props)
        this.state = {
            id: 0,
            title: '',
            date: '',
            selected: -1,
            arr : localStorage.getItem('arr') ? JSON.parse(localStorage.getItem('arr')) : [],

            currentIndex: 0, 
        }
    }
    componentDidMount(){
        this.setState({
            arr: []
        })
        // 遍历arr 1-1000个数据，有id，title，date
        for(let i = 0; i < 1000; i++){
            this.state.arr.push({
                id: this.state.id++,
                title: '标题' + this.state.id,
                date: '2020-01-01'
            })
        }
    }
    // 滚动加载数据
    onScroll(e){
        let scrollTop = e.target.scrollTop
        this.setState({
            currentIndex: Math.floor(scrollTop / 30)
        })
    }
    // 点击提交按钮 保存数据，完成数据的增加，渲染数据  保存数据到本地
    onTouch(){
        if(this.state.title == '' || this.state.date == ''){
            alert('请填写完整')
            return
        }
        this.state.arr.unshift({
                id: this.state.id++,
                title: this.state.title,
                date: this.state.date
            })
            this.setState({
                title: '',
                date: ''
            })
            localStorage.setItem('arr',JSON.stringify(this.state.arr))
    }
    onClear(){
        this.setState({
            title: '',
            date: ''
        })
    }
    onDel(id){
        this.state.arr = this.state.arr.filter(item => item.id != id)
        localStorage.setItem('arr',JSON.stringify(this.state.arr))
    }
    // 编辑回显input框，更改原有数据，保持数据的数量不变
    onEdit(id){
        let item = this.state.arr.find(item => item.id == id)
        this.setState({
            title: item.title,
            date: item.date
        })
        this.state.arr = this.state.arr.filter(item => item.id != id)
    }
    // 获取展示的数据长度10条
    displayArr(){
        return this.state.arr.slice(this.state.currentIndex, this.state.currentIndex + 10)
    }

}
    const columns = [ 
        { title: '标题', dataIndex: 'title', key: 'title' }, 
        { title: '日期', dataIndex: 'date', key: 'date' }, 
        { title: '操作', key: 'action', render: (text, record) => ( 
            <span> 
                <Link to={`/edit/${record.id}`}>编辑</Link> 
                <span className="ant-divider" /> 
                <a href="javascript:;">删除</a> 
            </span> 
        ), }, 
    ]; 
    class App extends Component { 
        constructor(props) { 
            super(props); 
            this.state = { 
                title: '', 
                date: '', 
                id: 0, 
                total: 0, 
                pageSize: 10, 
                current: 1 
            }; 
        } 
        componentDidMount() { 
            const { pageSize, current } = this.state; 
            this.props.getTodoList({ pageSize, current }); 
        } 
        componentWillReceiveProps(nextProps) { 
            if (nextProps.data !== this.props.data) { 
                const { total, pageSize, current } = nextProps.data; 
                this.setState({ 
                    total, 
                    pageSize, 
                    current 
                }); 
            } 
        } 
        render() { 
            const { title, date, id, total, pageSize, current } = this.state; 
            const { data } = this.props; 
            return ( 
                <div className="App"> 
                    <header className="App-header"> 
                        <h1 className="App-title">编号: {id}</h1> 
                    </header> 
                    <div className="App-intro"> 
                        <div>标题: <Input value={title} onChange={e => this.setState({ title: e.target.value })} /></div> 
                        <div>日期: <Input value={date} onChange={e => this.setState({ date: e.target.value })} /></div> 
                        <div><Button onClick={this.onTouch} type="primary">提交</Button></div> 
                        <div><Button onClick={this.onClear} type="default">重置</Button></div> 
                        <div> 
                            <Table columns={columns} dataSource={data.list} /> 
                            <Pagination 
                                total={total} 
                                pageSize={pageSize} 
                                current={current} 
                                onChange={this.onPageChange} 
                            /> 
                        </div> 
                    </div> 
                </div> 
            ); 
        } 
        onTouch = () => { 
            const { title, date, id } = this.state; 
            if (!title) { 
                message.error('标题不能为空'); 
                return; 
            } 
            if (!date) { 
                message.error('日期不能为空'); 
                return; 
            } 
            const { addTodo, editTodo } = this.props; 
            if (id) { 
                editTodo({ id, title, date }); 
            } else { 
                addTodo({ title, date }); 
            } 
            this.onClear(); 
        } 
        onClear = () => { 
            this.setState({ 
                title: '', 
                date: '', 
                id: 0 
            }); 
        } 
        onPageChange = (current) => { 
            const { pageSize } = this.state; 
            this.props.getTodoList({ pageSize, current }); 
        } 
    } 
    const mapStateToProps = (state) => { 
        return { 
            data: state.data 
        } 
    } 
    const mapDispatchToProps = (dispatch) => { 
        return { 
            getTodoList: bindActionCreators(getTodoList, dispatch), 
            addTodo: bindActionCreators(addTodo, dispatch), 
            delTodo: bindActionCreators(delTodo, dispatch), 
            editTodo: bindActionCreators(editTodo, dispatch) 
        } 
    } 
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
