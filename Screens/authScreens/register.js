import React, { useState } from 'react'
import styles from './authStyles'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Checkbox } from 'react-native-paper';
import { CircleFade } from 'react-native-animated-spinkit'
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Register({ navigation }) {
	
    const [isLoading, setLoading] = useState(false);
    const [userName, setUserName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [checked, setChecked] = useState(false);


    const setUserData = async(json) => {
    	 
    	 Toast.show({
                type: 'success',
                text1: 'Your Account has been created',
            });
            
            //alert(JSON.stringify(json))
    		 	     
       // Parse and set all data in localstorage       
       
       var authToken = json.token;
       var firstName = json.user.first_name;
       var lastName = json.user.last_name;
       var userName = json.user.name;
       var email = json.user.email;
       
       AsyncStorage.setItem("@is_logged_in", "yes");
       AsyncStorage.setItem("@auth_token", authToken);
       AsyncStorage.setItem("@first_name", firstName);
       AsyncStorage.setItem("@last_name", lastName);
       AsyncStorage.setItem("@username", userName);
       AsyncStorage.setItem("@email", email);        
          
       
       AsyncStorage.setItem("@first_step_completed", "yes");    	 
       
       setLoading(false);      

       navigation.navigate('moreRegister')    
    }   

    function validateEmail(mail) {
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
            return (true)
        }

        return (false)
    }

    function validatePhone(inputtxt) {
        var phoneno = /^\d{10}$/;
        if ((inputtxt.match(phoneno))) {
            return true;
        } else {

            return false;
        }
    }



const submitStep1 = () => {           

    
        var fieldsEmpty = false;
        var emailInValid = false;
        var phoneInvalid = false;    
       
        if(firstName == ''){
           fieldsEmpty = true;
        }
        
        if(lastName == ''){
           fieldsEmpty = true;
        }
        
        if(email == ''){
          fieldsEmpty = true;
        } 
        
        if(!validateEmail(email)){
        	  emailInValid = true;               
        }       
        
        if(phone == ''){
          fieldsEmpty = true;
        }
        
        
        if(!validatePhone(phone)){
          phoneInvalid = true;              
        }
         
        if(password == ''){
          fieldsEmpty = true;
        }
        
        if(confirmPassword == ''){
          fieldsEmpty = true;
        }
        
        if(fieldsEmpty){ 
                  
          Toast.show({
                type: 'error',
                text1: 'One or more fields are empty',
            });
          
        }else if(emailInValid){
        	 
        	 Toast.show({
                type: 'error',
                text1: 'Please enter a valid emai',
            });  
        }else if(phoneInvalid){
        	 
        	 Toast.show({
                type: 'error',
                text1: 'Please enter a valid phone number',
            });  
        }else if(password !== confirmPassword){
    	    
            Toast.show({
                type: 'error',
                text1: 'Passwords do not match',
            });
    	  }else if(!checked){
    	    
           Toast.show({
                type: 'error',
                text1: 'Please accept the terms and conditions',
            });
    	  } else{
    	  	
    	  	
    	  	
    	  	setLoading(true);   	  	
    	  	
    	  	
         fetch('https://lawyerback.trikara.com/api/lawyer-signup?first_name='+firstName+
             '&last_name='+lastName+'&email='+email+'&phone='+phone+'&password='+password, {
                method: "POST",
                headers: {
                    'Accept': 'application/json'
                }
            }).then(res => res.json())
              .then((data) => {
              	
              	if(data.hasOwnProperty('error')){
                   //message.error(data.error);
                   Toast.show({
                    type: 'error',
                    text1: data.error,
                   });
               }else{              	      
                   setUserData(data.UserInfo)
               }
               })
              .then((response) => {
                   // do whatever you want with success response
                   setLoading(false);
           }).catch(function(error) {

    });     	  
    	  
    	  
    	  } // Else closes      
             
       
               
    }   

  

    return (
        <ScrollView>
            {
                isLoading &&
                <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
                    <CircleFade size={100} color="#28899B" style={{ marginTop: '70%' }} />
                    <Text style={styles.loadingText}>Creating your account...</Text>
                </View>

            }
            <View style={{ alignItems: 'center' }}>
            
                <Text style={styles.pageHeader}>Registration Details (1/3)</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.inputLabel}>First Name*</Text>
                    <TextInput
                        style={[styles.inputFeilds, { width: '100%' }]}
                        onChangeText={text => setFirstName(text)}
                    />
                    <Text style={styles.inputLabel}>Last Name*</Text>
                    <TextInput
                        style={[styles.inputFeilds, { width: '100%' }]}
                        onChangeText={text => setLastName(text)}
                    />
                    <Text style={styles.inputLabel}>Contact Email*</Text>
                    <TextInput
                        style={[styles.inputFeilds, { width: '100%' }]}
                        keyboardType='email-address'
                        onChangeText={text => setEmail(text)}
                        autoCapitalize="none"
                    />
                    <Text style={[styles.inputLabel, { paddingRight: '10%' }]}>Phone Number*</Text>
                    <TextInput
                        style={[styles.inputFeilds, { width: '100%' }]}
                        keyboardType='number-pad'
                        onChangeText={text => setPhone(text)}
                    />
                    <Text style={styles.inputLabel}>Set Password*</Text>
                    <TextInput
                        style={[styles.inputFeilds, { width: '100%' }]}
                        secureTextEntry={true}
                        onChangeText={text => setPassword(text)}
                    />

                    <Text style={[styles.inputLabel, { paddingRight: '10%' }]}>Confirm Password*</Text>
                    <TextInput
                        style={[styles.inputFeilds, { width: '100%', marginBottom: 30 }]}
                        secureTextEntry={true}
                        onChangeText={text => setConfirmPassword(text)}
                    />
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                        color='#28899B'
                    />
                    <View style={{ flexDirection: 'row', paddingTop: 9 }}>
                        <Text style={{ fontSize: 11, fontFamily: 'openSans_regular' }}>By accepting this I agree to </Text>
                        <Text style={{ fontSize: 11, color: '#28899B', fontFamily: 'openSans_regular' }}>Terms {'&'} Services Agreement</Text>
                    </View>
                </View>

                <TouchableOpacity style={[styles.submitBtn, { width: '55%', marginTop: 10,marginBottom:30 }]} 
                onPress={submitStep1}>
                    <Text style={[styles.btnText, { color: 'white' }]}>Continue</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}