import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, Modal} from 'react-native';
import styles from '../../authScreens/authStyles';
import {ScrollView} from 'react-native-gesture-handler';
import DocumentPicker from 'react-native-document-picker';
import CameraIcon from 'react-native-vector-icons/FontAwesome';
import DropIcon from 'react-native-vector-icons/AntDesign';
import EyeIcon from 'react-native-vector-icons/FontAwesome5';
import DeleteIcon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';
import {CircleFade} from 'react-native-animated-spinkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';

export default function ImagesAndDocuments({navigation}) {
  const [singleFile, setSingleFile] = useState([]);
  const [multipleFile, setMultipleFile] = useState([]);
  const [profile, setProfile] = useState([]);
  const [barCouncilCertificate, setBarCouncilCertificate] = useState([]);
  const [aadharCard, setAadharCard] = useState([]);

  const [isImageSelected, setIsImageSelected] = useState(false);
  const [isBarSelected, setIsBarSelected] = useState(false);
  const [isAadharSelected, setIsAadharSelected] = useState(false);
  const [expandDoc, setExpandDoc] = useState(false);
  const [expandOI, setExpandOI] = useState(false);
  const [expandPP, setExpandPP] = useState(false);
  const [showOI, setHideOI] = useState(false);
  const [showDoc, setHideDoc] = useState(false);
  const [showPP, setHidePP] = useState(false);

  const [isLoading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  const [lawyer, setLawyer] = useState(null);
  const [showPickerForDocuments, setShowPickerForDocuments] = useState(false);
  const [showPickerForPictures, setShowPickerForPictures] = useState(false);
  const [showPickerForBar, setShowPickerForBar] = useState(false);
  const [showPickerForAadhar, setShowPickerForAadhar] = useState(false);
  const [showPickerForProfilePicture, setShowPickerForProfilePicture] =
    useState(false);

  useEffect(() => {
    (async () => {
      // Fetch profile of lawyer
      var authToken = await AsyncStorage.getItem('@auth_token');

      setLoading(true);
      setLoadingMessage('Fetching your images and documents...');

      fetch('https://lawyerback.trikara.com/api/lawyer-fetch-own-profile', {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + authToken,
        },
      })
        .then((response) => response.json())
        .then((json) => setLawyerProfileData(json.lawyer))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    })();
  }, []);

  const setLawyerProfileData = (lawyer) => {
    console.log(lawyer.user.first_name);
    setLawyer(lawyer);
  };

  const selectOneFile = async () => {
    setShowPickerForDocuments(true);
  };

  const chooseImageForDocuments = async () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then((images) => {
      setSingleFile(singleFile.concat(images));
      setShowPickerForDocuments(false);
      setExpandDoc(true);
    });
  };

  const launchCameraForDocuments = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setSingleFile(singleFile.concat(image));
      setShowPickerForDocuments(false);
      setExpandDoc(true);
    });
  };

  const chooseImageForPictures = async () => {
    ImagePicker.openPicker({
      multiple: true,
    }).then((images) => {
      setMultipleFile(multipleFile.concat(images));
      setShowPickerForPictures(false);
      setExpandOI(true);
    });
  };

  const launchCameraForPictures = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setMultipleFile(multipleFile.concat(image));
      setShowPickerForPictures(false);
      setExpandOI(true);
    });
  };

  const chooseImageForProfilePicture = async () => {
    ImagePicker.openPicker({
      multiple: false,
    }).then((images) => {
      setProfile(images);
      setIsImageSelected(true);
      setShowPickerForProfilePicture(false);
    });
  };

  const launchCameraForProfilePicture = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      setProfile(image);
      setIsImageSelected(true);
      setShowPickerForProfilePicture(false);
    });
  };

  // Bar council

  const chooseImageForBarCouncilCertificate = async () => {
    ImagePicker.openPicker({
      multiple: false,
    }).then((images) => {
      setBarCouncilCertificate(images);
      setIsBarSelected(true);
      setShowPickerForBar(false);
    });
  };

  const launchCameraForBarCouncilCertificate = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((images) => {
      setBarCouncilCertificate(images);
      setIsBarSelected(true);
      setShowPickerForBar(false);
    });
  };

  // Aadhar

  const chooseImageForAadharCard = async () => {
    ImagePicker.openPicker({
      multiple: false,
    }).then((images) => {
      setAadharCard(images);
      setIsAadharSelected(true);
      setShowPickerForAadhar(false);
    });
  };

  const launchCameraForAadharCard = async () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((images) => {
      setAadharCard(images);
      setIsAadharSelected(true);
      setShowPickerForAadhar(false);
    });
  };

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
      navigation.navigate('memberShip');
    }
  };

  const deleteOffceImage = () => {
    multipleFile = multipleFile.filter(function (obj) {
      return obj.id !== id;
    });
  };

  const submitStep3 = async () => {
    // Throw error if the coordiates doesnt have comma value
    // Later validate the coordinates validity as well

    var fieldsEmpty = false;
    var formData = new FormData();

    if (profile.length > 0) {
      var theProfile = {};
      theProfile = profile[0];
      theProfile.type = theProfile.mime;
      theProfile.uri = theProfile.path;

      console.log(profile[0].mime);

      if (profile[0].mime == 'image/jpeg') {
        theProfile.name = Math.random().toString(36).substring(7) + '.jpg';
      }

      if (profile[0].mime == 'image/png') {
        theProfile.name = Math.random().toString(36).substring(7) + '.png';
      }

      console.log('ss' + theProfile.name);

      formData.append('profile_picture', theProfile);
    }

    if (aadharCard.length > 0) {
      // Bar council
      var theAadhar = {};

      theAadhar = aadharCard[0];
      theAadhar.type = theAadhar.mime;
      theAadhar.uri = theAadhar.path;

      if (aadharCard[0].mime == 'image/jpeg') {
        theAadhar.name = Math.random().toString(36).substring(7) + '.jpg';
      }

      if (aadharCard[0].mime == 'image/png') {
        theAadhar.name = Math.random().toString(36).substring(7) + '.png';
      }

      //alert(JSON.stringify(theAadhar));

      formData.append('aadhar', theAadhar);
    }

    if (barCouncilCertificate.length > 0) {
      // Aadhar
      var theBar = {};

      theBar = barCouncilCertificate[0];
      theBar.type = theBar.mime;
      theBar.uri = theBar.path;

      if (barCouncilCertificate[0].mime == 'image/jpeg') {
        theBar.name = Math.random().toString(36).substring(7) + '.jpg';
      }

      if (barCouncilCertificate[0].mime == 'image/png') {
        theBar.name = Math.random().toString(36).substring(7) + '.png';
      }

      //alert(JSON.stringify(theBar));

      formData.append('bar', theBar);
    }

    var authToken = await AsyncStorage.getItem('@auth_token');

    const requestOptions = {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
        Authorization: 'Bearer ' + authToken,
      },
    };

    // setLoading(true);
    setLoadingMessage('Uploading your files...	');

    fetch(
      'https://lawyerback.trikara.com/api/lawyer-upload-files',
      requestOptions,
    )
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      })
      .then((response) => {
        // do whatever you want with success response
        setLoading(false);
      })
      .catch(console.log);

    //} // else closes
  };

  const setUserData = async (data) => {
    setLawyer(data.lawyer);
    setLoading(false);
  };

  function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  const setTheSingleFile = async (index) => {
    setExpandDoc(false);

    theSingleFileArray = singleFile;
    theSingleFileArray.splice(index, 1);

    setSingleFile([...theSingleFileArray]);

    setExpandDoc(true);
  };

  const setTheMultipleFile = async (index) => {
    setExpandOI(false);

    theMultipleFileArray = multipleFile;
    theMultipleFileArray.splice(index, 1);

    setMultipleFile([...theMultipleFileArray]);

    setExpandOI(true);
  };

  return (
    <ScrollView>
      {isLoading && (
        <View style={{height: '100%', width: '100%', alignItems: 'center'}}>
          <CircleFade size={100} color="#28899B" style={{marginTop: '70%'}} />
          <Text style={styles.loadingText}>{loadingMessage}</Text>
        </View>
      )}

      {showPickerForDocuments && (
        <View style={styles.btnParentSection1}>
          <TouchableOpacity
            onPress={chooseImageForDocuments}
            style={styles.btnSection}>
            <Text style={styles.btnText}>From Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={launchCameraForDocuments}
            style={styles.btnSection}>
            <Text style={styles.btnText}>From Camera</Text>
          </TouchableOpacity>
        </View>
      )}

      {showPickerForPictures && (
        <View style={styles.btnParentSection}>
          <TouchableOpacity
            onPress={chooseImageForPictures}
            style={styles.btnSection}>
            <Text style={styles.btnText}>From Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={launchCameraForPictures}
            style={styles.btnSection}>
            <Text style={styles.btnText}>From Camera</Text>
          </TouchableOpacity>
        </View>
      )}

      {showPickerForProfilePicture && (
        <View style={styles.btnParentSection}>
          <TouchableOpacity
            onPress={chooseImageForProfilePicture}
            style={styles.btnSection}>
            <Text style={styles.btnText}>From Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={launchCameraForProfilePicture}
            style={styles.btnSection}>
            <Text style={styles.btnText}>From Camera</Text>
          </TouchableOpacity>
        </View>
      )}

      <Modal
        animationType="fade"
        transparent={true}
        visible={showPickerForProfilePicture}
        onRequestClose={() => {
          //setShowHelpModal(!showHelpModal);
          setShowPickerForProfilePicture(false);
        }}>
        <View style={styles.btnParentSection}>
          <TouchableOpacity
            onPress={chooseImageForProfilePicture}
            style={styles.btnSection}>
            <Text style={styles.btnText}>From Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={launchCameraForProfilePicture}
            style={styles.btnSection}>
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
        }}>
        <View style={styles.btnParentSection}>
          <TouchableOpacity
            onPress={chooseImageForBarCouncilCertificate}
            style={styles.btnSection}>
            <Text style={styles.btnText}>From Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={launchCameraForBarCouncilCertificate}
            style={styles.btnSection}>
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
        }}>
        <View style={styles.btnParentSection}>
          <TouchableOpacity
            onPress={chooseImageForAadharCard}
            style={styles.btnSection}>
            <Text style={styles.btnText}>From Gallery</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={launchCameraForAadharCard}
            style={styles.btnSection}>
            <Text style={styles.btnText}>From Camera</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={{alignItems: 'center', paddingStart: 20, paddingEnd: 20}}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'flex-start',
            }}></View>

          <View style={styles.formContainer1}>
            <Text style={styles.inputLabel}>Profile Picture*</Text>
            <Text style={{fontSize: 13, paddingTop: 5}}>
              (This will be shown to public)
            </Text>

            {lawyer && (
              <Image
                style={styles.profile}
                source={{
                  uri:
                    'https://lawyerback.trikara.com/storage/' +
                    lawyer.profile_picture_path,
                }}
              />
            )}

            <TouchableOpacity
              style={styles.imageContainer}
              onPress={selectProfileImage}>
              {isImageSelected ? (
                <Image
                  source={{uri: profile[0].path}}
                  style={styles.imageContainer}
                />
              ) : (
                <TouchableOpacity
                  style={styles.cameraCircle}
                  onPress={selectProfileImage}>
                  <CameraIcon size={15} color="white" name="camera" />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.formContainer1}>
            <Text style={styles.inputLabel}>Bar Council Certificate*</Text>
            <Text style={{fontSize: 13, paddingTop: 5}}>
              (This will be shown to public)
            </Text>

            {lawyer && (
              <Image
                style={styles.profile}
                source={{
                  uri:
                    'https://lawyerback.trikara.com/storage/' +
                    lawyer.bar_cert_path,
                }}
              />
            )}

            <TouchableOpacity style={styles.imageContainer} onPress={selectBar}>
              {isBarSelected ? (
                <Image
                  source={{uri: barCouncilCertificate[0].path}}
                  style={styles.imageContainer}
                />
              ) : (
                <TouchableOpacity
                  style={styles.cameraCircle}
                  onPress={selectBar}>
                  <CameraIcon size={15} color="white" name="camera" />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          </View>

          <View style={styles.formContainer1}>
            <Text style={styles.inputLabel}>Aadhar Card*</Text>
            <Text style={{fontSize: 13, paddingTop: 5}}>
              (This will NOT be shown to public. Only for verification
              purposes.)
            </Text>

            {lawyer && (
              <Image
                style={styles.profile}
                source={{
                  uri:
                    'https://lawyerback.trikara.com/storage/' +
                    lawyer.aadhar_card_path,
                }}
              />
            )}

            <TouchableOpacity
              style={styles.imageContainer}
              onPress={selectAadhar}>
              {isAadharSelected ? (
                <Image
                  source={{uri: aadharCard[0].path}}
                  style={styles.imageContainer}
                />
              ) : (
                <TouchableOpacity
                  style={styles.cameraCircle}
                  onPress={selectAadhar}>
                  <CameraIcon size={15} color="white" name="camera" />
                </TouchableOpacity>
              )}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={[
            styles.submitBtn,
            {width: '55%', marginTop: 10, marginBottom: 30},
          ]}
          onPress={submitStep3}>
          <Text style={[styles.btnText, {color: 'white', fontSize: 13}]}>
            Save Images
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
