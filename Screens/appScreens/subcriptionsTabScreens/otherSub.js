import React from 'react'
import styles from './subcriptionStyles'
import { View, Text, TouchableOpacity, Image, FlatList, } from 'react-native'
import Unorderedlist from 'react-native-unordered-list';


function SilverMembership() {
    return (
        <View style={{ alignItems: 'center', }}>
            <View style={styles.trialCard}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingTop: 20 }} >
                    <Text style={[styles.cardTitle, { color: '#1E8AC9' }]}>Silver Membership</Text>
                    <Text style={[styles.couponBtn, { backgroundColor: '#1E8AC9' }]}>CDF:32</Text>
                </View>
                <View style={{ paddingTop: 21 }}>
                    <Unorderedlist>
                        <Text style={styles.listLabel}>Lorem ipsum dolor sit amet,</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text style={styles.listLabel}>consectetur adipiscing elit,sed do</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text style={styles.listLabel}>eiusmod tempor incididunt ut labore</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text style={styles.listLabel}>et doloremagna aliqua.</Text>
                    </Unorderedlist>

                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingTop: 10 }}>
                    <View>
                        <Text style={styles.selectLabel}>Start Date</Text>
                        <Text style={[styles.selectLabel, { color: '#4172C7' }]}>11-2-2020</Text>
                    </View>
                    <View>
                        <Text style={styles.selectLabel}>End Date</Text>
                        <Text style={[styles.selectLabel, { color: '#4172C7' }]}>11-2-2020</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
                    <TouchableOpacity style={[styles.couptionSelectBtn, { backgroundColor: '#696B6F' }]}>
                        <Text style={{
                            fontFamily: 'openSans_semiBold',
                            color: 'white',
                        }}>Select</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>

    )
}
function GoldMembership() {
    return (
        <View style={{ alignItems: 'center', }}>
            <View style={styles.trialCard}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingTop: 20 }} >
                    <Text style={[styles.cardTitle, { color: '#AFA031' }]}>Gold Membership</Text>
                    <Text style={[styles.couponBtn, { backgroundColor: '#AFA031' }]}>CDF:32</Text>
                </View>
                <View style={{ paddingTop: 21 }}>
                    <Unorderedlist>
                        <Text style={styles.listLabel}>Lorem ipsum dolor sit amet,</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text style={styles.listLabel}>consectetur adipiscing elit,sed do</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text style={styles.listLabel}>eiusmod tempor incididunt ut labore</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text style={styles.listLabel}>et doloremagna aliqua.</Text>
                    </Unorderedlist>

                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingTop: 10 }}>
                    <View>
                        <Text style={styles.selectLabel}>Start Date</Text>
                        <Text style={[styles.selectLabel, { color: '#4172C7' }]}>11-2-2020</Text>
                    </View>
                    <View>
                        <Text style={styles.selectLabel}>End Date</Text>
                        <Text style={[styles.selectLabel, { color: '#4172C7' }]}>11-2-2020</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
                    <TouchableOpacity style={[styles.couptionSelectBtn, { backgroundColor: '#696B6F' }]}>
                        <Text style={{
                            fontFamily: 'openSans_semiBold',
                            color: 'white',
                        }}>Select</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>

    )
}
function PlatinumMembership() {
    return (
        <View style={{ alignItems: 'center',marginBottom:20 }}>
            <View style={styles.trialCard}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingTop: 20 }} >
                    <Text style={[styles.cardTitle, { color: '#2D59A6' }]}>Platinum Membership</Text>
                    <Text style={[styles.couponBtn, { backgroundColor: '#2D59A6' }]}>CDF:32</Text>
                </View>
                <View style={{ paddingTop: 21 }}>
                    <Unorderedlist>
                        <Text style={styles.listLabel}>Lorem ipsum dolor sit amet,</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text style={styles.listLabel}>consectetur adipiscing elit,sed do</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text style={styles.listLabel}>eiusmod tempor incididunt ut labore</Text>
                    </Unorderedlist>
                    <Unorderedlist>
                        <Text style={styles.listLabel}>et doloremagna aliqua.</Text>
                    </Unorderedlist>

                </View>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingTop: 10 }}>
                    <View>
                        <Text style={styles.selectLabel}>Start Date</Text>
                        <Text style={[styles.selectLabel, { color: '#4172C7' }]}>11-2-2020</Text>
                    </View>
                    <View>
                        <Text style={styles.selectLabel}>End Date</Text>
                        <Text style={[styles.selectLabel, { color: '#4172C7' }]}>11-2-2020</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
                    <TouchableOpacity style={[styles.couptionSelectBtn, { backgroundColor: '#696B6F' }]}>
                        <Text style={{
                            fontFamily: 'openSans_semiBold',
                            color: 'white',
                        }}>Select</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </View>

    )
}

export {
    SilverMembership,
    GoldMembership,
    PlatinumMembership
}