import React, { useState } from 'react'

import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import DropDown from 'react-native-vector-icons/Ionicons'
import CloseIcon from 'react-native-vector-icons/AntDesign'
import styles from './enquireStyles'
import { Wave } from 'react-native-animated-spinkit'
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RejectContents(props) {
	
    const [isDateVisible, setDateVisible] = useState(false)
    const [isTimeVisible, setTimeVisible] = useState(false)
    const [date, setDate] = useState('12-03-2020')
    const [time, setTime] = useState('09:00 AM')
    const [isLoading, setLoading] = useState(false)
    const [rejectComment, setRejectComment] = useState('')

    const handleDateConfirm = (date) => {
        setDateVisible(false)
        setDate(moment(date).format('DD-MM-YYYY'))
    }
    const showDatePicker = () => {
        setDateVisible(true)
    }
    const hideDatePicker = () => {
        setDateVisible(true)
    }
    const handleTimeConfirm = (time) => {
        setTimeVisible(false)
        setTime(moment(time).format('hh:mm A'))
    }
    const showTimePicker = () => {
        setTimeVisible(true)
    }
    const hideTimePicker = () => {
        setTimeVisible(true)
    }
    
    
    const handleReasonChange = (value) => {
    		 	     
       setRejectComment(value);        
    }
    
     
    
    //function submitReject(e, token = false) {  
    
        const submitReject = async() => {	
   
    
        var fieldsEmpty = false;
    
        if(rejectComment == ''){
           fieldsEmpty = true;
        }        
        
        
        if(fieldsEmpty){
          //message.error('Please enter a reason for rejection');
          Toast.show({
                type: 'error',
                text1: 'Please enter a reason for rejection',
            });
        } else{
    	  	
    	  	
    	  	var authToken = await AsyncStorage.getItem('@auth_token'); 
    	  	setLoading(true);
    	  	
    	  	
         fetch('https://lawyerback.trikara.com/api/lawyer-reject-appointment-request?appointment_request_id='+props.id+'&reason_for_rejection='+rejectComment, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer '+authToken
                }
            }).then(res => res.json())
              .then((data) => {
                     setRejectConfirmation(data.appointmentRequests)
               })
              .then((response) => {
                   // do whatever you want with success response
                   setLoading(false);
           }).catch(console.log)      	  
    	  
    	  
    	  } // Else closes          
    
    
  }
  
  
  
  const setRejectConfirmation = (appointmentRequests) => {
    
   // message.success("Appointment request rejected");
   
    props.hideRejectModal();
    
    Toast.show({
                type: 'success',
                text1: 'Appointment request rejected',
            });
    
    
    
    
    
  }
  
  
    return (
        <View>
        
             {isLoading  &&
                  <View style={{height:'30%', width:'30%'}}>
                    <Wave size={100} color="#1E94A3" style={{marginLeft:'35%', marginTop:'50%'}}/>
                  </View>
               }
               
               
            <View style={{flexDirection:'row',justifyContent:'flex-end',paddingTop:15}}>
                <Text style={styles.modalTitle}>Reject Appointment Request</Text>
                <TouchableOpacity onPress={() => props.onReject()}>
                    <CloseIcon name="close" size={20}  style={{marginLeft:40}}  />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomLine}>
                <Text style={{ fontSize: 12, fontFamily: 'openSans_regular' }}>Date: {props.date}</Text>
                <Text style={{ fontSize: 12, fontFamily: 'openSans_regular', paddingTop: 13, paddingBottom: 5 }}>
                   Time: {props.time}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', 
            borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingTop: 14 }}>
                <View style={{ paddingBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: 'openSans_regular' }}>{props.username}</Text>
                    <Text style={styles.smallText}>{props.city}</Text>
                    <Text style={styles.smallText}>{props.email}</Text>
                    <Text style={styles.smallText}>{props.phone}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 13, fontFamily: 'roboto_medium' }}>Details</Text>
                    <Text style={{ fontSize: 12, width:100, fontFamily: 'openSans_regular', textAlign: 'justify' }}>
                       {props.description}
                    </Text>
                </View>
            </View>
            <View style={styles.secondLine}>                
                <View style={{ bottom: 10 }}>
                    <Text style={{ fontSize: 13, fontFamily: 'roboto_medium' }}>Reason for Rejection</Text>
                    <TextInput
                        value={rejectComment}
                        onChangeText={handleReasonChange}
                        style={styles.noteInput} />
                </View>


            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                <TouchableOpacity style={styles.modalBtns} onPress={submitReject}>
                    <Text style={styles.btnText}>REJECT REQUEST</Text>
                </TouchableOpacity>               
            </View>
        </View>
    )
}