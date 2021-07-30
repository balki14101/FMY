import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, ToastAndroid } from 'react-native'
import styles from './authStyles'
import appLpgo from '../../assets/images/FYLogo.png'
import Toast from 'react-native-toast-message';
import { CircleFade } from 'react-native-animated-spinkit'
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Wave } from 'react-native-animated-spinkit'
import { useRoute } from '@react-navigation/native';


export default function ChangePassword({ navigation }) {

    const sentNoti = () => {
        Toast.show({
            type: 'success',
            text1: 'Reset link sent',
        });
    }
    
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [otpModeOn, setOTPModeOn] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [loadingMessage, setLoadingMessage] = useState('')
    const [otp, setOTP] = useState('')
    
    const route = useRoute();

    
     useEffect(() => {   
    
       (async () => {	   	

      		  setEmail(route.params.email)
               
            
          })();              
            
      
    }, []); 
    
    
    
    function validateEmail(mail) {
       if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
       {
         return (true)
       }
       
       return (false)
    }
    
    
   const changePassword = async() => {   	
   
    
        var fieldsEmpty = false;
        var passwordsNotMatching = false;

    
        if(password == ''){
           fieldsEmpty = true;
        }  
        
        if(repeatPassword == ''){
           fieldsEmpty = true;
        }  
        
        if(password!==repeatPassword){
            passwordsNotMatching = true;
        }      
        
       
        
        
        if(fieldsEmpty){
             Toast.show({
                type: 'error',
                text1: 'Please enter the new password',
            });
        } else if(passwordsNotMatching){
        	   //message.error("Please enter a valid email")  
        	   Toast.show({
                type: 'error',
                text1: 'Password not matching',
            });  
        } else {    	  	
        
         
    	  	
    	  	setLoading(true);
    	  	setLoadingMessage('Resetting your password...');
    	  	
    	  	let formData = new FormData();

         formData.append("email", email)
         formData.append("new-password", password)


         
          const requestOptions = {
               method: 'POST',
               body: formData,
               headers: {
                   'Accept':'application/json',                   
               }
            };   	  	
        
           
           fetch('https://lawyerback.trikaradev.xyz/api/change-the-password', requestOptions)
        		 .then(response => response.json()) 
        		 .then((json) => setChangePasswordResponse(json)) 
             .then((data) => {                
              }).catch((error) => {
                  console.error(error);
              });  	  
    	  
    	  
    	  } // Else closes    
    
  }
  
  
  const setChangePasswordResponse = async(json) => {
  	
  	
  	    var stringJSON = JSON.stringify(json)
  	    
  	    if(stringJSON.includes('error')){  	    

            Toast.show({
                type: 'error',
                text1: 'Soemthing went wrong',
            });    
            
            setLoading(false);
            
            
  	    }else{
    		 	   
    		 	   alert(json.success)  
       // Parse and set all data in localstorage
          Toast.show({
                type: 'success',
                text1: 'Password updated. You can login now',
            });    
       
           navigation.navigate('login');       
       
       
        } //else - of if login is valid
    }  
    
    
    
const verifyOTP = async() => {   	
   
    
        var fieldsEmpty = false;

    
        if(otp == ''){
           fieldsEmpty = true;
        }        
        
       
        
        
        if(fieldsEmpty){
             Toast.show({
                type: 'error',
                text1: 'Please enter the OTP',
            });
        } else {    	  	
        
         
    	  	
    	  	setLoading(true);
    	  	setLoadingMessage('Verifying OTP...');
    	  	
    	  	let formData = new FormData();

         formData.append("email", email)

         
          const requestOptions = {
               method: 'POST',
               body: formData,
               headers: {
                   'Accept':'application/json',                   
               }
            };   	  	
        
           
           fetch('https://lawyerback.trikaradev.xyz/api/verify-password-reset-otp', requestOptions)
        		 .then(response => response.json()) 
        		 .then((json) => setOTPVerifyResponse(json)) 
             .then((data) => {                
              }).catch((error) => {
                  console.error(error);
              });  	  
    	  
    	  
    	  } // Else closes    
    
  }
  
  
  const setOTPVerifyResponse = async(json) => {
  	
  	
  	    var stringJSON = JSON.stringify(json)
  	    
  	    if(stringJSON.includes('error')){  	    

            Toast.show({
                type: 'error',
                text1: 'Incorrect OTP',
            });    
            
            setLoading(false);
            
            
  	    }else{
    		 	     
          // Parse and set all data in localstorage
          navigation.navigate('changepassword');        
       
       
        } //else - of if login is valid
    }  
  
  
  


    return (
        <View>
        
            {isLoading &&
                <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
                    <CircleFade size={100} color="#28899B" style={{ marginTop: '70%' }} />
                    <Text style={styles.loadingText}>{loadingMessage}</Text>
                </View>

            }
            
            
            <View style={{ alignItems: 'center', paddingTop: '30%' }}>
                <Image source={appLpgo} style={{ width: 90, height: 50, resizeMode: 'contain' }} />
                <Text style={styles.appName}>Find-Your-Lawyer</Text>
            </View>
            <View style={{ paddingStart: 20, paddingEnd: 20 }}>
                <View style={{ paddingTop: 50 }}>
                    <Text style={styles.forgetText}>Reset your password</Text>
                    
                 
                 

                  <View>  
                    
                    
                    <TextInput
                        style={styles.inputFeilds}
                        onChangeText={text => setPassword(text)}
                        placeholder="New Password"
                        value={password}
                        secureTextEntry={true}
                    />
                    
                    <TextInput
                        style={styles.inputFeilds}
                        onChangeText={text => setRepeatPassword(text)}
                        value={repeatPassword}
                        placeholder="Repeat Password"
                        secureTextEntry={true}
                    />
                    
                    <TouchableOpacity style={styles.submitBtn} onPress={changePassword}>
                        <Text style={[styles.btnText, { color: 'white' }]}>Submit</Text>
                    </TouchableOpacity>
                    
                    
                 </View>   
                 
                   
                    
                    
                 
                    
                    
                    
                    
                </View>
            </View>
        </View>
    )
}