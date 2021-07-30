import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking, TextInput } from 'react-native'
import styles from './authStyles'
import { ScrollView } from 'react-native-gesture-handler';
import PhoneIcon from 'react-native-vector-icons/Entypo'
import MailIcon from 'react-native-vector-icons/Feather'
import FacebookIcon from 'react-native-vector-icons/FontAwesome'
import TwitterIcon from 'react-native-vector-icons/FontAwesome'
import InstagramIcon from 'react-native-vector-icons/FontAwesome'
import LinkedInIcon from 'react-native-vector-icons/FontAwesome'
import CopyRight from 'react-native-vector-icons/FontAwesome'

export default function ContactUs() {

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
        <View>
            <ScrollView>
                <View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={[styles.formContainer, { paddingStart: 12, paddingEnd: 12 }]}>
                            <Text style={[styles.pageTitle, { paddingTop: 31, paddingBottom: 0 }]}>CONTACT US</Text>
                            <Text style={styles.inputLabel}>First Name*</Text>
                            <TextInput
                                style={[styles.inputFeilds, { width: '100%' }]}
                            />
                            <Text style={styles.inputLabel}>Email*</Text>
                            <TextInput
                                style={[styles.inputFeilds, { width: '100%' }]}
                                keyboardType='email-address'
                            />
                            <Text style={styles.inputLabel}>Phone Number</Text>
                            <TextInput
                                style={[styles.inputFeilds, { width: '100%' }]}
                                keyboardType='number-pad'
                            />
                            <Text style={styles.inputLabel}>Company name</Text>
                            <TextInput
                                style={[styles.inputFeilds, { width: '100%' }]}
                            />
                            <Text style={styles.inputLabel}>Message*</Text>
                            <TextInput
                                style={styles.textArea}
                            />
                            <TouchableOpacity style={styles.contactBtn}>
                                <Text style={styles.btnText}>SUMBIT</Text>
                            </TouchableOpacity>
                            <Text style={[styles.pageTitle, { paddingTop: 31, paddingBottom: 0, fontSize: 16 }]}>ADDRESS</Text>
                            <Text style={styles.officeAddress}>4th Floor, Salarpuria Tower -1, No.{'\n'}22 Industrial Layout Landmark:{'\n'}Forum Mall, Bengaluru, Karnataka{'\n'}560068</Text>
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
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/')} style={{ marginRight: 20, marginLeft: 20 }}>
                                <FacebookIcon name="facebook" size={15} color="#37B6FF" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={openTwitter} style={{ marginRight: 20, marginLeft: 20 }}>
                                <TwitterIcon name="twitter" size={15} color="#37B6FF" />
                            </TouchableOpacity >
                            <TouchableOpacity onPress={openInstagram} style={{ marginRight: 20, marginLeft: 20 }}>
                                <InstagramIcon name="instagram" size={15} color="#37B6FF" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={openLinkedIn} style={{ marginRight: 20, marginLeft: 20 }}>
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
        </View>
    )
}