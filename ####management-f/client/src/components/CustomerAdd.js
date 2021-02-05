import React from 'react';
import {post} from 'axios';

class CustomerAdd extends React.Component{
  //생성자 정의
  constructor(props){
    super(props);
    this.state ={
      //사용자의 프로필 이미지를 파일 형태로 보낼 수 있도록 해야되기 때문에 파일에는 null을 넣는다.
      file:null,
      userName:'',
      birthday:"",
      gender:"",
      job:"",
      fileName:''//file과 fileName은 서로 다름. file은 실제로 바이트 형태의 데이터를 의미, fileName은 이제 보내고자 하는 파일이미지의 이름이 되는 것.

    }
  }

handleFormSubmit = (e) => {
  e.preventDefault()//데이터가 서버로 전달되며 오류가 발생하지 않도록 함수를 불러옴.
  this.addCustomer()
    .then((response)=>{
      console.log(reponse.data);
    })
}

handleFileChange =(e)=>{
  this.setState({
    file:e.target.file[0],
    fileName:e.target.value
  })
}
handleValueChange =(e)=>{
  let nextState ={};
  nextState[e.target.name] = e.target.value;
  this.setState(nextState); //nextState값으로 현재 state값을 갱신
}
addCustomer=()=>{
  const url='/api/customers';
  const formData = new FormData();
  formData.append('image', this.state.file);
  formData.append('name', this.state.userName);
  formData.append('birthday', this.state.birthday);
  formData.append('gender', this.state.gender);
  formData.append('job', this.state.job);
  const config={
    headers:{
      'content-type':'multipart/form-data' //전달하고자 하는 데이터에 파일이 포함되고 있을 떄 설정해 줘야되는 요소 중 하나
    }
  }
  return post(url, formData, config);
}



  render(){
    return(
      //handleFormSubmit:양식을 전송하는 하나의 함수를 수행할 수 있도록 설정
      //file이라는 변수를 이용해서 해당 프로필 이미지에 해당하는 파일의 값을 받아올 수 있도록
      <form onSubmit={this.handleFormSubmit}>
        <h1>고객추가</h1>
        프로필 이미지: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/>
        이름: <input type="text" name="userName" Value={this.state.userName} onChange={this.handleValueChange}/><br/>
        생년월일: <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange}/><br/>
        성별: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange}/><br/>
        직업: <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange}/><br/>
        <button type="submit">추가하기</button>
      </form>
    );
  }
}
export default CustomerAdd;