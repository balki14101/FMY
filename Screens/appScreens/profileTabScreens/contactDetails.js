import React, { useState, useEffect } from 'react'
import styles from '../../authScreens/authStyles'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Checkbox } from 'react-native-paper';
import ModalDropdown from 'react-native-modal-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';
import SelectMultiple from 'react-native-select-multiple'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CircleFade } from 'react-native-animated-spinkit'

export default function ContactDetails() {
	
	
    const cityStates = {
    "Andaman and Nicobar": [
      "Nicobars",
      "North And Middle Andaman",
      "South Andaman",
      "Other"
    ],
    "Andhra Pradesh": [
      "Anantapur",
      "Chittoor",
      "East Godavari",
      "Guntur",
      "Krishna",
      "Kurnool",
      "Prakasam",
      "S.P.S.Nellore",
      "Srikakulam",
      "Visakhapatnam",
      "Vizianagaram",
      "West Godavari",
      "Y.S.R. Kadapa",
      "Other"
    ],
    "Arunachal Pradesh": [
      "Anjaw",
      "changlang",
      "Dibang Valley",
      "East Kameng",
      "East Siang",
      "Itanagar",
      "Kamle",
      "Kra Daadi",
      "Kurung Kumey",
      "Lepa Rada",
      "Lohit",
      "Longding",
      "Lower Dibang Calley",
      "Lower Subansiri",
      "Namsai",
      "Pakke-Kessang",
      "Papum Pare",
      "Shi-Yomi",
      "Siang",
      "Tawang",
      "Tirap",
      "Upper Siang",
      "Upper Subansiri",
      "West Kameng",
      "West Siang",
      "Other"
    ],
    Assam: [
      "Baksa",
      "Barpeta",
      "Biswanath",
      "Bongaigaon",
      "Cachar",
      "Charaideo",
      "Chirang",
      "Darrang",
      "Dhemaji",
      "Dhubri",
      "Dibrugarh",
      "Dima Hasao",
      "Goalpara",
      "Golaghat",
      "Hailakandi",
      "Hojai",
      "Jorhat",
      "Kamrup",
      "Kamrup Metropolitan",
      "Karbi Anglong",
      "Karimganj",
      "Kokrajhar",
      "Lakhimpur",
      "Majuli",
      "Morigaon",
      "Nagaon",
      "Nalbari",
      "Sivasagar",
      "Sonitpur",
      "South Salamara-Mankachar",
      "Tinsukia",
      "Udalguri",
      "West Karbi Anglong",
      "Other"
    ],
    Bihar: [
      "Araria",
      "Arwal",
      "Aurangabad",
      "Banka",
      "Begusarai",
      "Bhagalpur",
      "Bhojpur",
      "Buxar",
      "Darbhanga",
      "East Champaran (Motihari)",
      "Gaya",
      "Gopalganj",
      "Jamui",
      "Jehanabad",
      "Kaimur (Bhabua)",
      "Katihar",
      "Khagaria",
      "Kishanganj",
      "Lakhisarai",
      "Madhepura",
      "Madhubani",
      "Munger (Monghyr)",
      "Muzaffarpur",
      "Nalanda",
      "Nawada",
      "Patna",
      "Purnia (Purnea)",
      "Rohtas",
      "Saharsa",
      "Samastipur",
      "Saran",
      "Sheikhpura",
      "Sheohar",
      "Sitamarhi",
      "Siwan",
      "Supaul",
      "Vaishali",
      "West Champaran",
      "Other"
    ],
    Chandigarh: ["Chandigarh", "Other"],
    Chhattisgarh: [
      "Balod",
      "Baloda Bazar",
      "Balrampur",
      "Bastar",
      "Bemetara",
      "Bijapur",
      "Bilaspur",
      "Dantewada (South Bastar)",
      "Dhamtari",
      "Durg",
      "Gariyaband",
      "Janjgir-Champa",
      "Jashpur",
      "Kabirdham (Kawardha)",
      "Kanker (North Bastar)",
      "Kondagaon",
      "Korba",
      "Korea (Koriya)",
      "Mahasamund",
      "Mungeli",
      "Narayanpur",
      "Raigarh",
      "Raipur",
      "Rajnandgaon",
      "Sukma",
      "Surajpur",
      "Surguja",
      "Other"
    ],
    "Dadra & Nagar Haveli and Daman & Diu": [
      "Dadra & Nagar Haveli",
      "Daman",
      "Diu",
      "Other"
    ],
    Delhi: ["Delhi", "New Delhi", "Other"],
    Goa: ["Madgaon", "Panaji", "Other"],
    Gujarat: [
      "Ahmedabad",
      "Amreli",
      "Anand",
      "Aravalli",
      "Banaskantha (Palanpur)",
      "Bharuch",
      "Bhavnagar",
      "Botad",
      "Chhota Udepur",
      "Dahod",
      "Dangs (Ahwa)",
      "Devbhoomi Dwarka",
      "Gandhinagar",
      "Gir Somnath",
      "Jamnagar",
      "Junagadh",
      "Kachchh",
      "Kheda (Nadiad)",
      "Mahisagar",
      "Mehsana",
      "Morbi",
      "Narmada (Rajpipla)",
      "Navsari",
      "Panchmahal (Godhra)",
      "Patan",
      "Porbandar",
      "Rajkot",
      "Sabarkantha (Himmatnagar)",
      "Surat",
      "Surendranagar",
      "Tapi (Vyara)",
      "Vadodara",
      "Valsad",
      "Other"
    ],
    Haryana: [
      "Ambala",
      "Bhiwani",
      "Charkhi Dadri",
      "Faridabad",
      "Fatehabad",
      "Gurugram",
      "Hisar",
      "Jhajjar",
      "Jind",
      "Kaithal",
      "Karnal",
      "Kurukshetra",
      "Mahendragarh",
      "Nuh",
      "Palwal",
      "Panchkula",
      "Panipat",
      "Rewari",
      "Rohtak",
      "Sirsa",
      "Sonipat",
      "Yamunanagar",
      "Other"
    ],
    "Himachal Pradesh": [
      "Bilaspur",
      "Chamba",
      "Hamirpur",
      "Kangra",
      "Kinnaur",
      "Kullu",
      "Lahaul & Spiti",
      "Mandi",
      "Shimla",
      "Sirmaur",
      "Solan",
      "Una",
      "Other"
    ],
    "Jammu and Kashmir": [
      "Anantnag",
      "Bandipore",
      "Baramulla",
      "Budgam",
      "Doda",
      "Ganderbal",
      "Jammu",
      "Kathua",
      "Kishtwar",
      "Kulgam",
      "Kupwara",
      "Poonch",
      "Pulwama",
      "Rajouri",
      "Ramban",
      "Reasi",
      "Samba",
      "Shopian",
      "Srinagar",
      "Udhampur",
      "Other"
    ],
    Jharkhand: [
      "Bokaro",
      "Chatra",
      "Deoghar",
      "Dhanbad",
      "Dumka",
      "East Singhbhum",
      "Garhwa",
      "Giridih",
      "Godda",
      "Gumla",
      "Hazaribag",
      "Jamtara",
      "Khunti",
      "Koderma",
      "Latehar",
      "Lohardaga",
      "Pakur",
      "Palamu",
      "Ramgarh",
      "Ranchi",
      "Sahibganj",
      "Seraikela-Kharsawan",
      "Simdega",
      "West Singhbhum",
      "Other"
    ],
    Karnataka: [
      "Bagalkot",
      "Ballari",
      "Belagavi",
      "Bengaluru (Bangalore) Rural",
      "Bengaluru (Bangalore) Urban",
      "Bidar",
      "Chamarajanagar",
      "Chikballapur",
      "Chikkamagaluru",
      "Chitradurga",
      "Dakshina Kannada",
      "Davangere",
      "Dharwad",
      "Gadag",
      "Hassan",
      "Haveri",
      "Kalaburagi",
      "Kodagu",
      "Kolar",
      "Koppal",
      "Mandya",
      "Mysuru",
      "Raichur",
      "Ramanagara",
      "Shivamogga",
      "Tumakuru",
      "Udupi",
      "Uttara Kannada",
      "Vijayapura",
      "Yadgir",
      "Other"
    ],
    Kerala: [
      "Alappuzha",
      "Ernakulam",
      "Idukki",
      "Kannur",
      "Kasaragod",
      "Kollam",
      "Kottayam",
      "Kozhikode",
      "Malappuram",
      "Palakkad",
      "Pathanamthitta",
      "Thiruvananthapuram",
      "Thrissur",
      "Wayanad",
      "Other"
    ],
    "Madhya Pradesh": [
      "Agar Malwa",
      "Alirajpur",
      "Anuppur",
      "Ashoknagar",
      "Balaghat",
      "Barwani",
      "Betul",
      "Bhind",
      "Bhopal",
      "Burhanpur",
      "Chhatarpur",
      "Chhindwara",
      "Damoh",
      "Datia",
      "Dewas",
      "Dhar",
      "Dindori",
      "Guna",
      "Gwalior",
      "Harda",
      "Hoshangabad",
      "Indore",
      "Jabalpur",
      "Jhabua",
      "Katni",
      "Khandwa",
      "Khargone",
      "Mandla",
      "Mandsaur",
      "Morena",
      "Narsinghpur",
      "Neemuch",
      "Panna",
      "Raisen",
      "Rajgarh",
      "Ratlam",
      "Rewa",
      "Sagar",
      "Satna",
      "Sehore",
      "Seoni",
      "Shahdol",
      "Shajapur",
      "Sheopur",
      "Shivpuri",
      "Sidhi",
      "Singrauli",
      "Tikamgarh",
      "Ujjain",
      "Umaria",
      "Vidisha",
      "Other"
    ],
    Lakshadweep: ["Lakshadweep", "Other"],
    Ladakh: ["Kargil", "Leh", "Other"],
    Maharashtra: [
      "Ahmednagar",
      "Akola",
      "Amravati",
      "Aurangabad",
      "Beed",
      "Bhandara",
      "Buldhana",
      "Chandrapur",
      "Dhule",
      "Gadchiroli",
      "Gondia",
      "Hingoli",
      "Jalgaon",
      "Jalna",
      "Kolhapur",
      "Latur",
      "Mumbai",
      "Nagpur",
      "Nanded",
      "Nandurbar",
      "Nashik",
      "Osmanabad",
      "Palghar",
      "Parbhani",
      "Pune",
      "Raigad",
      "Ratnagiri",
      "Sangli",
      "Satara",
      "Sindhudurg",
      "Solapur",
      "Thane",
      "Wardha",
      "Washim",
      "Yavatmal",
      "Other"
    ],
    Manipur: [
      "Bishnupur",
      "Chandel",
      "Churachandpur",
      "Imphal",
      "Jiribam",
      "Kakching",
      "Kamjong",
      "Kangpokpi",
      "Noney",
      "Pherzawl",
      "Senapati",
      "Tamenglong",
      "Tengnoupal",
      "Thoubal",
      "Ukhrul",
      "Other"
    ],
    Meghalaya: [
      "East Garo Hills",
      "East Jaintia Hills",
      "East Khasi Hills",
      "North Garo Hills",
      "Ri Bhoi",
      "South Garo Hills",
      "South West Garo Hills",
      "South West Khasi Hills",
      "West Garo Hills",
      "West Jaintia Hills",
      "West Khasi Hills",
      "Other"
    ],
    Mizoram: [
      "Aizawl",
      "Champhai",
      "Kolasib",
      "Lawngtlai",
      "Lunglei",
      "Mamit",
      "Saiha",
      "Serchhip",
      "Other"
    ],
    Nagaland: [
      "Dimapur",
      "Kiphire",
      "Kohima",
      "Longleng",
      "Mokokchung",
      "Mon",
      "Peren",
      "Phek",
      "Tuensang",
      "Wokha",
      "Zunheboto",
      "Other"
    ],
    Odisha: [
      "Angul",
      "Balangir",
      "Balasore",
      "Bargarh",
      "Bhadrak",
      "Boudh",
      "Cuttack",
      "Deogarh",
      "Dhenkanal",
      "Gajapati",
      "Ganjam",
      "Jagatsinghapur",
      "Jajpur",
      "Jharsuguda",
      "Kalahandi",
      "Kandhamal",
      "Kendrapara",
      "Kendujhar",
      "Khordha",
      "Koraput",
      "Malkangiri",
      "Mayurbhanj",
      "Nabarangpur",
      "Nayagarh",
      "Nuapada",
      "Puri",
      "Rayagada",
      "Sambalpur",
      "Sonepur",
      "Sundargarh",
      "Other"
    ],
    Puducherry: ["Karaikal", "Mahe", "Puducherry", "Yanam", "Other"],
    Punjab: [
      "Amritsar",
      "Barnala",
      "Bathinda",
      "Faridkot",
      "Fatehgarh Sahib",
      "Fazilka",
      "Ferozepur",
      "Gurdaspur",
      "Hoshiarpur",
      "Jalandhar",
      "Kapurthala",
      "Ludhiana",
      "Mansa",
      "Moga",
      "Muktsar",
      "Nawanshahr",
      "Pathankot",
      "Patiala",
      "Rupnagar",
      "Mohali",
      "Sangrur",
      "Tarn Taran",
      "Other"
    ],
    Rajasthan: [
      "Ajmer",
      "Alwar",
      "Banswara",
      "Baran",
      "Barmer",
      "Bharatpur",
      "Bhilwara",
      "Bikaner",
      "Bundi",
      "Chittorgarh",
      "Churu",
      "Dausa",
      "Dholpur",
      "Dungarpur",
      "Hanumangarh",
      "Jaipur",
      "Jaisalmer",
      "Jalore",
      "Jhalawar",
      "Jhunjhunu",
      "Jodhpur",
      "Karauli",
      "Kota",
      "Nagaur",
      "Pali",
      "Pratapgarh",
      "Rajsamand",
      "Sawai Madhopur",
      "Sikar",
      "Sirohi",
      "Sri Ganganagar",
      "Tonk",
      "Udaipur",
      "Other"
    ],
    Sikkim: [
      "East Sikkim",
      "North Sikkim",
      "South Sikkim",
      "West Sikkim",
      "Other"
    ],
    "Tamil Nadu": [
      "Ariyalur",
      "Chengalpattu",
      "Chennai",
      "Coimbatore",
      "Cuddalore",
      "Dharmapuri",
      "Dindigul",
      "Erode",
      "Kallakurichi",
      "Kanchipuram",
      "Kanyakumari",
      "Karur",
      "Krishnagiri",
      "Madurai",
      "Nagapattinam",
      "Namakkal",
      "Nilgiris",
      "Perambalur",
      "Pudukkottai",
      "Ramanathapuram",
      "Ranipet",
      "Salem",
      "Sivaganga",
      "Tenkasi",
      "Thanjavur",
      "Theni",
      "Thoothukudi",
      "Tiruchirappalli",
      "Tirunelveli",
      "Tirupathur",
      "Tiruppur",
      "Tiruvallur",
      "Tiruvannamalai",
      "Tiruvarur",
      "Vellore",
      "Viluppuram",
      "Virudhunagar",
      "Other"
    ],
    Telangana: [
      "Adilabad",
      "Bhadradri Kothagudem",
      "Hyderabad",
      "Jagtial",
      "Jangaon",
      "Jayashankar Bhoopalpally",
      "Jogulamba Gadwal",
      "Kamareddy",
      "Karimnagar",
      "Khammam",
      "Komaram Bheem Asifabad",
      "Mahabubabad",
      "Mahabubnagar",
      "Mancherial",
      "Medak",
      "Medchal",
      "Nagarkurnool",
      "Nalgonda",
      "Nirmal",
      "Nizamabad",
      "Peddapalli",
      "Rajanna Sircilla",
      "Rangareddy",
      "Sangareddy",
      "Siddipet",
      "Suryapet",
      "Vikarabad",
      "Wanaparthy",
      "Warangal (Rural)",
      "Warangal (Urban)",
      "Yadadri Bhuvanagiri",
      "Other"
    ],
    Tripura: [
      "Dhalai",
      "Gomati",
      "Khowai",
      "North Tripura",
      "Sepahijala",
      "South Tripura",
      "Unakoti",
      "West Tripura",
      "Other"
    ],
    "Uttar Pradesh": [
      "Agra",
      "Aligarh",
      "Allahabad",
      "Ambedkar Nagar",
      "Amethi",
      "Amroha",
      "Auraiya",
      "Azamgarh",
      "Baghpat",
      "Bahraich",
      "Ballia",
      "Balrampur",
      "Banda",
      "Barabanki",
      "Bareilly",
      "Basti",
      "Bhadohi",
      "Bijnor",
      "Budaun",
      "Bulandshahr",
      "Chandauli",
      "Chitrakoot",
      "Deoria",
      "Etah",
      "Etawah",
      "Faizabad",
      "Farrukhabad",
      "Fatehpur",
      "Firozabad",
      "Gautam Buddha Nagar",
      "Ghaziabad",
      "Ghazipur",
      "Gonda",
      "Gorakhpur",
      "Hamirpur",
      "Hapur",
      "Hardoi",
      "Hathras",
      "Jalaun",
      "Jaunpur",
      "Jhansi",
      "Kannauj",
      "Kanpur Dehat",
      "Kanpur Nagar",
      "Kanshiram Nagar",
      "Kaushambi",
      "Kushinagar",
      "Lakhimpur - Kheri",
      "Lalitpur",
      "Lucknow",
      "Maharajganj",
      "Mahoba",
      "Mainpuri",
      "Mathura",
      "Mau",
      "Meerut",
      "Mirzapur",
      "Moradabad",
      "Muzaffarnagar",
      "Pilibhit",
      "Pratapgarh",
      "RaeBareli",
      "Rampur",
      "Saharanpur",
      "Sambhal (Bhim Nagar)",
      "Sant Kabir Nagar",
      "Shahjahanpur",
      "Shamali (Prabuddh Nagar)",
      "Shravasti",
      "Siddharth Nagar",
      "Sitapur",
      "Sonbhadra",
      "Sultanpur",
      "Unnao",
      "Varanasi",
      "Other"
    ],
    Uttarakhand: [
      "Almora",
      "Bageshwar",
      "Chamoli",
      "Champawat",
      "Dehradun",
      "Haridwar",
      "Nainital",
      "Pauri Garhwal",
      "Pithoragarh",
      "Rudraprayag",
      "Tehri Garhwal",
      "Udham Singh Nagar",
      "Uttarkashi",
      "Other"
    ],
    "West Bengal": [
      "Alipurduar",
      "Bankura",
      "Birbhum",
      "Cooch Behar",
      "Dakshin Dinajpur (South Dinajpur)",
      "Darjeeling",
      "Hooghly",
      "Howrah",
      "Jalpaiguri",
      "Jhargram",
      "Kalimpong",
      "Kolkata",
      "Malda",
      "Murshidabad",
      "Nadia",
      "North 24 Parganas",
      "Paschim Medinipur (West Medinipur)",
      "Paschim (West) Burdwan (Bardhaman)",
      "Purba Burdwan (Bardhaman)",
      "Purba Medinipur (East Medinipur)",
      "Purulia",
      "South 24 Parganas",
      "Uttar Dinajpur (North Dinajpur)",
      "Other"
    ],
  };
  
  
  
	
	 const states = [
	                   'Andaman and Nicobar',
	                   'Andhra Pradesh',
	                   'Arunachal Pradesh',
	                   'Assam',
	                   'Bihar',
	                   'Chandigarh',
	                   'Chhattisgarh',
	                   'Dadra & Nagar Haveli and Daman & Diu',
	                   'Delhi',
	                   'Goa',
	                   'Gujarat',
	                   'Haryana',
	                   'Himachal Pradesh',
	                   'Jammu and Kashmir',
	                   'Jharkhand',
	                   'Karnataka',
	                   'Kerala',
	                   'Ladakh',
	                   'Lakshadweep',
	                   'Madhya Pradesh',
	                   'Maharashtra',	                   
	                   'Manipur',
	                   'Meghalaya',
	                   'Mizoram',
	                   'Nagaland',
	                   'Odisha',
	                   'Puducherry',
	                   'Punjab',
	                   'Rajasthan',
	                   'Sikkim',
	                   'Tamil Nadu',
	                   'Telangana',
	                   'Tripura',
	                   'Uttar Pradesh',
	                   'Uttarakhand',
	                   'West Bengal',                
	 
	                ]
	                
	 const [lawyer, setLawyer] = useState(null);                
    const [checked, setChecked] = useState(false);
    const [defaultValue, setDefaultValue] = useState('independent')
    const [selectedCategories, setSelectedCategories] = useState([])
    const [isFirm, setIsFirm] = useState(false)
    const [firmName, setFirmName] = useState('');
    const [isIndependent, setIsIndependent] = useState(true);
    const [token, setToken] = useState('');   
    const [description, setDescription] = useState('');
    const [isCivil, setIsCivil] = useState(false);
    const [isCriminal, setIsCriminal] = useState(false);
    



   const [userName, setUserName] = useState('');
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');

  
   
    const [isIntellectualProperty, setIsIntellectualProperty] = useState(false);
    const [isFamily, setIsFamily] = useState(false);
    const [isProperty, setIsProperty] = useState(false);
    const [isImmigration, setIsImmigration] = useState(false);
    const [isLabour, setIsLabour] = useState(false);
    const [isEmployment, setIsEmployment] = useState(false);
    const [isMergers, setIsMergers] = useState(false);
    const [isBankruptcy, setIsBankruptcy] = useState(false);  
    const [isCorporate, setIsCorporate] = useState(false); 
    const [isNotary, setIsNotary] = useState(false); 
    const [isOthers, setIsOthers] = useState(false);  
    
    const [isLoading, setLoading] = useState(false);  
    const [loadingMessage, setLoadingMessage] = useState('');  
   
    const [fullAddress, setFullAddress] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [city, setCity] = useState([]); 
    const [theState, setTheState] = useState('');
    const [selectedCity, setSelectedCity] = useState(''); 
    const [coordinates, setCoordinates] = useState('');   
    const [saveAsOffice, setSaveAsOffice] = useState(false);   

    const categories = ['Civil', 'Criminal', 'Intellectual Property', 'Family', 'Property', 'Immigration', 'Labour', 'Employment', 'Mergers and Acquisition', 'Bankruptcy Lawyer', 'Corporate', 'Notary', 'Others',]


    useEffect(() => {  
	
	(async () => {	    
   
      // Fetch profile of lawyer
      var authToken = await AsyncStorage.getItem('@auth_token');     		   	

    		
      setLoading(true);
    	setLoadingMessage('Fetching additional info...');
    	
      fetch('https://lawyerback.trikara.com/api/lawyer-fetch-own-profile', {
             method: "GET",
             headers: {
                'Authorization': 'Bearer '+authToken
             }
      })
      .then((response) => response.json())
      .then((json) => setLawyerProfileData(json.lawyer))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));      
          
       })();   
    		      
   
   }, []); 
   
   
   
   const setLawyerProfileData = (lawyer) => {
   	
   	console.log(lawyer.user.first_name)
   	
   	setLawyer(lawyer);
   	
   	setEmail(lawyer.user.email);
   	setUserName(lawyer.user.name);
   	setFirstName(lawyer.user.first_name);
   	setLastName(lawyer.user.last_name);
   	setPhone(lawyer.private_phone_number);
   	setTheState(lawyer.state);
   	
   	setCity(lawyer.city);
   	setSelectedCity(lawyer.city);
   	
   	if(lawyer.lawyer_type == 'Firm'){
        setIsFirm(true);
        setFirmName(lawyer.firm_name);
           	
   	}
   	
   	setDescription(lawyer.description);
   	
   	if(lawyer.is_civil == 1){
         setIsCivil(true);  
         var theSel = selectedCategories;

         theSel.push("Civil")	
         setSelectedCategories(theSel); 	
   	}
   	
   	if(lawyer.is_civil == 0){
         setIsCivil(false);   	
   	}
   	
   	if(lawyer.is_criminal == 1){
         setIsCriminal(true); 
         var theSel = selectedCategories;  	
         theSel.push("Criminal")
         setSelectedCategories(theSel); 
         
   	}
   	
   	if(lawyer.is_criminal == 0){
         setIsCriminal(false);   	
   	}
   	
   	//
   	if(lawyer.is_intellectual_property == 1){
         setIsIntellectualProperty(true); 
         var theSel = selectedCategories; 
         theSel.push("Intellectual Property")
         setSelectedCategories(theSel); 
         	
   	}
   	
   	if(lawyer.is_intellectual_property == 0){
         setIsIntellectualProperty(false);   	
   	}
   	
   	//
   	if(lawyer.is_family == 1){
         setIsFamily(true);  
         var theSel = selectedCategories;
         theSel.push("Family")
         setSelectedCategories(theSel);  	
         
   	}
   	
   	if(lawyer.is_family == 0){
         setIsFamily(false);   	
   	}
   	
   	//
   	
   	if(lawyer.is_property == 1){
         setIsProperty(true); 
         var theSel = selectedCategories; 
         theSel.push("Property")
         setSelectedCategories(theSel); 
          	
   	}
   	
   	if(lawyer.is_property == 0){
         setIsProperty(false);   	
   	}
   	
   	//
   	
   	if(lawyer.is_immigration == 1){
         setIsImmigration(true); 
         var theSel = selectedCategories;
         theSel.push("Immigration")
         setSelectedCategories(theSel); 
        
   	}
   	
   	if(lawyer.is_immigration == 0){
         setIsImmigration(false);   	
   	}
   	
   	//
   	
   	if(lawyer.is_labour == 1){
         setIsLabour(true);  
         var theSel = selectedCategories; 
         theSel.push("Labour")
         setSelectedCategories(theSel); 	
         
   	}
   	
   	if(lawyer.is_labour == 0){
         setIsLabour(false);   	
   	}
   	
   	//
   	
   	if(lawyer.is_employment == 1){
         setIsEmployment(true);  
         var theSel = selectedCategories;
         theSel.push("Employment")
         setSelectedCategories(theSel); 
         
   	}
   	
   	if(lawyer.is_employment == 0){
         setIsEmployment(false);   	
   	}
   	
   	//
   	
   	if(lawyer.is_mergers == 1){
         setIsMergers(true);
         var theSel = selectedCategories;   
         theSel.push("Mergers and Acquisition")	
         setSelectedCategories(theSel); 
          
   	}
   	
   	if(lawyer.is_mergers == 0){
         setIsMergers(false);   	
   	}
   	
   	//
   	
   	if(lawyer.is_bankruptcy == 1){
         setIsBankruptcy(true); 
         var theSel = selectedCategories;
         theSel.push("Bankruptcy Lawyer")
         setSelectedCategories(theSel); 


   	}
   	
   	if(lawyer.is_bankruptcy == 0){
         setIsBankruptcy(false);   	
   	}
   	
   	//
   	
   	if(lawyer.is_corporate == 1){
         setIsCorporate(true); 
         var theSel = selectedCategories;
         theSel.push("Corporate")
         setSelectedCategories(theSel); 

         
   	}
   	
   	if(lawyer.is_corporate == 0){
         setIsCorporate(false);   	
   	}
   	
   	if(lawyer.is_notary == 1){
         setIsNotary(true); 
         var theSel = selectedCategories;
         theSel.push("Notary")
         setSelectedCategories(theSel); 

         
   	}
   	
   	if(lawyer.is_notary == 0){
         setIsNotary(false);   	
   	}
   	
   	//
   	if(lawyer.is_others == 1){
         setIsOthers(true); 
         var theSel = selectedCategories;
         theSel.push("Others")
         setSelectedCategories(theSel);

   	}
   	
   	if(lawyer.is_others == 0){
         setIsOthers(false);   	
   	}
   	
   	setPinCode(lawyer.pincode);
   	setFullAddress(lawyer.full_address);
   	
   	setCoordinates(lawyer.latitude+','+lawyer.longitude)
   	
   	if(lawyer.is_office_address == 1){
         setSaveAsOffice(true);   	
   	}
   	
   }
   
    
    
    
    const onSelectionsChange = (selectedCategories1) => {
    	
        // selectedFruits is array of { label, value }
        setSelectedCategories(selectedCategories1);
        
        var catNames =[];
        
        for(var i=0;i<selectedCategories1.length;i++){
        	
           catNames.push(selectedCategories1[i].value);
        	
        	  if(catNames.includes('Civil')){
        	  	  setIsCivil(true);
        	  }else{
              setIsCivil(false);     	  
        	  }
        	  
        	
        	  if(catNames.includes('Criminal')){
        	  //if(selectedCategories1[i].value == 'Criminal'){
        	  	  setIsCriminal(true);
        	  }
        	  
        	  if(catNames.includes('Intellectual Property')){
        	  //if(selectedCategories1[i].value == 'Intellectual Property'){
        	  	  setIsIntellectualProperty(true);
        	  }
        	  
        	  if(catNames.includes('Family')){
        	  //if(selectedCategories1[i].value == 'Family'){
        	  	  setIsFamily(true);
        	  }
        	  
        	  if(catNames.includes('Property')){
        	  //if(selectedCategories1[i].value == 'Property'){
        	  	  setIsProperty(true);
        	  }
        	  
        	  if(catNames.includes('Immigration')){
        	  //if(selectedCategories1[i].value == 'Immigration'){
        	  	  setIsImmigration(true);
        	  }
        	  
        	  if(catNames.includes('Labour')){
        	 // if(selectedCategories1[i].value == 'Labour'){
        	  	  setIsLabour(true);
        	  }
        	  
        	  if(catNames.includes('Employment')){
        	  //if(selectedCategories1[i].value == 'Employment'){
        	  	  setIsEmployment(true);
        	  }
        	  
        	  if(catNames.includes('Mergers and Acquisition')){
        	  //if(selectedCategories[i].value == 'Mergers and Acquisition'){
        	  	  setIsMergers(true);
        	  }
        	  
        	  if(catNames.includes('Bankruptcy Lawyer')){
        	 // if(selectedCategories1[i].value == 'Bankruptcy Lawyer'){
        	  	  setIsBankruptcy(true);
        	  }
        	  
        	  if(catNames.includes('Corporate')){
        	  //if(selectedCategories1[i].value == 'Corporate'){
        	  	  setIsCorporate(true);
        	  }
        	  
        	  if(catNames.includes('Notary')){
        	  	  setIsNotary(true);
        	  }
        	  
        	  if(catNames.includes('Others')){
        	  //if(selectedCategories1[i].value == 'Others'){
        	  	  setIsOthers(true);
        	  }
        	  
        	  
        	  
        }
    }
    
    
    const handleFirmNameChange = (value) => {

        setFirmName(value)
    }
    
    const handleDescriptionChange = (value) => {

        setDescription(value)
    }
    
    const handleFullAddressChange = (value) => {

        setFullAddress(value)
    }
    
    const handlePincodeChange = (value) => {

        setPinCode(value)
    }
    
    
     const submitStep2 = async() => {   	
    
        // Throw error if the coordiates doesnt have comma value
        // Later validate the coordinates validity as well
    	  
    	  var authToken = await AsyncStorage.getItem("@auth_token");    	  
    	 
        var fieldsEmpty = false;
        
    	  var lawyerType = '';
    	  if(isFirm){
    	    lawyerType = 'Firm';
    	  }else{
    	    lawyerType = 'Independent';
    	  }
    	  
    	   var fieldsEmpty = false;
       
       if(isFirm){
        if(firmName == ''){
           fieldsEmpty = true;

        }
       }
        
        if(description == ''){
           fieldsEmpty = true;

        }
        
        if(fullAddress == ''){
           fieldsEmpty = true;

        }
        
        if(pinCode == ''){
          fieldsEmpty = true;

        }
        
        if(city == ''){
          fieldsEmpty = true;

        }
        
       // if(coordinates == ''){
       //   fieldsEmpty = true;

       // }
        
        if(fieldsEmpty){

           Toast.show({
                type: 'error',
                text1: 'One or more fields are empty',
            });
          
        } else{
    	  
    	     setLoading(true);
    	     setLoadingMessage("Updating your additional info...");
    	     
    	     var isCivil1 = 0;
    	     var isCriminal1 = 0;
    	     var isIntellectualProperty1 = 0;
    	     var isFamily1 = 0;
    	     var isProperty1 = 0;
    	     var isImmigration1 = 0;
    	     var isLabour1 = 0;
    	     var isEmployment1 = 0;
    	     var isMergers1 = 0;
    	     var isBankruptcy1 = 0;
    	     var isCorporate1 = 0;
    	     var isNotary1 = 0;
           var isOthers1 = 0;  	
    	     var saveAsOffice1 = 0;
    	     if(isCivil){
    	       isCivil1 = 1;
    	     }   	     
    	     
    	     
           if(isCriminal){
    	       isCriminal1 = 1;
    	     }
    	     
    	     
    	     
    	     //alert('iscivil'+isCivil1)
    	     //alert('iscriminal'+isCriminal1)
    	     
    	     if(isIntellectualProperty){
    	       isIntellectualProperty1 = 1;
    	     }
    	     
    	     if(isFamily){
    	       isFamily1 = 1;
    	     }
    	     
    	     
    	     if(isProperty){
    	       isProperty1 = 1;
    	     }
    	     
    	     if(isImmigration){
    	       isImmigration1 = 1;
    	     }
    	     
    	     if(isLabour){
    	       isLabour1 = 1;
    	     }
    	     
    	     if(isEmployment){
    	       isEmployment1 = 1;
    	     }
    	     
    	     if(isMergers){
    	       isMergers1 = 1;
    	     }
    	     
    	     if(isBankruptcy){
    	       isBankruptcy1 = 1;
    	     }
    	     
    	     if(isCorporate){
    	       isCorporate1 = 1;
    	     }
    	     
    	     if(isNotary){
    	       isNotary1 = 1;
    	     }
    	     
    	     if(isOthers){
    	       isOthers1 = 1;
    	     }
    	    
    	     
           if(saveAsOffice){
    	       saveAsOffice1 = 1;
    	     }
    		 	     
       
           fetch('https://lawyerback.trikara.com/api/lawyer-add-more-details?lawyer_type='+lawyerType+
        '&description='+description+'&is_civil='+isCivil1+'&is_criminal='+isCriminal1+
        '&is_intellectual_property='+isIntellectualProperty1+
        '&is_family='+isFamily1+
        '&is_property='+isProperty1+
        '&is_immigration='+isImmigration1+
        '&is_labour='+isLabour1+
        '&is_employment='+isEmployment1+
        '&is_mergers='+isMergers1+
        '&is_bankruptcy='+isBankruptcy1+
        '&is_corporate='+isCorporate1+
        '&is_notary='+isNotary1+
        '&is_others='+isOthers1+
        '&full_address='+fullAddress+'&pincode='+pinCode+'&city='+selectedCity+'&state='+theState+
        '&coordinates='+coordinates+'&firm_name='+firmName+'&save_as_office_address='+saveAsOffice1, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer '+authToken
                }
            }).then(res => res.json())
              .then((data) => {
                     setUserData1(data)
               })
              .then((response) => {
                   // do whatever you want with success response
                   setLoading(false);
           }).catch(console.log)       
       
       } // else closes
               
    }   
    
    
    const setUserData1 = (data) => {
    	
    	 setLoading(false);
       
       //history.push("/uploaddocuments");
    	  
    		 	     
       // Parse and set all data in localstorage  
    }   
    
 
    
    const selectType = (index,value) => {       
        
        if(index==1 && value=='Firm'){
           setIsFirm(true)
        }else {
           setIsFirm(false)
        }       
        
    }
    
    const selectState = (index,value) => {       
        
        setTheState(value);  
        
    }
    
    const selectCity = (index,value) => {       
        
        setCity(value);  
        setSelectedCity(value);
        
    }
    
    

    const renderLabel = (label, style) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ marginLeft: 10 }}>
                    <Text style={styles.selectLabel}>{label}</Text>
                </View>
            </View>
        )
    }
    
    var lawyerType = '';
    	  if(isFirm){
    	    lawyerType = 'Firm';
    	  }else{
    	    lawyerType = 'Independent';
    	  }
    
    return (
        <ScrollView>
        
        
            {isLoading &&
                <View style={{ height: '100%', width: '100%', alignItems: 'center' }}>
                    <CircleFade size={100} color="#28899B" style={{ marginTop: '70%' }} />
                    <Text style={styles.loadingText}>{loadingMessage}</Text>
                </View>

           }
           
           
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.pageHeader}>Additional Details</Text>
                <View style={styles.formContainer}>
                    <ScrollView>
                        <Text style={styles.inputLabel}>Independent / Firm?*</Text>
                       {isFirm && 
                        <ModalDropdown
                            onSelect={selectType}
                            defaultValue="Firm"
                            options={['Independent', 'Firm']}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, height: 70, marginTop: 12 }}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                       }
                       
                       {!isFirm && 
                        <ModalDropdown
                            onSelect={selectType}
                            defaultValue="Independent"
                            options={['Independent', 'Firm']}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, height: 70, marginTop: 12 }}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                       }
                        

                        {isFirm &&
                        <View>
                           <Text style={styles.inputLabel}>Firm Name*</Text>
                           <TextInput
                              value={firmName}
                              onChangeText={handleFirmNameChange}
                              style={[styles.inputFeilds, { width: '100%' }]}
                              keyboardType="text"
                           />
                        </View>
                        }


                        <Text style={styles.inputLabel}>Professional Experience Summary*</Text>
                        <TextInput
                            value={description}
                            onChangeText={handleDescriptionChange}
                            style={styles.textArea}
                            maxLength={200} />
                        <Text style={styles.inputLabel}>Category</Text>
                        <Text style={styles.inputLabel1}>You can select more than one</Text>
                        
                        <SelectMultiple
                            items={categories}
                            selectedItems={selectedCategories}
                            renderLabel={renderLabel}
                            onSelectionsChange={onSelectionsChange}

                        />


                        <Text style={styles.inputLabel}>Full Address*</Text>
                        <TextInput
                            value={fullAddress}
                            onChangeText={handleFullAddressChange}
                            style={styles.textArea}
                            maxLength={200} />

                        
                        
                     <View>         
                        <Text style={styles.inputLabel}>State*</Text>
                        <ModalDropdown
                            options={states}
                            defaultValue={theState}
                            onSelect={selectState}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     </View>   
                        
                    <View>  
                           
                      {theState.length>0 &&                   
                        <Text style={styles.inputLabel}>City*</Text>
                      }
                        
                        
                        {theState =='Andaman and Nicobar' &&  
                        
                        <ModalDropdown
                            options={["Nicobars",
      "North And Middle Andaman",
      "South Andaman",
      "Other"]}
                            onSelect={selectCity}
                            defaultValue={city}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                        
                      {theState =='Andhra Pradesh' &&  
                        
                        <ModalDropdown
                            options={["Anantapur",
                               "Chittoor",
                               "East Godavari",
                               "Guntur",
                               "Krishna",
                               "Kurnool",
                               "Prakasam",
                               "S.P.S.Nellore",
                               "Srikakulam",
                               "Visakhapatnam",
                               "Vizianagaram",
                               "West Godavari",
                               "Y.S.R. Kadapa",
                                "Other"]}
                            onSelect={selectCity}
                            defaultValue={city}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     {theState =='Arunachal Pradesh' &&  
                        
                        <ModalDropdown
                            options={["Anjaw",
      "changlang",
      "Dibang Valley",
      "East Kameng",
      "East Siang",
      "Itanagar",
      "Kamle",
      "Kra Daadi",
      "Kurung Kumey",
      "Lepa Rada",
      "Lohit",
      "Longding",
      "Lower Dibang Calley",
      "Lower Subansiri",
      "Namsai",
      "Pakke-Kessang",
      "Papum Pare",
      "Shi-Yomi",
      "Siang",
      "Tawang",
      "Tirap",
      "Upper Siang",
      "Upper Subansiri",
      "West Kameng",
      "West Siang",
      "Other"]}
                            onSelect={selectCity}
                            defaultValue={city}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     
                     {theState =='Assam' &&  
                        
                        <ModalDropdown
                            options={["Baksa",
      "Barpeta",
      "Biswanath",
      "Bongaigaon",
      "Cachar",
      "Charaideo",
      "Chirang",
      "Darrang",
      "Dhemaji",
      "Dhubri",
      "Dibrugarh",
      "Dima Hasao",
      "Goalpara",
      "Golaghat",
      "Hailakandi",
      "Hojai",
      "Jorhat",
      "Kamrup",
      "Kamrup Metropolitan",
      "Karbi Anglong",
      "Karimganj",
      "Kokrajhar",
      "Lakhimpur",
      "Majuli",
      "Morigaon",
      "Nagaon",
      "Nalbari",
      "Sivasagar",
      "Sonitpur",
      "South Salamara-Mankachar",
      "Tinsukia",
      "Udalguri",
      "West Karbi Anglong",
      "Other"]}
                            onSelect={selectCity}
                            defaultValue={city}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     
                     {theState =='Bihar' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Araria",
      "Arwal",
      "Aurangabad",
      "Banka",
      "Begusarai",
      "Bhagalpur",
      "Bhojpur",
      "Buxar",
      "Darbhanga",
      "East Champaran (Motihari)",
      "Gaya",
      "Gopalganj",
      "Jamui",
      "Jehanabad",
      "Kaimur (Bhabua)",
      "Katihar",
      "Khagaria",
      "Kishanganj",
      "Lakhisarai",
      "Madhepura",
      "Madhubani",
      "Munger (Monghyr)",
      "Muzaffarpur",
      "Nalanda",
      "Nawada",
      "Patna",
      "Purnia (Purnea)",
      "Rohtas",
      "Saharsa",
      "Samastipur",
      "Saran",
      "Sheikhpura",
      "Sheohar",
      "Sitamarhi",
      "Siwan",
      "Supaul",
      "Vaishali",
      "West Champaran",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     
                     {theState =='Chandigarh' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Chandigarh", "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     {theState =='Chhattisgarh' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Balod",
      "Baloda Bazar",
      "Balrampur",
      "Bastar",
      "Bemetara",
      "Bijapur",
      "Bilaspur",
      "Dantewada (South Bastar)",
      "Dhamtari",
      "Durg",
      "Gariyaband",
      "Janjgir-Champa",
      "Jashpur",
      "Kabirdham (Kawardha)",
      "Kanker (North Bastar)",
      "Kondagaon",
      "Korba",
      "Korea (Koriya)",
      "Mahasamund",
      "Mungeli",
      "Narayanpur",
      "Raigarh",
      "Raipur",
      "Rajnandgaon",
      "Sukma",
      "Surajpur",
      "Surguja",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     {theState =='Dadra & Nagar Haveli and Daman & Diu' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Dadra & Nagar Haveli",
      "Daman",
      "Diu",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     {theState =='Delhi' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Delhi", "New Delhi", "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     {theState =='Goa' &&  
                        
                        <ModalDropdown
                            options={["Madgaon", "Panaji", "Other"]}
                            defaultValue={city}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     {theState =='Gujarat' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Ahmedabad",
      "Amreli",
      "Anand",
      "Aravalli",
      "Banaskantha (Palanpur)",
      "Bharuch",
      "Bhavnagar",
      "Botad",
      "Chhota Udepur",
      "Dahod",
      "Dangs (Ahwa)",
      "Devbhoomi Dwarka",
      "Gandhinagar",
      "Gir Somnath",
      "Jamnagar",
      "Junagadh",
      "Kachchh",
      "Kheda (Nadiad)",
      "Mahisagar",
      "Mehsana",
      "Morbi",
      "Narmada (Rajpipla)",
      "Navsari",
      "Panchmahal (Godhra)",
      "Patan",
      "Porbandar",
      "Rajkot",
      "Sabarkantha (Himmatnagar)",
      "Surat",
      "Surendranagar",
      "Tapi (Vyara)",
      "Vadodara",
      "Valsad",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     {theState =='Haryana' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Ambala",
      "Bhiwani",
      "Charkhi Dadri",
      "Faridabad",
      "Fatehabad",
      "Gurugram",
      "Hisar",
      "Jhajjar",
      "Jind",
      "Kaithal",
      "Karnal",
      "Kurukshetra",
      "Mahendragarh",
      "Nuh",
      "Palwal",
      "Panchkula",
      "Panipat",
      "Rewari",
      "Rohtak",
      "Sirsa",
      "Sonipat",
      "Yamunanagar",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     {theState =='Himachal Pradesh' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Bilaspur",
      "Chamba",
      "Hamirpur",
      "Kangra",
      "Kinnaur",
      "Kullu",
      "Lahaul & Spiti",
      "Mandi",
      "Shimla",
      "Sirmaur",
      "Solan",
      "Una",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     {theState =='Jammu and Kashmir' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Anantnag",
      "Bandipore",
      "Baramulla",
      "Budgam",
      "Doda",
      "Ganderbal",
      "Jammu",
      "Kathua",
      "Kishtwar",
      "Kulgam",
      "Kupwara",
      "Poonch",
      "Pulwama",
      "Rajouri",
      "Ramban",
      "Reasi",
      "Samba",
      "Shopian",
      "Srinagar",
      "Udhampur",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     {theState =='Jharkhand' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Bokaro",
      "Chatra",
      "Deoghar",
      "Dhanbad",
      "Dumka",
      "East Singhbhum",
      "Garhwa",
      "Giridih",
      "Godda",
      "Gumla",
      "Hazaribag",
      "Jamtara",
      "Khunti",
      "Koderma",
      "Latehar",
      "Lohardaga",
      "Pakur",
      "Palamu",
      "Ramgarh",
      "Ranchi",
      "Sahibganj",
      "Seraikela-Kharsawan",
      "Simdega",
      "West Singhbhum",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     {theState =='Karnataka' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Bagalkot",
      "Ballari",
      "Belagavi",
      "Bengaluru (Bangalore) Rural",
      "Bengaluru (Bangalore) Urban",
      "Bidar",
      "Chamarajanagar",
      "Chikballapur",
      "Chikkamagaluru",
      "Chitradurga",
      "Dakshina Kannada",
      "Davangere",
      "Dharwad",
      "Gadag",
      "Hassan",
      "Haveri",
      "Kalaburagi",
      "Kodagu",
      "Kolar",
      "Koppal",
      "Mandya",
      "Mysuru",
      "Raichur",
      "Ramanagara",
      "Shivamogga",
      "Tumakuru",
      "Udupi",
      "Uttara Kannada",
      "Vijayapura",
      "Yadgir",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     {theState =='Kerala' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Alappuzha",
      "Ernakulam",
      "Idukki",
      "Kannur",
      "Kasaragod",
      "Kollam",
      "Kottayam",
      "Kozhikode",
      "Malappuram",
      "Palakkad",
      "Pathanamthitta",
      "Thiruvananthapuram",
      "Thrissur",
      "Wayanad",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     {theState =='Madhya Pradesh' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Agar Malwa",
      "Alirajpur",
      "Anuppur",
      "Ashoknagar",
      "Balaghat",
      "Barwani",
      "Betul",
      "Bhind",
      "Bhopal",
      "Burhanpur",
      "Chhatarpur",
      "Chhindwara",
      "Damoh",
      "Datia",
      "Dewas",
      "Dhar",
      "Dindori",
      "Guna",
      "Gwalior",
      "Harda",
      "Hoshangabad",
      "Indore",
      "Jabalpur",
      "Jhabua",
      "Katni",
      "Khandwa",
      "Khargone",
      "Mandla",
      "Mandsaur",
      "Morena",
      "Narsinghpur",
      "Neemuch",
      "Panna",
      "Raisen",
      "Rajgarh",
      "Ratlam",
      "Rewa",
      "Sagar",
      "Satna",
      "Sehore",
      "Seoni",
      "Shahdol",
      "Shajapur",
      "Sheopur",
      "Shivpuri",
      "Sidhi",
      "Singrauli",
      "Tikamgarh",
      "Ujjain",
      "Umaria",
      "Vidisha",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     {theState =='Lakshadweep' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Lakshadweep", "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     {theState =='Ladakh' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Kargil", "Leh", "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     {theState =='Maharashtra' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Ahmednagar",
      "Akola",
      "Amravati",
      "Aurangabad",
      "Beed",
      "Bhandara",
      "Buldhana",
      "Chandrapur",
      "Dhule",
      "Gadchiroli",
      "Gondia",
      "Hingoli",
      "Jalgaon",
      "Jalna",
      "Kolhapur",
      "Latur",
      "Mumbai",
      "Nagpur",
      "Nanded",
      "Nandurbar",
      "Nashik",
      "Osmanabad",
      "Palghar",
      "Parbhani",
      "Pune",
      "Raigad",
      "Ratnagiri",
      "Sangli",
      "Satara",
      "Sindhudurg",
      "Solapur",
      "Thane",
      "Wardha",
      "Washim",
      "Yavatmal",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     {theState =='Manipur' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={[ "Bishnupur",
      "Chandel",
      "Churachandpur",
      "Imphal",
      "Jiribam",
      "Kakching",
      "Kamjong",
      "Kangpokpi",
      "Noney",
      "Pherzawl",
      "Senapati",
      "Tamenglong",
      "Tengnoupal",
      "Thoubal",
      "Ukhrul",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     {theState =='Meghalaya' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["East Garo Hills",
      "East Jaintia Hills",
      "East Khasi Hills",
      "North Garo Hills",
      "Ri Bhoi",
      "South Garo Hills",
      "South West Garo Hills",
      "South West Khasi Hills",
      "West Garo Hills",
      "West Jaintia Hills",
      "West Khasi Hills",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     {theState =='Mizoram' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Aizawl",
      "Champhai",
      "Kolasib",
      "Lawngtlai",
      "Lunglei",
      "Mamit",
      "Saiha",
      "Serchhip",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     {theState =='Nagaland' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Dimapur",
      "Kiphire",
      "Kohima",
      "Longleng",
      "Mokokchung",
      "Mon",
      "Peren",
      "Phek",
      "Tuensang",
      "Wokha",
      "Zunheboto",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     


                      {theState =='Odisha' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Angul",
      "Balangir",
      "Balasore",
      "Bargarh",
      "Bhadrak",
      "Boudh",
      "Cuttack",
      "Deogarh",
      "Dhenkanal",
      "Gajapati",
      "Ganjam",
      "Jagatsinghapur",
      "Jajpur",
      "Jharsuguda",
      "Kalahandi",
      "Kandhamal",
      "Kendrapara",
      "Kendujhar",
      "Khordha",
      "Koraput",
      "Malkangiri",
      "Mayurbhanj",
      "Nabarangpur",
      "Nayagarh",
      "Nuapada",
      "Puri",
      "Rayagada",
      "Sambalpur",
      "Sonepur",
      "Sundargarh",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     {theState =='Puducherry' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Karaikal", "Mahe", "Puducherry", "Yanam", "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     {theState =='Punjab' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Amritsar",
      "Barnala",
      "Bathinda",
      "Faridkot",
      "Fatehgarh Sahib",
      "Fazilka",
      "Ferozepur",
      "Gurdaspur",
      "Hoshiarpur",
      "Jalandhar",
      "Kapurthala",
      "Ludhiana",
      "Mansa",
      "Moga",
      "Muktsar",
      "Nawanshahr",
      "Pathankot",
      "Patiala",
      "Rupnagar",
      "Mohali",
      "Sangrur",
      "Tarn Taran",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     {theState =='Rajasthan' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Ajmer",
      "Alwar",
      "Banswara",
      "Baran",
      "Barmer",
      "Bharatpur",
      "Bhilwara",
      "Bikaner",
      "Bundi",
      "Chittorgarh",
      "Churu",
      "Dausa",
      "Dholpur",
      "Dungarpur",
      "Hanumangarh",
      "Jaipur",
      "Jaisalmer",
      "Jalore",
      "Jhalawar",
      "Jhunjhunu",
      "Jodhpur",
      "Karauli",
      "Kota",
      "Nagaur",
      "Pali",
      "Pratapgarh",
      "Rajsamand",
      "Sawai Madhopur",
      "Sikar",
      "Sirohi",
      "Sri Ganganagar",
      "Tonk",
      "Udaipur",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     {theState =='Sikkim' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["East Sikkim",
      "North Sikkim",
      "South Sikkim",
      "West Sikkim",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                       {theState =='Tamil Nadu' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Ariyalur",
      "Chengalpattu",
      "Chennai",
      "Coimbatore",
      "Cuddalore",
      "Dharmapuri",
      "Dindigul",
      "Erode",
      "Kallakurichi",
      "Kanchipuram",
      "Kanyakumari",
      "Karur",
      "Krishnagiri",
      "Madurai",
      "Nagapattinam",
      "Namakkal",
      "Nilgiris",
      "Perambalur",
      "Pudukkottai",
      "Ramanathapuram",
      "Ranipet",
      "Salem",
      "Sivaganga",
      "Tenkasi",
      "Thanjavur",
      "Theni",
      "Thoothukudi",
      "Tiruchirappalli",
      "Tirunelveli",
      "Tirupathur",
      "Tiruppur",
      "Tiruvallur",
      "Tiruvannamalai",
      "Tiruvarur",
      "Vellore",
      "Viluppuram",
      "Virudhunagar",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                       {theState =='Telangana' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Adilabad",
      "Bhadradri Kothagudem",
      "Hyderabad",
      "Jagtial",
      "Jangaon",
      "Jayashankar Bhoopalpally",
      "Jogulamba Gadwal",
      "Kamareddy",
      "Karimnagar",
      "Khammam",
      "Komaram Bheem Asifabad",
      "Mahabubabad",
      "Mahabubnagar",
      "Mancherial",
      "Medak",
      "Medchal",
      "Nagarkurnool",
      "Nalgonda",
      "Nirmal",
      "Nizamabad",
      "Peddapalli",
      "Rajanna Sircilla",
      "Rangareddy",
      "Sangareddy",
      "Siddipet",
      "Suryapet",
      "Vikarabad",
      "Wanaparthy",
      "Warangal (Rural)",
      "Warangal (Urban)",
      "Yadadri Bhuvanagiri",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                       {theState =='Tripura' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Dhalai",
                                      "Gomati",
                                      "Khowai",
                                      "North Tripura",
                                      "Sepahijala",
                                      "South Tripura",
                                      "Unakoti",
                                      "West Tripura",
                                       "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }



  
                     
                     
                     
  {theState =='Uttar Pradesh' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Agra",
      "Aligarh",
      "Allahabad",
      "Ambedkar Nagar",
      "Amethi",
      "Amroha",
      "Auraiya",
      "Azamgarh",
      "Baghpat",
      "Bahraich",
      "Ballia",
      "Balrampur",
      "Banda",
      "Barabanki",
      "Bareilly",
      "Basti",
      "Bhadohi",
      "Bijnor",
      "Budaun",
      "Bulandshahr",
      "Chandauli",
      "Chitrakoot",
      "Deoria",
      "Etah",
      "Etawah",
      "Faizabad",
      "Farrukhabad",
      "Fatehpur",
      "Firozabad",
      "Gautam Buddha Nagar",
      "Ghaziabad",
      "Ghazipur",
      "Gonda",
      "Gorakhpur",
      "Hamirpur",
      "Hapur",
      "Hardoi",
      "Hathras",
      "Jalaun",
      "Jaunpur",
      "Jhansi",
      "Kannauj",
      "Kanpur Dehat",
      "Kanpur Nagar",
      "Kanshiram Nagar",
      "Kaushambi",
      "Kushinagar",
      "Lakhimpur - Kheri",
      "Lalitpur",
      "Lucknow",
      "Maharajganj",
      "Mahoba",
      "Mainpuri",
      "Mathura",
      "Mau",
      "Meerut",
      "Mirzapur",
      "Moradabad",
      "Muzaffarnagar",
      "Pilibhit",
      "Pratapgarh",
      "RaeBareli",
      "Rampur",
      "Saharanpur",
      "Sambhal (Bhim Nagar)",
      "Sant Kabir Nagar",
      "Shahjahanpur",
      "Shamali (Prabuddh Nagar)",
      "Shravasti",
      "Siddharth Nagar",
      "Sitapur",
      "Sonbhadra",
      "Sultanpur",
      "Unnao",
      "Varanasi",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                      {theState =='Uttarakhand' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Almora",
      "Bageshwar",
      "Chamoli",
      "Champawat",
      "Dehradun",
      "Haridwar",
      "Nainital",
      "Pauri Garhwal",
      "Pithoragarh",
      "Rudraprayag",
      "Tehri Garhwal",
      "Udham Singh Nagar",
      "Uttarkashi",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     
                      {theState =='West Bengal' &&  
                        
                        <ModalDropdown
                            defaultValue={city}
                            options={["Alipurduar",
      "Bankura",
      "Birbhum",
      "Cooch Behar",
      "Dakshin Dinajpur (South Dinajpur)",
      "Darjeeling",
      "Hooghly",
      "Howrah",
      "Jalpaiguri",
      "Jhargram",
      "Kalimpong",
      "Kolkata",
      "Malda",
      "Murshidabad",
      "Nadia",
      "North 24 Parganas",
      "Paschim Medinipur (West Medinipur)",
      "Paschim (West) Burdwan (Bardhaman)",
      "Purba Burdwan (Bardhaman)",
      "Purba Medinipur (East Medinipur)",
      "Purulia",
      "South 24 Parganas",
      "Uttar Dinajpur (North Dinajpur)",
      "Other"]}
                            onSelect={selectCity}
                            style={{ borderColor: 'black', borderWidth: 1, height: 40, width: '100%', borderRadius: 5, padding: 5, marginTop: 12 }}
                            dropdownStyle={{ width: '85%', borderRadius: 5, marginTop: 12 ,height: 200,}}
                            textStyle={styles.dropdownTitle}
                            dropdownTextStyle={styles.dropdownTitle}
                        />
                     }
                     
                     
                     
                     
                       
                     </View> 
                     
                     <Text style={styles.inputLabel}>Pin Code*</Text>
                     <TextInput
                            value={pinCode}
                            onChangeText={handlePincodeChange}
                            style={[styles.inputFeilds, { width: '100%' }]}
                            keyboardType="numeric"
                        />
                        
                          
                    </ScrollView>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                    <Checkbox
                        status={saveAsOffice ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setSaveAsOffice(!checked);
                        }}
                        color='#28899B'
                    />
                    <View style={{ paddingTop: 5 }}>
                        <Text style={{ fontSize: 11, fontFamily: 'openSans_regular' }}>Save this as my office Address</Text>
                        <Text style={{ fontSize: 7, fontFamily: 'openSans_regular' }}>If you have only one office,with the same address</Text>
                    </View>
                </View>

                <TouchableOpacity style={[styles.submitBtn, { width: '55%', marginTop: 10, marginBottom: 50 }]} 
                    onPress={submitStep2}>
                    <Text style={[styles.btnText, { color: 'white' }]}>Save Additional Info</Text>
                </TouchableOpacity>


            </View>



        </ScrollView>
    )
}