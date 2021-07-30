import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './settingsStyles'
import CalendarPicker from 'react-native-calendar-picker';
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import moment from "moment";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CircleFade } from 'react-native-animated-spinkit'
import SelectMultiple from 'react-native-select-multiple'

export default function CalenderSettings() {
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedSlotNames, setSelectedSlotNames] = useState([]);
    
    const [slots, setSlots] = useState([]);
    
    const slotNames = [
	                   '06:00 AM to 07:00 AM',
	                   '07:00 AM to 08:00 AM',
	                   '08:00 AM to 09:00 AM',
	                   '09:00 AM to 10:00 AM',
	                   '10:00 AM to 11:00 AM',
	                   '11:00 AM to 12:00 PM',
	                   '12:00 PM to 01:00 PM',
	                   '01:00 PM to 02:00 PM',
	                   '02:00 PM to 03:00 PM',
	                   '03:00 PM to 04:00 PM',
	                   '04:00 PM to 05:00 PM',
	                   '05:00 PM to 06:00 PM',
	                   '06:00 PM to 07:00 PM',
	                   '07:00 PM to 08:00 PM',
	                   '08:00 PM to 09:00 PM',
	                   '09:00 PM to 10:00 PM',
	                   '10:00 PM to 11:00 PM',
	                                  
	 
	                ]

    
    const [isLoading, setLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('');
    const [dayIsHoliday, setDayIsHoliday] = useState(0);
    
    
    const renderLabel = (label, style) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.selectLabel}>{label}</Text>
                </View>
            </View>
        )
    }
    
    useEffect(() => {  
	
	(async () => {	    
   
          setInitialDate()
          
       })();   
    		      
   
   }, []); 
   
   
   


    const setInitialDate = () => {


         var date = new Date();
         date.setDate(date.getDate());

         var todayDate = date.toISOString().slice(0, 10);   

         setSelectedDate(todayDate); 
         getSlots(todayDate);

  }
  
  

    
    const onSelectionsChange = async(selectedCategories1, item) => {
    	
    	  //alert(JSON.stringify(item))
    	
        // selectedFruits is array of { label, value }
        setSelectedSlotNames(selectedCategories1);
        
        
           var authToken = await AsyncStorage.getItem('@auth_token');
           const requestOptions = {
             method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Authorization': 'Bearer ' + authToken
                }
             };
             
         let val;
         let status;
             
         if(item.value=='06:00 AM to 07:00 AM'){
           val = 0;         
                 
         } 
         
         if(item.value=='07:00 AM to 08:00 AM'){
           val = 1;         
         } 
         
         if(item.value=='08:00 AM to 09:00 AM'){
           val = 2;         
         } 
         
         if(item.value=='09:00 AM to 10:00 AM'){
           val = 3;         
         } 
         
         if(item.value=='10:00 AM to 11:00 AM'){
           val = 4;         
         } 
         
         if(item.value=='11:00 AM to 12:00 PM'){
           val = 5;         
         } 
         
         if(item.value=='12:00 PM to 01:00 PM'){
           val = 6;         
         } 
         
         if(item.value=='01:00 PM to 02:00 PM'){
           val = 7;         
         } 
         
         if(item.value=='02:00 PM to 03:00 PM'){
           val = 8;         
         } 
         
         if(item.value=='03:00 PM to 04:00 PM'){
           val = 9;         
         } 
         
         if(item.value=='04:00 PM to 05:00 PM'){
           val = 10;         
         } 
         
         if(item.value=='05:00 PM to 06:00 PM'){
           val = 11;         
         } 
         
         if(item.value=='06:00 PM to 07:00 PM'){
           val = 12;         
         } 
         
         if(item.value=='07:00 PM to 08:00 PM'){
           val = 13;         
         } 
         
         if(item.value=='08:00 PM to 09:00 PM'){
           val = 14;         
         } 
         
         if(item.value=='09:00 PM to 10:00 PM'){
           val = 15;         
         } 
         
         if(item.value=='10:00 PM to 11:00 PM'){
           val = 16;         
         } 
         
         var theSel1 = [];
         
         for(var i=0;i<selectedCategories1.length;i++){
            //console.log(selectedCategories1[i])  
            theSel1.push(selectedCategories1[i].value)       
         }
         
         if(theSel1.includes(item.value))  {

             status = 'available';         
         }else{
             status = 'unavailable';  
         }
            





    setLoading(true);
    setLoadingMessage("Modifying slot status...");


    fetch('https://lawyerback.trikara.com/api/lawyer-set-slot?date=' + selectedDate + '&val=' + val + '&status='+status, requestOptions)
      .then((response) => response.json())
      .then((json) => setAvailableSlots(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));

    }
    
    
    

    const onDateChange = (date, type) => {
    	  //alert(moment().toISOString().slice(0, 10))
    	  
    	      //var todayDate = date.toISOString().slice(0, 10);
    	      
    	  theDate = moment(date).toISOString().slice(0, 10);   
    	  //alert(theDate) 
    	  setSelectedDate(theDate); 
    	  
    	  getSlots(theDate);   
    	      
        //function to handle the date change
        if (type === 'END_DATE') {
            setSelectedEndDate(date);
        } else {
            setSelectedEndDate(null);
            setSelectedStartDate(date);
        }
    };
    
    function removeItemOnce(arr, value) {
         var index = arr.indexOf(value);
         if (index > -1) {
            arr.splice(index, 1);
         }
         return arr;
     }



    
    const setAvailableSlots = (json) => {
    	

      setSlots(json.slots);
      
      var slotties = json.slots;
      
      if(slotties[0]=='available'){

         var theSel = selectedSlotNames;        

         theSel.push("06:00 AM to 07:00 AM")	
         setSelectedSlotNames(theSel);       
      }else{
         var theSel = selectedSlotNames;        

         theSel = removeItemOnce(theSel, "06:00 AM to 07:00 AM")
         setSelectedSlotNames(theSel);  
      } 
      
      if(slotties[1]=='available'){

         var theSel = selectedSlotNames;        

         theSel.push("07:00 AM to 08:00 AM")	
         setSelectedSlotNames(theSel);       
      }else{
         var theSel = selectedSlotNames;        

         theSel = removeItemOnce(theSel, "07:00 AM to 08:00 AM")
         setSelectedSlotNames(theSel);       
      }      
      
      if(slotties[2]=='available'){

         var theSel = selectedSlotNames;        

         theSel.push("08:00 AM to 09:00 AM")	
         setSelectedSlotNames(theSel);       
      }else{
         var theSel = selectedSlotNames;        

         theSel = removeItemOnce(theSel, "08:00 AM to 09:00 AM")
         setSelectedSlotNames(theSel);       
      } 
      
      if(slotties[3]=='available'){

         var theSel = selectedSlotNames;        

         theSel.push("09:00 AM to 10:00 AM")	
         setSelectedSlotNames(theSel);       
      }else{
         var theSel = selectedSlotNames;        

         theSel = removeItemOnce(theSel, "09:00 AM to 10:00 AM")
         setSelectedSlotNames(theSel);       
      } 
      
      if(slotties[4]=='available'){

         var theSel = selectedSlotNames;        

         theSel.push("10:00 AM to 11:00 AM")	
         setSelectedSlotNames(theSel);       
      }else{
         var theSel = selectedSlotNames;        

         theSel = removeItemOnce(theSel, "10:00 AM to 11:00 AM")
         setSelectedSlotNames(theSel);       
      } 
      
      if(slotties[5]=='available'){

         var theSel = selectedSlotNames;        

         theSel.push("11:00 AM to 12:00 PM")	
         setSelectedSlotNames(theSel);       
      }else{
         var theSel = selectedSlotNames;        

         theSel = removeItemOnce(theSel, "11:00 AM to 12:00 PM")
         setSelectedSlotNames(theSel); 
      } 
      
      if(slotties[6]=='available'){

         var theSel = selectedSlotNames;        

         theSel.push("12:00 PM to 01:00 PM")	
         setSelectedSlotNames(theSel);       
      }else{
          var theSel = selectedSlotNames;        

         theSel = removeItemOnce(theSel, "12:00 PM to 01:00 PM")
         setSelectedSlotNames(theSel);       
      } 
      
      if(slotties[7]=='available'){

         var theSel = selectedSlotNames;        

         theSel.push("01:00 PM to 02:00 PM")	
         setSelectedSlotNames(theSel);       
      }else{
        var theSel = selectedSlotNames;        

         theSel = removeItemOnce(theSel, "01:00 PM to 02:00 PM")
         setSelectedSlotNames(theSel);       
      }
      
      
      if(slotties[8]=='available'){

         var theSel = selectedSlotNames;        

         theSel.push("02:00 PM to 03:00 PM")	
         setSelectedSlotNames(theSel);       
      }else{
         var theSel = selectedSlotNames;        

         theSel = removeItemOnce(theSel, "02:00 PM to 03:00 PM")
         setSelectedSlotNames(theSel);       
      } 
      
      if(slotties[9]=='available'){

         var theSel = selectedSlotNames;        

         theSel.push("03:00 PM to 04:00 PM")	
         setSelectedSlotNames(theSel);       
      }else{
         var theSel = selectedSlotNames;        

         theSel = removeItemOnce(theSel, "03:00 PM to 04:00 PM")
         setSelectedSlotNames(theSel);       
      } 
      
      if(slotties[10]=='available'){

         var theSel = selectedSlotNames;        

         theSel.push("04:00 PM to 05:00 PM")	
         setSelectedSlotNames(theSel);       
      }else{
         var theSel = selectedSlotNames;        

         theSel = removeItemOnce(theSel, "04:00 PM to 05:00 PM")
         setSelectedSlotNames(theSel);       
      } 
      
      if(slotties[11]=='available'){

         var theSel = selectedSlotNames;        

         theSel.push("05:00 PM to 06:00 PM")	
         setSelectedSlotNames(theSel);       
      }else{
           var theSel = selectedSlotNames;        

         theSel = removeItemOnce(theSel, "05:00 PM to 06:00 PM")
         setSelectedSlotNames(theSel);       
      } 
      
      if(slotties[12]=='available'){

         var theSel = selectedSlotNames;        

         theSel.push("06:00 PM to 07:00 PM")	
         setSelectedSlotNames(theSel);       
      }else{
           var theSel = selectedSlotNames;        

         theSel = removeItemOnce(theSel, "06:00 PM to 07:00 PM")
         setSelectedSlotNames(theSel);      
       } 
      
      if(slotties[13]=='available'){

         var theSel = selectedSlotNames;        

         theSel.push("07:00 PM to 08:00 PM")	
         setSelectedSlotNames(theSel);       
      }else{
         var theSel = selectedSlotNames;        

         theSel = removeItemOnce(theSel, "07:00 PM to 08:00 PM")
         setSelectedSlotNames(theSel);       
      } 
      
      if(slotties[14]=='available'){

         var theSel = selectedSlotNames;        

         theSel.push("08:00 PM to 09:00 PM")	
         setSelectedSlotNames(theSel);       
      }else{
      
         var theSel = selectedSlotNames;        

         theSel = removeItemOnce(theSel, "08:00 PM to 09:00 PM")
         setSelectedSlotNames(theSel); 
      } 
      
      if(slotties[15]=='available'){

         var theSel = selectedSlotNames;        

         theSel.push("09:00 PM to 10:00 PM")	
         setSelectedSlotNames(theSel);       
      }else{
         var theSel = selectedSlotNames;        

         theSel = removeItemOnce(theSel, "09:00 PM to 10:00 PM")
         setSelectedSlotNames(theSel);       
      } 
      
      if(slotties[16]=='available'){

         var theSel = selectedSlotNames;        

         theSel.push("10:00 PM to 11:00 PM")	
         setSelectedSlotNames(theSel);       
      }else{
         var theSel = selectedSlotNames;        

         theSel = removeItemOnce(theSel, "10:00 PM to 11:00 PM")
         setSelectedSlotNames(theSel);       
      } 
      
      
      setDayIsHoliday(json.dayIsHoliday)
      
      
  }
  
  
    
    const getSlots = async(todayDate) => {



    var authToken = await AsyncStorage.getItem('@auth_token');
    const requestOptions = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + authToken
      }
    };


    setLoading(true);
    setLoadingMessage("Fetching slots of the selected date...");


    fetch('https://lawyerback.trikara.com/api/lawyer-get-slots-of-date?date=' + todayDate, requestOptions)
      .then((response) => response.json())
      .then((json) => setAvailableSlots(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));


  }

 
  
  

    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Updated Successfully',
        });
    }

    return (
        <ScrollView>
        
            
             {isLoading &&
                <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
                    <CircleFade size={100} color="#28899B" style={{ marginTop: '70%' }} />
                    <Text style={styles.loadingText}>{loadingMessage}</Text>
                </View>

            }
            
            
            
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <View style={styles.mainContainer}>

                    <Text style={styles.pageTitle}>Available Time Slots</Text>
                    <Text style={[styles.informationText, { fontSize: 12, marginTop: 2 }]}>To make yourself unavailable for a slot, please unselect it</Text>
                    <Text style={[styles.informationText, { fontSize: 10, paddingTop: 0 }]}>Missing slots are the ones disabled via availablity settings</Text>
                    
                     {dayIsHoliday == 1 &&
                         <Text style={{color:'red', marginBottom:40}}>
                            This day is set as a holiday in availability settings
                         </Text>                
                     }
                
                    <View style={{ paddingStart: 20, paddingEnd: 20, marginTop: 20 }}>
                        <CalendarPicker
                            startFromMonday={true}
                            allowRangeSelection={false}
                            weekdays={
                                [
                                    'Mon',
                                    'Tue',
                                    'Wed',
                                    'Thur',
                                    'Fri',
                                    'Sat',
                                    'Sun'
                                ]}
                            months={[
                                'January',
                                'Febraury',
                                'March',
                                'April',
                                'May',
                                'June',
                                'July',
                                'August',
                                'September',
                                'October',
                                'November',
                                'December',
                            ]}
                            previousTitle="Previous"
                            nextTitle="Next"                         
                            previousTitleStyle={{ paddingLeft: 30 }}
                            customDayHeaderStyles={{ paddingRight: 30 }}
                            nextTitleStyle={{ paddingRight: 30 }}
                            todayBackgroundColor="#28899B"
                            selectedDayColor="#28899B"
                            selectedDayTextColor="#000000"
                            scaleFactor={375}
                            textStyle={{
                                fontFamily: 'openSans_regular',
                                color: '#000000',
                            }}
                            onDateChange={onDateChange}
                            dayLabelsWrapper={{borderBottomWidth:0,borderTopWidth:0,left:30}}
                        />
                    </View>
                    
                {!dayIsHoliday &&    
                    
                    <SelectMultiple
                            items={slotNames}
                            selectedItems={selectedSlotNames}
                            renderLabel={renderLabel}
                            onSelectionsChange={onSelectionsChange}

                    />
                }



                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.submitBtn} onPress={showToast}>
                            <Text style={styles.btnText}>Update Changes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        </ScrollView>
    )
}
