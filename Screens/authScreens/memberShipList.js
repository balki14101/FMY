import React, { useState } from 'react'
import styles from './authStyles'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Unorderedlist from 'react-native-unordered-list';
import { SilverMembership, GoldMembership, PlatinumMembership } from './otherMemberships'
import Toast from 'react-native-toast-message';
import { CircleFade } from 'react-native-animated-spinkit'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MemberShipList({ navigation }) {

    const [couponInput, setCouponInput] = useState('')
    const [couponSuccess, setCouponSuccess] = useState(false)
    const [isLoading, setLoading] = useState(false);
	 const [loadingMessage, setLoadingMessage] = useState("");
	 const [couponStatus, setCouponStatus] = useState('');
	 const [couponValue, setCouponValue] = useState('');
	 const [couponApplied, setCouponApplied] = useState(false);

    const checkCoupon = () => {
        if (couponInput == '') {
            Toast.show({
                type: 'error',
                text1: 'Enter Coupon Code',
            });

        } else if (couponInput >3) {
            setCouponSuccess(true)
        } else {
            setCouponSuccess(true)
        }
    }

    const checkApplied = () => {
        if (couponInput == '') {
            Toast.show({
                type: 'error',
                text1: 'Please apply valid coupon',
            });
        } else {
            navigation.navigate('app')
        }
    }
    
     // Complete registration
    const completeRegistration = async() => {
    	
    	     if(!couponApplied){

              Toast.show({
                type: 'error',
               text1: 'Please apply a coupon code',
            });  	     
    	     }else{
	 	
	 	         var authToken = await AsyncStorage.getItem("@auth_token");    
    	  
    	         setLoading(true);   	
    	         setLoadingMessage("Completing your registration...")	 	     
       
               fetch('https://lawyerback.trikara.com/api/lawyer-complete-registration', {
                   method: "POST",
                   headers: {
                       'Accept': 'application/json',
                       'Authorization': 'Bearer '+authToken
                   }
               }).then(res => res.json())
                 .then((data) => {
                     setUserData(data)
                 })
              .then((response) => {
                   // do whatever you want with success response
                   setLoading(false);
           }).catch(console.log) 
           
         }   	
    }
    
    const setUserData = async(data) => {
    	
    	 AsyncStorage.setItem("@lawyer_id", ''+data.lawyer.id);   
    	 AsyncStorage.setItem("@fourth_step_completed", "yes");    	   	 
            
       alert('Thanks for registering. Your account will be verified and activated within 24 hours')
    	
    	 setLoading(false);
       navigation.navigate('app')
    }   
    
    const applyCoupon = async(data) => {
    	
    	
    	if(couponValue.length==0){

          Toast.show({
                type: 'error',
               text1: 'Please enter a coupon code',
            }); 	
 	 	}else if(couponValue.length<5){

 	 		 Toast.show({
                type: 'error',
               text1: 'Please enter a valid coupon code',
            }); 
	 	}else{
	 		
	 		  var authToken = await AsyncStorage.getItem("@auth_token");    
    	  
    	     setLoading(true);  
    	     setLoadingMessage("Applying coupon code...")	  		 	     
       
           fetch('https://lawyerback.trikara.com/api/lawyer-apply-coupon-code?code='+couponValue, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer '+authToken
                }
            }).then(res => res.json())
              .then((data) => {
                     setCouponConfirmation(data)
               })
              .then((response) => {
                   // do whatever you want with success response
                   setLoading(false);
           }).catch(alert)   
        	 
	 	}     
      
       
    }   
        
    
    const setCouponConfirmation = (data) => {    	    

       
       var msg = JSON.stringify(data);
    	
    	 setCouponStatus(data.message);
    	 
    	 if(data.message == 'Coupon code applied'){
    	     setCouponApplied(true);    
    	 }else{
           setCouponApplied(false); 	 
    	 }   	  	
    	 
    }   
    
    const handleCouponChange = (e) => {
    		 	     
       setCouponValue(e.target.value);        
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
            
            
            <View style={{ alignItems: 'center', marginBottom: 30 }}>
            
             <View style={{ alignItems: 'center' }}>
                            <Text style={styles.pageHeader}>Registration Details (4/4)</Text>
                            
                            </View>
                            
                            
                <View style={styles.trialCard}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', display:'none', paddingTop: 20 }} >
                        <Text style={styles.cardTitle}>30 Day Trial</Text>
                        <Text style={styles.couponBtn}>Free</Text>
                    </View>
                    <View style={{ paddingTop: 21, display:'none' }}>
                        <Unorderedlist>
                            <Text style={styles.listLabel}>Lorem ipsum dolor sit amet,</Text>
                        </Unorderedlist>
                        <Unorderedlist>
                            <Text style={styles.listLabel}>consectetur adipiscing elit,sed do</Text>
                        </Unorderedlist>
                        <Unorderedlist>
                            <Text style={styles.listLabel}>et doloremagna aliqua.</Text>
                        </Unorderedlist>
                        <Unorderedlist>
                            <Text style={styles.listLabel}>Ut enim ad</Text>
                        </Unorderedlist>
                        <Unorderedlist>
                            <Text style={styles.listLabel}>Ut enim ad</Text>
                        </Unorderedlist>
                    </View>
                    
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', display:'none', paddingTop: 10 }}>
                        <View>
                            <Text style={styles.selectLabel}>Start Date</Text>
                            <Text style={[styles.selectLabel, { color: '#4172C7' }]}>11-2-2020</Text>
                        </View>
                        <View>
                            <Text style={styles.selectLabel}>End Date</Text>
                            <Text style={[styles.selectLabel, { color: '#4172C7' }]}>11-2-2020</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', paddingTop: 20, display:'none', paddingBottom: 20 }}>
                        <TouchableOpacity style={styles.couptionSelectBtn}>
                            <Text style={{
                                fontFamily: 'openSans_semiBold',
                                color: 'white',
                            }}>Selected</Text>
                        </TouchableOpacity>
                    </View>


                </View>
                

                <View style={styles.trialCard}>
                    <Text style={[styles.selectLabel, { paddingTop: 20 }]}>Enter coupon code</Text>
                    <TextInput
                        onChangeText={text => setCouponValue(text)}
                        style={styles.couponInput} />
                    <TouchableOpacity style={styles.applyBtn} onPress={applyCoupon}>
                        <Text style={{ textAlign: 'center', fontSize: 13, paddingTop: 3, }}>APPLY</Text>
                    </TouchableOpacity>

                      {couponStatus.includes("Invalid") &&
                        <Text style={{ color: 'red', fontFamily: 'openSans_semiBold', fontSize: 15, paddingLeft: 0, marginTop:10 }}>
                           {couponStatus}
                       </Text>
                      }
                       
                      {!couponStatus.includes("Invalid") && 
                       <Text style={{ color: '#66AF30', fontFamily: 'openSans_semiBold', fontSize: 15, paddingLeft: 0, marginTop:10 }}>
                           {couponStatus}
                       </Text>
                      }
                    

                    <Text style={[styles.selectLabel, { paddingTop: 20 }]}>Total payable amount</Text>
                    <Text style={[styles.cardTitle, { paddingTop: 10 }]}>FREE</Text>

                    <TouchableOpacity style={[styles.applyBtn, { width: '80%', height: 42, marginBottom: 30 }]} 
                    onPress={completeRegistration}>
                        <Text style={{ textAlign: 'center', paddingTop: 10, fontSize: 13 }}>COMPLETE REGISTRATION</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>

    )
}

