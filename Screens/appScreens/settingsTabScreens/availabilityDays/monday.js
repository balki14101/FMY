import React, { useState } from 'react'
import styles from '../settingsStyles'
import ModalDropdown from 'react-native-modal-dropdown';
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export default function Monday(props) {
	
	
	 const [isLoading, setLoading] = useState(false)
    const [loadingMessage, setLoadingMessage] = useState('')


  const [isSunday, setIsSunday] = useState('no');
  const [isMonday, setIsMonday] = useState('no');
  const [isTuesday, setIsTuesday] = useState('no');
  const [isWednesday, setIsWednesday] = useState('no');
  const [isThursday, setIsThursday] = useState('no');
  const [isFriday, setIsFriday] = useState('no');
  const [isSaturday, setIsSaturday] = useState('no');
  
  const [dayIsHoliday, setDayIsHoliday] = useState(0);
  
  const [selectedDateOnCalendar, setSelectedDateOnCalendar] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState('')

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
	
	
	function getFullHourName(value) {
    	
    	if(value=='6'){
        return '06:00 AM';    	
    	}
    	
    	if(value=='7'){
        return '07:00 AM';    	
    	}
    	
    	if(value=='8'){
        return '08:00 AM';    	
    	}
    	
    	if(value=='9'){
        return '09:00 AM';    	
    	}
    	
    	if(value=='10'){
        return '10:00 AM';    	
    	}
    	
    	if(value=='11'){
        return '11:00 AM';    	
    	}
    	
    	if(value=='12'){
        return '12:00 PM';    	
    	}

      if(value=='13'){
        return '01:00 PM';    	
    	}
    	
    	if(value=='14'){
        return '02:00 PM';    	
    	}
    	
    	if(value=='15'){
        return '03:00 PM';    	
    	}
    	
    	if(value=='16'){
        return '04:00 AM';    	
    	}
    	
    	if(value=='17'){
        return '05:00 PM';    	
    	}
    	
    	if(value=='18'){
        return '06:00 PM';    	
    	}
    	
    	if(value=='19'){
        return '07:00 PM';    	
    	}
    	
    	if(value=='20'){
        return '08:00 PM';    	
    	}
    	
    	if(value=='21'){
        return '09:00 PM';    	
    	}
    	
	   if(value=='22'){
        return '10:00 PM';    	
    	}
    	
    }
    
    
    function getValueFromName(value) {
    	
    	if(value=='06:00 AM'){
        return '6';    	
    	}
    	
    	if(value=='07:00 AM'){
        return '7';    	
    	}
    	
    	if(value=='08:00 AM'){
        return '8';    	
    	}
    	
    	if(value=='09:00 AM'){
        return '9';    	
    	}
    	
    	if(value=='10:00 AM'){
        return '10';    	
    	}
    	
    	if(value=='11:00 AM'){
        return '11';    	
    	}
    	
    	if(value=='12:00 PM'){
        return '12';    	
    	}

      if(value=='01:00 PM'){
        return '13';    	
    	}
    	
    	if(value=='02:00 PM'){
        return '14';    	
    	}
    	
    	if(value=='03:00 PM'){
        return '15';    	
    	}
    	
    	if(value=='04:00 PM'){
        return '16';    	
    	}
    	
    	if(value=='05:00 PM'){
        return '17';    	
    	}
    	
    	if(value=='06:00 PM'){
        return '18';    	
    	}
    	
    	if(value=='07:00 PM'){
        return '19';    	
    	}
    	
    	if(value=='08:00 PM'){
        return '20';    	
    	}
    	
    	if(value=='09:00 PM'){
        return '21';    	
    	}
    	
	   if(value=='10:00 PM'){
        return '22';    	
    	}
    	
    }
	
	
	const handleMondayChange = async(index, value) => {


    var newVal = value;

    var valueToSet = 1;

    if (newVal == 'Working') {
      valueToSet = 1;
    } else {
      valueToSet = 0;
    }

    setLoading(true);
    setLoadingMessage("Setting day status");

    var authToken = await AsyncStorage.getItem('@auth_token');


    fetch('https://lawyerback.trikara.com/api/lawyer-set-day-status?day=mon&val=' + valueToSet, {
      method: "POST",
      headers: {
        'Authorization': 'Bearer ' + authToken
      }
    })
      .then((response) => response.json())
      .then((json) => setConfirm(json.lawyerDay))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));


  }
  
  const setConfirm = (lawyerDay) => {
    	
    	
    }
  
  
  // Handle start time change (monday)
  const handleStartHourChangeMonday = async(index, value) => {
  	


    if((parseInt(getValueFromName(value))>parseInt(endHourMon))){
       //message.error('Start hour cannot be more than end hour');
       Toast.show({
                type: 'error',
                text1: 'Start hour cannot be more than end hour',
            });
    }else{ 

    	var newVal = getValueFromName(value);
    	setStartHourMon(newVal);
    	
    	// Reset break times
    	setBreakStartHourMon("0");
    	setBreakEndHourMon("0");
    	handleBreakStartHourChangeMonday("0");
    	handleBreakEndHourChangeMonday("0");
    	
    

    	// Call API to change this setting	 

    	var authToken = await AsyncStorage.getItem('@auth_token');
    	const requestOptions = {
      	method: 'POST',
      	headers: {
        		'Accept': 'application/json',
        		'Authorization': 'Bearer ' + authToken
      	}
    	};



    	//setLoading(true);
    	setLoadingMessage("Setting Start Hour of Day...");


    	fetch('https://lawyerback.trikara.com/api/lawyer-set-start-time-mon?start_time=' + newVal, requestOptions)
      	.then((response) => response.json())
      	.then((json) => returnStartTimeMonday(json.lawyer))
      	.catch((error) => console.error(error))
      	.finally(() => setLoading(false));
      
    }

  }


  const returnStartTimeMonday = (lawyer) => {
    setStartHourMon((lawyer.start_time_hour_monday).toString());
  }
  
  
  // Handle end time change (monday)
  const handleEndHourChangeMonday = async(index, value) => {
  	
  	if(getValueFromName(value) == "0"){
  		 var newVal = getValueFromName(value);
    	setEndHourMon(newVal);
    	 

    	var authToken = await AsyncStorage.getItem('@auth_token');
    	const requestOptions = {
      	method: 'POST',
      	headers: {
        		'Accept': 'application/json',
        		'Authorization': 'Bearer ' + authToken
      	}
    	};



    	setLoading(true);
    	setLoadingMessage("Setting End Hour of Day...");


    	fetch('https://lawyerback.trikara.com/api/lawyer-set-end-time-mon?end_time=' + newVal, requestOptions)
      	.then((response) => response.json())
      	.then((json) => returnEndTimeMonday(json.lawyer))
      	.catch((error) => console.error(error))
      	.finally(() => setLoading(false));
   }else{

    if((parseInt(getValueFromName(value))<parseInt(startHourMon))){
       //message.error('End hour cannot be less than start hour');
       Toast.show({
                type: 'error',
                text1: 'End hour cannot be less than start hour',
            });
    }else{ 
    	var newVal = getValueFromName(value);
    	setEndHourMon(newVal);
    	 

    	var authToken = await AsyncStorage.getItem('@auth_token');
    	const requestOptions = {
      	method: 'POST',
      	headers: {
        		'Accept': 'application/json',
        		'Authorization': 'Bearer ' + authToken
      	}
    	};





    	setLoading(true);
    	setLoadingMessage("Setting End Hour of Day...");


    	fetch('https://lawyerback.trikara.com/api/lawyer-set-end-time-mon?end_time=' + newVal, requestOptions)
      	.then((response) => response.json())
      	.then((json) => returnEndTimeMonday(json.lawyer))
      	.catch((error) => console.error(error))
      	.finally(() => setLoading(false));
  		}
  		
}

  }


  const returnEndTimeMonday = (lawyer) => {  	

    setEndHourMon((lawyer.end_time_hour_monday).toString());
  }
  
  
  // Handle break time start of day (monday)    
  const handleBreakStartHourChangeMonday = async(index, value) => {
  	
    // no validations if value is 0
    if(getValueFromName(value) == "0"){
       var newVal = getValueFromName(value);
    	setBreakStartHourMon(newVal);
    

    	// Call API to change this setting	 

    	var authToken = await AsyncStorage.getItem('@auth_token');
    	const requestOptions = {
      	method: 'POST',
      	headers: {
        		'Accept': 'application/json',
	         'Authorization': 'Bearer ' + authToken
      	}
    	};



    	//setLoading(true);
    	setLoadingMessage("Setting Break Start Hour of Day...");


    	fetch('https://lawyerback.trikara.com/api/lawyer-set-break-start-time-mon?start_time=' + newVal, requestOptions)
      	.then((response) => response.json())
      	.then((json) => returnStartTime1Monday(json.lawyer))
      	.catch((error) => console.error('ss'))
      	.finally(() => setLoading(false));
    }else{

    if((parseInt(getValueFromName(value))<parseInt(startHourMon)) || (parseInt(getValueFromName(value))>parseInt(endHourMon))){
        //message.error('Break time has to be within working hours');   
        Toast.show({
                type: 'error',
                text1: 'Break time has to be within working hours',
            });
    }else if((parseInt(getValueFromName(value))>parseInt(breakEndHourMon)) && (getValueFromName(value)!=="0") && (breakEndHourMon!=='0')){
    	 //message.error('Break start time cannot be more than end time'); 
    	 Toast.show({
                type: 'error',
                text1: 'Break start time cannot be more than end time',
            });
    	 
    }else{

    	var newVal = getValueFromName(value);
    	setBreakStartHourMon(newVal);
    

    	// Call API to change this setting	 

    	var authToken = await AsyncStorage.getItem('@auth_token');
    	const requestOptions = {
      	method: 'POST',
      	headers: {
        		'Accept': 'application/json',
	         'Authorization': 'Bearer ' + authToken
      	}
    	};



    	//setLoading(true);
    	setLoadingMessage("Setting Break Start Hour of Day...");


    	fetch('https://lawyerback.trikara.com/api/lawyer-set-break-start-time-mon?start_time=' + newVal, requestOptions)
      	.then((response) => response.json())
      	.then((json) => returnStartTime1Monday(json.lawyer))
      	.catch((error) => console.error('ss'))
      	.finally(() => setLoading(false));
      
   }
   
  }

  }


  const returnStartTime1Monday = (lawyer) => {
    setBreakStartHourMon((lawyer.break_start_hour_monday).toString());
  }
  
  
