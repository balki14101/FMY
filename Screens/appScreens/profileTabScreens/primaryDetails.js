import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from '../../authScreens/authStyles'
import { ScrollView } from 'react-native-gesture-handler'
import { Checkbox } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CircleFade } from 'react-native-animated-spinkit'

export default function PrimaryDetails(props) {
	
	 const [lawyer, setLawyer] = useState(null); 
	const [isLoading, setLoading] = useState(false);
	const [loadingMessage, setLoadingMessage] = useState('');
   const [userName, setUserName] = useState('');
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [checked, setChecked] = useState(false);
   const [isFirm, setIsFirm] = useState(false);
   const [firmName, setFirmName] = useState('');
   const [isIndependent, setIsIndependent] = useState(true);
   const [token, setToken] = useState('');   
   const [description, setDescription] = useState('');
   const [isCivil, setIsCivil] = useState(false);
   const [isCriminal, setIsCriminal] = useState(false);
   
   const [isIntellectualProperty, setIsIntellectualProperty] = useState(false);
   const [isFamily, setIsFamily] = useState(false);
   const [isProperty, setIsProperty] = useState(false);
   const [isImmigration, setIsImmigration] = useState(false);
   const [isLabour, setIsLabour] = useState(false);
   const [isEmployment, setIsEmployment] = useState(false);
   const [isMergers, setIsMergers] = useState(false);
   const [isBankruptcy, setIsBankruptcy] = useState(false);  
   const [isCorporate, setIsCorporate] = useState(false); 
   const [isOthers, setIsOthers] = useState(false);  
   
   
   const [fullAddress, setFullAddress] = useState('');
   const [pinCode, setPinCode] = useState('');
   const [city, setCity] = useState([]); 
   const [theState, setTheState] = useState(''); 
   const [selectedCity, setSelectedCity] = useState(''); 
   const [coordinates, setCoordinates] = useState('');   
   const [saveAsOffice, setSaveAsOffice] = useState(false);  
   const [fileList, setFileList] = useState([]);   
   const [fileListImages, setFileListImages] = useState([]);   
   const [image1, setImage1] = useState(null);   
   const [image2, setImage2] = useState(null);   
   const [image3, setImage3] = useState(null); 
   const [profileImages, setProfileImages] = useState(null);     
    
    
    
   
   
   
   useEffect(() => {  
	
	(async () => {	    
   
      // Fetch profile of lawyer
      var authToken = await AsyncStorage.getItem('@auth_token');     		   	

    		
      setLoading(true);
    	setLoadingMessage('Fetching primary info...');
    	
      fetch('https://lawyerback.trikara.com/api/lawyer-fetch-own-profile', {
             method: "GET",
             headers: {
                'Authorization': 'Bearer '+authToken
             }
      })
      .then((response) => response.json())
      .then((json) => setLawyerProfileData(json.lawyer))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));      
          
       })();   
    		      
   
   }, []); 
   
   
   
   const setLawyerProfileData = (lawyer) => {
   	
   	console.log(lawyer.user.first_name)
   	
   	setLawyer(lawyer);
   	
   	setEmail(lawyer.user.email);
   	setUserName(lawyer.user.name);
   	setFirstName(lawyer.user.first_name);
   	setLastName(lawyer.user.last_name);
   	setPhone(lawyer.private_phone_number);
   	setTheState(lawyer.state);
   	
   	setCity(lawyer.city);
   	setSelectedCity(lawyer.city);
   	
   	if(lawyer.lawyer_type == 'Firm'){
        setIsFirm(true);
        setFirmName(lawyer.firm_name);
           	
   	}
   	
   	setDescription(lawyer.description);
   	
   	if(lawyer.is_civil == 1){
         setIsCivil(true);   	
   	}
   	
   	if(lawyer.is_civil == 0){
         setIsCivil(false);   	
   	}
   	
   	if(lawyer.is_criminal == 1){
         setIsCriminal(true);   	
   	}
   	
   	if(lawyer.is_criminal == 0){
         setIsCriminal(false);   	
   	}
   	
   	//
   	if(lawyer.is_intellectual_property == 1){
         setIsIntellectualProperty(true);   	
   	}
   	
   	if(lawyer.is_intellectual_property == 0){
         setIsIntellectualProperty(false);   	
   	}
   	
   	//
   	if(lawyer.is_family == 1){
         setIsFamily(true);   	
   	}
   	
   	if(lawyer.is_family == 0){
         setIsFamily(false);   	
   	}
   	
   	//
   	
   	if(lawyer.is_property == 1){
         setIsProperty(true);   	
   	}
   	
   	if(lawyer.is_property == 0){
         setIsProperty(false);   	
   	}
   	
   	//
   	
   	if(lawyer.is_immigration == 1){
         setIsImmigration(true);   	
   	}
   	
   	if(lawyer.is_immigration == 0){
         setIsImmigration(false);   	
   	}
   	
   	//
   	
   	if(lawyer.is_labour == 1){
         setIsLabour(true);   	
   	}
   	
   	if(lawyer.is_labour == 0){
         setIsLabour(false);   	
   	}
   	
   	//
   	
   	if(lawyer.is_employment == 1){
         setIsEmployment(true);   	
   	}
   	
   	if(lawyer.is_employment == 0){
         setIsEmployment(false);   	
   	}
   	
   	//
   	
   	if(lawyer.is_mergers == 1){
         setIsMergers(true);   	
   	}
   	
   	if(lawyer.is_mergers == 0){
         setIsMergers(false);   	
   	}
   	
   	//
   	
   	if(lawyer.is_bankruptcy == 1){
         setIsBankruptcy(true);   	
   	}
   	
   	if(lawyer.is_bankruptcy == 0){
         setIsBankruptcy(false);   	
   	}
   	
   	//
   	
   	if(lawyer.is_corporate == 1){
         setIsCorporate(true);   	
   	}
   	
   	if(lawyer.is_corporate == 0){
         setIsCorporate(false);   	
   	}
   	
   	//
   	if(lawyer.is_others == 1){
         setIsOthers(true);   	
   	}
   	
   	if(lawyer.is_others == 0){
         setIsOthers(false);   	
   	}
   	
   	setPinCode(lawyer.pincode);
   	setFullAddress(lawyer.full_address);
   	
   	setCoordinates(lawyer.latitude+','+lawyer.longitude)
   	
   	if(lawyer.is_office_address == 1){
         setSaveAsOffice(true);   	
   	}
   	
   }
   
        	
   
   
   
    const handleCheckChange = (e) => {
	 	     
       if(e.target.checked){
          setChecked(true); 
       }else{
          setChecked(false); 
       }
    }
    
    
    const handleUserNameChange = (e) => {
    		 	     
       setUserName(e.target.value);        
    }
    
    
    const handleFirstNameChange = (e) => {
    		 	     
       setFirstName(e.target.value);        
    }
    
    const handleLastNameChange = (e) => {
    		 	     
       setLastName(e.target.value);        
    }
    
    const handleEmailChange = (e) => {
    		 	     
       setEmail(e.target.value);        
    }
    
    const handlePhoneChange = (e) => {
    		 	     
       setPhone(e.target.value);        
    }
    
    const handlePasswordChange = (e) => {
    		 	     
       setPassword(e.target.value);        
    }
    
    const handleConfirmPasswordChange = (e) => {
    		 	     
       setConfirmPassword(e.target.value);        
    }   
    
    const setUserData = async(user) => {
    		 	     
       // Parse and set all data in localstorage 

       

       var firstName = user.first_name;
       var lastName = user.last_name;
       var userName = user.name;
       var email = user.email;
       
       
       await AsyncStorage.setItem("@first_name", firstName);
       await AsyncStorage.setItem("@last_name", lastName);
       await AsyncStorage.setItem("@username", userName);
       await AsyncStorage.setItem("@email", email);        
       
       setLoading(false);      

    }   
    
    
    
    const submitStep1 = async() => {       
       
        var authToken = await AsyncStorage.getItem("@auth_token");
    
        var fieldsEmpty = false;
    
        if(phone == ''){
           fieldsEmpty = true;
        }
        
        if(firstName == ''){
           fieldsEmpty = true;
        }
        
        if(lastName == ''){
           fieldsEmpty = true;
        }
        
        if(email == ''){
          fieldsEmpty = true;
        }
        
       
        if(fieldsEmpty){

           Toast.show({
                type: 'error',
                text1: 'One or more fields are empty',
            });
            
            
        } else{
    	  	
    	  	
    	  	setLoading(true);
    	  	setLoadingMessage("Updating your primary info...");
    	  	
    	  	
         fetch('https://lawyerback.trikara.com/api/lawyer-update-basic-details?first_name='+firstName+
         '&last_name='+lastName+'&email='+email+'&phone='+phone, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer '+authToken
                }
            }).then(res => res.json())
              .then((data) => {
                     setUserData(data.user)
               })
              .then((response) => {
                   // do whatever you want with success response
                   setLoading(false);
           }).catch(console.log)      	  
    	  
    	  
    	  } // Else closes      
             
       
               
    }   
    
    
    
    return (
        <ScrollView>
        
             {
                isLoading &&
                <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
                    <CircleFade size={100} color="#28899B" style={{ marginTop: '70%' }} />
                    <Text style={styles.loadingText}>{loadingMessage}</Text>
                </View>

            }
        
            <View style={{ alignItems: 'center' }}>
            
                <Text style={styles.pageHeader}>Primary Details</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.inputLabel}>First Name*</Text>
                    <TextInput
                        value={firstName}
                        style={[styles.inputFeilds, { width: '100%' }]}
                        onChangeText={text => setFirstName(text)}
                    />
                    <Text style={styles.inputLabel}>Last Name*</Text>
                    <TextInput
                        value={lastName}
                        style={[styles.inputFeilds, { width: '100%' }]}
                        onChangeText={text => setLastName(text)}
                    />
                    <Text style={styles.inputLabel}>Contact Email*</Text>
                    <TextInput
                        value={email}
                        style={[styles.inputFeilds, { width: '100%', backgroundColor:'grey', color:'white' }]}
                        keyboardType='email-address'  
                        editable={false} 
                        selectTextOnFocus={false}                      
                        onChangeText={text => setEmail(text)}
                        autoCapitalize="none"
                    />
                    <Text style={[styles.inputLabel, { paddingRight: '10%', }]}>Phone Number*</Text>
                    <TextInput
                        value={phone}
                        style={[styles.inputFeilds, { width: '100%', marginBottom:10 }]}
                        keyboardType='number-pad'
                        onChangeText={text => setPhone(text)}
                    />
                    

                    
                </View>
                

                <TouchableOpacity style={[styles.submitBtn, { width: '55%', marginTop: 15,marginBottom:30 }]} 
                onPress={submitStep1}>
                    <Text style={[styles.btnText, { color: 'white' }]}>Save Primary Info</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}