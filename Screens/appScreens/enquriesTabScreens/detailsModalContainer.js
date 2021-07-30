import React, { useState } from 'react'

import { View, Text, TouchableOpacity, TextInput } from 'react-native'

import CloseIcon from 'react-native-vector-icons/AntDesign'
import styles from './enquireStyles'

export default function DetailsModal(props) {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 15 }}>
                <Text style={styles.modalTitle}>Appointment Request</Text>
                <TouchableOpacity onPress={() => props.closeDetailsModal()}>
                    <CloseIcon name="close" size={20} style={{ marginLeft: 40 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.bottomLine}>
                <Text style={{ fontSize: 12, fontFamily: 'openSans_regular' }}>Date:{props.date}</Text>
                <Text style={{ fontSize: 12, fontFamily: 'openSans_regular', paddingTop: 13, paddingBottom: 5 }}>
                Time:{props.time}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderBottomColor: 'lightgrey', paddingTop: 14 }}>
                <View style={{ paddingBottom: 10 }}>
                    <Text style={{ fontSize: 18, fontFamily: 'openSans_regular' }}>{props.username}</Text>
                    <Text style={styles.smallText}>{props.city}</Text>
                    <Text style={styles.smallText}>{props.email}</Text>
                    <Text style={styles.smallText}>{props.mobile}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 13, fontFamily: 'roboto_medium' }}>Details</Text>

                    <Text style={{ fontSize: 12, fontFamily: 'openSans_regular',width:100,marginBottom:10, textAlign: 'justify', paddingTop: 20 }}>
                    {props.description} </Text>
                </View>
            </View>
            {props.showButtons==true &&
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', marginBottom: 20 }}>
                <TouchableOpacity style={[styles.modalBtns, { width: 60 }]} onPress={() => props.startReject(props.id)}>
                    <Text style={styles.btnText}>Reject</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.modalBtns, { width: 120 }]} onPress={() => props.rescheduleshow(props.item.id, props.item.slot_date, props.item.slot_start_time_hour_of_day,props.item.user.first_name, props.item.user.last_name, 'Bangalore', props.item.user.email, props.item.user.mobile_number, props.item.description)}>
                    <Text style={styles.btnText}>Ask to Reschedule</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.modalBtns, { backgroundColor: '#28899B', width: 70 }]} 
                    onPress={() => props.startAccept(props.id)}>
                    <Text style={[styles.btnText, { color: 'white' }]}>Accept</Text>
                </TouchableOpacity>
            </View>
           }

        </View>
    )
}