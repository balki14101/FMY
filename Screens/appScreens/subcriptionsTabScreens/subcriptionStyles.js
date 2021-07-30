import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    trialCard: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginTop: 10,
        paddingStart: 23,
        paddingEnd: 23

    },
    cardTitle: {
        color: '#F57E34',
        fontSize: 15,
        fontFamily: 'openSans_semiBold'
    },
    couponBtn: {
        width: '30%',
        height: 26,
        backgroundColor: '#F57E34',
        fontSize: 15,
        fontFamily: 'openSans_semiBold',
        color: 'white',
        borderRadius: 5,
        textAlign: 'center',
        paddingTop: 2
    },
    couptionSelectBtn: {
        backgroundColor: '#1e94a3',
        width: '50%',
        alignItems: 'center',
        padding: 5,
        borderRadius: 5
    },
    listLabel: {
        color: '#3F433D',
        fontSize: 10,
        fontFamily: 'openSans_regular',

    },
    selectLabel: {
        color: 'black',
        fontSize: 12,
        fontFamily: 'openSans_regular',

    },
    otherPlans:{
        paddingLeft:22,
        paddingTop:20,
        fontSize: 16,
        fontFamily: 'openSans_semiBold',
    },
    //payment history

    mainContainer: {
        backgroundColor: 'white',
        marginBottom: 10,
        width: '90%',
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },

})