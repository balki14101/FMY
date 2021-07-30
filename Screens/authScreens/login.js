import React, { useState, useEffect } from 'react'

import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './authStyles'
import appLpgo from '../../assets/images/FYLogo.png'
import Toast from 'react-native-toast-message';
import { CircleFade } from 'react-native-animated-spinkit'
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Wave } from 'react-native-animated-spinkit'

export default function Login({ navigation }) {
	
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [loginDetermined, setLoginDetermined] = useState(false)

    const login = () => {
    	
        if (email == '') {

            Toast.show({
                type: 'error',
                text1: 'Please enter Email and Password',
            });
        } else if (password == '') {
            Toast.show({
                type: 'error',
                text1: 'Please enter Email and Password',
            });
        } else {
            navigation.navigate('moreRegister')         

        }
    }
    
    useEffect((async) => {

           (async () => {
           	


                  var isLoggedIn = await AsyncStorage.getItem('@is_logged_in');

                  
                  //var isFourthStepCompletd = await AsyncStorage.getItem('@fourth_step_completed');
                  var isThirdStepCompletd = await AsyncStorage.getItem('@third_step_completed');
                  var isSecondStepCompletd = await AsyncStorage.getItem('@second_step_completed');
                  var isFirstStepCompletd = await AsyncStorage.getItem('@first_step_completed');
                  
                  if(isLoggedIn){
                  	
                  	
                   // Take the user to the uncompleted step if any. Else take to dashboard                  	
                   if(isLoggedIn=='yes'){	
                   
                      if(isThirdStepCompletd) {
                      	
                      	navigation.navigate('app');
                      	
                      }else if(isSecondStepCompletd){
                      	
                        navigation.navigate('images');
                        
                      }else if(isFirstStepCompletd){
                      	
                        navigation.navigate('moreRegister');
                      }else{
                        navigation.navigate('app');                        
                      }
                   }    
                   
                   
                   
                  }
                  
                  setLoginDetermined(true)

           })();

    }, []);
    
    
    function validateEmail(mail) 
    {
       if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
       {
         return (true)
       }
       
       return (false)
    }
    

    const handleLogin = async() => {    	
   
    
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
                text1: 'Please enter Email and Password',
            });
        } else if(emailInValid){
        	   //message.error("Please enter a valid email")  
        	   Toast.show({
                type: 'error',
                text1: 'Please enter a valid email',
            });  
        } else {    	  	
        
         
    	  	
    	  	setLoading(true);
    	  	
    	  	let formData = new FormData();

         formData.append("email", email)
         formData.append("password", password)
         
          const requestOptions = {
               method: 'POST',
               body: formData,
               headers: {
                   'Accept':'application/json',                   
               }
            };   	  	
        
           
           fetch('https://lawyerback.trikaradev.xyz/api/lawyer-login', requestOptions)
        		 .then(response => response.json()) 
        		 .then((json) => setUserData(json)) 
             .then((data) => {                
              }).catch((error) => {
                  console.error(error);
              });  	  
    	  
    	  
    	  } // Else closes    
    
  }
  
  
  const setUserData = async(json) => {
  	
  	
  	    var stringJSON = JSON.stringify(json)
  	    
  	    if(stringJSON.includes('error')){  	    

            Toast.show({
                type: 'error',
                text1: 'Invalid username or password',
            });    
            
            setLoading(false);
            
            
  	    }else{
    		 	     
       // Parse and set all data in localstorage
       
       var authToken = json.UserInfo.token;
       var firstName = json.UserInfo.user.first_name;
       var lastName = json.UserInfo.user.last_name;
       var userName = json.UserInfo.user.name;
       var email = json.UserInfo.user.email;
       
       // User fields
       await AsyncStorage.setItem("@is_logged_in", "yes");
       await AsyncStorage.setItem("@auth_token", authToken);
       await AsyncStorage.setItem("@first_name", firstName);
       await AsyncStorage.setItem("@last_name", lastName);
       await AsyncStorage.setItem("@username", userName);
       await AsyncStorage.setItem("@email", email); 
       await AsyncStorage.setItem("@user_type", json.UserInfo.user.user_type); 
       
       // Lawyer fields
       await AsyncStorage.setItem("@lawyer_id", ''+json.UserInfo.user.lawyer.id); 
       
       if(json.UserInfo.user.lawyer.city!==null){
          await AsyncStorage.setItem("@city", json.UserInfo.user.lawyer.city); 
       }
       
       if(json.UserInfo.user.lawyer.firm_name!==null){
          await AsyncStorage.setItem("@firm_name", json.UserInfo.user.lawyer.firm_name); 
       }
       
       if(json.UserInfo.user.lawyer.latitude!==null){
          await AsyncStorage.setItem("@latitude", json.UserInfo.user.lawyer.latitude); 
       }
       
       if(json.UserInfo.user.lawyer.longitude!==null){
          await AsyncStorage.setItem("@longitude", json.UserInfo.user.lawyer.longitude); 
       }
       
       if(json.UserInfo.user.lawyer.experience_years!==null){
          await AsyncStorage.setItem("@experience_years", json.UserInfo.user.lawyer.experience_years); 
       }
       
       if(json.UserInfo.user.lawyer.is_verified!==null){
          await AsyncStorage.setItem("@is_verified", ''+json.UserInfo.user.lawyer.is_verified); 
       }
       
       if(json.UserInfo.user.lawyer.practicing_in_courts!==null){
          await AsyncStorage.setItem("@practicing_in_courts",json.UserInfo.user.lawyer.practicing_in_courts); 
       }
       
       if(json.UserInfo.user.lawyer.lawyer_type!==null){
          await AsyncStorage.setItem("@lawyer_type", json.UserInfo.user.lawyer.lawyer_type);
       }
        
       if(json.UserInfo.user.lawyer.num_of_cases_won!==null){ 
          await AsyncStorage.setItem("@num_of_cases_won",json.UserInfo.user.lawyer.num_of_cases_won); 
       }
       
       if(json.UserInfo.user.lawyer.description!==null){
          await AsyncStorage.setItem("@description", json.UserInfo.user.lawyer.description);
       } 
       
       
       if(json.UserInfo.user.lawyer.full_address!==null){
          await AsyncStorage.setItem("@full_address", json.UserInfo.user.lawyer.full_address); 
       }
       
       if(json.UserInfo.user.lawyer.pincode!==null){
          await AsyncStorage.setItem("@pincode", json.UserInfo.user.lawyer.pincode); 
       }
       
       if(json.UserInfo.user.lawyer.is_civil!==null){
          await AsyncStorage.setItem("@is_civil", ''+json.UserInfo.user.lawyer.is_civil); 
       }
       
       if(json.UserInfo.user.lawyer.is_criminal!==null){
         await AsyncStorage.setItem("@is_criminal", ''+json.UserInfo.user.lawyer.is_criminal); 
       }
       
       if(json.UserInfo.user.lawyer.state!==null){
          await AsyncStorage.setItem("@state", json.UserInfo.user.lawyer.state); 
       }
       
       if(json.UserInfo.user.lawyer.profile_picture_path!==null){
          await AsyncStorage.setItem("@profile_picture_path", json.UserInfo.user.lawyer.profile_picture_path);
       }
        
       if(json.UserInfo.user.lawyer.is_office_address!==null){ 
          await AsyncStorage.setItem("@is_office_address", ''+json.UserInfo.user.lawyer.is_office_address); 
       }
       
       if(json.UserInfo.user.lawyer.contact_email!==null){
          await AsyncStorage.setItem("@contact_email", json.UserInfo.user.lawyer.contact_email); 
       }
       
       if(json.UserInfo.user.lawyer.private_phone_number!==null){
          await AsyncStorage.setItem("@private_phone_number", json.UserInfo.user.lawyer.private_phone_number);
       } 
       
       if(json.UserInfo.user.lawyer.status!==null){
          await AsyncStorage.setItem("@status", json.UserInfo.user.lawyer.status); 
       }       
             
       
       
       setLoading(false);
       
       if(json.UserInfo.user.stage_completed == 1){
       	
         AsyncStorage.setItem("@first_step_completed", "yes");     
       	navigation.navigate('moreRegister')    

       
       }else if(json.UserInfo.user.stage_completed == 2){
       	
         AsyncStorage.setItem("@second_step_completed", "yes");    
       	navigation.navigate('images')    

       
       }else if(json.UserInfo.user.stage_completed == 3){
       	
         AsyncStorage.setItem("@third_step_completed", "yes");    
         navigation.navigate('app')    
       
       }else {      

           AsyncStorage.setItem("@fourth_step_completed", "yes");    
           navigation.navigate('app')    
       }
       
       
       
    } //else - of if login is valid
    }   
    



    return (
        <View style={styles.mainContainer}>
        
             {(isLoading || !loginDetermined) &&
               <View style={{height:'100%', width:'100%'}}>
                 <Wave size={100} color="#1E94A3" style={{marginLeft:'35%', marginTop:'70%'}}/>
               </View>
             }
       
       
           {!isLoading && loginDetermined &&
            <ScrollView>
                <View style={{ paddingStart: 20, paddingEnd: 20 }}>
                    <View style={{ alignItems: 'center', paddingTop: '30%' }}>
                        <Image source={appLpgo} style={{ width: 90, height: 50, resizeMode: 'contain' }} />
                        <Text style={styles.pageTitle}>Lawyer Login</Text>
                    </View>

                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput
                        value={email}
                        onChangeText={text => setEmail(text)}
                        autoCapitalize="none"
                        
                        style={styles.inputFeilds}
                    />
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={true}
                        style={styles.inputFeilds}
                    />
                    <TouchableOpacity style={styles.submitBtn} onPress={handleLogin}>
                        <Text style={[styles.btnText, { color: 'white' }]}>Login</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', paddingTop: 16, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.forgot}>Forgot Password?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('resetPassword')}>
                            <Text style={[styles.forgot, { color: '#2D59A6', paddingLeft: 5 }]} >Reset Password</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.orText}>Or</Text>
                    <TouchableOpacity style={[styles.submitBtn, { backgroundColor: 'black' }]} 
                        onPress={() => navigation.navigate('register')}>
                        <Text style={[styles.btnText, { color: 'white' }]}>Sign Up</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
            }
        </View>
    )

}