import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    pageTitle: {
        marginTop: 30,
        marginLeft: 3,
        fontSize: 20,
        fontFamily: 'Montserrat_bold',
        color: 'black',
    },
    bgImage: {
        width: '100%',
        height: '100%',
    },

    container: {
        paddingStart: 25,
        paddingEnd: 25,
        marginBottom: 10
    },
    question: {
        fontSize: 16,
        fontFamily: 'poppins_bold',
        color: 'black'

    },
    questionContainer: {
        marginTop: 10
    },
    description: {
        paddingTop: 0,
        padding: 5,
        color: '#717171',
        fontSize: 12,
        textAlign: 'justify',
        fontFamily: 'openSans_regular',
        color: 'black'
    },
    totalAns: {
        borderBottomColor: '#D0CECE',
        borderBottomWidth: 1,
        fontSize: 14,
        color: 'black',
        fontFamily: 'poppins_regular',
        padding: 10
    },
    answerInput: {
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        width: '90%',
        color: '#717171',
        paddingLeft: 5,
        color: 'black',
        textAlign: 'justify',
        fontFamily: 'poppins_regular',
    },
    viewBtn: {
        marginTop:10,
        backgroundColor: '#2CBB55',
        padding: 5,
        borderRadius: 20,
        width:'35%'
      
    },
    viewText: {
        fontSize: 14,
        fontFamily: 'poppins_regular',
        textAlign: 'center',
        color: 'white',
        paddingTop:5
    },
    yourAns: {
        fontSize: 14,
        padding: 10,
        fontFamily: 'poppins_medium',
        color: 'black'
    },
    eachAnswer: {
        backgroundColor: "white",
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
        width:'90%'
    }
})