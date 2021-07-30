import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import styles from './authStyles'
import { ScrollView } from 'react-native-gesture-handler';
import Lawyers from '../../assets/images/about.png'
import PhoneIcon from 'react-native-vector-icons/Entypo'
import MailIcon from 'react-native-vector-icons/Feather'
import FacebookIcon from 'react-native-vector-icons/FontAwesome'
import TwitterIcon from 'react-native-vector-icons/FontAwesome'
import InstagramIcon from 'react-native-vector-icons/FontAwesome'
import LinkedInIcon from 'react-native-vector-icons/FontAwesome'
import CopyRight from 'react-native-vector-icons/FontAwesome'

export default function AboutUs() {

    const openInstagram = () => {
        Linking.openURL('instagram://user?username=apple')
            .catch(() => {
                Linking.openURL('https://www.instagram.com/apple');
            })
    }

    const openTwitter = () => {
        Linking.openURL('twitter://user?screen_name=apple')
            .catch(() => {
                Linking.openURL('https://www.twitter.com/apple');
            })
    }
    const openLinkedIn = () => {
        Linking.openURL('linkedin.com/company/apple/')
            .catch(() => {
                Linking.openURL('https://www.linkedin.com/company/apple/');
            })
    }
    return (
        <ScrollView>
            <View>
                <View style={{ alignItems: 'center' }}>
                    <View style={[styles.formContainer, { paddingStart: 12, paddingEnd: 12 }]}>
                        <Text style={[styles.pageTitle, { paddingTop: 31 }]}>ABOUT US</Text>
                        <Text style={styles.description}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                        <Text style={styles.description}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                        <Text style={styles.description}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                        <Text style={styles.description}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                        <Image source={Lawyers} style={{ marginTop: 30, marginBottom: 30, resizeMode: 'cover', width: 330, height: 200 }} />

                    </View>

                </View>
                <View style={{ paddingTop: 20, marginTop: 30, paddingBottom: 40, backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <PhoneIcon name="phone" size={15} color="#37B6FF" />
                            <Text style={{ color: '#37B6FF', fontSize: 12, paddingLeft: 5, fontFamily: 'openSans_regular' }}>+911234567890 </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <MailIcon name="mail" size={15} color="#37B6FF" />
                            <Text style={{ color: '#37B6FF', fontSize: 12, paddingLeft: 5, fontFamily: 'openSans_regular' }}>info@findyourlawyer.in </Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', paddingTop: 20, justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/')} style={{ marginRight:20,marginLeft:20}}>
                            <FacebookIcon name="facebook" size={15} color="#37B6FF" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={openTwitter} style={{ marginRight:20,marginLeft:20}}>
                            <TwitterIcon name="twitter" size={15} color="#37B6FF" />
                        </TouchableOpacity >
                        <TouchableOpacity onPress={openInstagram} style={{ marginRight:20,marginLeft:20}}>
                            <InstagramIcon name="instagram" size={15} color="#37B6FF" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={openLinkedIn} style={{ marginRight:20,marginLeft:20}}>
                            <LinkedInIcon name="linkedin-square" size={15} color="#37B6FF" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', paddingStart: 20, paddingTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <CopyRight name="copyright" size={15} color="#37B6FF" />
                        <Text style={{ color: '#37B6FF', fontSize: 12, paddingLeft: 5, fontFamily: 'openSans_regular' }}>All Rights Reserved | FindYourLawyer.In 2020</Text>
                    </View>
                    <Text style={{ color: '#37B6FF', fontSize: 12, paddingLeft: 5, fontFamily: 'openSans_regular', paddingTop: 20, textAlign: 'center' }}>Version 1.0.26</Text>

                </View>
            </View>
        </ScrollView >
    )
}