import React, { useState, useEffect } from 'react';

import { View, Text, Image } from 'react-native'
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import { ScrollView } from 'react-native-gesture-handler'
import StarIcon from 'react-native-vector-icons/FontAwesome'
import styles from './reviewStyles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CircleFade } from 'react-native-animated-spinkit'

export default function HomeReview() {
	
	 const [loading, setLoading] = useState(false)
    const [loadingMessage, setLoadingMessage] = useState('Loading the reviews you have received')
    const [reviews, setReviews] = useState([])

   
    //const { items, requestSort, sortConfig } = useSortableData(reviews);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
        console.log(sortConfig);

            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    useEffect(() => {


      (async () => {	   

        var formData = new FormData();
        var authToken = await AsyncStorage.getItem('@auth_token');


        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + authToken
            }
        };


        setLoading(true);
        setLoadingMessage('Fetching your reviews...')

        fetch('https://lawyerback.trikara.com/api/lawyer-get-reviews', requestOptions)
            .then((response) => response.json())
            .then((json) => setTheReviews(json.reviews))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
            
      })();        


    }, []);


    const setTheReviews = (reviews) => {
    	
    	console.log(JSON.stringify(reviews))
        setReviews(reviews);
    }



    return (
        <ScrollView>
        
            {
                loading &&
                <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
                    <CircleFade size={100} color="#28899B" style={{ marginTop: '70%' }} />
                    <Text style={styles.loadingText}>Loading your reviews...</Text>
                </View>

            }
        
            {reviews.length==0 && !loading &&
            
            
               <Text style={{textAlign:'center', fontSize:20, marginTop:50}}>No Reviews Yet</Text>
            }
        
        
           {!loading &&
            <View style={{ alignItems: 'center' }}>

                
                 {reviews.map((item, key) => (
                   <View style={styles.eachAnswer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={{ uri: 'https://i.pravatar.cc/150?img=65' }} style={{
                            width: 50,
                            height: 50,
                            borderRadius: 50 / 2,
                        }} />
                        
                        <View style={{ paddingLeft: 16 }}>
                            <Text style={{ fontSize: 14, fontFamily: 'roboto_medium' }}>{item.user.first_name} {item.user.last_name}</Text>
                            
                          {item.num_of_stars == 1 &&  
                            <View style={{flexDirection:'row',paddingTop:5}}>
                                <StarIcon name="star" color="#FFD700" size={10} />
                                
                            </View>
                         }
                         
                         {item.num_of_stars == 2 &&  
                            <View style={{flexDirection:'row',paddingTop:5}}>
                                <StarIcon name="star" color="#FFD700" size={10} />
                                <StarIcon name="star" color="#FFD700" size={10} />
                                
                            </View>
                         }
                         
                         {item.num_of_stars == 3 &&  
                            <View style={{flexDirection:'row',paddingTop:5}}>
                                <StarIcon name="star" color="#FFD700" size={10} />
                                <StarIcon name="star" color="#FFD700" size={10} />
                                <StarIcon name="star" color="#FFD700" size={10} />
                                
                            </View>
                         }
                         
                         {item.num_of_stars == 4 &&  
                            <View style={{flexDirection:'row',paddingTop:5}}>
                                <StarIcon name="star" color="#FFD700" size={10} />
                                <StarIcon name="star" color="#FFD700" size={10} />
                                <StarIcon name="star" color="#FFD700" size={10} />
                                <StarIcon name="star" color="#FFD700" size={10} />

                            </View>
                         }

                         {item.num_of_stars == 5 &&  
                            <View style={{flexDirection:'row',paddingTop:5}}>
                                <StarIcon name="star" color="#FFD700" size={10} />
                                <StarIcon name="star" color="#FFD700" size={10} />
                                <StarIcon name="star" color="#FFD700" size={10} />
                                <StarIcon name="star" color="#FFD700" size={10} />
                                <StarIcon name="star" color="#00000039" size={10} />
                            </View>
                         }
                            <Text style={{ fontSize: 12, fontFamily: 'openSans_regular', color: '#D0CECE', paddingTop: 5 }}>
                            {item.created_at.slice(0, 10)}</Text>
                        </View>

                    </View>
                  
                    
                    

                        <Text style={styles.description}>
                            {item.review_text}
                        </Text>


                </View>

                
                
                ))}  
                
                
                
            </View>
            }
        </ScrollView>
    )
}