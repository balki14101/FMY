import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, TouchableOpacity, Modal } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import EyeIcon from '../../../assets/images/svgs/eyeIcon.svg'
import styles from './enquireStyles'
import RejectContents from './rejectModalContents'
import RescheduleContents from './rescheduleModal'
import { useNavigation } from '@react-navigation/native';
import DetailsModal from './detailsModalContainer'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Wave } from 'react-native-animated-spinkit'
import Toast from 'react-native-toast-message';

export default function AllAppointments() {
	
    const navigation = useNavigation();
    const [rejectModal, setRejectModal] = useState(false)
    const [rescheduleModal, setRescheduleModal] = useState(false)
    const [detailsModal, setDetailsModal] = useState(false)
    const [appointmentRequests, setAppointmentRequests] = useState([])
    const [isLoading, setLoading] = useState(false)
    

	 const [loadingMessage, setLoadingMessage] = useState('Loading your appointments...'); 	 
    const [details, setDetails] = useState(false);
    const [reject, setReject] = useState(false);
    const [reschedule, setReschedule] = useState(false);    

    
    const [rescheduleDate, setRescheduleDate] = useState('');
    const [rescheduleSlot, setRescheduleSlot] = useState(0);
    const [showItem, setShowItem] = useState(null);
    

        
    const [idForView, setIdForView] = useState(0);
    const [dateForView, setDateForView] = useState('');
    const [timeForView, setTimeForView] = useState('');
    const [nameForView, setNameForView] = useState('');
    const [cityForView, setCityForView] = useState('');
    const [emailForView, setEmailForView] = useState('');
    const [mobileForView, setMobileForView] = useState('');
    const [detailsForView, setDetailsForView] = useState(''); 
    
    const lawyerData = [
        {
            id: '1',
            name: 'Rohit Kapoor',
            dateTime: '13-01-2020,9:00 PM',
            email: 'Anil@gmail.com',
            phone: '1234567890'
        },
        {
            id: '2',
            name: 'Rohit Kapoor',
            dateTime: '13-01-2020,9:00 PM',
            email: 'Anil@gmail.com',
            phone: '1234567890'
        },
        {
            id: '3',
            name: 'Rohit Kapoor',
            dateTime: '13-01-2020,9:00 PM',
            email: 'Anil@gmail.com',
            phone: '1234567890'
        },
        {
            id: '4',
            name: 'Rohit Kapoor',
            dateTime: '13-01-2020,9:00 PM',
            email: 'Anil@gmail.com',
            phone: '1234567890'
        },
        {
            id: '5',
            name: 'Rohit Kapoor',
            dateTime: '13-01-2020,9:00 PM',
            email: 'Anil@gmail.com',
            phone: '1234567890'
        }
    ]
    
    
     useEffect(() => {   
    
       (async () => {	   	

      		  fetchAppointmentRequests();
               
            
          })();              
            
      
    }, []); 
    
    
    const fetchAppointmentRequests = async() => {
    	
    	 // Call API to fetch last 5 appointment requests
      		var authToken = await AsyncStorage.getItem('@auth_token'); 
      		
      		   	

    		
    		   setLoading(true);

    	
               fetch('https://lawyerback.trikaradev.xyz/api/lawyer-get-all-appointment-requests', {
                  method: "GET",
                  headers: {
                    'Authorization': 'Bearer '+authToken
                  }
               })
               .then((response) => response.json())
               .then((json) => setTableData(json.appointmentRequests))
               .catch((error) => console.error('ss'))
               .finally(() => setLoading(false));    
    	
    }
    
     const setTableData = (appointmentRequests) => {
        
        setAppointmentRequests(appointmentRequests);
        
    };   
    
    
    const detailsshow = (item, id, slot_date, slot_start_time_hour_of_day,first_name,last_name, city, email, mobile, details) => {
        
        setShowItem(item);
        setIdForView(id);
        setDateForView(slot_date);
        setTimeForView(getTime(slot_start_time_hour_of_day));
        setNameForView(first_name+ ' '+ last_name);
        setCityForView(city);
        setEmailForView(email);
        setMobileForView(mobile);
        setDetailsForView(details);
        
        setDetails(true);
    }
    const rejectshow = (id, slot_date, slot_start_time_hour_of_day,first_name,last_name, city, email, mobile, details  ) => {
        
        setIdForView(id);
        setDateForView(slot_date);
        setTimeForView(getTime(slot_start_time_hour_of_day));
        setNameForView(first_name+ ' '+ last_name);
        setCityForView(city);
        setEmailForView(email);
        setMobileForView(mobile);
        setDetailsForView(details);        
        
        setReject(true);          
    }
    
    const startReject = () => {
        
        setDetailsModal(false)
        setRejectModal(true);        
    };  
    
    const hideRejectModal = () => {
        

        setRejectModal(false);  
        fetchAppointmentRequests();      
    };  
    
    const hideRescheduleModal = () => {
        

        setRescheduleModal(false);  
        fetchAppointmentRequests();      
    };  
    

    
    
    
    const isNotPastDate = (dateString, dateHourOfDay) => {
    	  var todayDate = new Date();
    	  var theDate = new Date(dateString);
    	  
    	  
     	  if(theDate.getTime() + (dateHourOfDay*3600*1000) >= todayDate.getTime()){

          return true;   	  
    	  }else{
          return false;    	  
    	  }
    }
    
    
    const startReschedule = () => {
        
        setDetails(false);
        setReschedule(true);        
    };  
    
    const startAccept = (id) => {        

        setDetails(false);
        acceptAppointment(id);
    }; 
    
    
    const acceptAppointment = async(id) => {
    	
    	//alert('uiaia'+id)
    
    // Call API to fetch last 5 appointment requests
      		var authToken = await AsyncStorage.getItem('@auth_token'); 
      		
      		   	
    	      
    		
    		   setLoading(true);
    		   setLoadingMessage('Accepting the appointment request...');
    	
    	
               fetch('https://lawyerback.trikara.com/api/lawyer-accept-appointment-request-from-all?appointment_request_id='+id, {
                  method: "POST",
                  headers: {
                    'Authorization': 'Bearer '+authToken
                  }
               })
               .then((response) => response.json())
               .then((json) => setAcceptConfirmation(json.appointmentRequests))
               .catch((error) => console.error(error))
               .finally(() => setLoading(false));      
            
            
            
    }
    
    
    
    const setAcceptConfirmation = (appointmentRequest) => {
    	 
    	 //message.success('Appointment requested accepted').
    	 Toast.show({
                type: 'success',
                text1: 'Appointment request accepted',
            });
    	 setAppointmentRequests(appointmentRequest);
    	 
    } 
    
    
    
    
 const getNextSlot = async(id, slot_date, slot_start_time_hour_of_day,first_name,last_name, city, email, mobile, details) => {   
 
    // Call API to fetch last 5 appointment requests
    var authToken = await AsyncStorage.getItem('@auth_token');     		  
    		  
    		   

    var lawyerId = await AsyncStorage.getItem('@lawyer_id');
    
    setLoading(true);
    setLoadingMessage('Fetching next available slot')
    	
    	
            fetch('https://lawyerback.trikara.com/api/user-get-closest-available-three-dates?lawyer_id='+lawyerId, {
                  method: "GET",
                  headers: {
                    'Authorization': 'Bearer '+authToken
                  }
               })
               .then((response) => response.json())
               .then((json) => setNextAvailableDate(json.dates))
               .catch((error) => console.error(error))
               .finally(() => setLoading(false));      
               
     }          
               
           
     const setNextAvailableDate = (dates) => { 
     
      //alert(JSON.stringify(dates))       

      setRescheduleDate(dates[0].date);
      setRescheduleSlot(dates[0].available_slots[0]);           
        
      setReschedule(true);  
      setRescheduleModal(true)          
    };     
    
               
    
    const rescheduleshow = (id, slot_date, slot_start_time_hour_of_day,first_name,last_name, city, email, mobile, details ) => {
        
        setDetailsModal(false)
        
        getNextSlot(id, slot_date, slot_start_time_hour_of_day,first_name,last_name, city, email, mobile, details);
        
        setIdForView(id);
        setDateForView(slot_date);
        setTimeForView(getTime(slot_start_time_hour_of_day));
        setNameForView(first_name+ ' '+ last_name);
        setCityForView(city);
        setEmailForView(email);
        setMobileForView(mobile);
        setDetailsForView(details);
        
           
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
    
    
    const setupReject = (item) => {
    	
    	setRejectModal(true)
      rejectshow(item.id, item.slot_date, item.slot_start_time_hour_of_day,item.user.first_name, item.user.last_name, 'Bangalore', item.user.email, item.user.mobile_number, item.description );    	
    }
    

    const onReject = () => {
        setRejectModal(!rejectModal);
    }

    const closeDetailsModal = () => {
        setDetailsModal(!detailsModal);
    }
    const onReschedule = () => {

        setRescheduleModal(true)
    }
    const onAskReschule = () => {
        setRescheduleModal(false);
        setRejectModal(false);
    }
    
    const setupReschedule = (item) => {
    	
    	//setRescheduleModal(true)
    	
      rescheduleshow(item.id, item.slot_date, item.slot_start_time_hour_of_day,item.user.first_name, item.user.last_name, 'Bangalore', item.user.email, item.user.mobile_number, item.description );    	
    }
    
    const setupDetails = (item) => {
    	
    	//setRescheduleModal(true)
    	 setDetailsModal(true)
       detailsshow(item, item.id, item.slot_date, item.slot_start_time_hour_of_day,item.user.first_name, item.user.last_name, 'Bangalore', item.user.email, item.user.mobile_number, item.description )
    }






    function Item({ item }) {
        return (
            <View style={{ alignItems: 'center' }}>
                <View style={styles.mainContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.nameText}>{item.user.first_name} {item.user.last_name}</Text>
                        <TouchableOpacity onPress={() => setupDetails(item)}>
                            <EyeIcon width="22px" height="22px" />
                        </TouchableOpacity>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={detailsModal}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <DetailsModal 
                                       details={details} 
                                       id={idForView}
                                       item={showItem}
                                       date={dateForView}
                                       time={timeForView}
                                       username={nameForView}
                                       city={cityForView}
                                       email={emailForView}
                                       mobile={mobileForView}
                                       description={detailsForView}
                                       startReject={startReject}
                                       showButtons={true}
                                       startReschedule={startReschedule}
                                       startAccept={startAccept}
                                       rescheduleshow={rescheduleshow}
                                       closeDetailsModal={closeDetailsModal}/>
                                </View>
                            </View>
                        </Modal>
                    </View>
                    <Text style={styles.dateTime}>{item.slot_date}</Text>
                    <Text style={styles.dateTime}>{getTime(item.slot_start_time_hour_of_day)}</Text>
                    <Text style={styles.emailText}>{item.user.email}</Text>
                    <Text style={styles.phoneText}>{item.user.mobile_number}</Text>
                    <View style={{ borderBottomColor: 'lightgrey', borderBottomWidth: 1 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={styles.modalBtns} onPress={() => setupReject(item)}>
                            <Text style={styles.btnText}>Reject</Text>
                        </TouchableOpacity>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={rejectModal}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <RejectContents 
                                       reject={reject} 
                                       id={idForView}
                                       date={dateForView}
                                       time={timeForView}
                                       username={nameForView}
                                       city={cityForView}
                                       email={emailForView}
                                       mobile={mobileForView}
                                       description={detailsForView}
                                       onReject={onReject} 
                                       hideRejectModal={hideRejectModal}
                                       onReschedule={onReschedule} />
                                </View>
                            </View>
                        </Modal>
                        
                        <TouchableOpacity style={styles.modalBtns} onPress={() => setupReschedule(item)}>
                            <Text style={styles.btnText}>Reschedule</Text>
                        </TouchableOpacity>
                        
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={rescheduleModal}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <RescheduleContents
                                         reschedule={reschedule} 
                                         id={idForView}
                                         date={dateForView}
                                         time={timeForView}
                                         username={nameForView}
                                         city={cityForView}
                                         email={emailForView}
                                         mobile={mobileForView}
                                         hideRescheduleModal={hideRescheduleModal}
                                         description={detailsForView}
                                         rescheduleDate={rescheduleDate}
                                         rescheduleSlot={rescheduleSlot}
                                         onReschedule={onReschedule}
                                         onAskReschule={onAskReschule} />
                                </View>
                            </View>
                        </Modal>
                        <TouchableOpacity onPress={() => acceptAppointment(item.id)} style={[styles.modalBtns, { width: '20%' }]}>
                            <Text style={styles.btnText}>Accept</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
    return (
        <View>
            <ScrollView>
            
            
               {isLoading  &&
                  <View style={{height:'100%', width:'100%'}}>
                    <Wave size={100} color="#1E94A3" style={{marginLeft:'35%', marginTop:'50%'}}/>
                  </View>
               }

                <FlatList
                    data={appointmentRequests}
                    renderItem={({ item }) => <Item item={item} />}
                    keyExtractor={item => item.id}
                    style={{ marginTop: 20 }}
                />
                
                {appointmentRequests.length==0 &&
                  <Text style={{textAlign:'center', fontSize:20, marginTop:100}}>No appointments found</Text>
                }


            </ScrollView>
        </View>
    )
}