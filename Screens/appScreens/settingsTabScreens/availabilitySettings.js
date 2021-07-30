import React, { useState, useEffect } from 'react'

import { View, Text } from 'react-native'
import styles from './settingsStyles'
import Sunday from './availabilityDays/sunday'
import Monday from './availabilityDays/monday'
import Tuesday from './availabilityDays/tuesday'
import Wednesday from './availabilityDays/wednesday'
import Thursday from './availabilityDays/thurday'
import Friday from './availabilityDays/friday'
import Saturday from './availabilityDays/saturday'
import { ScrollView } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Wave } from 'react-native-animated-spinkit'

export default function AvailabilitySettings() {
	
	 const [isSunday, setIsSunday] = useState('no');
    const [isMonday, setIsMonday] = useState('no');
    const [isTuesday, setIsTuesday] = useState('no');
    const [isWednesday, setIsWednesday] = useState('no');
    const [isThursday, setIsThursday] = useState('no');
    const [isFriday, setIsFriday] = useState('no');
    const [isSaturday, setIsSaturday] = useState('no')
    
    const [isLoading, setLoading] = useState(false)
    const [loadingMessage, setLoadingMessage] = useState('')
    
    // mon
    const [startHourMon, setStartHourMon] = useState("6")
    const [endHourMon, setEndHourMon] = useState("22")
  
    // tue
    const [startHourTue, setStartHourTue] = useState("6")
    const [endHourTue, setEndHourTue] = useState("22")
  
    // wed
    const [startHourWed, setStartHourWed] = useState("6")
    const [endHourWed, setEndHourWed] = useState("22")
  
    //thu
    const [startHourThu, setStartHourThu] = useState("6")
    const [endHourThu, setEndHourThu] = useState("22")
  
    // fri
    const [startHourFri, setStartHourFri] = useState("6")
    const [endHourFri, setEndHourFri] = useState("22")
  
    // sat
    const [startHourSat, setStartHourSat] = useState("6")
    const [endHourSat, setEndHourSat] = useState("22")
  
    // sun
    const [startHourSun, setStartHourSun] = useState("6")
    const [endHourSun, setEndHourSun] = useState("22")
  
    ////////break
    //mon
    const [breakStartHourMon, setBreakStartHourMon] = useState("0")
    const [breakEndHourMon, setBreakEndHourMon] = useState("0")
  
    //tue
    const [breakStartHourTue, setBreakStartHourTue] = useState("0")
    const [breakEndHourTue, setBreakEndHourTue] = useState("0")
  
    //wed
    const [breakStartHourWed, setBreakStartHourWed] = useState("0")
    const [breakEndHourWed, setBreakEndHourWed] = useState("0")
  
    //thu
    const [breakStartHourThu, setBreakStartHourThu] = useState("0")
    const [breakEndHourThu, setBreakEndHourThu] = useState("0")
  
    //fri
    const [breakStartHourFri, setBreakStartHourFri] = useState("0")
    const [breakEndHourFri, setBreakEndHourFri] = useState("0")
  
    //sat
    const [breakStartHourSat, setBreakStartHourSat] = useState("0")
    const [breakEndHourSat, setBreakEndHourSat] = useState("0")
  
    //sun
    const [breakStartHourSun, setBreakStartHourSun] = useState("0")
    const [breakEndHourSun, setBreakEndHourSun] = useState("0")
	
	
	 useEffect(() => {      
    
        (async () => {	

      		var authToken = await AsyncStorage.getItem('@auth_token');

            setLoading(true);


            fetch('https://lawyerback.trikara.com/api/lawyer-get-days-status', {
              method: "GET",
              headers: {
                 'Authorization': 'Bearer ' + authToken
              }
           })
           .then((response) => response.json())
           .then((json) => setDaysData(json.lawyerDay))
           .catch((error) => console.error(error))
           .finally(() => setLoading(false));   
           
           const requestOptions1 = {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Authorization': 'Bearer ' + authToken
            }
           };

           
           
          fetch('https://lawyerback.trikara.com/api/lawyer-get-start-end-time', requestOptions1)
             .then((response) => response.json())
             .then((json) => setStartEndTime(json.lawyer))
             .catch((error) => console.error(error))
             .finally(() => console.log('ss'));
      
       
           
         })();  
         
         
             
      
    }, []); 



	
	const setDaysData = (lawyerDay) => {

    if (lawyerDay.available_on_sunday == 1) {
      setIsSunday('yes');
    } else {
      setIsSunday('no');
    }

    if (lawyerDay.available_on_monday == 1) {
      setIsMonday('yes');
    } else {
      setIsMonday('no');
    }

    if (lawyerDay.available_on_tuesday == 1) {
      setIsTuesday('yes');
    } else {
      setIsTuesday('no');
    }

    if (lawyerDay.available_on_wednesday == 1) {
      setIsWednesday('yes');
    } else {
      setIsWednesday('no');
    }

    if (lawyerDay.available_on_thursday == 1) {
      setIsThursday('yes');
    } else {
      setIsThursday('no');
    }

    if (lawyerDay.available_on_friday == 1) {
      setIsFriday('yes');
    } else {
      setIsFriday('no');
    }

    if (lawyerDay.available_on_saturday == 1) {
      setIsSaturday('yes');
    } else {
      setIsSaturday('no');
    }

    setInitialDate();

  }
  
  const setInitialDate = () => {


   /* var date = new Date();

    date.setDate(date.getDate());


    var todayDate = date.toISOString().slice(0, 10);
    
    

    setSelectedDate(todayDate);

    getSlots(todayDate);*/

  }
  
  const setStartEndTime = (lawyer) => {
  	
  	 //alert('yaha aata hu'+lawyer.start_time_hour_sunday)
  	 
  	 if(lawyer.start_time_hour_sunday){
  	    setStartHourSun((lawyer.start_time_hour_sunday).toString());
  	 }
  	 
  	 if(lawyer.end_time_hour_sunday){
       setEndHourSun((lawyer.end_time_hour_sunday).toString());
    }

    if(lawyer.start_time_hour_monday){
       setStartHourMon((lawyer.start_time_hour_monday).toString());
    }
    
    if(lawyer.end_time_hour_monday){
       setEndHourMon((lawyer.end_time_hour_monday).toString());
    }
    
    if(lawyer.start_time_hour_tuesday){
       setStartHourTue((lawyer.start_time_hour_tuesday).toString());
    }
    
    if(lawyer.end_time_hour_tuesday){
       setEndHourTue((lawyer.end_time_hour_tuesday).toString());
    }  
    
    if(lawyer.start_time_hour_wednesday){
       setStartHourWed((lawyer.start_time_hour_wednesday).toString());
    }
    
    if(lawyer.end_time_hour_wednesday){
       setEndHourWed((lawyer.end_time_hour_wednesday).toString());
    }
    
    if(lawyer.start_time_hour_thursday){
      setStartHourThu((lawyer.start_time_hour_thursday).toString());
    }
    
    if(lawyer.end_time_hour_thursday){
       setEndHourThu((lawyer.end_time_hour_thursday).toString());
    }
    
    if(lawyer.start_time_hour_friday){
       setStartHourFri((lawyer.start_time_hour_friday).toString());
    }
    
    if(lawyer.end_time_hour_friday){
       setEndHourFri((lawyer.end_time_hour_friday).toString());
    }
    
    if(lawyer.start_time_hour_saturday){
       setStartHourSat((lawyer.start_time_hour_saturday).toString());
    }
    
    if(lawyer.end_time_hour_saturday){
       setEndHourSat((lawyer.end_time_hour_saturday).toString());
    }
    
    // Break times
    if(lawyer.break_start_hour_sunday){
  	    setBreakStartHourSun((lawyer.break_start_hour_sunday).toString());
  	 }
  	 
  	 if(lawyer.break_end_hour_sunday){
       setBreakEndHourSun((lawyer.break_end_hour_sunday).toString());
    }

    if(lawyer.break_start_hour_monday){
       setBreakStartHourMon((lawyer.break_start_hour_monday).toString());
    }
    
    if(lawyer.break_end_hour_monday){
       setBreakEndHourMon((lawyer.break_end_hour_monday).toString());
    }
    
    if(lawyer.break_start_hour_tuesday){
       setBreakStartHourTue((lawyer.break_start_hour_tuesday).toString());
    }
    
    if(lawyer.break_end_hour_tuesday){
       setBreakEndHourTue((lawyer.break_end_hour_tuesday).toString());
    }  
    
    if(lawyer.break_start_hour_wednesday){
       setBreakStartHourWed((lawyer.break_start_hour_wednesday).toString());
    }
    
    if(lawyer.break_end_hour_wednesday){
       setBreakEndHourWed((lawyer.break_end_hour_wednesday).toString());
    }
    
    if(lawyer.break_start_hour_thursday){
      setBreakStartHourThu((lawyer.break_start_hour_thursday).toString());
    }
    
    if(lawyer.break_end_hour_thursday){
       setBreakEndHourThu((lawyer.break_end_hour_thursday).toString());
    }
    
    if(lawyer.break_start_hour_friday){
       setBreakStartHourFri((lawyer.break_start_hour_friday).toString());
    }
    
    if(lawyer.break_end_hour_friday){
       setBreakEndHourFri((lawyer.break_end_hour_friday).toString());
    }
    
    if(lawyer.break_start_hour_saturday){
       setBreakStartHourSat((lawyer.break_start_hour_saturday).toString());
    }
    
    if(lawyer.break_end_hour_saturday){
       setBreakEndHourSat((lawyer.break_end_hour_saturday).toString());
    }
    
    
    // Stop the loaded with a second delay
    setLoading(false)
    
    

  }
	
	 
      
      
    return (
        <ScrollView>
        
            {isLoading  &&
               <View style={{height:'100%', width:'100%'}}>
                 <Wave size={100} color="#1E94A3" style={{marginLeft:'35%', marginTop:'80%'}}/>
               </View>
            }
             
             
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <View style={styles.mainContainer}>
                    <View style={{ borderBottomColor: 'lightgrey', borderBottomWidth: 1, paddingBottom: 20 }}>
                        <Sunday isSunday={isSunday} startHourSun={startHourSun} endHourSun={endHourSun} breakStartHourSun={breakStartHourSun} breakEndHourSun={breakEndHourSun}/>
                    </View>
                    <View style={{ borderBottomColor: 'lightgrey', borderBottomWidth: 1, paddingBottom: 20 }}>
                        <Monday isMonday={isMonday} startHourMon={startHourMon} endHourMon={endHourMon} breakStartHourMon={breakStartHourMon} breakEndHourMon={breakEndHourMon}/>
                    </View>
                    <View style={{ borderBottomColor: 'lightgrey', borderBottomWidth: 1, paddingBottom: 20 }}>
                        <Tuesday isTuesday={isTuesday} startHourTue={startHourTue} endHourTue={endHourTue} breakStartHourTue={breakStartHourTue} breakEndHourTue={breakEndHourTue}/>
                    </View>
                    <View style={{ borderBottomColor: 'lightgrey', borderBottomWidth: 1, paddingBottom: 20 }}>
                        <Wednesday isWednesday={isWednesday} startHourWed={startHourWed} endHourWed={endHourWed} breakStartHourMon={breakStartHourWed} breakEndHourWed={breakEndHourWed}/>
                    </View>
                    <View style={{ borderBottomColor: 'lightgrey', borderBottomWidth: 1, paddingBottom: 20 }}>
                        <Thursday isThursday={isThursday} startHourThu={startHourThu} endHourThu={endHourThu} breakStartHourThu={breakStartHourThu} breakEndHourThu={breakEndHourThu}/>
                    </View>
                    <View style={{ borderBottomColor: 'lightgrey', borderBottomWidth: 1, paddingBottom: 20 }}>
                        <Friday isFriday={isFriday} startHourFri={startHourFri} endHourFri={endHourFri} breakStartHourFri={breakStartHourFri} breakEndHourFri={breakEndHourFri}/>
                    </View>
                    <View style={{ borderBottomColor: 'lightgrey', borderBottomWidth: 1, paddingBottom: 20, marginBottom: 20 }}>
                        <Saturday isSaturday={isSaturday} startHourSat={startHourSat} endHourSat={endHourSat} breakStartHourSat={breakStartHourSat} breakEndHourSat={breakEndHourSat}/>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}