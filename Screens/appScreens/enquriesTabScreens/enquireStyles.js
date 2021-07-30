import { StyleSheet } from 'react-native'

export default StyleSheet.create({
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
    nameText: {
        fontSize: 14,
        fontFamily: 'roboto_bold',
    },
    dateTime: {
        paddingTop: 5,
        color: '#37B6FF',
        fontFamily: 'roboto_black',
        fontSize: 14
    },
    emailText: {
        fontSize: 14,
        fontFamily: 'openSans_semiBold',
        paddingTop: 5
    },
    phoneText: {
        fontSize: 14,
        fontFamily: 'roboto_regular',
        paddingTop: 5,
        paddingBottom: 5
    },
    modalBtns: {
        borderColor: '#1E94A3',
        borderRadius: 5,
        borderWidth: 1,
        marginRight: 10,
        marginTop: 10,
        height: 30,
        width: '35%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontFamily: 'roboto_black',
        fontSize:12
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(26, 26, 26, 0.3)'
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        width: 350,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingStart: 20,
        paddingEnd: 20

    },
    modalTitle: {
        fontSize: 18,
        fontFamily: 'openSans_bold',
      
        textAlign: 'center',
        textAlign: 'center'
    },
    bottomLine:
    {
        paddingTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },
    smallText: {
        fontSize: 13,
        fontFamily: 'roboto_medium',
        paddingTop: 15
    },
    secondLine: {
        paddingTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    noteInput: {
        borderColor: '#28899B',
        borderWidth: 1,
        borderRadius: 6,
        height: 78,
        width: 300,
        marginTop: 2,
        
    }
})