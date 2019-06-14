import React from 'react';

import Welcome from './Welcome'
import Comment from './Comment'
import Clock from './Clock'
// console.log(Welcome)
import ToggleButton from './ToggleButton'

import WarningBanner from './WarningBanner'

import NameForm from './Form/NameForm'

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName:"Harper",
  lastName:"Perez"
}


// function Welcome(props){
//   return (
//     <h1>Hello , {props.name}</h1>
//   )
// }

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};


function Basic(){
  console.log(' 0000 ' , new Date().toLocaleTimeString())
  var element = (
    // <div>
    //    {/* <h1>Hello  {formatName(user)}</h1> 
    //    <Welcome name={formatName(user)}/>
    //   <h2>It is {new Date().toLocaleTimeString()}</h2> */}
      
    // </div>
    <div>
      <Clock increment={2}></Clock>
      <Clock increment={1}></Clock>
      <Clock increment={3}></Clock>
      <Comment date={comment.date} text={comment.text} author={comment.author}></Comment>
      <ToggleButton></ToggleButton>
      <WarningBanner></WarningBanner>
        <NameForm></NameForm>
    </div>
    
  )
  return element
}





// JSX  代表着Objects 

// React.createElement(
//   'h1',
//   {className:'greeting'},
//   'hello,world!'
// )



export default Basic;