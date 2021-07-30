import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, ToastAndroid } from 'react-native'
import styles from './authStyles'
import appLpgo from '../../assets/images/FYLogo.png'
import Toast from 'react-native-toast-message';
import { CircleFade } from 'react-native-animated-spinkit'
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Wave } from 'react-native-animated-spinkit'


export default function ResetPassword({ navigation }) {

    const sentNoti = () => {
        Toast.show({
            type: 'success',
            text1: 'Reset link sent',
        });
    }
    
    const [email, setEmail] = useState('')
    const [otpModeOn, setOTPModeOn] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [loadingMessage, setLoadingMessage] = useState('')
    const [otp, setOTP] = useState('')
    
    function validateEmail(mail) {
       if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
       {
         return (true)
       }
       
       return (false)
    }
    
    
   const sendOTP = async() => {   	
   
    
        var fieldsEmpty = false;
        var emailInValid = false;
    
        if(email == ''){
           fieldsEmpty = true;
        }        
        
        if(!validateEmail(email)){
        	  emailInValid = true;               
        }
        
        
        if(fieldsEmpty){
             Toast.show({
                type: 'error',
                text1: 'Please enter your registered email',
            });
        } else if(emailInValid){
        	   //message.error("Please enter a valid email")  
        	   Toast.show({
                type: 'error',
                text1: 'Please enter a valid email',
            });  
        } else {    	  	
        
         
    	  	
    	  	setLoading(true);
    	  	setLoadingMessage('Sending an OTP to your email...');
    	  	
    	  	let formData = new FormData();

         formData.append("email", email)

         
          const requestOptions = {
               method: 'POST',
               body: formData,
               headers: {
                   'Accept':'application/json',                   
               }
            };   	  	
        
           
           fetch('https://lawyerback.trikaradev.xyz/api/send-password-reset-otp', requestOptions)
        		 .then(response => response.json()) 
        		 .then((json) => setOTPResponse(json)) 
             .then((data) => {                
              }).catch((error) => {
                  console.error(error);
              });  	  
    	  
    	  
    	  } // Else closes    
    
  }
  
  
  const setOTPResponse = async(json) => {
  	
  	
  	    var stringJSON = JSON.stringify(json)
  	    
  	    if(stringJSON.includes('error')){  	    

            Toast.show({
                type: 'error',
                text1: 'This email is not registered with us',
            });    
            
            setLoading(false);
            
            
  	    }else{
    		 	     
       // Parse and set all data in localstorage
       
       var theOTP = json.otp;
       setOTP(theOTP);
       setOTPModeOn(true);
       setLoading(false);
       



       
       
       
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
         formData.append("otp", otp)

         
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
          navigation.navigate('changepassword', {email:email});        
       
       
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

            </View>
            <View style={{ paddingStart: 20, paddingEnd: 20 }}>
                <View style={{ paddingTop: 50 }}>
                    <Text style={styles.forgetText}>Forgot Password?</Text>
                    
                  {!otpModeOn &&  
                  <View>  
                    <Text style={[styles.inputLabel, { paddingRight: 0, paddingTop: 5 }]}>
                        Enter your registered email and we send you an OTP on your email</Text>
                    
                    
                    <TextInput
                        style={styles.inputFeilds}
                        onChangeText={text => setEmail(text)}
                        placeholder="Registered Email"
                        autoCapitalize='none'
                        keyboardType='email-address'
                    />
                    
                     <TouchableOpacity style={styles.submitBtn} onPress={sendOTP}>
                        <Text style={[styles.btnText, { color: 'white' }]}>Submit</Text>
                    </TouchableOpacity>


                 </View>   
                 
                   
                    
                    
                 }
                 
                  {otpModeOn &&  
                  <View>  
                    <Text style={[styles.inputLabel, { paddingRight: 0, paddingTop: 5 }]}>
                        Please enter the OTP sent to {email} </Text>
                    
                    
                    <TextInput
                        style={styles.inputFeilds}
                        onChangeText={text => setOTP(text)}
                        placeholder="OTP"
                        keyboardType='number'
                    />
                    
                    <TouchableOpacity style={styles.submitBtn} onPress={verifyOTP}>
                        <Text style={[styles.btnText, { color: 'white' }]}>Submit OTP</Text>
                    </TouchableOpacity>
                    
                    
                 </View>   
                 
                   
                    
                    
                 }
                    
                    
                    
                    
                </View>
            </View>
        </View>
    )
}