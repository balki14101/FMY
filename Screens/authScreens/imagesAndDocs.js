import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Picker, Image, Modal } from 'react-native'
import styles from './authStyles'
import { ScrollView } from 'react-native-gesture-handler'
import DocumentPicker from 'react-native-document-picker';
import CameraIcon from 'react-native-vector-icons/FontAwesome'
import DropIcon from 'react-native-vector-icons/AntDesign'
import EyeIcon from 'react-native-vector-icons/FontAwesome5'
import DeleteIcon from 'react-native-vector-icons/FontAwesome'
import Toast from 'react-native-toast-message';
import { CircleFade } from 'react-native-animated-spinkit'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from "react-native-customized-image-picker";


export default function ImagesAndDocuments({ navigation }) {
	
    const [singleFile, setSingleFile] = useState([]);
    const [multipleFile, setMultipleFile] = useState([]);
    
    const [profile, setProfile] = useState([])
    const [barCouncilCertificate, setBarCouncilCertificate] = useState([])
    const [aadharCard, setAadharCard] = useState([])
    
    const [isImageSelected, setIsImageSelected] = useState(false)
    const [isBarSelected, setIsBarSelected] = useState(false)
    const [isAadharSelected, setIsAadharSelected] = useState(false)
    const [expandDoc, setExpandDoc] = useState(false)
    const [expandOI, setExpandOI] = useState(false)
    const [expandPP, setExpandPP] = useState(false)
    const [showOI, setHideOI] = useState(false)
    const [showDoc, setHideDoc] = useState(false)
    const [showPP, setHidePP] = useState(false)
    
    const [isLoading, setLoading] = useState(false)
    const [loadingMessage, setLoadingMessage] = useState('Uploading your files...')
    
    const [showPickerForDocuments, setShowPickerForDocuments] = useState(false);
    const [showPickerForPictures, setShowPickerForPictures] = useState(false);
    const [showPickerForProfilePicture, setShowPickerForProfilePicture] = useState(false);
    const [showPickerForBar, setShowPickerForBar] = useState(false);
    const [showPickerForAadhar, setShowPickerForAadhar] = useState(false);
    const [selectedValue, setSelectedValue] = useState("java");


    const selectOneFile = async () => {        
        setShowPickerForDocuments(true);       
    }       

    
    const chooseImageForDocuments = async () => {
    	
    	ImagePicker.openPicker({
            multiple: true,
              }).then(images => {
                  setSingleFile(singleFile.concat(images));
                  setShowPickerForDocuments(false);  
                  setExpandDoc(true)     
        });
    }
    
    const launchCameraForDocuments = async () => {
    	
    	
        ImagePicker.openCamera({
           width: 300,
           height: 400,
           cropping: true,
             }).then(image => {
                 setSingleFile(singleFile.concat(image));
                 setShowPickerForDocuments(false);   
                 setExpandDoc(true)    
        });
    }
    
    const chooseImageForPictures = async () => {
    	
    	ImagePicker.openPicker({
            multiple: true
              }).then(images => {
                  setMultipleFile(multipleFile.concat(images));
                  setShowPickerForPictures(false);   
                  setExpandOI(true)    
        });
    }
    
    const launchCameraForPictures = async () => {
    	 ImagePicker.openCamera({
           width: 300,
           height: 400,
           cropping: true,
             }).then(image => {
                 setMultipleFile(multipleFile.concat(image));
                 setShowPickerForPictures(false);  
                 setExpandOI(true)     
        });
    }
    
    
    
    
    const chooseImageForProfilePicture = async () => {
    	
    	ImagePicker.openPicker({
            multiple: false
              }).then(images => {
                  setProfile(images);
                  setIsImageSelected(true)
                  setShowPickerForProfilePicture(false);       
        });
    }
    
    const launchCameraForProfilePicture = async () => {
    	
    	ImagePicker.openCamera({
           width: 300,
           height: 400,
           cropping: true,
             }).then(images => {
                 setProfile(images);
                 setIsImageSelected(true)
                 setShowPickerForProfilePicture(false);       
        });
    }
    
    // Bar council
    
    const chooseImageForBarCouncilCertificate = async () => {
    	
    	ImagePicker.openPicker({
            multiple: false
              }).then(images => {
                  setBarCouncilCertificate(images);
                  setIsBarSelected(true)
                  setShowPickerForBar(false);       
        });
    }
    
    const launchCameraForBarCouncilCertificate = async () => {
    	
    	ImagePicker.openCamera({
           width: 300,
           height: 400,
           cropping: true,
             }).then(images => {
                 setBarCouncilCertificate(images);
                 setIsBarSelected(true)
                 setShowPickerForBar(false);       
        });
    }
    
    
    // Aadhar
    
    const chooseImageForAadharCard = async () => {
    	
    	ImagePicker.openPicker({
            multiple: false
              }).then(images => {
                  setAadharCard(images);
                  setIsAadharSelected(true)
                  setShowPickerForAadhar(false);       
        });
    }
    
    const launchCameraForAadharCard = async () => {
    	
    	ImagePicker.openCamera({
           width: 300,
           height: 400,
           cropping: true,
             }).then(images => {
                 setAadharCard(images);
                 setIsAadharSelected(true)
                 setShowPickerForAadhar(false);       
        });
    }


    
    
    const selectMultipleFile = async () => {
    	     
        setShowPickerForPictures(true);              
    };

    const selectProfileImage = async () => {    
    	
        setShowPickerForProfilePicture(true);        
    };
    
    const selectBar = async () => {    
    	
        setShowPickerForBar(true);        
    };
    
    
    const selectAadhar = async () => {    
    	
        setShowPickerForAadhar(true);        
    };

    const handleContinue = () => {
    	
        if (profile == '') {
            Toast.show({
                type: 'error',
                text1: 'Please add profile picture',
            });
        } else {
            navigation.navigate('memberShip')
        }
    }

    const deleteOffceImage = () => {
        multipleFile = multipleFile.filter(function (obj) {
            return obj.id !== id;
        });
    }
    
    
    const setTheSingleFile = async(index) => {     

       setExpandDoc(false)
      
       theSingleFileArray = singleFile;  	
       theSingleFileArray.splice(index, 1)
    	
    	 setSingleFile([...theSingleFileArray]);    	 
    	 
       setExpandDoc(true)
    } 
    
    
    const setTheMultipleFile = async(index) => {    
    
       setExpandOI(false)     
      
       theMultipleFileArray = multipleFile;  	
       theMultipleFileArray.splice(index, 1)
    	
    	 setMultipleFile([...theMultipleFileArray]);   	 
       
       setExpandOI(true)
    } 
    
    
    
    
    
    const submitStep3 = async() => {   	
    
        // Throw error if the coordiates doesnt have comma value
        // Later validate the coordinates validity as well    	  
    	 
        var fieldsEmpty = false;     
        
        if(aadharCard==null || profile==null || barCouncilCertificate == null){
           fieldsEmpty = true;
        }      
        
        
        if(fieldsEmpty){
          Toast.show({
                type: 'error',
               text1: 'One or more fields are empty',
            });
          
        } else{
        	
        var formData = new FormData();    
        
        var theProfile = {};
        
        theProfile = profile[0];
        theProfile.type = theProfile.mime;
        theProfile.uri = theProfile.path;
        
        if(profile[0].mime == 'image/jpeg'){
           theProfile.name = Math.random().toString(36).substring(7)+'.jpg';
        }       
        
           
        if(profile[0].mime == 'image/png'){
           theProfile.name = Math.random().toString(36).substring(7)+'.png';
        }   	
        
        
        //alert(JSON.stringify(theProfile));
        
        formData.append("profile_picture", theProfile);  
        
        
        
         // Bar council
         var theAadhar = {};
        
        theAadhar = aadharCard[0];
        theAadhar.type = theAadhar.mime;
        theAadhar.uri = theAadhar.path;
        
        if(aadharCard[0].mime == 'image/jpeg'){
           theAadhar.name = Math.random().toString(36).substring(7)+'.jpg';
        }       
        
           
        if(aadharCard[0].mime == 'image/png'){
           theAadhar.name = Math.random().toString(36).substring(7)+'.png';
        }   	
        
        
        //alert(JSON.stringify(theAadhar));
        
        formData.append("aadhar", theAadhar);  
        
        
        // Aadhar
        var theBar = {};
        
        theBar = barCouncilCertificate[0];
        theBar.type = theBar.mime;
        theBar.uri = theBar.path;
        
        if(barCouncilCertificate[0].mime == 'image/jpeg'){
           theBar.name = Math.random().toString(36).substring(7)+'.jpg';
        }       
        
           
        if(barCouncilCertificate[0].mime == 'image/png'){
           theBar.name = Math.random().toString(36).substring(7)+'.png';
        }   	
        
        
        //alert(JSON.stringify(theBar));
        
        formData.append("bar", theBar);          
        
        
               
        /*let theSingleFile;
        theSingleFile = singleFile;
        
        
        for(var i=0;i<theSingleFile.length;i++){
        	
           theSingleFile[i].uri = theSingleFile[i].path;
           theSingleFile[i].type = theSingleFile[i].mime;
           
           if(theSingleFile[i].mime == 'image/jpeg'){
              theSingleFile[i].name = Math.random().toString(36).substring(7)+'.jpg';
           }
           
           if(theSingleFile[i].mime == 'image/png'){
              theSingleFile[i].name = Math.random().toString(36).substring(7)+'.png';
           }          
           
        }
        
        
        if(theSingleFile.length>0){     
                
            formData.append("doc1", theSingleFile[0]);
        } 
        
        if(theSingleFile.length>1){       
                
            formData.append("doc2", theSingleFile[1]);  
        } 
             
        if(theSingleFile.length>2){            
            formData.append("doc3", theSingleFile[2]);     
        }
        
        if(theSingleFile.length>3){            
            formData.append("doc4", theSingleFile[3]); 
        }
        
        if(theSingleFile.length>4){              
            formData.append("doc5", theSingleFile[4]);
        }  


        let theMultipleFile;
        theMultipleFile =  multipleFile;  
        
        for(var i=0;i<theMultipleFile.length;i++){
        	
           theMultipleFile[i].uri = theMultipleFile[i].path;
           theMultipleFile[i].type = theMultipleFile[i].mime;
           
           if(theMultipleFile[i].mime == 'image/jpeg'){
              theMultipleFile[i].name = Math.random().toString(36).substring(7)+'.jpg';
           }
           
           if(theMultipleFile[i].mime == 'image/png'){
              theMultipleFile[i].name = Math.random().toString(36).substring(7)+'.png';
           }
           
 
        }
        
        if(theMultipleFile.length>1){              
           formData.append("pic1", theMultipleFile[0]);     
        }
        
        if(theMultipleFile.length>1){              
           formData.append("pic2", theMultipleFile[1]); 
        }
        
        if(theMultipleFile.length>2){     
           formData.append("pic3", theMultipleFile[2]);        
        }    
        
        */      

        var authToken = await AsyncStorage.getItem("@auth_token");
        
        
        const requestOptions = {
            method: 'POST',
            body: formData,
            headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer '+authToken,
                    
            }
        };



    	  
    	     setLoading(true);   	     
    	     
    		 	     
       
           fetch('https://lawyerback.trikara.com/api/lawyer-upload-files', requestOptions).then(res => res.json())
              .then((data) => {
                     setUserData(data)
               })
              .then((response) => {
                   // do whatever you want with success response
                   setLoading(false);
           }).catch(console.log)       
       
       } // else closes
               
    }   
    
    
    const setUserData = async(data) => {
    	
    	
    	
    	 setLoading(false);  
    	 
    	 
       AsyncStorage.setItem("@lawyer_id", ''+data.lawyer.id);       	 
    	 AsyncStorage.setItem("@third_step_completed", "yes"); 
    	 
    	 alert('Thanks for registering. Your account will be verified and activated soon. You will be notified on your registered email after activation.')   	      
       
       //navigation.navigate('memberShip');  	  
       navigation.navigate('app')

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
             <View style={{ alignItems: 'center' }}>
                            <Text style={styles.pageHeader}>Registration Details (3/3)</Text>
                            
                            </View>
            
        {showPickerForDocuments &&
         
          <View style={styles.btnParentSection}>
              <TouchableOpacity onPress={chooseImageForDocuments} style={styles.btnSection}  >
                <Text style={styles.btnText}>From Gallery</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={launchCameraForDocuments} style={styles.btnSection}  >
                <Text style={styles.btnText}>From Camera</Text>
              </TouchableOpacity>              
          </View>

        }
        
        {showPickerForPictures &&
          <View style={styles.btnParentSection}>
              <TouchableOpacity onPress={chooseImageForPictures} style={styles.btnSection}  >
                <Text style={styles.btnText}>From Gallery</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={launchCameraForPictures} style={styles.btnSection}  >
                <Text style={styles.btnText}>From Camera</Text>
              </TouchableOpacity>              
          </View>
        }
        
        

         <Modal
                animationType="fade"
                transparent={true}
                visible={showPickerForProfilePicture}
                onRequestClose={() => {          
                    //setShowHelpModal(!showHelpModal);
                    setShowPickerForProfilePicture(false);
                }}
            >
          <View style={styles.btnParentSection}>
              <TouchableOpacity onPress={chooseImageForProfilePicture} style={styles.btnSection}  >
                <Text style={styles.btnText}>From Gallery</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={launchCameraForProfilePicture} style={styles.btnSection}  >
                <Text style={styles.btnText}>From Camera</Text>
              </TouchableOpacity>              
          </View>
          </Modal>        

         
         <Modal
                animationType="fade"
                transparent={true}
                visible={showPickerForBar}
                onRequestClose={() => {
                    setShowPickerForBar(false);
                }}
            >
          <View style={styles.btnParentSection}>
              <TouchableOpacity onPress={chooseImageForBarCouncilCertificate} style={styles.btnSection}  >
                <Text style={styles.btnText}>From Gallery</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={launchCameraForBarCouncilCertificate} style={styles.btnSection}  >
                <Text style={styles.btnText}>From Camera</Text>
              </TouchableOpacity>              
          </View>
          </Modal>        
        

        <Modal
                animationType="fade"
                transparent={true}
                visible={showPickerForAadhar}
                onRequestClose={() => {
                    setShowPickerForAadhar(false);
                }}
            >
          <View style={styles.btnParentSection}>
              <TouchableOpacity onPress={chooseImageForAadharCard} style={styles.btnSection}  >
                <Text style={styles.btnText}>From Gallery</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={launchCameraForAadharCard} style={styles.btnSection}  >
                <Text style={styles.btnText}>From Camera</Text>
              </TouchableOpacity>              
          </View>
        </Modal>  
        
        
        
         {showPickerForProfilePicture &&
          <View style={styles.btnParentSection}>
              <TouchableOpacity onPress={chooseImageForProfilePicture} style={styles.btnSection}  >
                <Text style={styles.btnText}>From Gallery</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={launchCameraForProfilePicture} style={styles.btnSection}  >
                <Text style={styles.btnText}>From Camera</Text>
              </TouchableOpacity>              
          </View>
        }



            

            <View style={{ alignItems: 'center', paddingStart: 20, paddingEnd: 20 }}>

                <View>


                    
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                        

                           
                        
                    </View>
                    
                    
                  <View style={styles.formContainer1}>  
                    <Text style={styles.inputLabel}>Profile Picture*</Text>
                    <Text style={{ fontSize: 13, paddingTop: 5 }}>(This will be shown to public)</Text>

                    <TouchableOpacity style={styles.imageContainer} onPress={selectProfileImage}>
                        {
                            isImageSelected ? <Image source={{ uri: profile[0].path }} style={styles.imageContainer} /> :
                                <TouchableOpacity style={styles.cameraCircle} onPress={selectProfileImage}>
                                    <CameraIcon size={15} color="white" name="camera" />
                                </TouchableOpacity>
                        }

                    </TouchableOpacity>
                    
                    </View>
                    
                    
                  <View style={styles.formContainer1}>  
                    <Text style={styles.inputLabel}>Bar Council Certificate*</Text>
                    <Text style={{ fontSize: 13, paddingTop: 5 }}>(This will be shown to public)</Text>

                    <TouchableOpacity style={styles.imageContainer} onPress={selectBar}>
                        {
                            isBarSelected ? <Image source={{ uri: barCouncilCertificate[0].path }} style={styles.imageContainer} /> :
                                <TouchableOpacity style={styles.cameraCircle} onPress={selectBar}>
                                    <CameraIcon size={15} color="white" name="camera" />
                                </TouchableOpacity>
                        }

                    </TouchableOpacity>
                    </View>
                    
                    
                 <View style={styles.formContainer1}>  
                    <Text style={styles.inputLabel}>Aadhar Card*</Text>
                    <Text style={{ fontSize: 13, paddingTop: 5 }}>(This will NOT be shown to public. Only for verification purposes.)</Text>

                    <TouchableOpacity style={styles.imageContainer} onPress={selectAadhar}>
                        {
                            isAadharSelected ? <Image source={{ uri: aadharCard[0].path }} style={styles.imageContainer} /> :
                                <TouchableOpacity style={styles.cameraCircle} onPress={selectAadhar}>
                                    <CameraIcon size={15} color="white" name="camera" />
                                </TouchableOpacity>
                        }

                    </TouchableOpacity>
                 </View>



                </View>
                <TouchableOpacity style={[styles.submitBtn, { width: '55%', marginTop: 10, marginBottom: 30 }]} 
                     onPress={submitStep3}>
                    <Text style={[styles.btnText, { color: 'white', fontSize:13 }]}>Complete Registration</Text>
                </TouchableOpacity>



            </View>
            
        </ScrollView >
    )

}