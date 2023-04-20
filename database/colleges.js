const colleges = [
    {
        name: 'IIT Kharagpur',
        location: 'Kharagpur, West Bengal',
        link: 'http://www.iitkgp.ac.in/',
        description: '',
        logoUrl: '',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074955/eventhive/iit/Kharagpur_peqbqy.jpg'
    },
    {
        name: 'IIT Bombay',
        location: 'Mumbai, Maharashtra',
        link: 'https://www.iitb.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074952/eventhive/iit/Bombay_blixms.jpg'
    },
    {
        name: 'IIT Madras ',
        location: 'Chennai, Tamil Nadu',
        link: 'https://www.iitm.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074954/eventhive/iit/Madras_agy2ys.png'
    },
    {
        name: 'IIT Kanpur',
        location: 'Kanpur, Uttar Pradesh',
        link: 'https://www.iitk.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074954/eventhive/iit/Kanpur_i1ggsm.jpg'
    },
    {
        name: 'IIT Delhi',
        location: 'New Delhi ',
        link: 'https://home.iitd.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074952/eventhive/iit/Delhi_evf9ev.jpg'
    },
    {
        name: 'IIT Guwahati',
        location: 'Guwahati, Assam',
        link: 'https://www.iitg.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074953/eventhive/iit/Guwahati_xpiemx.jpg'
    },
    {
        name: 'IIT Roorkee',
        location: 'Roorkee, Uttarakhand',
        link: 'https://www.iitr.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074956/eventhive/iit/Roorkee_rzfmsl.jpg'
    },
    {
        name: 'IIT Ropar',
        location: 'Rupnagar, Punjab',
        link: 'https://www.iitrpr.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074956/eventhive/iit/Ropar_opdbt4.png'
    },
    {
        name: 'Manipal  University Jaipur',
        location: 'Jaipur, Rajasthan',
        link: 'https://manipal.edu/mu.html',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679160574/eventhive/university/MUJ_aided5.jpg'
    },
    {
        name: 'IIT Bhubaneswar',
        location: 'Bhubaneswar, Odisha',
        link: 'https://www.iitbbs.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074952/eventhive/iit/Bhubaneswar_pw6tcq.png'
    },
    {
        name: 'IIT Gandhinagar',
        location: 'Gandhinagar, Gujarat',
        link: 'https://iitgn.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074953/eventhive/iit/Gandhinagar_gpvm4t.jpg'
    },
    {
        name: 'IIT Hyderabad',
        location: 'Hyderabad, Telangana',
        link: 'https://iith.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074955/eventhive/iit/Hyderabad_r1zxj7.png'
    },
    {
        name: 'IIT Jodhpur',
        location: 'Jodhpur, Rajasthan',
        link: 'https://www.iitj.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074954/eventhive/iit/Jodhpur_ruy7vd.png'
    },
    {
        name: 'IIT Patna',
        location: 'Patna, Bihar',
        link: 'https://www.iitp.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074955/eventhive/iit/Patna_gbcvil.png'
    },
    {
        name: 'IIT Indore',
        location: 'Indore, Madhya Pradesh',
        link: 'https://www.iiti.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074953/eventhive/iit/Indore_kevleq.png'
    },
    {
        name: 'IIT Mandi',
        location: 'Mandi, Himachal Pradesh',
        link: 'https://www.iitmandi.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074956/eventhive/iit/Mandi_sfqmgu.png'
    },
    {
        name: 'IIT Varanasi',
        location: 'Varanasi, Uttar Pradesh',
        link: 'https://www.iitbhu.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074958/eventhive/iit/Varanasi_ifc13y.png'
    },
    {
        name: 'IIT Palakkad',
        location: 'Palakkad, Kerala',
        link: 'https://iitpkd.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074956/eventhive/iit/Palakkad_uqj6xr.png'
    },
    {
        name: 'IIT Tirupati',
        location: 'Tirupati, Andhra Pradesh',
        link: 'https://www.iittp.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074957/eventhive/iit/Tirupati_sxt47m.png'
    },
    {
        name: 'IIT (ISM) Dhanbad',
        location: 'Dhanbad, Jharkhand',
        link: 'https://www.iitism.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074953/eventhive/iit/Dhanbad_qemj9v.png'
    },
    {
        name: 'IIT Bhilai',
        location: 'Bhilai, Chhattisgarh',
        link: 'https://www.iitbhilai.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074952/eventhive/iit/Bhilai_abgbxf.png'
    },
    {
        name: 'IIT Dharwad',
        location: ' Dharwad, Karnataka',
        link: 'https://www.iitdh.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074952/eventhive/iit/Dharwad_lmm9ay.png'
    },
    {
        name: 'IIT Jammu',
        location: 'Jammu, Jammu and Kashmir',
        link: 'https://www.iitjammu.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074953/eventhive/iit/Jammu_yfa6hh.png'
    },
    {
        name: 'IIT Goa',
        location: 'Goa',
        link: 'https://iitgoa.ac.in/',
        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074954/eventhive/iit/Goa_gl13jt.png'
    }
]