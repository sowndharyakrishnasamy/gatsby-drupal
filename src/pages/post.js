import React from "react"

class Post extends React.Component {
    constructor(){
        super();
        this.state = {
            data:{
                type: "node--article",
                attributes: {
                    title:"",
                    body: {
                        value: ""
                    }
                }
            },
            val :""
        }
    }
    textHandler = (event)=>{
             this.setState({data:{
                 ...this.state.data,
                 attributes:{
                     ...this.state.data.attributes,
                     body:{
                         ...this.state.data.attributes.body,
                         value : event.target.value}}}})
     }
    InputHandler = (event)=>{
            this.setState({
                data:{
                ...this.state.data,
                attributes:{
                    ...this.state.data.attributes,
                    title:event.target.value,
                    body:{
                        ...this.state.data.attributes.body}}}})

    }
    submitHandler = (event)=>{
        event.preventDefault();
        fetch("http://localhost/gatsbydrupal/jsonapi/node/article",{
            mode: 'cors',
            method: 'POST',
            headers: {
                "Content-type": "application/vnd.api+json",
                "Accept":"application/vnd.api+json"
			},
            body:JSON.stringify({
            data:this.state.data
            })
        }).then(response =>  response.json())
        .then(json => {console.log(json);})
                
    }
    render(){
        return (
            <form class="Form">
            <label>Title</label><br/>
            <input type="text" onChange={this.InputHandler} name="title"/><br/>
            <label>Body</label><br/>
            <input type="textarea" onChange={this.textHandler} name="body" className="textarea"/><br/>
            <input type="submit" onClick={this.submitHandler} value="SUBMIT"/>
        </form>
        )
    }
}
export default Post