// Handle break end time of day (monday)
  const handleBreakEndHourChangeMonday = async(index, value) => {
  	
    //(event) {
   // NO validations if value is zero
   if(getValueFromName(value) == "0"){
   	  var newVal = getValueFromName(value);
    	  setBreakEndHourMon(newVal);


    	var authToken = await AsyncStorage.getItem('@auth_token');
    	const requestOptions = {
      	method: 'POST',
      	headers: {
        		'Accept': 'application/json',
        		'Authorization': 'Bearer ' + authToken
      	}
    	};



    	//setLoading(true);
    	setLoadingMessage("Setting Break End Hour of Day...");


    	fetch('https://lawyerback.trikara.com/api/lawyer-set-break-end-time-mon?end_time=' + newVal, requestOptions)
      	.then((response) => response.json())
      	.then((json) => returnEndTime1Monday(json.lawyer))
      	.catch((error) => console.error('ss'))
      	.finally(() => setLoading(false));
   }else{ 	
    	
    if((parseInt(getValueFromName(value))<parseInt(startHourMon)) || (parseInt(getValueFromName(value))>parseInt(endHourMon))){
       //message.error('Break time has to be within working hours');
       Toast.show({
                type: 'error',
                text1: 'Break time has to be within working hours',
            });
    }else if((parseInt(getValueFromName(value))<parseInt(breakStartHourMon)) && (getValueFromName(value)!=="0")){
    	 //message.error('Break end time cannot be less than break start time'); 
    	 Toast.show({
                type: 'error',
                text1: 'Break end time cannot be less than break start time',
            });
    	 
    }else{  	

    	var newVal = getValueFromName(value);
    	setBreakEndHourMon(newVal);


    	var authToken = await AsyncStorage.getItem('@auth_token');
    	const requestOptions = {
      	method: 'POST',
      	headers: {
        		'Accept': 'application/json',
        		'Authorization': 'Bearer ' + authToken
      	}
    	};



    	//setLoading(true);
    	setLoadingMessage("Setting Break End Hour of Day...");


    	fetch('https://lawyerback.trikara.com/api/lawyer-set-break-end-time-mon?end_time=' + newVal, requestOptions)
      	.then((response) => response.json())
      	.then((json) => returnEndTime1Monday(json.lawyer))
      	.catch((error) => console.error('ss'))
      	.finally(() => setLoading(false));
      
   	}
   	
   }

  }


  const returnEndTime1Monday = (lawyer) => {
    setBreakEndHourMon((lawyer.break_end_hour_monday).toString());
  }
  
  
  
    return (
        <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.dayText}>Monday</Text>
                
                {props.isMonday == 'yes' && 
                <ModalDropdown
                    options={['Holiday', 'Working']}
                    defaultValue='Working'
                    onSelect={handleMondayChange}
                    style={{ borderColor: 'black', borderWidth: 1, height: 30, width: '40%', borderRadius: 5, padding: 5 }}
                    dropdownStyle={{ width: '40%', height: 80, borderRadius: 5, }}
                    textStyle={styles.dropdownTitle}
                    dropdownTextStyle={styles.dropdownTitle}
                />
               }
               
               {props.isMonday == 'no' && 
                <ModalDropdown
                    options={['Holiday', 'Working']}
                    defaultValue='Holiday'
                    onSelect={handleMondayChange}
                    style={{ borderColor: 'black', borderWidth: 1, height: 30, width: '40%', borderRadius: 5, padding: 5 }}
                    dropdownStyle={{ width: '40%', height: 80, borderRadius: 5, }}
                    textStyle={styles.dropdownTitle}
                    dropdownTextStyle={styles.dropdownTitle}
                />
               }
            </View>
            <View style={{ paddingTop: 10 }}>
                <Text style={styles.dropdownTitle}>Working hours</Text>
                <View style={{ flexDirection: 'row', paddingTop: 10, justifyContent: 'space-between' }}>
                    <ModalDropdown
                        onSelect={handleStartHourChangeMonday}
                        options={['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM']}
                        defaultValue={getFullHourName(props.startHourMon)}
                        style={{ borderColor: 'black', borderWidth: 1, height: 30, width: '40%', borderRadius: 5, padding: 5 }}
                        dropdownStyle={{ width: '40%', borderRadius: 5, }}
                        textStyle={styles.dropdownTitle}
                        dropdownTextStyle={styles.dropdownTitle}
                    />
                    <Text style={styles.dayText}>To</Text>
                    <ModalDropdown
                        options={['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM']}
                        defaultValue={getFullHourName(props.endHourMon)}
                        onSelect={handleEndHourChangeMonday}
                        style={{ borderColor: 'black', borderWidth: 1, height: 30, width: '40%', borderRadius: 5, padding: 5 }}
                        dropdownStyle={{ width: '40%', borderRadius: 5, }}
                        textStyle={styles.dropdownTitle}
                        dropdownTextStyle={styles.dropdownTitle}
                    />
                </View>
            </View>
            <View style={{ paddingTop: 12 }}>
                <Text style={styles.dropdownTitle}>Break Time</Text>
                <View style={{ flexDirection: 'row', paddingTop: 10, justifyContent: 'space-between' }}>
                    <ModalDropdown
                        options={['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM']}
                        defaultValue={getFullHourName(props.breakStartHourMon)}
                        onSelect={handleBreakStartHourChangeMonday}
                        style={{ borderColor: 'black', borderWidth: 1, height: 30, width: '40%', borderRadius: 5, padding: 5 }}
                        dropdownStyle={{ width: '40%', borderRadius: 5, }}
                        textStyle={styles.dropdownTitle}
                        dropdownTextStyle={styles.dropdownTitle}
                    />
                    <Text style={styles.dayText}>To</Text>
                    <ModalDropdown
                        options={['06:00 AM', '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM', '10:00 PM']}
                        defaultValue={getFullHourName(props.breakEndHourMon)}
                        onSelect={handleBreakEndHourChangeMonday}
                        style={{ borderColor: 'black', borderWidth: 1, height: 30, width: '40%', borderRadius: 5, padding: 5 }}
                        dropdownStyle={{ width: '40%', borderRadius: 5, }}
                        textStyle={styles.dropdownTitle}
                        dropdownTextStyle={styles.dropdownTitle}
                    />
                </View>
            </View>
        </View>
    )
}


