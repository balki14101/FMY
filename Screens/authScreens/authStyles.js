import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
       // paddingTop: '30%',
    },
    pageTitle: {
        paddingTop: 61,
        fontSize: 18,
        fontFamily: 'openSans_semiBold',
        paddingBottom: 20,
        textAlign:'center'
    },
    profile: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginTop: 20
    },
    appName: {
        paddingTop: 61,
        fontSize: 18,
        fontFamily: 'openSans_bold',
        textAlign: 'center'
    },
    inputFeilds: {
        width: '100%',
        backgroundColor: '#F0F0F0',
        borderRadius: 6,
        paddingLeft: 5,
        marginTop: 11,
        height: 40
    },

    inputLabel: {
        textAlign: 'left',
        paddingTop: 21,
        color: '#3F433D',
        fontSize: 13,
        fontFamily: 'roboto_medium',
    },
    inputLabel1:{
        textAlign: 'left',
        paddingTop: 10,
        color: '#3F433D',
        fontSize: 11,
        fontFamily: 'roboto_medium',
    },
    submitBtn: {
        backgroundColor: '#28899B',
        borderRadius: 6,
        alignItems: 'center',
        padding: 5,
        marginTop: 22,
        width: '100%',
        height: 40,
        alignItems:'center',
        justifyContent:'center'
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'openSans_regular',
        
    },
    forgot: {
        color: 'black',
        fontSize: 12,
        fontFamily: 'openSans_regular',
        textAlign:'center'
    },
    orText: {
        color: 'black',
        fontSize: 12,
        fontFamily: 'openSans_regular',
        paddingTop: 13,
        textAlign:'center'
    },
    //register
    pageHeader: {
        fontSize: 18,
        fontFamily: 'openSans_semiBold',
        paddingTop: 10,
        color: '#28899B'
    },
    formContainer: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 10,
        marginTop: 20,
        padding: 10,

    },
    formContainer1: {
        backgroundColor: 'white',
        width: 300,
        borderRadius: 10,
        marginTop: 20,
        padding: 10,
        alignItems:'center'
       // paddingBottom:'20%'
    },
    textArea: {
        backgroundColor: '#F0F0F0',
        marginTop: 5,
        borderRadius: 10,
        padding: 10,
        height: 90,
        textAlignVertical: 'top',

    },
    selectLabel: {
        color: 'black',
        fontSize: 12,
        fontFamily: 'openSans_regular',

    },
    listLabel: {
        color: '#3F433D',
        fontSize: 10,
        fontFamily: 'openSans_regular',

    },
    //membership styles
    trialCard: {
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 10,
        marginTop:50,
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
    forgetText: {
        fontFamily: 'openSans_semiBold',
        color: 'black',
        paddingTop: 20,
        fontSize: 14
    },
    cardTitle: {
        color: '#F57E34',
        fontSize: 15,
        fontFamily: 'openSans_semiBold'
    },
    couponBtn: {
        width: 60,

        backgroundColor: '#F57E34',
        fontSize: 13,
        fontFamily: 'openSans_semiBold',
        color: 'white',
        borderRadius: 5,
        textAlign: 'center',
        padding: 5
    },
    couptionSelectBtn: {
        backgroundColor: '#696B6F',
        width: '50%',
        alignItems: 'center',
        padding: 5,
        borderRadius: 5
    },
    couponInput: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        marginTop: 10

    },
    applyBtn: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 10,
        width: '30%',
        height: 26
    },
    documentContainer: {
        backgroundColor: '#F0F0F0',
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 10,
        padding: 10
    },
    imageContainer: {
        backgroundColor: '#F0F0F0',
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 10,
        margin: 5
    },
    cameraCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#707070',
        alignItems: 'center',
        justifyContent: 'center'
    },
    description: {
        fontSize: 12,
        fontFamily: 'openSans_regular',
        textAlign: 'justify',
        paddingTop: 10
    },
    contactBtn: {
        marginTop: 40,
        borderColor: '#28899B',
        borderRadius: 6,
        borderWidth: 1,
        height: 25,
        width: '60%',

    },
    btnText: {
        color: '#28899B',
        textAlign: 'center'
    },
    officeAddress: {
        fontSize: 14,
        color: '#6e6e6e',
        fontFamily: 'openSans_regular',
        paddingTop: 10,
        paddingBottom: 10,
        lineHeight: 25
    },
    loadingText: {
        fontSize: 18,
        fontFamily: 'roboto_medium',
        paddingTop: 20
    },
    dropdownTitle:{
      
        color: '#3F433D',
        fontSize: 14,
        fontFamily: 'roboto_medium',
        paddingTop:5,
        paddingLeft:5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(26, 26, 26, 0.8)'
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
    btnParentSection: {
    	 width:'100%',
    	 height:'100%',
    	 backgroundColor:'white',
       alignItems: 'center',
       paddingTop:150,
       position:'absolute',
       zIndex:100,
       flex: 1,
    },
    btnParentSection1: {
    	 width:'100%',
    	 height:'100%',
    	 backgroundColor:'white',
       alignItems: 'center',
       paddingTop:150,
       position:'absolute',
       zIndex:100,
       flex: 1,
    },
    btnSection: {
       width: 325,
       height: 100,
       backgroundColor: '#1E94A3',
       color:'white',
       alignItems: 'center',
       justifyContent: 'center',
       borderRadius: 3,
       marginBottom:10
   },
   btnText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
      fontWeight:'bold'
  }
})