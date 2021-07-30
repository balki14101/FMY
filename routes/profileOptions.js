import React, { useState, useEffect } from 'react'
import HelpLogo from 'react-native-vector-icons/FontAwesome'
import { View, Modal, StyleSheet, TouchableOpacity, Text ,Dimensions} from 'react-native'
import ProfileLogo from 'react-native-vector-icons/FontAwesome'
import DropDownIcon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Width, Height } from '../Helper/Dimensions';
import SettingsStackScreen from './settingsTab';
import ReviewStackScreen from './reviewsTab'
import { createStackNavigator } from '@react-navigation/stack';
import HomeReview from '../Screens/appScreens/reviewsTabScreens/reviewHome'
import { Props } from 'react-native-image-zoom-viewer/built/image-viewer.type'



const ReviewStack = createStackNavigator();


export default function ProfileOptions() {
	
    const [showOptions, setShowOptions] = React.useState(false);
    const [showHelpModal, setShowHelpModal] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

    const navigation = useNavigation();  
    
    
    const openEmail = async() => {
        	
        	setShowHelpModal(false);
        	Linking.openURL('mailto:support@findyourlawyer.in?subject=Support Request&body=I need some help on')
       
    };  
    
    useEffect(() => {   
    
       (async () => {	       		     

        var loggedIn = await AsyncStorage.getItem("@is_logged_in"); 
         
        console.log(loggedIn)
        if(loggedIn){
        	 if(loggedIn == 'yes'){
             setIsLoggedIn(true);        
          }else{
             setIsLoggedIn(false); 
          }
        }else{
           setIsLoggedIn(false);        
        }      

            
          })();              
            
      
    }, []); 
    
                         
                        
    const logout = async() => {
    	
    	  await AsyncStorage.setItem('@is_logged_in', 'no');
        
        navigation.navigate('auth',{
           screen:'login'
        })
        
    };
    
    const gotoReviews = () => {
        // return <ReviewStackScreen />
        navigation.navigate('account',{screen:'Review'})
    }
    const gotoSettings = () => {
        navigation.navigate('account',{screen:'Settings'})
    }
    const gotoprofile = () => {
        navigation.navigate('account',{screen:'Profile'})
    }
    const gotoSubscriptions = () => {
        navigation.navigate('account',{screen:'Subscription'})
    }

    return (
        <View style={{ flexDirection: 'row', right: 20 }} >
        
         <HelpLogo name="info-circle" color="#28899B" size={33} onPress={() => setShowHelpModal(!showHelpModal)}/>
        
         {isLoggedIn &&
            <ProfileLogo name="user-circle-o"
                         style={{marginLeft:20}}
                         color="#28899B" size={30} onPress={() => setShowOptions(true)}/>
         }
         {isLoggedIn &&   
            <DropDownIcon name="caretdown" color="#28899B" size={10} style={{ paddingTop: 15, paddingLeft: 5 }} />
            }
            

            <Modal
                animationType="fade"
                transparent={true}
                visible={showOptions}
                onPress={() => setShowOptions(!showOptions)}
            >
                <View style={styles.modalCenteredView}
                    onStartShouldSetResponder={() => {
                        setShowOptions(!showOptions);
                    }}>
                    <View style={styles.menuModalView}>                        
                        <TouchableOpacity onPress={logout}>
                            <Text style={styles.modalText}>Logout</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={gotoReviews}>
                            <Text style={styles.modalText}>Review</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={gotoSettings}>
                            <Text style={styles.modalText}>Settings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={gotoprofile}>
                            <Text style={styles.modalText}>Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={gotoSubscriptions}>
                            <Text style={styles.modalText}>Subs</Text>
                         </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            
            <Modal
                animationType="fade"
                transparent={true}
                visible={showHelpModal}
                onPress={() => setShowHelpModal(false)}
                onRequestClose={() => {          
                    setShowHelpModal(!showHelpModal);
                    //console.log('kakak')
                }}
            >
                <TouchableOpacity onPress={() => setShowHelpModal(false)} 
                                  style={styles.modalCenteredView}>
                    <View style={styles.menuModalView1}>                        
                        <TouchableOpacity onPress={openEmail}>
                            <Text style={styles.modalText1}>For any help, please contact</Text>
                            <Text style={styles.modalText2}>support@findyourlawyer.in</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
            
            
        </View>
    )
    
}


const styles = StyleSheet.create({
    modalCenteredView: {
        paddingTop: 50,
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        

    },
    menuModalView: {
        width: Width/3.5,
        height: Height /5,
        backgroundColor: '#fefefe',
        borderRadius: 5,
        position: 'absolute',
        right: 5,
        top: 5,
        marginTop: 50,
        marginRight: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,

    },
    menuModalView1: {
        width: 300,
        height: 100,
        backgroundColor: '#fefefe',
        borderRadius: 5,
        position: 'absolute',
        right: 5,
        top: 5,
        marginTop: 50,
        marginRight: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,

    },
    modalText: {
        textAlign: "center",
        fontSize: 12,
        color: 'black',
        fontFamily: 'roboto_medium',
        paddingTop: 10,

    },
    modalText1: {
        textAlign: "center",
        fontSize: 15,
        color: 'black',
        fontFamily: 'roboto_medium',
        marginTop: 25,
        marginLeft:5,
        marginRight:5,

    },
    modalText2: {
        textAlign: "center",
        fontSize: 15,
        color: 'black',
        fontFamily: 'roboto_medium',
        marginTop: 0,
        marginLeft:5,
        marginRight:5,
    },
})


