import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '90%',
        marginBottom: 10,
        paddingStart: 16,
        paddingEnd: 16,
        marginTop: 20
    },
    pageHeader:{
    	marginTop:10,
    	fontSize:20,
    	marginBottom:10,
    },
    profile: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginTop: 20
    },
    userName: {
        fontSize: 16,
        fontFamily: 'openSans_semiBold',
        paddingTop: 10,
    },
    reviewText: {
        fontSize: 16,
        paddingLeft: 5,
        fontFamily: 'openSans_regular'
    },
    reviewTextPadding:{
    	  fontSize: 14,
        paddingLeft: 8,
        fontFamily: 'openSans_regular'
    },
    smallText: {
        paddingLeft: 6,
        fontSize: 12,
       fontFamily: 'openSans_regular'
    },
    smallText1: {
        paddingLeft: 1,
        fontSize: 12,
        fontFamily: 'openSans_regular'
    },
    about: {
        fontSize: 14,
        fontFamily: 'openSans_regular',
        paddingTop: 5
    },
    editBtn: {
        marginTop: 20,
        backgroundColor: '#F57E34',
        borderRadius: 6,
        width: '40%',
        height: 28,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    editText: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'openSans_semiBold',
    },
    borderLine: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',

    },
    description: {
        paddingTop: 10,
        textAlign: "justify",
        fontSize: 14,
        fontFamily: 'openSans_regular',
        paddingBottom: 10

    },
    PDFContainer: {
        //flex: 1,
        justifyContent: 'flex-start',
        // alignItems: 'center',
        //  marginTop: 25,

    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position: 'absolute'
    },
    // edit profile
    pageTitle: {
        fontSize: 20,
        fontFamily: 'openSans_semiBold',
        paddingTop: 15,
        color: '#28899B',
        paddingTop: 20
    },
    formContainer: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 10,
        paddingStart: 10

    },
    inputFeilds: {
        width: '110%',
        backgroundColor: '#F0F0F0',
        borderRadius: 6,
        paddingLeft: 5,
        marginTop: 11,
        height: 36
    },
    inputLabel: {
        paddingTop: 10,
        color: '#3F433D',
        fontSize: 13,
        fontFamily: 'roboto_medium',
    },
    submitBtn: {
        backgroundColor: '#28899B',
        borderRadius: 6,
        alignItems: 'center',
        padding: 5,
        marginTop: 22,
        width: '55%',
        height: 36,
        marginBottom: 20
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'openSans_regular',
        paddingTop: 2
    },
    textArea: {
        backgroundColor: '#F0F0F0',
        marginTop: 5,
        borderRadius: 10,
        padding: 10,
        height: 83,
        textAlignVertical: 'top',
    },
    documentContainer: {
        backgroundColor: '#F0F0F0',
        width: '110%',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 10,
        padding: 10
    },
    imageContainer: {
        backgroundColor: '#F0F0F0',
        width: 70,
        height: 70,
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
    subTitle:{
        paddingTop:10,
        fontSize:14,
        fontFamily:'roboto_medium'
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
    dropdownTitle:{
      
        color: '#3F433D',
        fontSize: 14,
        fontFamily: 'roboto_medium',
        paddingTop:5,
        paddingLeft:5
    },
})
