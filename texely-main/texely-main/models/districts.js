const mongoose = require('mongoose');
const schema = mongoose.Schema;
const mongoosePaginate = require('mongoose-paginate');
const DocumentSchema = schema({
    districts: [{
        type: String
    }],
    stateName: {
        type: String
    },
    status: {
        type: String,
        enum: ["ACTIVE", "BLOCKED", "DELETE"],
        default: "ACTIVE"
    }
}, { timestamps: true })
DocumentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("districts", DocumentSchema);
mongoose.model("districts", DocumentSchema).find({}, (err, result) => {
    if (err) {
        console.log("Default State error", err);
    }
    else if (result.length != 0) {
        console.log("Default State content");
    }
    else {
        let obj1 = {
            "stateName": "Andaman and Nicobar Islands",
            "districts": [
                "North and Middle Andaman",
                "South Andaman",
                "Nicobar",
            ]
        }
        let obj2 = {
            "stateName": "Andhra Pradesh",
            "districts": [
                "Anantapur",
                "Chittoor",
                "East Godavari",
                "Guntur",
                "Krishna",
                "Kurnool",
                "Nellore",
                "Prakasam",
                "Srikakulam",
                "Visakhapatnam",
                "Vizianagaram",
                "West Godavari",
                "YSR Kadapa"
            ]
        }
        let obj3 = {
            "stateName": "Arunachal Pradesh",
            "districts": [
                "Tawang",
                "West Kameng",
                "East Kameng",
                "Papum Pare",
                "Kurung Kumey",
                "Kra Daadi",
                "Lower Subansiri",
                "Upper Subansiri",
                "West Siang",
                "East Siang",
                "Siang",
                "Upper Siang",
                "Lower Siang",
                "Lower Dibang Valley",
                "Dibang Valley",
                "Anjaw",
                "Lohit",
                "Namsai",
                "Changlang",
                "Tirap",
                "Longding"
            ]
        }
        let obj4 = {
            "stateName": "Assam",
            "districts": [
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
                "Goalpara",
                "Golaghat",
                "Hailakandi",
                "Hojai",
                "Jorhat",
                "Kamrup Metropolitan",
                "Kamrup",
                "Karbi Anglong",
                "Karimganj",
                "Kokrajhar",
                "Lakhimpur",
                "Majuli",
                "Morigaon",
                "Nagaon",
                "Nalbari",
                "Dima Hasao",
                "Sivasagar",
                "Sonitpur",
                "South Salmara-Mankachar",
                "Tinsukia",
                "Udalguri",
                "West Karbi Anglong"
            ]
        }
        let obj5 = {
            "stateName": "Bihar",
            "districts": [
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
                "West Champaran"
            ]
        }
        let obj6 = {
            "stateName": "Chandigarh",
            "districts": [
                "Chandigarh"
            ]
        }
        let obj7 = {
            "stateName": "Chhattisgarh",
            "districts": [
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
                "Surajpur  ",
                "Surguja"
            ]
        }
        let obj8 = {
            "stateName": "Dadra and Nagar Haveli",
            "districts": [
                "Dadra & Nagar Haveli"
            ]
        }
        let obj9 = {
            "stateName": "Daman and Diu",
            "districts": [
                "Daman",
                "Diu"
            ]
        }
        let obj10 = {
            "stateName": "Delhi",
            "districts": [
                "Central Delhi",
                "East Delhi",
                "New Delhi",
                "North Delhi",
                "North East  Delhi",
                "North West  Delhi",
                "Shahdara",
                "South Delhi",
                "South East Delhi",
                "South West  Delhi",
                "West Delhi"
            ]
        }
        let obj11 = {
            "stateName": "Goa",
            "districts": [
                "North Goa",
                "South Goa"
            ]
        }
        let obj12 = {
            "stateName": "Gujarat",
            "districts": [
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
                "Valsad"
            ]
        }
        let obj13 = {
            "stateName": "Haryana",
            "districts": [
                "Ambala",
                "Bhiwani",
                "Charkhi Dadri",
                "Faridabad",
                "Fatehabad",
                "Gurgaon",
                "Hisar",
                "Jhajjar",
                "Jind",
                "Kaithal",
                "Karnal",
                "Kurukshetra",
                "Mahendragarh",
                "Mewat",
                "Palwal",
                "Panchkula",
                "Panipat",
                "Rewari",
                "Rohtak",
                "Sirsa",
                "Sonipat",
                "Yamunanagar"
            ]
        }
        let obj14 = {
            "stateName": "Himachal Pradesh",
            "districts": [
                "Bilaspur",
                "Chamba",
                "Hamirpur",
                "Kangra",
                "Kinnaur",
                "Kullu",
                "Lahaul &amp; Spiti",
                "Mandi",
                "Shimla",
                "Sirmaur (Sirmour)",
                "Solan",
                "Una"
            ]
        }
        let obj15 = {
            "stateName": "Jammu and Kashmir",
            "districts": [
                "Anantnag",
                "Bandipore",
                "Baramulla",
                "Budgam",
                "Doda",
                "Ganderbal",
                "Jammu",
                "Kargil",
                "Kathua",
                "Kishtwar",
                "Kulgam",
                "Kupwara",
                "Leh",
                "Poonch",
                "Pulwama",
                "Rajouri",
                "Ramban",
                "Reasi",
                "Samba",
                "Shopian",
                "Srinagar",
                "Udhampur"
            ]
        }
        let obj16 = {
            "stateName": "Jharkhand",
            "districts": [
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
                "West Singhbhum"
            ]
        }
        let obj17 = {
            "stateName": "Karnataka",
            "districts": [
                "Bagalkot",
                "Ballari (Bellary)",
                "Belagavi (Belgaum)",
                "Bengaluru (Bangalore) Rural",
                "Bengaluru (Bangalore) Urban",
                "Bidar",
                "Chamarajanagar",
                "Chikballapur",
                "Chikkamagaluru (Chikmagalur)",
                "Chitradurga",
                "Dakshina Kannada",
                "Davangere",
                "Dharwad",
                "Gadag",
                "Hassan",
                "Haveri",
                "Kalaburagi (Gulbarga)",
                "Kodagu",
                "Kolar",
                "Koppal",
                "Mandya",
                "Mysuru (Mysore)",
                "Raichur",
                "Ramanagara",
                "Shivamogga (Shimoga)",
                "Tumakuru (Tumkur)",
                "Udupi",
                "Uttara Kannada (Karwar)",
                "Vijayapura (Bijapur)",
                "Yadgir"
            ]
        }
        let obj18 = {
            "stateName": "Kerala",
            "districts": [
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
                "Wayanad"
            ]
        }
        let obj19 = {
            "stateName": "Lakshadweep",
            "districts": [
                "Agatti",
                "Amini",
                "Androth",
                "Bithra",
                "Chethlath",
                "Kavaratti",
                "Kadmath",
                "Kalpeni",
                "Kilthan",
                "Minicoy"
            ]
        }
        let obj20 = {
            "stateName": "Madhya Pradesh",
            "districts": [
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
                "Vidisha"
            ]
        }
        let obj21 = {
            "stateName": "Maharashtra",
            "districts": [
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
                "Mumbai City",
                "Mumbai Suburban",
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
                "Yavatmal"
            ]
        }
        let obj22 = {
            "stateName": "Manipur",
            "districts": [
                "Bishnupur",
                "Chandel",
                "Churachandpur",
                "Imphal East",
                "Imphal West",
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
                "Ukhrul"
            ]
        }
        let obj23 = {
            "stateName": "Meghalaya",
            "districts": [
                "East Garo Hills",
                "East Jaintia Hills",
                "East Khasi Hills",
                "North Garo Hills",
                "Ri Bhoi",
                "South Garo Hills",
                "South West Garo Hills ",
                "South West Khasi Hills",
                "West Garo Hills",
                "West Jaintia Hills",
                "West Khasi Hills"
            ]
        }
        let obj24 = {
            "stateName": "Mizoram",
            "districts": [
                "Aizawl",
                "Champhai",
                "Kolasib",
                "Lawngtlai",
                "Lunglei",
                "Mamit",
                "Saiha",
                "Serchhip"
            ]
        }
        let obj25 = {
            "stateName": "Nagaland",
            "districts": [
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
                "Zunheboto"
            ]
        }
        let obj26 = {
            "stateName": "Odisha",
            "districts": [
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
                "Kendujhar (Keonjhar)",
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
                "Sundargarh"
            ]
        }
        let obj27 = {
            "stateName": "Puducherry",
            "districts": [
                "Karaikal",
                "Mahe",
                "Pondicherry",
                "Yanam"
            ]
        }
        let obj28 = {
            "stateName": "Punjab",
            "districts": [
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
                "Nawanshahr (Shahid Bhagat Singh Nagar)",
                "Pathankot",
                "Patiala",
                "Rupnagar",
                "Sahibzada Ajit Singh Nagar (Mohali)",
                "Sangrur",
                "Tarn Taran"
            ]
        }
        let obj29 = {
            "stateName": "Rajasthan",
            "districts": [
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
                "Udaipur"
            ]
        }
        let obj30 = {
            "stateName": "Sikkim",
            "districts": [
                "East Sikkim",
                "North Sikkim",
                "South Sikkim",
                "West Sikkim"
            ]
        }
        let obj31 = {
            "stateName": "Tamil Nadu",
            "districts": [
                "Ariyalur",
                "Chennai",
                "Coimbatore",
                "Cuddalore",
                "Dharmapuri",
                "Dindigul",
                "Erode",
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
                "Salem",
                "Sivaganga",
                "Thanjavur",
                "Theni",
                "Thoothukudi (Tuticorin)",
                "Tiruchirappalli",
                "Tirunelveli",
                "Tiruppur",
                "Tiruvallur",
                "Tiruvannamalai",
                "Tiruvarur",
                "Vellore",
                "Viluppuram",
                "Virudhunagar"
            ]
        }
        let obj32 = {
            "stateName": "Telangana",
            "districts": [
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
                "Yadadri Bhuvanagiri"
            ]
        }
        let obj33 = {
            "stateName": "Tripura",
            "districts": [
                "Dhalai",
                "Gomati",
                "Khowai",
                "North Tripura",
                "Sepahijala",
                "South Tripura",
                "Unakoti",
                "West Tripura"
            ]
        }
        let obj34 = {
            "stateName": "Uttar Pradesh",
            "districts": [
                "Agra",
                "Aligarh",
                "Allahabad",
                "Ambedkar Nagar",
                "Amethi (Chatrapati Sahuji Mahraj Nagar)",
                "Amroha (J.P. Nagar)",
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
                "Hapur (Panchsheel Nagar)",
                "Hardoi",
                "Hathras",
                "Jalaun",
                "Jaunpur",
                "Jhansi",
                "Kannauj",
                "Kanpur Dehat",
                "Kanpur Nagar",
                "Kanshiram Nagar (Kasganj)",
                "Kaushambi",
                "Kushinagar (Padrauna)",
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
                "Varanasi"
            ]
        }
        let obj35 = {
            "stateName": "Uttarakhand",
            "districts": [
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
                "Uttarkashi"
            ]
        }
        let obj36 = {
            "stateName": "West Bengal",
            "districts": [
                "Alipurduar",
                "Bankura",
                "Birbhum",
                "Burdwan (Bardhaman)",
                "Cooch Behar",
                "Dakshin Dinajpur (South Dinajpur)",
                "Darjeeling",
                "Hooghly",
                "Howrah",
                "Jalpaiguri",
                "Kalimpong",
                "Kolkata",
                "Malda",
                "Murshidabad",
                "Nadia",
                "North 24 Parganas",
                "Paschim Medinipur (West Medinipur)",
                "Purba Medinipur (East Medinipur)",
                "Purulia",
                "South 24 Parganas",
                "Uttar Dinajpur (North Dinajpur)"
            ]
        }
        mongoose.model("districts", DocumentSchema).create(obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14, obj15, obj16, obj17, obj18, obj19, obj20, obj21, obj22, obj23, obj24, obj25, obj26, obj27, obj28, obj29, obj30, obj31, obj32, obj33, obj34, obj35, obj36, (staticErr, staticResult) => {
            if (staticErr) {
                console.log("content state error.", staticErr);
            }
            else {
                console.log("India state created.", staticResult)
            }
        })
    }
})

