import React, { useState, useEffect } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import CalenderSettings from '../settingsTabScreens/calenderSettings'
import PrimaryDetails from './primaryDetails'
import ContactDetails from './contactDetails'
import ImagesAndDocuments from './imagesAndDocuments'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CircleFade } from 'react-native-animated-spinkit'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, } from 'react-native'
import styles from './profileStyles'

const Tab = createMaterialTopTabNavigator();

export default function EditProfile({ navigation }) {
	
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
    	setLoadingMessage('Fetching profile information...');
    	
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
   
   

    return (
    

       
        <Tab.Navigator
            tabBarOptions={{
                scrollEnabled: true,
                activeTintColor: 'black',
                inactiveTintColor: 'lightgrey',
                labelStyle: { fontSize: 12 },
                indicatorStyle: {
                    backgroundColor: '#28899B',

                },
                tabStyle: {
                    width: 130
                }

            }}>
            
            <Tab.Screen name="primary" 

                  children={() => <PrimaryDetails firstName={firstName} lastName={lastName} email={email} phone={phone}/>}
                  options={{ tabBarLabel: 'Primary' }} />
                  
            <Tab.Screen name="contact" 

                  children={() => <ContactDetails firstName={firstName} lastName={lastName} email={email} phone={phone}/>}
                  options={{ tabBarLabel: 'More Info' }} />
            
            
            <Tab.Screen name="images" 
                  children={() => <ImagesAndDocuments firstName={firstName} lastName={lastName} email={email} phone={phone}/>}
                  options={{ tabBarLabel: 'Files' }} />


        </Tab.Navigator>
       
    )
}