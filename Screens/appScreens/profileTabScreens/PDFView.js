import React from 'react'
import { View } from 'react-native'
import styles from './profileStyles'
import Pdf from 'react-native-pdf';



export default function PDFViewer() {
   

    // React.useEffect(() => {
    //     setTimeout(() => {
    //         setShowDoc1(false),
    //             setShowDoc2(false)
    //     }, 1000);
    // });

    const source = { uri: 'bundle-assets://thereactnativebook-sample.pdf' }  //android/app/src/main/assets/
    return (
        <View>
            <Pdf
                source={source}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link presse: ${uri}`)
                }}
                style={styles.pdf} />
        </View>

    )
}