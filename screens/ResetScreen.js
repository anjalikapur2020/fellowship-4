import * as React from 'react'
import firebase from 'firebase'
import {View,Text,TextInput} from 'react-native'


export default class ResetPassword extends React.Component{
constructor(){
super()
this.state={
  emailId:""
}

}

render(){
  return(
<View>
<TextInput>
 placeholder="abc@example.com"
 keyboardType="email-address"
onChangeText=(text)=>{
this.setState({emailId:'text'})
}
value={this.state.emailId}

</TextInput>



</View>

  )
}


}