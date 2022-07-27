import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import axios from 'axios';



class UnicryptTokenForm extends React.Component {
    state = { 
        Name:'',
        Price:"",
        Rank:"",
        Fullname:'',
        Vol:"",
        Index:"",
        Dmcap:"",
        Thirtyday:"",
        Oneday:"",
        totalToken:[]
     } 
     addData = ()=>{debugger
        const Data =
            {
            Name: this.state.Name,
            Price:this.state.Price,
            Rank:this.state.Rank,
            Fullname:this.state.Fullname,
            Vol:this.state.Vol,
            Index:this.state.Index,
            Dmcap:this.state.Dmcap,
            Thirtyday:this.state.Thirtyday,
            Oneday:this.state.Oneday,
            }
        
        axios.post('http://127.0.0.1:9999/addData',Data)
       
        .then(res => {
          console.log('Record Inserted');
          console.log(res.data);
        })
        // alert()
    }
    Catauto = ()=>{
        axios.get('http://127.0.0.1:9999/getData')
            .then(res => {
            const total = res.data;
            this.setState({totalToken: total})
            })
     }
     componentDidMount(){
        this.Catauto()
    }
    render() { 
       

        return (
                <>
               

                    <form className="mt-5">
                        {/* <label>Name:   </label> */}
                        <input onChange={(e)=>(this.setState({Name:e.target.value}))} placeholder="Name"></input>
                        <input onChange={(e)=>(this.setState({Price:e.target.value}))} placeholder="Price"></input>
                        <input onChange={(e)=>(this.setState({Rank:e.target.value}))} placeholder="rank"></input>
                        <input onChange={(e)=>(this.setState({Fullname:e.target.value}))} placeholder="fullname"></input>
                        <input onChange={(e)=>(this.setState({Vol:e.target.value}))} placeholder="vol"></input><br/>
                        <input onChange={(e)=>(this.setState({Index:e.target.value}))} placeholder="pair-Index"></input>
                        <input onChange={(e)=>(this.setState({Dmcap:e.target.value}))} placeholder="dmcap"></input><br/>
                        <input onChange={(e)=>(this.setState({Thirtyday:e.target.value}))} placeholder="30d"></input>
                        <input onChange={(e)=>(this.setState({Oneday:e.target.value}))} placeholder="1d"></input>
                        <button onClick={this.addData} className="btn btn-info ms-5" type="button">Submit</button>
                    </form>
                    </>
        );
    }
}
 
export default UnicryptTokenForm;