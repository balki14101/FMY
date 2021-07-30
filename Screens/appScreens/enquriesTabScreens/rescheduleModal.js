import React, { useState, useEffect } from 'react'

import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import DropDown from 'react-native-vector-icons/Ionicons'
import styles from './enquireStyles'
import CloseIcon from 'react-native-vector-icons/AntDesign'
import { Wave } from 'react-native-animated-spinkit'
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RescheduleContents(props) {
	
    const [isDateVisible, setDateVisible] = useState(false)
    const [isTimeVisible, setTimeVisible] = useState(false)
    const [date, setDate] = useState('12-03-2020')
    const [time, setTime] = useState('09:00 AM')
    
    const [rescheduleDate, setRescheduleDate] = useState('')    
    const [rescheduleHourOfDay, setRescheduleHourOfDay] = useState()
    
    const [rescheduleComment, setRescheduleComment] = useState('')
    
    const [loading, setLoading] = useState(false); 
	 const [loadingMessage, setLoadingMessage] = useState(''); 	 

    const handleDateConfirm = (date) => {
        setDateVisible(false)
        setDate(moment(date).format('DD-MM-YYYY'))
        setRescheduleDate(moment(date).format('DD-MM-YYYY'));
    }
    const showDatePicker = () => {
        setDateVisible(true)
    }
    const hideDatePicker = () => {
        setDateVisible(false)
    }
    const handleTimeConfirm = (time) => {
    	

        setTimeVisible(false)
        setTime(moment(time).format('hh:mm A'))
        

        
        var theHours = moment.duration(moment(time).format('hh:mm')).asHours();
        theHours = Math.floor(theHours);
        
      
        
        setRescheduleHourOfDay(theHours)
    }
    const showTimePicker = () => {
        setTimeVisible(true)
    }
    const hideTimePicker = () => {
        setTimeVisible(false)
    }
    
    const handleReasonChange = (value) => {
    		 	     
       setRescheduleComment(value);         
    }
       
    
    
    useEffect(() => {  
	
	    
    		     setRescheduleDate(props.rescheduleDate);
    		     setRescheduleHourOfDay(props.rescheduleSlot);
    		      
   
   }, []); 
   
   
   
   //function submitReschedule(e, token = false) {  	
       const submitReschedule = async() => {
   
   
   
    
      var fieldsEmpty = false;
     
        if(rescheduleComment == ''){
           fieldsEmpty = true;

        }        
        
        if(rescheduleDate == ''){
           fieldsEmpty = true;

        } 
        
        if(rescheduleHourOfDay == 0){
           fieldsEmpty = true;

        } 
        
        
        if(fieldsEmpty){
          //message.error('One or more fields are empty');
          Toast.show({
                type: 'error',
                text1: 'One or more fields are empty',
            });
        } else{
    	  	
    	  	
    	  	var authToken = await AsyncStorage.getItem('@auth_token'); 
    	  	setLoading(true);
    	  	

    	  	
    	  	
         fetch('https://lawyerback.trikara.com/api/lawyer-ask-to-reschedule?appointment_request_id='+props.id+'&reschedule_comments='+rescheduleComment+'&suggested_reschedule_time='+rescheduleHourOfDay+'&suggested_reschedule_date='+rescheduleDate, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer '+authToken
                }
            }).then(res => res.json())
              .then((data) => {
                     setRescheduleConfirmation(data.appointmentRequests)
               })
              .then((response) => {
                   // do whatever you want with success response
                   setLoading(false);
           }).catch(console.log)      	  
    	  
    	  
    	  } // Else closes          
    
    
  }
    
    
    const setRescheduleConfirmation = (appointmentRequests) => {
    

        Toast.show({
                type: 'success',
                text1: 'Asked to reschedule appointment',
        });  
        
        props.hideRescheduleModal();
    
     }
   
   
   
    
    const getTime = (hourOfDay) => {
        
        if(hourOfDay == 0){
           return '00:00 AM';
        }
        
        if(hourOfDay == 1){
           return '01:00 AM';
        }
        
        if(hourOfDay == 2){
           return '02:00 AM';
        }
        
        if(hourOfDay == 3){
           return '03:00 AM';
        }
        
        if(hourOfDay == 4){
           return '04:00 AM';
        }
        
        if(hourOfDay == 5){
           return '05:00 AM';
        }
        
        if(hourOfDay == 6){
           return '06:00 AM';
        }
        
        if(hourOfDay == 7){
           return '07:00 AM';
        }
        
        if(hourOfDay == 8){
           return '08:00 AM';
        }
        
        if(hourOfDay == 9){
           return '09:00 AM';
        }
        
        if(hourOfDay == 10){
           return '10:00 AM';
        }
        
        if(hourOfDay == 11){
           return '11:00 AM';
        }
        
        if(hourOfDay == 12){
           return '12:00 PM';
        }
        
        if(hourOfDay == 13){
           return '01:00 PM';
        }
        
        if(hourOfDay == 14){
           return '02:00 PM';
        }
        
        if(hourOfDay == 15){
           return '03:00 PM';
        }
        
        if(hourOfDay == 16){
           return '04:00 PM';
        }
        
        if(hourOfDay == 17){
           return '05:00 PM';
        }
        
        if(hourOfDay == 18){
           return '06:00 PM';
        }
        
        if(hourOfDay == 19){
           return '07:00 PM';
        }
        
        if(hourOfDay == 20){
           return '08:00 PM';
        }
        
        if(hourOfDay == 21){
           return '09:00 PM';
        }
        
        
        if(hourOfDay == 22){
           return '10:00 PM';
        }
        
        if(hourOfDay == 23){
           return '11:00 PM';
        }
        
        
        
    };


    return (
        <View>
        
         {loading  &&
                  <View style={{height:'30%', width:'30%'}}>
                    <Wave size={100} color="#1E94A3" style={{marginLeft:'35%', marginTop:'50%'}}/>
                  </View>
               }


            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 15 }}>
                <Text style={styles.modalTitle}>Asking to Reschedule an{'\n'} Appointment Request </Text>
                <TouchableOpacity onPress={() => props.onAskReschule()}>
                    <CloseIcon name="close" size={20} style={{ marginLeft: 30 }} />
                </TouchableOpacity>
            </View>

            <View style={styles.bottomLine}>
                <Text style={{ fontSize: 12, fontFamily: 'openSans_regular' }}>Date: {props.date}</Text>
                <Text style={{ fontSize: 12, fontFamily: 'openSans_regular', paddingTop: 13, paddingBottom: 5 }}>
                  Time: {props.time}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingTop: 14 }}>
                <View style={{ paddingBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: 'openSans_regular' }}>{props.username}</Text>
                    <Text style={styles.smallText}>{props.city}</Text>
                    <Text style={styles.smallText}>{props.email}</Text>
                    <Text style={styles.smallText}>{props.mobile}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 13, fontFamily: 'roboto_medium' }}>Details</Text>

                    <Text style={{ fontSize: 12, fontFamily: 'openSans_regular', width:100, textAlign: 'justify' }}>
                     {props.description}</Text>
                </View>
            </View>
            <View style={styles.secondLine}>
                <View>
                    <TouchableOpacity onPress={showDatePicker} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 12, fontFamily: 'openSans_regular' }}>
                           Suggested {'\n'}Date: {rescheduleDate}</Text>
                        <DropDown name="caret-down-sharp" size={15} />
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isDateVisible}
                        mode="date"
                        onConfirm={handleDateConfirm}
                        onCancel={hideDatePicker}
                    />
                    <TouchableOpacity onPress={showTimePicker} style={{ flexDirection: 'row', paddingTop: 13, }}>
                        <Text style={{ fontSize: 12, fontFamily: 'openSans_regular', paddingBottom: 5 }}>
                        Suggested {'\n'}Time: {getTime(rescheduleHourOfDay)}</Text>
                        <DropDown name="caret-down-sharp" size={15} />
                    </TouchableOpacity>
                    <DateTimePickerModal
                        isVisible={isTimeVisible}
                        mode="time"
                        onConfirm={handleTimeConfirm}
                        onCancel={hideTimePicker}
                    />
                </View>
                <View style={{ bottom: 10 }}>
                    <Text style={{ fontSize: 13, fontFamily: 'roboto_medium' }}>Reason for{'\n'}Rescheduling</Text>
                    <TextInput                    
                        onChangeText={handleReasonChange}
                        style={styles.noteInput} />
                </View>


            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <TouchableOpacity style={[styles.modalBtns, { backgroundColor: '#28899B' }]} 
                    onPress={submitReschedule}>
                    <Text style={[styles.btnText, { color: 'white' }]}> Ask to Reschedule</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}