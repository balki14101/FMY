import React from 'react'
import styles from './subcriptionStyles'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, } from 'react-native'
import Unorderedlist from 'react-native-unordered-list';
import { ScrollView } from 'react-native-gesture-handler'


export default function PaymentHistory() {
    return (
        <ScrollView>
            <View style={{ alignItems: 'center' }}>

                <View style={styles.trialCard}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingTop: 20 }} >
                        <Text style={styles.cardTitle}>30 Day Trial</Text>
                        <Text style={styles.couponBtn}>Free</Text>
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
                        <Unorderedlist>
                            <Text style={styles.listLabel}>Ut enim ad</Text>
                        </Unorderedlist>
                    </View>
                   
                    <View style={{ paddingTop: 20 }}>
                        <Text style={styles.cardTitle}>Active on</Text>
                        <Text style={[styles.selectLabel, { color: '#4172C7' }]}>11-2-2020</Text>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <Text style={styles.cardTitle}>Amount paid</Text>
                        <Text style={[styles.selectLabel, { color: '#4172C7' }]}>Nil (Free subscription activated)</Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingTop: 20 }}>
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
                        <TouchableOpacity style={styles.couptionSelectBtn}>
                            <Text style={{
                                fontFamily: 'openSans_semiBold',
                                color: 'white',
                            }}>Active</Text>
                        </TouchableOpacity>
                    </View>


                </View>


            </View>
        </ScrollView>
    )
}