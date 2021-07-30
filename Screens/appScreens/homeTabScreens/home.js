import React, { useState, useEffect } from 'react'

import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import styles from './homeTabStyles'
import { ScrollView } from 'react-native-gesture-handler'
import LastFiveAppointments from '../enquriesTabScreens/lastFiveAppointments'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Wave } from 'react-native-animated-spinkit'
import {BackHandler, Alert} from "react-native";
import { useFocusEffect } from '@react-navigation/native';


export default function HomeScreen({ navigation }) {
	
	
	 const [loading, setLoading] = useState(false); 
	 const [loadingMessage, setLoadingMessage] = useState(false); 
    const [details, setDetails] = useState(false);
    const [reject, setReject] = useState(false);
    const [reschedule, setReschedule] = useState(false);
    const [totalAppointments, setTotalAppointments] = useState(0);
    const [todayAppointments, setTodayAppointments] = useState(0);
    const [unapprovedAppointments, setUnApprovedAppointments] = useState(0);
    const [approvedAppointments, setApprovedAppointments] = useState(0);
    const [appointmentRequests, setAppointmentRequests] = useState([]);
    
    const [rescheduleDate, setRescheduleDate] = useState('');
    const [rescheduleSlot, setRescheduleSlot] = useState(0);
    
    const [showItem, setShowItem] = useState(null);
    const [dummy, setDummy] = useState(0);

    const [isVerified, setIsVerified] = useState(1);    
    
    const [idForView, setIdForView] = useState(0);
    const [dateForView, setDateForView] = useState('');
    const [timeForView, setTimeForView] = useState('');
    const [nameForView, setNameForView] = useState('');
    const [cityForView, setCityForView] = useState('');
    const [emailForView, setEmailForView] = useState('');
    const [mobileForView, setMobileForView] = useState('');
    const [detailsForView, setDetailsForView] = useState('');
    
    
    const dashboardContents = [
        {
            id: '1',
            number: '5',
            title: 'TOTAL NUMBER OF APPOINTMENTS'
        },
        {
            id: '2',
            number: '5',
            title: 'NUMBER OF APPOINTMENTS TODAY'

        },
        {
            id: '3',
            number: '5',
            title: 'UNAPPROVED APPOINTMENTS'
        },
        {
            id: '4',
            number: '5',
            title: 'NUMBER OF APPROVED APPOINTMENTS'
        }
    ]
    
    useFocusEffect(
    React.useCallback(() => {
       refreshHome();
    }, [])
  );
  
  
    
    useEffect(() => {      
    
        (async () => {	

      		  
               refreshHome();
               
               const backAction = () => {
            	  
            	  if (!navigation.isFocused()) {
                    return false;
                 }

                 Alert.alert("Hold on", "Are you sure you want to exit the app?", [
                 {
                   text: "Cancel",
                   onPress: () => null,
                   style: "cancel"
                 },
                 { text: "YES", onPress: () => BackHandler.exitApp() }
                ]);
                return true;         
                
          };

          const backHandler = BackHandler.addEventListener(
             "hardwareBackPress",
             backAction
          );

          return () => backHandler.remove();

               
               
             })();          
      
    }, []); 
    
    
    const refreshHome = async() => {
    	
    	   (async () => {	
        
        // Call API to fetch last 5 appointment requests
      		   var authToken = await AsyncStorage.getItem('@auth_token'); 
      		   
      		         		
      		   	
    		      setLoading(true);    	
    	
               fetch('https://lawyerback.trikara.com/api/get-lawyer-dashboard-stats', {
                  method: "GET",
                  headers: {
                    'Authorization': 'Bearer '+authToken
                  }
               })
               .then((response) => response.json())
               .then((json) => setDashStats(json.dashboardStats))
               .catch((error) => console.error('aa'+error))
               .finally(() => setLoading(false));
               
               })();   
        
    };   



    const setTableData = (appointmentRequests) => {
        
        setAppointmentRequests(appointmentRequests);
        
    };   
    
    const setDashStats = (dashStats) => {
        setTotalAppointments(dashStats.total_appointments);
        setTodayAppointments(dashStats.today_appointments);
        setUnApprovedAppointments(dashStats.unapproved_appointments);
        setApprovedAppointments(dashStats.approved_appointments);
        setIsVerified(dashStats.is_verified);
        
    }; 
    
    

    function Item({ item }) {
        return (
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('Enquries')}>
                <View style={styles.mainContainer}>
                    <Text style={styles.totalText}>{item.number}</Text>
                    <Text style={styles.titleText}>{item.title}</Text>
                </View>

            </TouchableOpacity>
        )
    }
    return (
        <View>
            <ScrollView>   
             
            

             <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('Enquries')}>
                <View style={styles.mainContainer}>
                    <Text style={styles.totalText}>{totalAppointments}</Text>
                    <Text style={styles.titleText}>TOTAL NUMBER OF APPOINTMENTS</Text>
                </View>

            </TouchableOpacity>
            
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('Enquries')}>
                <View style={styles.mainContainer}>
                    <Text style={styles.totalText}>{todayAppointments}</Text>
                    <Text style={styles.titleText}>NUMBER OF APPOINTMENTS TODAY</Text>
                </View>

            </TouchableOpacity>
            
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('Enquries')}>
                <View style={styles.mainContainer}>
                    <Text style={styles.totalText}>{unapprovedAppointments}</Text>
                    <Text style={styles.titleText}>UNAPPROVED APPOINTMENTS</Text>
                </View>

            </TouchableOpacity>
            
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => navigation.navigate('Enquries')}>
                <View style={styles.mainContainer}>
                    <Text style={styles.totalText}>{approvedAppointments}</Text>
                    <Text style={styles.titleText}>NUMBER OF APPROVED APPOINTMENTS</Text>
                </View>

            </TouchableOpacity>
                <View style={{ paddingStart: 5, paddingEnd: 5 }}>
                    <Text style={styles.pageSubTitle}>LAST 5 PENDING APPOINTMENT REQUESTS</Text>
                    <LastFiveAppointments />
                </View>

            </ScrollView>
        </View>
    )
}
