import React, { Component } from "react"; 
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button"
import "./sign-in.scss";
import {auth,signInWithGoogle} from "../../firebase/firbase.utlities"
class SignIn extends Component {
    state={
        email:"",
        password:""
    }

    handleSubmit=async e=>{
        e.preventDefault();
        const{email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password); 
            this.setState({email:"",password:""})
        } catch(error){
            console.log(error);
        }
       
    }

    handleChange=e=>{
        const {value,name}=e.target;
        this.setState({
            [name]:value
        })
    }
    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}> 
                    <FormInput
                     name="email"
                     value={this.state.email} 
                     required 
                     type="email"
                     handleChange={this.handleChange}
                     label="email"/>
                    <FormInput 
                    name="password"
                    type="password"
                    value={this.state.password}
                    required
                    handleChange={this.handleChange}
                    label="password" />
                    <div className="buttons">
                    <CustomButton type="submit" >Sign In </CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn > {" "}Sign In With Google {" "} </CustomButton>
                </div>
                </form>
            </div>
        )
    }
}


export default SignIn