import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import styles from './profileStyles';
import Star from 'react-native-vector-icons/Entypo';
import MapIcon from 'react-native-vector-icons/FontAwesome5';
import UserIcon from '../../../assets/images/userIcon.png';
import CourtIcon from '../../../assets/images/courtIcon.png';
import Doc_1 from '../../../assets/images/docTemp_1.png';
import Doc_2 from '../../../assets/images/docTemp_2.jpg';

import {ScrollView} from 'react-native-gesture-handler';

import PhoneIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

import MailIcon from 'react-native-vector-icons/Feather';
import FacebookIcon from 'react-native-vector-icons/FontAwesome';
import TwitterIcon from 'react-native-vector-icons/FontAwesome';
import InstagramIcon from 'react-native-vector-icons/FontAwesome';
import LinkedInIcon from 'react-native-vector-icons/FontAwesome';
import CopyRight from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {CircleFade} from 'react-native-animated-spinkit';
import ImageModal from 'react-native-image-modal';

export default function ProfileHome({navigation}) {
  const [isLoading, setLoading] = useState(false);
  const [lawyer, setLawyer] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentImages, setCurrentImages] = useState([
    {
      // Simplest usage.
      url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',
    },
  ]);
  const [isModalVisible, setIsModalVisible] = useState('');

  const openInstagram = () => {
    Linking.openURL('instagram://user?username=apple').catch(() => {
      Linking.openURL('https://www.instagram.com/apple');
    });
  };

  const openTwitter = () => {
    Linking.openURL('twitter://user?screen_name=apple').catch(() => {
      Linking.openURL('https://www.twitter.com/apple');
    });
  };
  const openLinkedIn = () => {
    Linking.openURL('linkedin.com/company/apple/').catch(() => {
      Linking.openURL('https://www.linkedin.com/company/apple/');
    });
  };

  useEffect(() => {
    (async () => {
      // Call API to fetch last 5 appointment requests
      var authToken = await AsyncStorage.getItem('@auth_token');

      var formData = new FormData();
      var lID = await AsyncStorage.getItem('@lawyer_id');

      const requestOptions = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer ' + authToken,
        },
      };

      setLoading(true);

      fetch(
        'https://lawyerback.trikara.com/api/user-fetch-single-lawyer?lawyer_id=' +
          lID,
        requestOptions,
      )
        .then((response) => response.json())
        .then((json) => setTheLawyer(json.lawyer))
        .catch((error) => console.error('ss'))
        .finally(() => setLoading(false));
    })();
  }, []);

  const setTheLawyer = (lawyer) => {
    //alert(JSON.stringify(lawyer))
    setLawyer(lawyer);
    console.log(lawyer);

    if (lawyer.is_civil == 1) {
      var theSel = selectedCategories;
      theSel.push('Civil');
      setSelectedCategories(theSel);
    }

    if (lawyer.is_criminal == 1) {
      var theSel = selectedCategories;
      theSel.push('Criminal');
      setSelectedCategories(theSel);
    }

    if (lawyer.is_intellectual_property == 1) {
      var theSel = selectedCategories;
      theSel.push('Intellectual Property');
      setSelectedCategories(theSel);
    }

    if (lawyer.is_family == 1) {
      var theSel = selectedCategories;
      theSel.push('Family');
      setSelectedCategories(theSel);
    }

    if (lawyer.is_property == 1) {
      var theSel = selectedCategories;
      theSel.push('Property');
      setSelectedCategories(theSel);
    }

    if (lawyer.is_immigration == 1) {
      var theSel = selectedCategories;
      theSel.push('Immigration');
      setSelectedCategories(theSel);
    }

    if (lawyer.is_labour == 1) {
      var theSel = selectedCategories;
      theSel.push('Labour');
      setSelectedCategories(theSel);
    }

    if (lawyer.is_employment == 1) {
      var theSel = selectedCategories;
      theSel.push('Employment');
      setSelectedCategories(theSel);
    }

    if (lawyer.is_mergers == 1) {
      var theSel = selectedCategories;
      theSel.push('Mergers and Acquisition');
      setSelectedCategories(theSel);
    }

    if (lawyer.is_bankruptcy == 1) {
      var theSel = selectedCategories;
      theSel.push('Bankruptcy Lawyer');
      setSelectedCategories(theSel);
    }

    if (lawyer.is_corporate == 1) {
      var theSel = selectedCategories;
      theSel.push('Corporate');
      setSelectedCategories(theSel);
    }

    if (lawyer.is_notary == 1) {
      var theSel = selectedCategories;
      theSel.push('Notary');
      setSelectedCategories(theSel);
    }

    if (lawyer.is_others == 1) {
      var theSel = selectedCategories;
      theSel.push('Others');
      setSelectedCategories(theSel);
    }
  };
  console.log('homeCategories', selectedCategories);

  const showImageInModal = (item) => {
    setIsModalVisible(true);

    var theCurrentImages = [];
    var theCurrentImage = {};
    theCurrentImage.url =
      'https://lawyerback.trikara.com/storage/' + lawyer.bar_cert_path;

    theCurrentImages.push(theCurrentImage);
    setCurrentImages(theCurrentImages);
  };

  const showImageInModal1 = (item) => {
    setIsModalVisible(true);

    var theCurrentImages = [];
    var theCurrentImage = {};
    theCurrentImage.url =
      'https://lawyerback.trikara.com/storage/' + lawyer.aadhar_card_path;

    theCurrentImages.push(theCurrentImage);
    setCurrentImages(theCurrentImages);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <ScrollView>
      {isLoading && (
        <View style={{height: '100%', width: '100%', alignItems: 'center'}}>
          <CircleFade size={100} color="#28899B" style={{marginTop: '70%'}} />
          <Text style={styles.loadingText}>Loading your profile...</Text>
        </View>
      )}

      {lawyer !== null && (
        <View style={{alignItems: 'center'}}>
          <View style={styles.mainContainer}>
            <View style={styles.borderLine}>
              <Image
                source={{
                  uri:
                    'https://lawyerback.trikara.com/storage/' +
                    lawyer.profile_picture_path,
                }}
                style={styles.profile}
              />

              <View style={{marginTop: 10}}>
                {lawyer.is_verified == 0 && (
                  <View style={{flexDirection: 'row'}}>
                    <MaterialIcons size={24} color="red" name="error" />

                    <Text style={{color: 'red', marginLeft: 5}}>
                      Not Verified
                    </Text>
                  </View>
                )}
                {lawyer.is_verified == 1 && (
                  <View style={{flexDirection: 'row'}}>
                    <AntIcon size={24} color="green" name="checkcircle" />

                    <Text style={{color: 'green', marginLeft: 5}}>
                      Verified
                    </Text>
                  </View>
                )}
              </View>

              <Text style={styles.userName}>
                {lawyer.user.first_name} {lawyer.user.last_name}
              </Text>
              <View style={{flexDirection: 'row', paddingTop: 10}}>
                {Math.ceil(lawyer.avg_rating) == 1 && (
                  <View style={{flexDirection: 'row'}}>
                    <Star name="star" size={20} color="#989898" />
                    <Star name="star" size={20} color="#989898" />
                  </View>
                )}

                {Math.ceil(lawyer.avg_rating) == 2 && (
                  <View style={{flexDirection: 'row'}}>
                    <Star name="star" size={20} color="#989898" />
                    <Star name="star" size={20} color="#989898" />
                  </View>
                )}

                {Math.ceil(lawyer.avg_rating) == 3 && (
                  <View style={{flexDirection: 'row'}}>
                    <Star name="star" size={20} color="#989898" />
                    <Star name="star" size={20} color="#989898" />
                    <Star name="star" size={20} color="#989898" />
                  </View>
                )}

                {Math.ceil(lawyer.avg_rating) == 4 && (
                  <View style={{flexDirection: 'row'}}>
                    <Star name="star" size={20} color="#989898" />
                    <Star name="star" size={20} color="#989898" />
                    <Star name="star" size={20} color="#989898" />
                    <Star name="star" size={20} color="#989898" />
                  </View>
                )}

                {Math.ceil(lawyer.avg_rating) == 5 && (
                  <View style={{flexDirection: 'row'}}>
                    <Star name="star" size={20} color="#989898" />
                    <Star name="star" size={20} color="#989898" />
                    <Star name="star" size={20} color="#989898" />
                    <Star name="star" size={20} color="#989898" />
                    <Star name="star" size={20} color="#989898" />
                  </View>
                )}

                {lawyer.num_rating == 1 && (
                  <Text style={styles.reviewText}>
                    {lawyer.num_rating} review
                  </Text>
                )}
                {lawyer.num_rating > 1 && (
                  <Text style={styles.reviewText}>
                    {lawyer.num_rating} reviews
                  </Text>
                )}
              </View>
              <View style={{flexDirection: 'row', paddingTop: 10}}>
                <MapIcon
                  name="map-marker-alt"
                  size={15}
                  color="#28899B"
                  style={{paddingTop: 3}}
                />
                <Text style={styles.reviewTextPadding}>{lawyer.city}</Text>
              </View>
              <View style={{flexDirection: 'column', paddingTop: 10}}>
                <View style={{flexDirection: 'row'}}>
                  <Image style={{width: 12, height: 12}} source={UserIcon} />
                  <Text style={styles.smallText}>{lawyer.lawyer_type}</Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                    paddingLeft: 0,
                    marginTop: 10,
                  }}>
                  <Image
                    style={{width: 12, height: 12, marginRight: 6}}
                    source={CourtIcon}
                  />

                  {/* <Text style={styles.smallText1}>
                    {selectedCategories.join(', ')}
                  </Text> */}

                  {lawyer.is_civil == 1 && (
                    <Text style={styles.smallText1}>Civil</Text>
                  )}
                  {lawyer.is_civil == 1 && lawyer.is_criminal == 1 && (
                    <Text style={styles.smallText1}>{','} </Text>
                  )}
                  {lawyer.is_criminal == 1 && (
                    <Text style={styles.smallText1}>Criminal</Text>
                  )}

                  {(lawyer.is_civil == 1 || lawyer.is_criminal == 1) &&
                    lawyer.is_intellectual_property == 1 && (
                      <Text style={styles.smallText1}>,</Text>
                    )}

                  {lawyer.is_intellectual_property == 1 && (
                    <Text style={styles.smallText1}>Intellectual Property</Text>
                  )}

                  {(lawyer.is_civil == 1 ||
                    lawyer.is_criminal == 1 ||
                    lawyer.is_intellectual_property == 1) &&
                    lawyer.is_family == 1 && (
                      <Text style={styles.smallText1}>,</Text>
                    )}

                  {lawyer.is_family == 1 && (
                    <Text style={styles.smallText1}>Family</Text>
                  )}

                  {(lawyer.is_civil == 1 ||
                    lawyer.is_criminal == 1 ||
                    lawyer.is_intellectual_property == 1 ||
                    lawyer.is_family == 1) &&
                    lawyer.is_property == 1 && (
                      <Text style={styles.smallText1}>,</Text>
                    )}

                  {lawyer.is_property == 1 && (
                    <Text style={styles.smallText1}>Property</Text>
                  )}

                  {(lawyer.is_civil == 1 ||
                    lawyer.is_criminal == 1 ||
                    lawyer.is_intellectual_property == 1 ||
                    lawyer.is_family == 1 ||
                    lawyer.is_property == 1) &&
                    lawyer.is_immigration == 1 && (
                      <Text style={styles.smallText1}>,</Text>
                    )}
                  {lawyer.is_immigration == 1 && (
                    <Text style={styles.smallText1}>Immigration</Text>
                  )}

                  {(lawyer.is_civil == 1 ||
                    lawyer.is_criminal == 1 ||
                    lawyer.is_intellectual_property == 1 ||
                    lawyer.is_family == 1 ||
                    lawyer.is_property == 1 ||
                    lawyer.is_immigration == 1) &&
                    lawyer.is_labour == 1 && (
                      <Text style={styles.smallText1}>,</Text>
                    )}

                  {lawyer.is_labour == 1 && (
                    <Text style={styles.smallText1}>Labour</Text>
                  )}

                  {(lawyer.is_civil == 1 ||
                    lawyer.is_criminal == 1 ||
                    lawyer.is_intellectual_property == 1 ||
                    lawyer.is_family == 1 ||
                    lawyer.is_property == 1 ||
                    lawyer.is_immigration == 1 ||
                    lawyer.is_labour == 1) &&
                    lawyer.is_employment == 1 && (
                      <Text style={styles.smallText1}>,</Text>
                    )}

                  {lawyer.is_employment == 1 && (
                    <Text style={styles.smallText1}>Employment</Text>
                  )}

                  {(lawyer.is_civil == 1 ||
                    lawyer.is_criminal == 1 ||
                    lawyer.is_intellectual_property == 1 ||
                    lawyer.is_family == 1 ||
                    lawyer.is_property == 1 ||
                    lawyer.is_immigration == 1 ||
                    lawyer.is_labour == 1 ||
                    lawyer.is_employment == 1) &&
                    lawyer.is_mergers == 1 && (
                      <Text style={styles.smallText1}>,</Text>
                    )}

                  {lawyer.is_mergers == 1 && (
                    <Text style={styles.smallText1}>
                      {'Mergers & Acquisitions'}
                    </Text>
                  )}

                  {(lawyer.is_civil == 1 ||
                    lawyer.is_criminal == 1 ||
                    lawyer.is_intellectual_property == 1 ||
                    lawyer.is_family == 1 ||
                    lawyer.is_property == 1 ||
                    lawyer.is_immigration == 1 ||
                    lawyer.is_labour == 1 ||
                    lawyer.is_employment == 1 ||
                    lawyer.is_mergers) &&
                    lawyer.is_bankruptcy == 1 && (
                      <Text style={styles.smallText1}>{','}</Text>
                    )}

                  {lawyer.is_bankruptcy == 1 && (
                    <Text style={styles.smallText1}>Bankruptcy</Text>
                  )}

                  {(lawyer.is_civil == 1 ||
                    lawyer.is_criminal == 1 ||
                    lawyer.is_intellectual_property == 1 ||
                    lawyer.is_family == 1 ||
                    lawyer.is_property == 1 ||
                    lawyer.is_immigration == 1 ||
                    lawyer.is_labour == 1 ||
                    lawyer.is_employment == 1 ||
                    lawyer.is_mergers ||
                    lawyer.is_bankruptcy == 1) &&
                    lawyer.is_corporate == 1 && (
                      <Text style={styles.smallText1}>,</Text>
                    )}

                  {lawyer.is_corporate == 1 && (
                    <Text style={styles.smallText1}>Corporate</Text>
                  )}

                  {(lawyer.is_civil == 1 ||
                    lawyer.is_criminal == 1 ||
                    lawyer.is_intellectual_property == 1 ||
                    lawyer.is_family == 1 ||
                    lawyer.is_property == 1 ||
                    lawyer.is_immigration == 1 ||
                    lawyer.is_labour == 1 ||
                    lawyer.is_employment == 1 ||
                    lawyer.is_mergers ||
                    lawyer.is_bankruptcy == 1 ||
                    lawyer.is_corporate == 1) &&
                    lawyer.is_notary == 1 && (
                      <Text style={styles.smallText1}>,</Text>
                    )}

                  {lawyer.is_notary == 1 && (
                    <Text style={styles.smallText1}>Notary</Text>
                  )}

                  {(lawyer.is_civil == 1 ||
                    lawyer.is_criminal == 1 ||
                    lawyer.is_intellectual_property == 1 ||
                    lawyer.is_family == 1 ||
                    lawyer.is_property == 1 ||
                    lawyer.is_immigration == 1 ||
                    lawyer.is_labour == 1 ||
                    lawyer.is_employment == 1 ||
                    lawyer.is_mergers ||
                    lawyer.is_bankruptcy == 1 ||
                    lawyer.is_corporate == 1 ||
                    lawyer.is_notary == 1) &&
                    lawyer.is_others == 1 && (
                      <Text style={styles.smallText1}>,</Text>
                    )}

                  {lawyer.is_others == 1 && (
                    <Text style={styles.smallText1}>Others</Text>
                  )}
                </View>
              </View>

              <TouchableOpacity
                style={styles.editBtn}
                onPress={() => navigation.navigate('EditProfile')}>
                <Text style={styles.editText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.borderLine}>
              <Text style={{fontWeight: 'bold'}}>
                Professional Experience Summary
              </Text>
              <Text style={styles.description}>{lawyer.description}</Text>
            </View>

            {lawyer.bar_cert_path && (
              <View style={styles.borderLine}>
                <Text style={styles.subTitle}>Bar Council Certificate</Text>

                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                  }}>
                  <TouchableOpacity onPress={() => showImageInModal(lawyer)}>
                    <Image
                      source={{
                        uri:
                          'https://lawyerback.trikara.com/storage/' +
                          lawyer.bar_cert_path,
                      }}
                      style={{width: 84, height: 142}}
                    />
                  </TouchableOpacity>
                </View>

                <Modal
                  visible={isModalVisible}
                  onRequestClose={() => {
                    setIsModalVisible(false);
                  }}
                  transparent={true}>
                  <ImageViewer imageUrls={currentImages} />
                </Modal>
              </View>
            )}

            {lawyer.aadhar_card_path && (
              <View style={styles.borderLine}>
                <Text style={styles.subTitle}>Aadhar Card</Text>

                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                  }}>
                  <TouchableOpacity onPress={() => showImageInModal1(lawyer)}>
                    <Image
                      source={{
                        uri:
                          'https://lawyerback.trikara.com/storage/' +
                          lawyer.aadhar_card_path,
                      }}
                      style={{width: 84, height: 142}}
                    />
                  </TouchableOpacity>
                </View>

                <Modal
                  visible={isModalVisible}
                  onRequestClose={() => {
                    setIsModalVisible(false);
                  }}
                  transparent={true}>
                  <ImageViewer imageUrls={currentImages} />
                </Modal>
              </View>
            )}
          </View>
        </View>
      )}
    </ScrollView>
  );
}
