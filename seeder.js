import mongoose from 'mongoose';

import College from './models/college.js';
import Event from './models/event.js';
import Organizer from './models/organizer.js';
import Participant from './models/participant.js';
import Resource from './models/resource.js';
import Category from './models/category.js';

import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async () => {
    console.log('Database connected');

    // Create colleges
    const colleges = await College.insertMany(
        [
            {
                name: 'IIT Kharagpur',
                location: 'Kharagpur, West Bengal',
                link: 'http://www.iitkgp.ac.in/',
                description: "IIT Kharagpur is the oldest and largest Indian Institute of Technology (IIT), established in 1951, and located in Kharagpur, West Bengal. The campus spans over 2,100 acres and is one of the most sprawling and picturesque educational campuses in the country. The institute offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, science, management, and humanities. IIT Kharagpur is known for its state-of-the-art research facilities, including the Advanced VLSI Design Laboratory, Biotechnology Center, Center for Artificial Intelligence, and Center for Industrial Consultancy and Sponsored Research. The institute has 20 academic departments and several interdisciplinary centers, where research is conducted in areas like materials science, robotics, energy, nanotechnology, and biotechnology. The campus also has a range of facilities for students, including libraries, hostels, a sports complex, auditoriums, and more. IIT Kharagpur is known for its active student community, with numerous student clubs and societies catering to a wide range of interests, such as technology, entrepreneurship, and gaming. The institute has a strong alumni network, with many of its alumni holding prominent positions in industry, academia, and public life. IIT Kharagpur is consistently ranked among the top engineering colleges in India and has also been ranked among the top 500 universities in the world.",
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213150/eventhive/logo/iit/IIT_Kharagpur_Logo.svg_xsnpo9.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074955/eventhive/iit/Kharagpur_peqbqy.jpg'
            },
            {
                name: 'IIT Bombay',
                location: 'Mumbai, Maharashtra',
                link: 'https://www.iitb.ac.in/',
                description: 'IIT Bombay is one of the most prestigious engineering institutions in India, located in Powai, Mumbai, Maharashtra. Established in 1958, it has since grown to become a premier center for education and research in the field of engineering and technology. The institute offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, science, management, and humanities. IIT Bombay is known for its state-of-the-art research facilities, including the Tata Center for Technology and Design, the National Center for Aerospace Innovation and Research, and the Center for Research in Nano-Technology. The institute has a strong focus on innovation and entrepreneurship, with several initiatives like the Society for Innovation and Entrepreneurship and the Entrepreneurship Cell promoting entrepreneurship among students. The campus is spread across 550 acres and houses various facilities like hostels, libraries, sports complexes, auditoriums, and more. IIT Bombay is known for its active student community, with several student clubs and societies catering to a wide range of interests. The institute has a large and diverse alumni network, with many of its alumni holding leadership positions in various fields. IIT Bombay consistently ranks among the top engineering colleges in India and has also been ranked among the top 200 universities in the world.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213150/eventhive/logo/iit/Indian_Institute_of_Technology_Bombay_Logo.svg_mncyca.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074952/eventhive/iit/Bombay_blixms.jpg'
            },
            {
                name: 'IIT Madras ',
                location: 'Chennai, Tamil Nadu',
                link: 'https://www.iitm.ac.in/',
                description: 'IIT Madras is one of the top engineering institutes in India, located in Chennai, Tamil Nadu. Established in 1959, the institute offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, science, management, and humanities. IIT Madras has been ranked as the top engineering institute in India by the National Institutional Ranking Framework (NIRF) several times. The campus is spread across 2.5 square kilometers and boasts of several state-of-the-art research facilities like the Center for Industrial Consultancy and Sponsored Research, the National Center for Combustion Research and Development, and the Center for Non-Destructive Evaluation. The institute also has several interdisciplinary centers where research is conducted in areas like energy, environment, healthcare, and more. IIT Madras has a strong focus on innovation and entrepreneurship and has several initiatives like the Entrepreneurship Cell and the Robert Bosch Center for Data Science and Artificial Intelligence promoting innovation among students. The campus has several facilities like hostels, libraries, sports complexes, auditoriums, and more. IIT Madras has a vibrant student community, with several student clubs and societies catering to a wide range of interests. The institute has a large alumni network, with many of its alumni holding prominent positions in industry, academia, and public life.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213151/eventhive/logo/iit/IIT_Madras_Logo.svg_fewa7j.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074954/eventhive/iit/Madras_agy2ys.png'
            },
            {
                name: 'IIT Kanpur',
                location: 'Kanpur, Uttar Pradesh',
                link: 'https://www.iitk.ac.in/',
                description: 'IIT Kanpur is one of the leading technical institutes in India, located in Kanpur, Uttar Pradesh. Established in 1959, the institute offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, science, management, and humanities. IIT Kanpur has been ranked among the top engineering colleges in India and is known for its academic rigor and research excellence. The institute has a sprawling 1055-acre campus and boasts of several state-of-the-art research facilities like the Center for Mechatronics, the Center for Environmental Science and Engineering, and the Center for Lasers and Photonics. IIT Kanpur has a strong focus on interdisciplinary research and has several interdisciplinary centers like the National Wind Tunnel Facility, the National Center for Flexible Electronics, and the Center for Excellence in Urban Transport promoting research in diverse areas. IIT Kanpur has a rich legacy of innovation and entrepreneurship, with several initiatives like the SIDBI Innovation and Incubation Center and the Technology Business Incubator promoting innovation and entrepreneurship among students. The campus has several facilities like hostels, libraries, sports complexes, auditoriums, and more. IIT Kanpur has a vibrant student community, with several student clubs and societies catering to a wide range of interests. The institute has a large and diverse alumni network, with many of its alumni holding leadership positions in various fields.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213150/eventhive/logo/iit/IIT_Kanpur_Logo.svg_ddadzb.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074954/eventhive/iit/Kanpur_i1ggsm.jpg'
            },
            {
                name: 'IIT Delhi',
                location: 'New Delhi ',
                link: 'https://home.iitd.ac.in/',
                description: 'IIT Delhi is a premier engineering institute located in New Delhi, India. Established in 1961, the institute offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, science, management, and humanities. IIT Delhi has been ranked among the top engineering colleges in India and is known for its academic rigor and research excellence. The institute has a sprawling 320-acre campus and boasts of several state-of-the-art research facilities like the Bharti School of Telecommunication Technology and Management, the Center for Atmospheric Sciences, and the Center for Polymer Science and Engineering. IIT Delhi has a strong focus on interdisciplinary research and has several interdisciplinary centers like the Center for Automotive Research and Tribology, the Center for Rural Development and Technology, and the Center for Excellence in Nanoelectronics promoting research in diverse areas. IIT Delhi has a vibrant entrepreneurial ecosystem, with several initiatives like the Foundation for Innovation and Technology Transfer and the Incubation Center promoting innovation and entrepreneurship among students. The campus has several facilities like hostels, libraries, sports complexes, auditoriums, and more. IIT Delhi has a diverse student community, with students from various parts of India and abroad. The institute has a strong alumni network, with many of its alumni holding leadership positions in various fields.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681846227/eventhive/logo/iit/Delhi_cgmjnk.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074952/eventhive/iit/Delhi_evf9ev.jpg'
            },
            {
                name: 'IIT Guwahati',
                location: 'Guwahati, Assam',
                link: 'https://www.iitg.ac.in/',
                description: 'IIT Guwahati is a leading technical institute located in Guwahati, Assam, India. Established in 1994, the institute offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, science, management, and humanities. IIT Guwahati has been ranked among the top engineering colleges in India and is known for its academic excellence and research facilities. The institute has a beautiful 704-acre campus, surrounded by hills and greenery. It has several state-of-the-art research facilities, including the Center for Nanotechnology, the Center for Energy, and the Center for the Environment. IIT Guwahati has a strong focus on interdisciplinary research, with several research centers like the Center for Rural Technology, the Center for Linguistic Science and Technology, and the Center for Humanitarian Technology promoting research in diverse areas. The institute also has a strong industry-academia collaboration, with several collaborations with leading companies in various sectors. IIT Guwahati has a vibrant student community, with students from various parts of India and abroad. The campus has several facilities like hostels, libraries, sports complexes, auditoriums, and more. The institute has a strong alumni network, with many of its alumni holding leadership positions in various fields.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213151/eventhive/logo/iit/IIT_Guwahati_Logo.svg_ohdetr.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074953/eventhive/iit/Guwahati_xpiemx.jpg'
            },
            {
                name: 'IIT Roorkee',
                location: 'Roorkee, Uttarakhand',
                link: 'https://www.iitr.ac.in/',
                description: 'IIT Roorkee is one of the oldest technical institutes in India, located in Roorkee, Uttarakhand. Established in 1847 as the Thomason College of Civil Engineering, it was later converted to an IIT in 2001. The institute offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, science, management, and humanities. IIT Roorkee has been ranked among the top engineering colleges in India and is known for its academic excellence and research facilities. The institute has a sprawling 365-acre campus, with several heritage buildings and modern infrastructure. It has several state-of-the-art research facilities, including the Advanced Center for Material Science, the Center for Transportation Systems, and the Center for Disaster Mitigation and Management. IIT Roorkee has a strong focus on research and innovation, with several research centers like the Center for Nanotechnology, the Center for Sustainable Development, and the Center for Alternate Hydro Energy promoting research in diverse areas. The institute also has a strong industry-academia collaboration, with several collaborations with leading companies in various sectors. IIT Roorkee has a vibrant student community, with students from various parts of India and abroad. The campus has several facilities like hostels, libraries, sports complexes, auditoriums, and more. The institute has a strong alumni network, with many of its alumni holding leadership positions in various fields.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213151/eventhive/logo/iit/Indian_Institute_of_Technology_Roorkee_logo_ew3fe0.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074956/eventhive/iit/Roorkee_rzfmsl.jpg'
            },
            {
                name: 'IIT Ropar',
                location: 'Rupnagar, Punjab',
                link: 'https://www.iitrpr.ac.in/',
                description: 'IIT Ropar is a leading technical institute located in Rupnagar, Punjab, India. Established in 2008, the institute offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, science, and humanities. IIT Ropar has been ranked among the top engineering colleges in India and is known for its academic excellence and research facilities. The institute has a beautiful 500-acre campus, with modern infrastructure and state-of-the-art research facilities. It has several research centers like the Center for Biomedical Engineering, the Center for Advanced Manufacturing, and the Center for Artificial Intelligence and Data Science, promoting research in diverse areas. IIT Ropar has a strong industry-academia collaboration, with collaborations with leading companies in various sectors. The institute also has a strong focus on interdisciplinary research, with several research centers promoting research in diverse areas. IIT Ropar has a vibrant student community, with students from various parts of India and abroad. The campus has several facilities like hostels, libraries, sports complexes, auditoriums, and more. The institute has a strong alumni network, with many of its alumni holding leadership positions in various fields.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213150/eventhive/logo/iit/Indian_Institute_of_Technology_Ropar_logo_k8tyt2.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074956/eventhive/iit/Ropar_opdbt4.png'
            },
            {
                name: 'IIT Bhubaneswar',
                location: 'Bhubaneswar, Odisha',
                link: 'https://www.iitbbs.ac.in/',
                description: 'IIT Bhubaneswar is a leading technical institute located in Bhubaneswar, Odisha, India. Established in 2008, the institute offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, science, and humanities. IIT Bhubaneswar has been ranked among the top engineering colleges in India and is known for its academic excellence and research facilities. The institute has a sprawling 936-acre campus, with modern infrastructure and state-of-the-art research facilities. It has several research centers like the Center for Nano Science and Technology, the Center for Climate Sciences, and the Center for Materials Sciences and Engineering, promoting research in diverse areas. IIT Bhubaneswar has a strong industry-academia collaboration, with collaborations with leading companies in various sectors. The institute also has a strong focus on interdisciplinary research, with several research centers promoting research in diverse areas. IIT Bhubaneswar has a vibrant student community, with students from various parts of India and abroad. The campus has several facilities like hostels, libraries, sports complexes, auditoriums, and more. The institute has a strong alumni network, with many of its alumni holding leadership positions in various fields.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681846228/eventhive/logo/iit/Bhubaneswar_tc8oa3.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074952/eventhive/iit/Bhubaneswar_pw6tcq.png'
            },
            {
                name: 'IIT Gandhinagar',
                location: 'Gandhinagar, Gujarat',
                link: 'https://iitgn.ac.in/',
                description: 'IIT Gandhinagar is a premier technical institute located in Gandhinagar, Gujarat, India. Established in 2008, the institute offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, science, and humanities. IIT Gandhinagar has been ranked among the top engineering colleges in India and is known for its academic excellence and research facilities. The institute has a picturesque 400-acre campus, with modern infrastructure and state-of-the-art research facilities. It has several research centers like the Center for Sustainable Development, the Center for Cognitive Science, and the Center for Archaeological Sciences, promoting research in diverse areas. IIT Gandhinagar has a strong industry-academia collaboration, with collaborations with leading companies in various sectors. The institute also has a strong focus on interdisciplinary research, with several research centers promoting research in diverse areas. IIT Gandhinagar has a vibrant student community, with students from various parts of India and abroad. The campus has several facilities like hostels, libraries, sports complexes, auditoriums, and more. The institute has a strong alumni network, with many of its alumni holding leadership positions in various fields.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213150/eventhive/logo/iit/IIT_Gandhinagar_Logo.svg_lo1hix.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074953/eventhive/iit/Gandhinagar_gpvm4t.jpg'
            },
            {
                name: 'IIT Hyderabad',
                location: 'Hyderabad, Telangana',
                link: 'https://iith.ac.in/',
                description: 'IIT Hyderabad is a leading technical institute located in Kandi, Sangareddy district, Telangana, India. Established in 2008, the institute offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, science, and humanities. IIT Hyderabad has been ranked among the top engineering colleges in India and is known for its academic excellence and research facilities. The institute has a sprawling 576-acre campus, with modern infrastructure and state-of-the-art research facilities. It has several research centers like the Center for Healthcare Entrepreneurship, the Center for Earth and Space Sciences, and the Center for Computational Engineering and Networking, promoting research in diverse areas. IIT Hyderabad has a strong industry-academia collaboration, with collaborations with leading companies in various sectors. The institute also has a strong focus on interdisciplinary research, with several research centers promoting research in diverse areas. IIT Hyderabad has a vibrant student community, with students from various parts of India and abroad. The campus has several facilities like hostels, libraries, sports complexes, auditoriums, and more. The institute has a strong alumni network, with many of its alumni holding leadership positions in various fields.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681846228/eventhive/logo/iit/Hyderabad_qp9xgb.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074955/eventhive/iit/Hyderabad_r1zxj7.png'
            },
            {
                name: 'IIT Jodhpur',
                location: 'Jodhpur, Rajasthan',
                link: 'https://www.iitj.ac.in/',
                description: 'IIT Jodhpur is a premier technical institute located in Jodhpur, Rajasthan, India. Established in 2008, the institute offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, science, and humanities. IIT Jodhpur has been ranked among the top engineering colleges in India and is known for its academic excellence and research facilities. The institute has a 900-acre campus, with modern infrastructure and state-of-the-art research facilities. It has several research centers like the Center for Energy, the Center for Information and Communication Technology, and the Center for Humanities and Social Sciences, promoting research in diverse areas. IIT Jodhpur has a strong industry-academia collaboration, with collaborations with leading companies in various sectors. The institute also has a strong focus on interdisciplinary research, with several research centers promoting research in diverse areas. IIT Jodhpur has a vibrant student community, with students from various parts of India and abroad. The campus has several facilities like hostels, libraries, sports complexes, auditoriums, and more. The institute has a strong alumni network, with many of its alumni holding leadership positions in various fields.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681846228/eventhive/logo/iit/Jodhpur_doqo7n.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074954/eventhive/iit/Jodhpur_ruy7vd.png'
            },
            {
                name: 'IIT Patna',
                location: 'Patna, Bihar',
                link: 'https://www.iitp.ac.in/',
                description: 'IIT Patna is a premier technical institute located in Bihta, Patna district, Bihar, India. Established in 2008, the institute offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, science, and humanities. IIT Patna has been ranked among the top engineering colleges in India and is known for its academic excellence and research facilities. The institute has a sprawling 500-acre campus, with modern infrastructure and state-of-the-art research facilities. It has several research centers like the Center for Biosciences and Bioengineering, the Center for Energy and Environment, and the Center for Materials Science and Engineering, promoting research in diverse areas. IIT Patna has a strong industry-academia collaboration, with collaborations with leading companies in various sectors. The institute also has a strong focus on interdisciplinary research, with several research centers promoting research in diverse areas. IIT Patna has a vibrant student community, with students from various parts of India and abroad. The campus has several facilities like hostels, libraries, sports complexes, auditoriums, and more. The institute has a strong alumni network, with many of its alumni holding leadership positions in various fields.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213151/eventhive/logo/iit/Indian_Institute_of_Technology__Patna.svg_ht9w84.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074955/eventhive/iit/Patna_gbcvil.png'
            },
            {
                name: 'IIT Indore',
                location: 'Indore, Madhya Pradesh',
                link: 'https://www.iiti.ac.in/',
                description: 'IIT Indore is a premier technical institute located in Simrol, Indore, Madhya Pradesh, India. Established in 2009, the institute offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, science, and humanities. IIT Indore has been ranked among the top engineering colleges in India and is known for its academic excellence and research facilities. The institute has a sprawling 525-acre campus, with modern infrastructure and state-of-the-art research facilities. It has several research centers like the Center for Astronomy, Astrophysics, and Space Engineering, the Center for Biosciences and Biomedical Engineering, and the Center for Complex Systems, promoting research in diverse areas. IIT Indore has a strong industry-academia collaboration, with collaborations with leading companies in various sectors. The institute also has a strong focus on interdisciplinary research, with several research centers promoting research in diverse areas. IIT Indore has a vibrant student community, with students from various parts of India and abroad. The campus has several facilities like hostels, libraries, sports complexes, auditoriums, and more. The institute has a strong alumni network, with many of its alumni holding leadership positions in various fields.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681846228/eventhive/logo/iit/Indore_vc3wjj.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074953/eventhive/iit/Indore_kevleq.png'
            },
            {
                name: 'IIT Mandi',
                location: 'Mandi, Himachal Pradesh',
                link: 'https://www.iitmandi.ac.in/',
                description: 'IIT Mandi is a premier technical institute located in Kamand, Mandi district, Himachal Pradesh, India. Established in 2009, the institute offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, science, and humanities. IIT Mandi has been ranked among the top engineering colleges in India and is known for its academic excellence and research facilities. The institute has a sprawling 538-acre campus, with modern infrastructure and state-of-the-art research facilities. It has several research centers like the Center for Engineering Design and Advanced Manufacturing, the Center for Energy Sciences, and the Center for Materials and Energy Engineering, promoting research in diverse areas. IIT Mandi has a strong industry-academia collaboration, with collaborations with leading companies in various sectors. The institute also has a strong focus on interdisciplinary research, with several research centers promoting research in diverse areas. IIT Mandi has a vibrant student community, with students from various parts of India and abroad. The campus has several facilities like hostels, libraries, sports complexes, auditoriums, and more. The institute has a strong alumni network, with many of its alumni holding leadership positions in various fields.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681846228/eventhive/logo/iit/Mandi_xizx0i.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074956/eventhive/iit/Mandi_sfqmgu.png'
            },
            {
                name: 'IIT Varanasi',
                location: 'Varanasi, Uttar Pradesh',
                link: 'https://www.iitbhu.ac.in/',
                description: 'IIT Varanasi, also known as IIT BHU (Banaras Hindu University), is a premier technical institute located in Varanasi, Uttar Pradesh, India. It was established in 1919 and became an IIT in 2012. The institute offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, science, and humanities. IIT Varanasi has been ranked among the top engineering colleges in India and is known for its academic excellence and research facilities. The institute has a sprawling 1,300-acre campus, with modern infrastructure and state-of-the-art research facilities. It has several research centers like the Center of Excellence for Energy and Environmental Studies, the Malaviya Centre for Innovation, Incubation, and Entrepreneurship, and the Centre for Brain Research, promoting research in diverse areas. IIT Varanasi has a strong industry-academia collaboration, with collaborations with leading companies in various sectors. The institute also has a strong focus on interdisciplinary research, with several research centers promoting research in diverse areas. IIT Varanasi has a vibrant student community, with students from various parts of India and abroad. The campus has several facilities like hostels, libraries, sports complexes, auditoriums, and more. The institute has a strong alumni network, with many of its alumni holding leadership positions in various fields.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213150/eventhive/logo/iit/Official_Logo_of_IIT_BHU_Varanasi_India_2013_ofcl3a.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074958/eventhive/iit/Varanasi_ifc13y.png'
            },
            {
                name: 'IIT Palakkad',
                location: 'Palakkad, Kerala',
                link: 'https://iitpkd.ac.in/',
                description: 'IIT Palakkad is a premier technical institute located in Palakkad, Kerala, India. Established in 2015, the institute offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, science, and humanities. IIT Palakkad has been ranked among the top engineering colleges in India and is known for its academic excellence and research facilities. The institute has a 500-acre campus, with modern infrastructure and state-of-the-art research facilities. It has several research centers like the Center for Computational Engineering and Networking and the Center for Material Sciences, promoting research in diverse areas. IIT Palakkad has a strong industry-academia collaboration, with collaborations with leading companies in various sectors. The institute also has a strong focus on interdisciplinary research, with several research centers promoting research in diverse areas. IIT Palakkad has a vibrant student community, with students from various parts of India and abroad. The campus has several facilities like hostels, libraries, sports complexes, auditoriums, and more. The institute has a strong alumni network, with many of its alumni holding leadership positions in various fields.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681846228/eventhive/logo/iit/Palakkad_gv4nu1.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074956/eventhive/iit/Palakkad_uqj6xr.png'
            },
            {
                name: 'IIT Tirupati',
                location: 'Tirupati, Andhra Pradesh',
                link: 'https://www.iittp.ac.in/',
                description: 'IIT Tirupati is a premier technical institute located in Tirupati, Andhra Pradesh, India. Established in 2015, the institute offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, science, and humanities. IIT Tirupati has been ranked among the top engineering colleges in India and is known for its academic excellence and research facilities. The institute has a 543-acre campus, with modern infrastructure and state-of-the-art research facilities. It has several research centers like the Center for Computational Engineering and Networking and the Center for Sustainable Technologies, promoting research in diverse areas. IIT Tirupati has a strong industry-academia collaboration, with collaborations with leading companies in various sectors. The institute also has a strong focus on interdisciplinary research, with several research centers promoting research in diverse areas. IIT Tirupati has a vibrant student community, with students from various parts of India and abroad. The campus has several facilities like hostels, libraries, sports complexes, auditoriums, and more. The institute has a strong alumni network, with many of its alumni holding leadership positions in various fields.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213150/eventhive/logo/iit/Indian_Institute_of_Technology_Tirupati_logo_sqqwac.jpg',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074957/eventhive/iit/Tirupati_sxt47m.png'
            },
            {
                name: 'IIT (ISM) Dhanbad',
                location: 'Dhanbad, Jharkhand',
                link: 'https://www.iitism.ac.in/',
                description: 'IIT Dhanbad (formerly known as ISM Dhanbad) is a premier technical institute located in Dhanbad, Jharkhand, India. Established in 1926, the institute offers undergraduate, postgraduate, and doctoral programs in various branches of engineering, science, and humanities. IIT Dhanbad has been ranked among the top engineering colleges in India and is known for its academic excellence and research facilities. The institute has a 448-acre campus, with modern infrastructure and state-of-the-art research facilities. It has several research centers like the Center for Mining Environment and the Center for Disaster Mitigation, promoting research in diverse areas. IIT Dhanbad has a strong industry-academia collaboration, with collaborations with leading companies in various sectors. The institute also has a strong focus on interdisciplinary research, with several research centers promoting research in diverse areas. IIT Dhanbad has a vibrant student community, with students from various parts of India and abroad. The campus has several facilities like hostels, libraries, sports complexes, auditoriums, and more. The institute has a strong alumni network, with many of its alumni holding leadership positions in various fields.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213150/eventhive/logo/iit/Indian_Institute_of_Technology__Indian_School_of_Mines__Dhanbad_Logo_sdzcao.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074953/eventhive/iit/Dhanbad_qemj9v.png'
            },
            {
                name: 'IIT Bhilai',
                location: 'Bhilai, Chhattisgarh',
                link: 'https://www.iitbhilai.ac.in/',
                description: ' IIT Bhilai is a new entrant among the Indian Institutes of Technology, established in 2016 in Bhilai, Chhattisgarh, India. The institute currently offers undergraduate programs in Computer Science and Engineering, Electrical Engineering, and Mechanical Engineering, with plans to expand to other disciplines in the future. IIT Bhilai has a mission to foster high-quality education, cutting-edge research, and innovation, with a focus on developing a strong foundation in science and engineering. The institute aims to be a hub of innovation, promoting interdisciplinary research, and industry collaboration. IIT Bhilai has a modern campus with state-of-the-art facilities, including lecture halls, laboratories, and research centers. The institute also provides a vibrant campus life, with several student clubs and societies, sports facilities, and cultural events. The faculty at IIT Bhilai are highly qualified and experienced, with expertise in various fields, and are committed to providing a rigorous and challenging academic environment. The institute is rapidly gaining a reputation for academic excellence and innovation, and has plans to expand its academic and research programs in the future.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213150/eventhive/logo/iit/IIT_Bhilai_logo_p2dxml.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074952/eventhive/iit/Bhilai_abgbxf.png'
            },
            {
                name: 'IIT Dharwad',
                location: ' Dharwad, Karnataka',
                link: 'https://www.iitdh.ac.in/',
                description: 'IIT Dharwad is one of the new Indian Institutes of Technology, established in 2016 in Dharwad, Karnataka, India. The institute currently offers undergraduate programs in Computer Science and Engineering, Electrical Engineering, and Mechanical Engineering, with plans to expand to other disciplines in the future. IIT Dharwad is committed to providing high-quality education, research, and innovation in science and engineering, and aims to become a world-class institute of higher learning. The institute has a modern campus with state-of-the-art facilities, including lecture halls, laboratories, and research centers. The faculty at IIT Dharwad are highly qualified and experienced, with expertise in various fields, and are dedicated to providing a challenging and stimulating academic environment. The institute is focused on promoting interdisciplinary research, and has collaborations with several national and international research organizations. IIT Dharwad provides a vibrant campus life, with several student clubs and societies, sports facilities, and cultural events. The institute is rapidly gaining a reputation for academic excellence and innovation, and has plans to expand its academic and research programs in the future.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681846228/eventhive/logo/iit/Dharwad_mervro.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680707997/eventhive/photos/iit/Dharwad_nygc4a.png'
            },
            {
                name: 'IIT Jammu',
                location: 'Jammu, Jammu and Kashmir',
                link: 'https://www.iitjammu.ac.in/',
                description: 'IIT Jammu is one of the Indian Institutes of Technology, established in 2016 in Jammu, Jammu and Kashmir, India. The institute currently offers undergraduate programs in Computer Science and Engineering, Electrical Engineering, and Mechanical Engineering, with plans to expand to other disciplines in the future. IIT Jammu is committed to providing high-quality education, research, and innovation in science and engineering, and aims to become a leading institute of higher learning. The institute has a modern campus with state-of-the-art facilities, including lecture halls, laboratories, and research centers. The faculty at IIT Jammu are highly qualified and experienced, with expertise in various fields, and are dedicated to providing a challenging and stimulating academic environment. The institute is focused on promoting interdisciplinary research, and has collaborations with several national and international research organizations. IIT Jammu provides a vibrant campus life, with several student clubs and societies, sports facilities, and cultural events. The institute is rapidly gaining a reputation for academic excellence and innovation, and has plans to expand its academic and research programs in the future.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681846228/eventhive/logo/iit/Jammu_ttdxbi.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074953/eventhive/iit/Jammu_yfa6hh.png'
            },
            {
                name: 'IIT Goa',
                location: 'Goa',
                link: 'https://iitgoa.ac.in/',
                description: 'IIT Goa is one of the newer Indian Institutes of Technology, established in 2016 in Goa, India. The institute currently offers undergraduate programs in Computer Science and Engineering, Electrical Engineering, and Mechanical Engineering, with plans to expand to other disciplines in the future. IIT Goa is committed to providing high-quality education, research, and innovation in science and engineering, and aims to become a world-class institute of higher learning. The institute has a modern campus with state-of-the-art facilities, including lecture halls, laboratories, and research centers. The faculty at IIT Goa are highly qualified and experienced, with expertise in various fields, and are dedicated to providing a challenging and stimulating academic environment. The institute is focused on promoting interdisciplinary research, and has collaborations with several national and international research organizations. IIT Goa provides a vibrant campus life, with several student clubs and societies, sports facilities, and cultural events. The institute is rapidly gaining a reputation for academic excellence and innovation, and has plans to expand its academic and research programs in the future.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681846228/eventhive/logo/iit/Goa_rixds5.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074954/eventhive/iit/Goa_gl13jt.png'
            },
            {
                name: 'ABV IIITM Gwalior',
                location: 'Gwalior, Madhya Pradesh, India',
                link: 'https://www.iiitm.ac.in/index.php/en/',
                description: 'Indian Institute of Information Technology (IIIT) Gwalior is an autonomous institution of higher education located in Gwalior, Madhya Pradesh, India. It was established in 2017 and is one of the nineteen IIITs set up under the Public-Private Partnership (PPP) model by the Ministry of Education, Government of India. IIIT Gwalior offers undergraduate, postgraduate, and doctoral programs in various fields of computer science, information technology, and electronics and communication engineering. The institute is known for its strong academic programs, state-of-the-art infrastructure, and highly qualified faculty members who are actively involved in cutting-edge research and development activities. IIIT Gwalior also has collaborations with several reputed academic and industry partners both within India and abroad, providing students with ample opportunities for internships, research projects, and global exposure.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850750/eventhive/logo/iiit/Gwalior_zvivm6.jpg',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712705/eventhive/photos/iiit/Gwalior_rsiyln.png'
            },
            {
                name: 'IIIT Kota',
                location: 'Kota, Rajasthan, India',
                link: 'https://iiitkota.ac.in/',
                description: 'Indian Institute of Information Technology (IIIT) Kota is an autonomous institute of national importance located in Kota, Rajasthan, India. It was established in 2013 and is one of the IIITs set up under the Public-Private Partnership (PPP) model by the Ministry of Education, Government of India. IIIT Kota offers undergraduate, postgraduate, and doctoral programs in various fields of computer science, information technology, and electronics and communication engineering. The institute has a strong focus on research and innovation, and its faculty members are involved in cutting-edge research projects in collaboration with industry and academia partners. IIIT Kota also offers several industry-oriented programs and initiatives such as the Industry-Academia Collaborative (IAC) program, which aims to promote research and development activities in collaboration with industry partners. The institute also has a well-established incubation center, which provides support to startups and entrepreneurs in the field of information technology and allied domains. IIIT Kota is known for its world-class infrastructure, highly qualified faculty members, and excellent placement opportunities for its students.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850749/eventhive/logo/iiit/Kota_rn69uh.png',

                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712706/eventhive/photos/iiit/Kota_jjohx8.png'
            },
            {
                name: 'IIIT Guwahati',
                location: 'Guwahati, Assam, India',
                link: 'https://www.iiitg.ac.in/',
                description: 'Indian Institute of Information Technology (IIIT) Guwahati is an autonomous institute of national importance located in Guwahati, Assam, India. It was established in 2013 and is one of the IIITs set up under the Public-Private Partnership (PPP) model by the Ministry of Education, Government of India. IIIT Guwahati offers undergraduate, postgraduate, and doctoral programs in various fields of computer science, information technology, and electronics and communication engineering. The institute has a strong focus on research and innovation, and its faculty members are involved in cutting-edge research projects in collaboration with industry and academia partners. IIIT Guwahati also offers several industry-oriented programs and initiatives such as the Industry-Academia Collaborative (IAC) program, which aims to promote research and development activities in collaboration with industry partners. The institute also has a well-established incubation center, which provides support to startups and entrepreneurs in the field of information technology and allied domains. IIIT Guwahati is known for its world-class infrastructure, highly qualified faculty members, and excellent placement opportunities for its students.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850748/eventhive/logo/iiit/Guwahati_zgksdj.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712703/eventhive/photos/iiit/Guwahati_mmfivu.png'
            },
            {
                name: 'IIIT Kalyani',
                location: 'Kalyani, West Bengal, India',
                link: 'https://iiitkalyani.ac.in/',
                description: 'Indian Institute of Information Technology, Kalyani (IIIT Kalyani) is an Indian Institute of Information Technology located at Kalyani, West Bengal. The institute was set up by the Government of India Ministry of Human Resource Development, Government of West Bengal and industry partners (Coal India and Rolta) using the not-for-profit Public Private Partnership (N-PPP) model, at a ratio of 50:35:15 respectively. The institute offers 3 degrees and 6 courses. The academic session of IIIT Kalyani started from year 2014.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850749/eventhive/logo/iiit/Kalyani_lsf9ul.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712706/eventhive/photos/iiit/Kalyani_bagj1y.png'
            },
            {
                name: 'IIIT Sonepat',
                location: 'Sonepat, Haryana, India',
                link: 'http://iiitsonepat.ac.in/',
                description: 'Indian Institute of Information Technology, Sonepat (IIIT Sonepat) is one of the Indian Institutes of Information Technology located at Sonepat, Haryana. The academic session of IIIT Sonepat started from its mentor Institute National Institute of Technology, Kurukshetra from year 2014. It is amongst 20 new IIITs approved by MHRD and started to intake students from 2014. The institute has a lush green and friendly environment which leads to a student in living a healthy life1. It is located at IIT Delhi Techno Park, Rajiv Gandhi Education City Rai, Sonepat.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850751/eventhive/logo/iiit/Sonepat_eambia.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712708/eventhive/photos/iiit/Sonepat_j3a8za.jpg'
            },
            {
                name: 'IIIT Una',
                location: 'Una, Himachal Pradesh, India',
                link: 'https://www.iiitu.ac.in/',
                description: 'IIIT Una is one of the 20 IIITs being setup, funded and managed by the Ministry of Human Resource Development, Govt. of India under the Public Private Partnership (PPP) model. The partners setting up IIIT Una are the Ministry of Human Resource Development, Govt. of India, the Govt. of Himachal Pradesh, HP Power Corporation Limited and HP Transmission Corporation Limited. Admissions to the undergraduate programmes in the Institute are made through the Joint Entrance Examination (JEE). At present, IIIT Una operates from its permanent campus at Saloh, Una. The campus is fully furnished and working full fledged from its permanent campus.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850753/eventhive/logo/iiit/Una_ufmqp2.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712708/eventhive/photos/iiit/Una_m7pvqc.jpg'
            },
            {
                name: 'IIIT Sri City',
                location: 'Sri City, Andhra Pradesh, India',
                link: 'https://www.iiits.ac.in/',
                description: 'Indian Institute of Information Technology, Sri City is an educational institute of national importance located in Sri City, Tirupati district, Andhra Pradesh, India set up by the Ministry of Human Resource Development, Government of India, under the partnership with Andhra Pradesh Government and Sri City consortium. The IIIT campus at Sri City is spread over 80 acres (32 ha). The institute offers 3 degrees and 6 courses.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850752/eventhive/logo/iiit/Sri_City_xxczbl.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712710/eventhive/photos/iiit/Sri_City_murvrp.png'
            },
            {
                name: 'IIIT Vadodara',
                location: 'Vadodara, Gujarat, India',
                link: 'http://diu.iiitvadodara.ac.in/',
                description: 'Indian Institute of Information Technology (IIIT), Vadodara is established by the Ministry of Human Resource Development (MHRD) under Public-Private Partnership (PPP) in 2013. It is also recognised as an “Institute of National Importance”. IIIT Vadodara provides undergraduate, postgraduate, and research programmes. The courses include Bachelor of Technology (BTech), Master of Technology (MTech) and Doctor of Philosophy (PhD) programmes.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850754/eventhive/logo/iiit/Vadodara_bnn0eg.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712709/eventhive/photos/iiit/Vadodara_htsoma.jpg'
            },
            {
                name: 'IIIT Allahabad',
                location: 'Prayagraj, Uttar Pradesh, India',
                link: 'https://www.iiita.ac.in/',
                description: 'The Indian Institute of Information Technology, Allahabad (IIIT-Allahabad), is a public university located in Jhalwa, Allahabad (Prayagraj), in Uttar Pradesh. It is one of the twenty-five Indian Institutes of Information Technology listed by the Ministry of Education (India), and is classified as an Institute of National Importance. IIIT Allahabad is primarily a technology-oriented institute that offers MBA programs as well. The institute has a good placement record for its MBA program, with many renowned companies participating in its placement drive.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850748/eventhive/logo/iiit/Allahabad_bn45dl.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712704/eventhive/photos/iiit/Allahabad_saqaxv.jpg'
            },
            {
                name: 'IIITDM Kancheepuram',
                location: 'Chhenai, Tamil Nadu, India',
                link: 'https://www.iiitdm.ac.in/',
                description: 'The Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram (IIITDM Kancheepuram) is a public institution established in 2007 by the Ministry of Human Resource Development. It is located in Chennai, Tamil Nadu. The institute offers undergraduate, postgraduate and doctoral programs in engineering and design.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850749/eventhive/logo/iiit/Kancheepuram_xww8dc.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712706/eventhive/photos/iiit/Kalyani_bagj1y.png'
            },
            {
                name: 'IIITDM Jabalpur',
                location: 'Jabalpur, Madhya Pradesh, India',
                link: 'https://www.iiitdmj.ac.in/',
                description: 'The Indian Institute of Information Technology, Design and Manufacturing, Jabalpur (IIITDM Jabalpur) was established in 2005. It is also known as Pandit Dwarka Prasad Mishra Indian Institute of Information Technology, Design and Manufacturing. The institute has been spread over 300 acres and is rated among the top 100 Engineering Colleges with 82 rank. IIITDM Jabalpur was declared an Institute of National Importance under the IIIT Act. The institute offers undergraduate, postgraduate and doctoral programs in engineering and design.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850749/eventhive/logo/iiit/Jabalpur_jn1nd8.jpg',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712705/eventhive/photos/iiit/Jabalpur_mzvwvx.jpg'
            },
            {
                name: 'IIIT Manipur',
                location: 'Imphal, Manipur, India',
                link: 'https://www.iiitmanipur.ac.in/',
                description: 'The Indian Institute of Information Technology Senapati, Manipur is an institute of national importance established by an act of parliament in 2015 under the Ministry of Education, Government of India. The institute offers undergraduate programs in engineering.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850750/eventhive/logo/iiit/Manipur_jovnp1.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712707/eventhive/photos/iiit/Manipur_vodyiy.png'
            },
            {
                name: 'IIIT Trichy',
                location: 'Tiruchirappalli, Tamil Nadu, India',
                link: 'https://www.iiitt.ac.in/',
                description: 'The Indian Institute of Information Technology Tiruchirappalli (IIIT Trichy) is one of 21 IIITs established by the MHRD under the non-profit Public-Private Partnership (PPP) Model. The institute offers undergraduate, postgraduate, and doctoral courses in Engineering, Science, and Information Technology.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850753/eventhive/logo/iiit/Trichy_x5plbp.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712708/eventhive/photos/iiit/Tiruchirappalli_gxxpru.jpg'
            },
            {
                name: 'IIIT Lucknow',
                location: 'Lucknow, Uttar Pradesh, India',
                link: 'https://www.iiitl.ac.in/',
                description: 'Indian Institute of Information Technology, Lucknow (IIIT Lucknow) is one of the 20 IIITs being set up by the Central Government in Public Private Partnership (PPP) mode. IIIT Lucknow currently offers all the amenities, academic and non-academic to its students that can help them flourish and serve the nation with all their apprehension in the various fields of technology.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850753/eventhive/logo/iiit/Lucknow_cbsios.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712706/eventhive/photos/iiit/Lucknow_jatpt2.png'
            },
            {
                name: 'IIIT Dharwad',
                location: 'Dharwad, Karnataka, India',
                link: 'https://www.iiitdwd.ac.in/',
                description: 'IIIT Dharwad is an institute of national importance. IIIT Dharwad is an autonomous university, established in 2015. IIIT Dharwad was established as a Public-Private Partnership between the Ministry of Education, the Government of India, and the Government of Karnataka. The campus of IIIT Dharwad covers 60 acres. Undergraduate and doctoral degrees are offered at IIIT Dharwad. The flagship B.Tech programme at IIIT Dharwad is well-known. Candidates seeking B.Tech admissions at IIIT Dharwad must take the JEE Main exam and participate in the JoSAA counselling.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850749/eventhive/logo/iiit/Dharwad_qg8ldz.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712703/eventhive/photos/iiit/Dharwad_jhpsih.jpg'
            },
            {
                name: 'IIITDM Kurnool',
                location: 'Kurnool, Andhra Pradesh, India',
                link: 'https://www.iiitk.ac.in/',
                description: 'The Indian Institute of Information Technology Design and Manufacturing, Kurnool (IIITDM Kurnool) is a technical education institute in the field of Information Technology established by MHRD, Government of India in 2015. The institute offers three specializations in the Undergraduate program, Bachelors of Technology and five specializations in the Doctoral program.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850750/eventhive/logo/iiit/Kurnool_ug1b9e.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712706/eventhive/photos/iiit/Kurnool_tdvq64.png'
            },
            {
                name: 'IIIT Kottayam',
                location: 'Kottayam, Kerela, India',
                link: 'https://www.iiitkottayam.ac.in/',
                description: 'The Indian Institute of Information Technology, Kottayam (IIIT Kottayam) is an autonomous engineering Institute located at Valavoor, Palai, Kottayam District in Kerala. It was established in 2015 by the Ministry of Human Resource Development (MHRD), Government of India under the IIIT (PPP) Act 2017. The institute offers a four-year B.Tech program in Computer Science and Engineering.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850750/eventhive/logo/iiit/Kottayam_e9duqa.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712707/eventhive/photos/iiit/Kottayam_n3zt8z.png'
            },
            {
                name: 'IIIT Ranchi',
                location: 'Ranchi, Jharkhand, India',
                link: 'https://www.iiitranchi.ac.in/',
                description: 'The Indian Institute of Information Technology, Ranchi (IIIT Ranchi) is one of the Indian Institutes of Information Technology, a group of 25 Interdisciplinary Technical Universities of higher education started by Government of India, focused on Information Technology. It is an “Institute of National Importance”, declared by an act of parliament.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850751/eventhive/logo/iiit/Ranchi_rpti3j.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712708/eventhive/photos/iiit/Ranchi_lwqjpu.jpg'
            },
            {
                name: 'IIIT Nagpur',
                location: 'Nagpur, Maharashtra, India',
                link: 'https://www.iiitn.ac.in/',
                description: 'The Indian Institute of Information Technology, Nagpur (IIIT Nagpur) is one of the Indian Institutes of Information Technology (IIIT) and an Institute of National Importance located in Nagpur, Maharashtra. The institute started functioning from July 2016. It offers Bachelor of Technology (B.Tech.) courses in Electronics and Communication Engineering and Computer Science and Engineering.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850754/eventhive/logo/iiit/Nagpur_xm4gdt.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712707/eventhive/photos/iiit/Nagpur_adstj7.jpg'
            },
            {
                name: 'IIIT Pune',
                location: 'Pune, Maharashtra, India',
                link: 'https://www.iiitp.ac.in/',
                description: 'The Indian Institute of Information Technology Pune (IIIT Pune) is one of the Indian Institutes of Information Technology, a group of institutes of Higher education in India focused on Information Technology. It was established by the Founder Chairman of Finolex Group of Industries, Late P P Chhabria in 2003. IIIT Pune was declared as an Institute of National Importance (INI) in August 2017. It is an undergraduate engineering institute that offers BE in Computer Engineering, Information Technology and Electronics and Telecommunication. The institute is mentored by College of Engineering, Pune (COEP).',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850751/eventhive/logo/iiit/Pune_lstrnj.jpg',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712707/eventhive/photos/iiit/Pune_q1f79j.jpg'
            },
            {
                name: 'IIIT Bhagalpur',
                location: 'Bhagalpur, Bihar, India',
                link: 'https://www.iiitbh.ac.in/',
                description: 'Indian Institute of Information Technology (IIIT) Bhagalpur is an autonomous institute of national importance located in Bhagalpur, Bihar, India. It was established in 2017 and is one of the IIITs set up under the Public-Private Partnership (PPP) model by the Ministry of Education, Government of India. IIIT Bhagalpur offers undergraduate, postgraduate, and doctoral programs in various fields of computer science, information technology, and electronics and communication engineering. The institute has a strong focus on research and innovation, and its faculty members are involved in cutting-edge research projects in collaboration with industry and academia partners. IIIT Bhagalpur also offers several industry-oriented programs and initiatives such as the Industry-Academia Collaborative (IAC) program, which aims to promote research and development activities in collaboration with industry partners. The institute also has a well-established incubation center, which provides support to startups and entrepreneurs in the field of information technology and allied domains. IIIT Bhagalpur is known for its world-class infrastructure, highly qualified faculty members, and excellent placement opportunities for its students.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850748/eventhive/logo/iiit/Bhagalpur_zmdwbl.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712703/eventhive/photos/iiit/Bhagalpur_dbuusj.jpg'
            },
            {
                name: 'IIIT Bhopal',
                location: 'Bhopal, Madhya Pradesh, India',
                link: 'https://www.iiitbhopal.ac.in/',
                description: 'The Indian Institute of Information Technology Bhopal (IIIT Bhopal) is an Institute of National Importance established in 2017 by Ministry of Education (MoE), Government of India on not-for-profit Public Private Partnership basis. It is one among the 20 IIITs established under the non-profit Public-Private Partnership (PPP) model by Ministry of Human Resource Development. The institute offers undergraduate courses in Computer Science and Engineering, Electronics and Communication Engineering and Information Technology. The institute has its classes run in MANIT Bhopal.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850748/eventhive/logo/iiit/Bhopal_pyepcq.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712704/eventhive/photos/iiit/Bhopal_zmtsxn.png'
            },
            {
                name: 'IIIT Surat',
                location: 'Surat, Gujarat, India',
                link: 'https://www.iiitsurat.ac.in/',
                description: 'The Indian Institute of Information Technology Surat (IIIT Surat) is an Institute of National Importance established in Public-Private-Partnership (PPP) mode in 2017 by the erstwhile Ministry of Human Resource Development, Government of India. It offers undergraduate programs in two disciplines: Computer Science Engineering (CSE) and Electronics and Communication Engineering (ECE). The institute is located at SVNIT Campus Ichchanath, Surat, Gujarat 395007.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850757/eventhive/logo/iiit/Surat_bfficz.jpg',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712708/eventhive/photos/iiit/Surat_vgteza.jpgz'
            },
            {
                name: 'IIIT Agartala',
                location: 'Agartala, Tripura, India',
                link: 'https://www.iiitagartala.ac.in/',
                description: 'The Indian Institute of Information Technology, Agartala (IIIT-Agartala) is one among the 20 IIITs established under the non-profit Public-Private Partnership (PPP) model. It is presently functioning inside the campus of NIT Agartala until the construction of a 52-acre permanent campus in Bodhjungnagarat near Agartala is completed. The institute offers undergraduate courses in various fields of Information Technology.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850748/eventhive/logo/iiit/Agartala_d0uy6f.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712710/eventhive/photos/iiit/Agartala_zpukez.png'
            },
            {
                name: 'IIIT Raichur',
                location: 'Raichur, Karnataka, India',
                link: 'https://www.iiitr.ac.in/',
                description: 'The Indian Institute of Information Technology Raichur (IIIT Raichur) is a leading educational institute in the field of Computer Science Engineering and Engineering. It offers B.E. / B.Tech courses and was established in 2019 in the city of Karnataka. The institute is currently functioning from its transit campus situated in Government Engineering College, Raichur.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850751/eventhive/logo/iiit/Raichur_owuhz7.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680712707/eventhive/photos/iiit/Raichur_sloxha.jpg'
            },
            {
                name: 'IIITV ICD Diu',
                location: 'Diu, Daman And Diu, India',
                link: 'http://diu.iiitvadodara.ac.in/',
                description: 'IIIT Vadodara International Campus Diu (IIITV-ICD) is a technical institute located in Diu, a union territory in India. It is a satellite campus of the Indian Institute of Information Technology Vadodara (IIITV) and was established in 2019. The campus offers undergraduate programs in computer science and engineering, and electronics and communication engineering. IIITV-ICD has a strong focus on research and innovation, and its faculty members are involved in cutting-edge research projects in collaboration with industry and academia partners. The institute has state-of-the-art infrastructure, modern research facilities, and highly qualified faculty members, and provides a conducive learning environment to its students. The campus also aims to promote entrepreneurship and innovation through various initiatives such as the Technology Incubation and Entrepreneurship Development Society (TIEDS), which provides support to startups and entrepreneurs in the region.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850753/eventhive/logo/iiit/Vadodara_ICD_Diu_ybmeci.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681938937/eventhive/photos/iiit/IIITV_ICD_DIU_gmbfwt.jpg'
            },
            {
                name: 'IIIT Hyderabad',
                location: 'Hyderabad, India',
                link: 'https://www.iiit.ac.in/',
                description: 'International Institute of Information Technology Hyderabad (IIITH) is a higher-education institute deemed-to-be-university, founded as a non-profit public-private partnership (N-PPP), located in Telangana, India. It was set up in 1998 under the public-private partnership model by Ministry of Human Resource Development of the Government of Andhra Pradesh and NASSCOM, with the state government supplying a grant of land and buildings. IIIT Hyderabad offers undergraduate, postgraduate and doctoral level programs focused on computer science, electronics, communications and other related subjects of Information Technology.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850749/eventhive/logo/iiit/Hyderabad_wc2g4q.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681939162/eventhive/photos/iiit/Hyderabad_low9yt.jpg'
            },
            {
                name: 'IIIT Bangalore',
                location: 'Bangalore, Karnataka, India',
                link: 'https://www.iiitb.ac.in/',
                description: 'The International Institute of Information Technology, Bangalore (abbreviated IIIT Bangalore or IIIT-B) is a research university in Bangalore, India. The institute is a registered not-for-profit society funded jointly by the Government of Karnataka and the IT industry under a public-private partnership model. The institution focuses on involving entrepreneurship, industry interaction and research along with academics. It was established in 1998 with a vision to contribute to the IT world by focusing on education and research, entrepreneurship and innovation.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850748/eventhive/logo/iiit/Bangalore_wklkbq.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681939245/eventhive/photos/iiit/Bangalore_iyugqq.jpg'
            },
            {
                name: 'IIIT Delhi',
                location: 'Delhi, India',
                link: 'https://www.iiitd.ac.in/',
                description: 'Indraprastha Institute of Information Technology, Delhi (aka. IIIT-Delhi or IIIT-D) was created as a State University by an act of Delhi Government (The IIIT Delhi Act, 2007) empowering it to do research and development, and grant degrees. It is a research-oriented institute with a focus on Computer Science and allied areas. IIIT delhi offers B.Tech,M.Tech and Ph.D degrees.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681850748/eventhive/logo/iiit/Delhi_whbzlq.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681939354/eventhive/photos/iiit/Delhi_vc0ay2.jpg'
            },

            //NIT
            {
                name: 'NIT Allahabad',
                location: 'Prayagraj, Uttar Pradesh, India',
                link: 'http://www.mnnit.ac.in/',
                description: 'National Institute of Technology (NIT) Allahabad is a public technical university located in Allahabad, Uttar Pradesh, India. It was established in 1961 and is one of the oldest NITs in India. NIT Allahabad offers undergraduate, postgraduate, and doctoral programs in various fields of engineering, science, and management. The institute has a strong focus on research and innovation, and its faculty members are involved in cutting-edge research projects in collaboration with industry and academia partners. NIT Allahabad also offers several industry-oriented programs and initiatives such as the Industry-Institute Partnership Cell (IIPC) and the Entrepreneurship Development Cell (EDC), which aim to promote research and development activities in collaboration with industry partners and support startups and entrepreneurs in the region. The institute has a state-of-the-art infrastructure, modern research facilities, and highly qualified faculty members. NIT Allahabad is also known for its excellent placement record, with top companies from various sectors recruiting its students every year.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213215/eventhive/logo/nit/MNNIT_Logo_New_htreni.jpg',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717797/eventhive/photos/nit/Allahabad_djdz6d.jpg'
            },
            {
                name: 'MANIT Bhopal',
                location: 'Bhopal, Madhya Pradesh, India',
                link: 'http://www.manit.ac.in/',
                description: 'Maulana Azad National Institute of Technology (MANIT) Bhopal is a public technical university located in Bhopal, Madhya Pradesh, India. It was established in 1960 as the Maulana Azad College of Technology (MACT) and was later converted into a National Institute of Technology in 2002. MANIT Bhopal offers undergraduate, postgraduate, and doctoral programs in various fields of engineering, science, and management. The institute has a strong focus on research and innovation, and its faculty members are involved in cutting-edge research projects in collaboration with industry and academia partners. MANIT Bhopal also offers several industry-oriented programs and initiatives such as the Industry-Institute Partnership Cell (IIPC) and the Entrepreneurship Development Cell (EDC), which aim to promote research and development activities in collaboration with industry partners and support startups and entrepreneurs in the region. The institute has a state-of-the-art infrastructure, modern research facilities, and highly qualified faculty members. MANIT Bhopal is also known for its excellent placement record, with top companies from various sectors recruiting its students every year.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213213/eventhive/logo/nit/Manit_Logo_color_0_xgebvu.jpg',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717798/eventhive/photos/nit/Bhopal_fkdbqx.png'
            },
            {
                name: 'VNIT Nagpur',
                location: 'Nagpur, Maharashtra, India',
                link: 'https://vnit.ac.in/',
                description: 'Visvesvaraya National Institute of Technology (VNIT) Nagpur is a public technical university located in Nagpur, Maharashtra, India. It was established in 1960 as the Visvesvaraya Regional College of Engineering (VRCE) and was later converted into a National Institute of Technology in 2002. VNIT Nagpur offers undergraduate, postgraduate, and doctoral programs in various fields of engineering, science, and management. The institute has a strong focus on research and innovation, and its faculty members are involved in cutting-edge research projects in collaboration with industry and academia partners. VNIT Nagpur also offers several industry-oriented programs and initiatives such as the Industry-Institute Partnership Cell (IIPC) and the Entrepreneurship Development Cell (EDC), which aim to promote research and development activities in collaboration with industry partners and support startups and entrepreneurs in the region. The institute has a state-of-the-art infrastructure, modern research facilities, and highly qualified faculty members. VNIT Nagpur is also known for its excellent placement record, with top companies from various sectors recruiting its students every year.',
                logoUrl: '',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717803/eventhive/photos/nit/Nagpur_g1xut9.jpg'
            },
            {
                name: 'NIT Durgapur',
                location: 'Durgapur, West Bengal, India',
                link: 'https://nitdgp.ac.in/',
                description: 'The National Institute of Technology Durgapur (NIT Durgapur) is a public technical university located in Durgapur, West Bengal, India. It was established in 1960 under an Act of the Parliament of India as one of the eight such colleges aimed to advance engineering education in the country and to foster national integration. The institute is a fully-funded premier Technological Institution of the Government of India and is administered by an autonomous Board of Governors. The Institute imparts education in the disciplines of Chemical Engineering, Civil Engineering, Computer Science and Engineering, Electrical Engineering, Electronics and Communication Engineering, Mechanical Engineering, Metallurgical and Materials Engineering, Information Technology, Biotechnology, Physics, Chemistry, Mathematics, Environmental science, Materials Science and Management Studies.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213214/eventhive/logo/nit/NIT_Durgapur_Logo.svg_yyoniy.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717805/eventhive/photos/nit/Durgapur_enskgj.png'
            },
            {
                name: 'NIT Hamirpur',
                location: 'Hamirpur, Himachal Pradesh, India',
                link: 'https://nith.ac.in/',
                description: 'The National Institute of Technology Hamirpur (NIT Hamirpur) is a public technical university located in Hamirpur, Himachal Pradesh, India. It was established in 1984 as a Regional Engineering College and was declared to be an Institute of National Importance by the Government of India under the Institutes of Technology Act. The institute spans 320 acres and provides sports facilities for both outdoor and indoor activity. As a residential campus, there are eight dorms for boys and four for girls, along with apartments for the faculty and staff.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213214/eventhive/logo/nit/227-2273228_the-university-of-arizona-certifications-nit-hamirpur-logo_nnjjdv.jpg',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717799/eventhive/photos/nit/Hamirpur_klzb1k.jpg'
            },
            {
                name: 'NIT Jaipur',
                location: 'Jaipur, Rajasthan, India',
                link: 'http://www.mnit.ac.in/',
                description: 'Malaviya National Institute of Technology Jaipur (MNIT or NIT Jaipur) is a public technical university located in Jaipur, India with an emphasis on science, engineering and management. The Government of India and the Government of Rajasthan jointly established the Institute in 1963 as Malaviya Regional Engineering College, Jaipur. The college was subsequently given the designation of National Institute of Technology on June 26, 2002.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681937961/eventhive/logo/nit/Jaipur_ictwd7.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717800/eventhive/photos/nit/Jaipur_erc7mh.jpg'
            },
            {
                name: 'NIT Jalandhar',
                location: 'Jalandhar, Punjab',
                link: 'http://www.nitj.ac.in/',
                description: 'Dr. B. R. Ambedkar National Institute of Technology Jalandhar (NIT Jalandhar or NITJ), formerly Regional Engineering College Jalandhar, is a public engineering university located in Jalandhar, Punjab, India. It has been declared as an Institute of National Importance under the Ministry of Human Resource Development, Govt of India. The institute offers undergraduate, postgraduate and doctoral level programmes in the fields of Management, Sciences, Engineering and Technology.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213214/eventhive/logo/nit/1600x960_281501-nit-jalandhar-recruitment_imxrye.jpg',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717810/eventhive/photos/nit/Jalandhar_cjng1c.jpg'
            },
            {
                name: 'NIT Jamshedpur',
                location: 'Jamshedpur, Jharkhand, India',
                link: 'http://www.nitjsr.ac.in/',
                description: 'National Institute of Technology Jamshedpur (NIT Jamshedpur or NITJSR), is an Institute of National Importance for Technical Education located at Jamshedpur, Jharkhand, India. Established as a Regional Institute of Technology on 15 August 1960, it was upgraded to National Institute of Technology (NIT) on 27 December 2002 with the status of a Deemed University. The institute offers courses at undergraduate, postgraduate and doctoral levels in various fields including engineering, science and humanities.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681938026/eventhive/logo/nit/Jamshedpur_cscrif.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717818/eventhive/photos/nit/Jamshedpur_frj1aa.png'
            },
            {
                name: 'NIT Kurukshetra',
                location: 'Kurukshetra, Haryana, India',
                link: 'http://www.nitkkr.ac.in/',
                description: 'National Institute of Technology Kurukshetra (NIT Kurukshetra or NITKKR) is a public technical and research university located in Kurukshetra. In December 2008, it was accredited with the status of Institute of National Importance (INI). It is one of the 30 National Institutes of Technology established and administered by Government of India. The institute offers undergraduate and postgraduate programs in various fields including engineering, science and humanities.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213214/eventhive/logo/nit/NITKKR_zmwzmx.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717800/eventhive/photos/nit/Kurukshetra_u8ujlt.jpg'
            },
            {
                name: 'NIT Calicut',
                location: 'Kozhikode, West Bengal',
                link: 'http://www.nitc.ac.in/',
                description: 'National Institute of Technology Calicut (NIT Calicut or NITC), formerly Regional Engineering College Calicut, is a public technical university and an institute of national importance governed by the NIT Act passed by the Parliament of India. It is one of the National Institutes of Technology campuses established by the Government of India for imparting high standard technical education to students from all over the country. The campus is situated 22 kilometres (14 mi) north east of Kozhikode, on the Kozhikode–Mukkam Road. NIT Calicut offers 54 courses in Engineering and Architecture, Computer Application and IT, Animation and Design, Sciences, Management and Business Administration streams.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681938085/eventhive/logo/nit/Calicut_enlsiq.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717799/eventhive/photos/nit/Calicut_mrip8d.jpg'
            },
            {
                name: 'NIT Rourkela',
                location: 'Rourkela, Odisha, India',
                link: 'http://www.nitrkl.ac.in/',
                description: 'National Institute of Technology Rourkela (NIT Rourkela or NITRKL or NITR), formerly Regional Engineering College Rourkela is a publicly funded institute of higher learning for engineering, science and technology located in the steel city of Rourkela, Odisha, India. It was established as Regional Engineering College (REC) Rourkela on 15 August 1961. It is one of the 31 National Institutes of Technology in India and has been recognized as an Institute of National Importance by the National Institutes of Technology Act, 2007.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681938140/eventhive/logo/nit/Rourkela_exxln8.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717806/eventhive/photos/nit/Rourkela_cikm6h.jpg'
            },
            {
                name: 'NIT Silchar',
                location: 'Silchar, Assam',
                link: 'http://www.nits.ac.in/',
                description: 'National Institute Of Technology Silchar (NIT Silchar or NITS) is one of the 31 NITs of India and was established in 1967 as a Regional Engineering College in Silchar. It offers 1 undergraduate, 3 postgraduate and 1 doctoral degrees through its 11 departments. The campus spans 625 acres. The institute provides degree programmes in five key academic fields: engineering, basic sciences, humanities, social sciences, and management.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213213/eventhive/logo/nit/png-transparent-national-institute-of-technology-silchar-national-institutes-of-technology-national-institute-of-technology-karnataka-malaviya-national-institute-of-technology-jaipur-others-text-orange-logo_stliek.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717810/eventhive/photos/nit/Silchar_scq4sy.jpg'
            },
            {
                name: 'NIT Karnataka',
                location: 'Suratkhal, Karnataka, India',
                link: 'http://www.nitk.ac.in/',
                description: 'National Institute of Technology Karnataka (NITK), also known as NITK Surathkal, formerly known as Karnataka Regional Engineering College (KREC), is a public technical university at Surathkal, Mangaluru. It was founded in 1960 as KREC while today, it is one of the 31 National Institutes of Technology in India and is recognised as an Institute of National Importance by the Government of India.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213213/eventhive/logo/nit/nit-karnataka-logo_ytloyz.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717803/eventhive/photos/nit/Karnataka_gjoiis.png'
            },
            {
                name: 'NIT Warangal',
                location: 'Warangal, Telangana, India',
                link: 'http://www.nitw.ac.in/',
                description: 'National Institute of Technology Warangal (NIT Warangal or NITW) is a public technical and research university located in Warangal, India. It is recognised as an Institute of National Importance by the Government of India. The foundation stone for this institute was laid by then Prime Minister Jawaharlal Nehru on 1959, the first in the chain of 31 NITs (formerly known as RECs) in the country. NIT Warangal provides 8 undergraduate and 29 postgraduate programmes across five disciplines.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213214/eventhive/logo/nit/106-1065978_national-institute-of-technology-warangal-logo-hd-png_xlqm3x.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717813/eventhive/photos/nit/Warangal_cxllzg.jpg'
            },
            {
                name: 'NIT Surat',
                location: 'Surat, Gujarat',
                link: 'http://www.svnit.ac.in/',
                description: 'National Institute of Technology Surat (SVNIT or NIT Surat), is a public technical university established by the Parliament of India in 1961. It is one of 31 National Institutes of Technology in India recognized by the Government of India as an Institute of National Importance. It is the Anchor Institute for the Auto and Engineering sector and will be training the workforce. The project is also designated as the "Center of Excellence under Technical Education Quality Improvement Program" in water resources and flood management and is supported by the World Bank. The institute organizes annual cultural and technical festivals: MindBend (technical festival) and Sparsh[11] (cultural festival) that attract participants from all over the country and abroad.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213213/eventhive/logo/nit/NIT_Surat_Logo_l3wh25.svg',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717811/eventhive/photos/nit/Surat_coehpg.jpg'
            },
            {
                name: 'NIT Tiruchirappalli',
                location: 'Tiruchirappalli, Tamil Nadu',
                link: 'http://www.nitt.edu/',
                description: 'National Institute of Technology Tiruchirappalli (NIT Tiruchirappalli or NIT Trichy) is a public technical and research university near the city of Tiruchirappalli in Tamil Nadu, India. The institute is recognized as an Institute of National Importance by the Government of India under the National Institutes of Technology, Science Education and Research (NITSER) Act, 2007 and is one of the members of the National Institutes of Technology (NITs) system, a group of premier Indian technical institutes governed by the Council of NITSER. NIT Trichy was established in 1964 and is an autonomous university, located over a campus area of 800 acres.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213213/eventhive/logo/nit/640px-NITT_logo_vpubxq.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717811/eventhive/photos/nit/Trichy_h0jx0t.jpg'
            },
            {
                name: 'NIT Arunachal Pradesh',
                location: 'Yupia, Arunachal Pradesh, India',
                link: 'http://www.nitap.ac.in/',
                description: 'National Institute of Technology Arunachal Pradesh (NIT Arunachal Pradesh or NITAP) is a public technical and research institute located at Jote near Itanagar, the capital of Arunachal Pradesh. NIT Arunachal Pradesh is one of the 31 National Institutes of Technology in India and is recognized as an Institute of National Importance. The institute offers undergraduate, postgraduate and doctoral level programs for students such as BTech, MTech, MBA, MPhil, and PhD in various disciplines.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681938210/eventhive/logo/nit/Arunachal_Pradesh_pmjkka.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717802/eventhive/photos/nit/Arunachal_Pradesh_goq23c.jpg'
            },
            {
                name: 'NIT Agartala',
                location: 'Agartala, Tripura, India',
                link: 'http://www.nita.ac.in/',
                description: 'National Institute of Technology Agartala (NIT Agartala or NITA) is a technology-oriented institute of higher education established by India’s Ministry of Human Resource Development Government of India in Agartala, India. It was founded as Tripura Engineering College in 1965 and declared a National Institute of Technology (NIT) in 2006, thus being recognized as an Institute of National Importance. NIT Agartala provides undergraduate, postgraduate, and PhD programmes under 13 departments such as BTech, MTech, MCA, MBA, and PhD degrees.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213213/eventhive/logo/nit/National_Institute_of_Technology__Agartala_Logo_zn0bu6.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717796/eventhive/photos/nit/Agartala_zmmqcz.jpg'
            },
            {
                name: 'NIT Raipur',
                location: 'Raipur, Chhattisgarh, India',
                link: 'http://www.nitrr.ac.in/',
                description: 'National Institute of Technology, Raipur (NIT Raipur or NITRR) is a public technical and research university located in Raipur, the capital of Chhattisgarh. Founded in 1956 with two engineering disciplines, namely Mining Engineering and Metallurgical Engineering, the institute focuses exclusively on science, technology, engineering, and management. NIT Raipur provides undergraduate, postgraduate, and PhD programmes under various departments such as BTech, MTech, MCA, MBA, and PhD degrees.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213214/eventhive/logo/nit/1455104624_lkeqyg.jpg',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717805/eventhive/photos/nit/Raipur_wvcfgc.png'
            },
            {
                name: 'NIT Patna',
                location: 'Patna, Bihar, India',
                link: 'http://www.nitp.ac.in/',
                description: 'National Institute of Technology Patna (NIT Patna), formerly Bihar School of Engineering and Bihar College of Engineering, is a public engineering institution located in Patna in the Indian state of Bihar. It was renamed as NIT Patna, by the Government of India on 28 January 2004. NIT Patna marked its humble beginning in 1886 with the establishment of pleaders survey training school which was subsequently promoted to Bihar College of Engineering Patna in 1924. The institute is granted autonomy by the Ministry of HRD India. NIT Patna has been ranked 63rd in the list of top 100 engineering colleges in 2022 ranked by NIRF.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681938258/eventhive/logo/nit/Patna_nwoar7.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717804/eventhive/photos/nit/Patna_cq2mro.jpg'
            },
            {
                name: 'NIT Srinagar',
                location: 'Srinagar, Jammu and Kashmir, India',
                link: 'http://www.nitsri.ac.in/',
                description: 'National Institute of Technology Srinagar (NIT Srinagar or NITSRI) is a public technical university located in Srinagar, Jammu and Kashmir, India. It is one of the 31 National Institutes of Technology (NITs) and as such is directly under the control of the Ministry of Education (MoE). It was established in 1960 as one of several Regional Engineering Colleges established as part of the Second Five Year Plan (1956–61) by the Government of India. NIT Srinagar is designated as an Institute of National Importance.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213213/eventhive/logo/nit/National_Institute_of_Technology__Srinagar_Logo_vnifui.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717809/eventhive/photos/nit/Srinagar_l7neuo.jpg'
            },
            {
                name: 'NIT Delhi',
                location: 'Delhi, India',
                link: 'http://www.nitdelhi.ac.in/',
                description: 'National Institute of Technology Delhi (NIT Delhi or NITD) is a premier public technical university located in Delhi, India. It has been declared as an Institute of National Importance by an act of Parliament of India. It is one of the 31 National Institutes of Technology in India. NIT Delhi is an autonomous Institute which functions under the aegis of Ministry of Education, Government of India.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681938362/eventhive/logo/nit/Delhi_qarc1j.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717797/eventhive/photos/nit/Delhi_uzhnkm.jpg'
            },
            {
                name: 'NIT Goa',
                location: 'Farmagudi, Goa, India',
                link: 'http://www.nitgoa.ac.in/',
                description: 'National Institute of Technology Goa (NIT Goa or NITG) is an engineering institution in the Indian state of Goa. It was founded in 2010 being one of the 31 National Institutes of Technology in India and is recognised as an Institute of National Importance. It admitted its first batch of students in 2010-11. NIT Goa is an autonomous institute and functioning under the aegis of Ministry of Human Resource Development.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213214/eventhive/logo/nit/282-2829390_nit-goa-logo-hd-png-download_eecsc7.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717798/eventhive/photos/nit/Goa_jpkwwh.jpg'
            },
            {
                name: 'NIT Manipur',
                location: 'Imphal, Manipur',
                link: 'http://www.nitmanipur.ac.in/',
                description: 'National Institute of Technology Manipur (NIT Manipur or NITMN) is an Institute of National Importance situated in Imphal, Manipur, India. It is one of the 31 National Institutes of Technology in India. NIT Manipur started its first academic session in 2010. It is an autonomous Institute of National importance. At present, there is an intake of 150 students per year out of which 50% of seats are reserved for the state students who are born in Manipur and the rest 50% of seats are reserved for the students from other states of India.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681938420/eventhive/logo/nit/Manipur_qj5ywy.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717801/eventhive/photos/nit/Manipur_qujp8h.jpg'
            },
            {
                name: 'NIT Meghalaya',
                location: 'Shillong, Meghalaya, India',
                link: 'http://www.nitm.ac.in/',
                description: 'The National Institute of Technology (NIT) Meghalaya is one among the thirty one NITs in India established under the NIT Act 2007 (Amended 2012) of the Parliament of India as Institutes of National Importance with full funding support from the Ministry of Education (Shiksha Mantralaya), Government of India. It offers various undergraduate, postgraduate and doctorate level programs based on the valid scores in national-level entrance exams for the respective courses accepted by the institute. The most opted course in NIT Meghalaya is B.Tech. NIT Meghalaya offers a four-year B.Tech program in 5 specializations.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213212/eventhive/logo/nit/NITM_cynnp1.gif',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717802/eventhive/photos/nit/Meghalaya_rcxzdk.jpg'
            },
            {
                name: 'NIT Mizoram',
                location: 'Aizawl, Mizoram, India',
                link: 'http://www.nitmz.ac.in/',
                description: 'National Institute of Technology (NIT) Mizoram is one of the 31 National Institutes of Technology in India. It is located in Aizawl and was established by the Ministry of Human Resources Development (part of the Government of India) in 2009. The primary objective of NIT Mizoram is to provide education through research and training in undergraduate and graduate programs including PhD. NIT Mizoram offers undergraduate courses in Computer Science Engineering, Electronics and Communication Engineering, Electrical and Electronics Engineering, Mechanical Engineering and Civil Engineering.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213215/eventhive/logo/nit/InstituteLogo_Colour_xz3758.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717802/eventhive/photos/nit/Mizoram_k2tu8g.png'
            },
            {
                name: 'NIT Nagaland',
                location: 'Chümoukedima, Nagaland',
                link: 'http://www.nitnagaland.ac.in/',
                description: 'National Institute of Technology Nagaland (NIT Nagaland) is a federally funded technical university established by an Act of the Indian Parliament. It is located at the Old DC Complex at Chümoukedima, about 14 km (8.7 mi) from Dimapur. NIT Nagaland was set up by the Government of India in 2009 as part of the Eleventh Five-Year Plan (2007–2012) for imparting technical education in the state of Nagaland. It is one of the 31 National Institutes of Technology in India and managed by the NIT Nagaland Society registered under the Societies Act.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1679213213/eventhive/logo/nit/logo_small_ekjp7i.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717806/eventhive/photos/nit/Nagaland_wiiwuo.jpg'
            },
            {
                name: 'NIT Sikkim',
                location: 'Ravangla, Sikkim, India',
                link: 'http://www.nitsikkim.ac.in/',
                description: 'National Institute of Technology Sikkim (NIT Sikkim or NIT SKM) is a public engineering and research institution near the city of Ravangla in Sikkim, India. It is one of the 31 National Institutes of Technology in India and has been declared as an Institute of National Importance by the Government of India. It is an autonomous institute and functioning under the aegis of Ministry of Education.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681938471/eventhive/logo/nit/Sikkim_cx3rip.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717809/eventhive/photos/nit/Sikkim_ryhbxl.png'
            },
            {
                name: 'NIT Uttarakhand',
                location: 'Srinagar, Uttarakhand, India',
                link: 'http://www.nituk.ac.in/',
                description: 'National Institute of Technology Uttarakhand (also known as NIT Uttarakhand or NITUK) is a public technical university in the Indian state of Uttarakhand. It was founded in 2009, as one of the 10 new National Institutes of Technology in India, and is recognised as an Institute of National Importance. It admitted its first batch of students in 2010–11. The institute offers undergraduate and postgraduate programs in engineering, science, and humanities.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681938569/eventhive/logo/nit/Uttarakhand_mjckih.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717812/eventhive/photos/nit/Uttarakhand_eujly5.jpg'
            },
            {
                name: 'NIT Andhra Pradesh',
                location: '	Tadepalligudem, Andhra Pradesh, India',
                link: 'http://www.nitandhra.ac.in/',
                description: 'National Institute of Technology Andhra Pradesh (also known as NIT Andhra Pradesh or NITAP) is a public technical university in the Indian state of Andhra Pradesh. It was founded in 2015 as one of the 10 new National Institutes of Technology in India and is recognised as an Institute of National Importance. The institute offers undergraduate and postgraduate programs in engineering, science, and humanities. The campus spans over 172.6 acres.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681938613/eventhive/logo/nit/Andhra_Pradesh_ih76i8.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717799/eventhive/photos/nit/Andhra_Pradesh_ducp3l.png'
            },
            {
                name: 'NIT Puducherry',
                location: 'Karaikal, Puducherry, India',
                link: 'http://www.nitpy.ac.in/',
                description: 'National Institute of Technology Puducherry (NIT Puducherry or NITPY) is an autonomous public technical and research university located in the city of Karaikal in Union Territory of Puducherry and is a coastal enclave in the basin of river Kaveri within the Nagapattinam District of Tamil Nadu. It was founded and established in 2010 as one among the 31 National Institutes of Technology of India. The institute offers undergraduate and postgraduate programs in engineering, science, and humanities. The campus spans over 258 acres.',
                logoUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1681938661/eventhive/logo/nit/Puducherry_ogwgcf.png',
                imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717814/eventhive/photos/nit/Puducherry_m7iejr.jpg',
                functions: [
                    {
                        name: 'Hackathon',
                        description: 'A hackathon is a design sprint-like event in which computer programmers and others involved in software development, including graphic designers, interface designers, project managers, and others, collaborate intensively on software projects.',
                        imgUrl: 'https://res.cloudinary.com/dfa9vxyte/image/upload/v1680717809/eventhive/photos/nit/Sikkim_ryhbxl.png',
                    }
                ]
            },
        ]
    );

    // Create categories
    const categories = await Category.insertMany([
        {
            name: 'Technical'
        },
        {
            name: 'Non-Technical'
        }
    ]);

    // Create resources
    const resources = await Resource.insertMany([
        {
            name: 'Projector',
            description: 'A device that projects an image onto a surface',
            quantity: 5
        },
        {
            name: 'Microphone',
            description: 'A device used to amplify sound',
            quantity: 10
        }
    ]);

    // Create organizers
    const organizers = await Organizer.insertMany([
        {
            name: 'John Doe',
            email: 'johndoe@example.com',
            phone: '1234567890',
            college: colleges[0]._id
        },
        {
            name: 'Jane Smith',
            email: 'janesmith@example.com',
            phone: '9876543210',
            college: colleges[1]._id
        }
    ]);

    // Create participants
    const participants = await Participant.insertMany([
        {
            name: 'Alice Johnson',
            email: 'alicejohnson@example.com',
            college: colleges[0]._id
        },
        {
            name: 'Bob Anderson',
            email: 'bobanderson@example.com',
            college: colleges[1]._id
        }
    ]);

    // Create events
    const events = await Event.insertMany([
        {
            name: 'TechFest 2023',
            description: 'A festival of technology',
            date: '2023-10-15T18:00:00.000Z',
            location: 'IIIT Hyderabad',
            status: 'Upcoming',
            img: "https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074958/eventhive/iit/Varanasi_ifc13y.png",
            colleges: [colleges[0]._id],
            category: [categories[0]._id],
            resources: [resources[0]._id],
            participants: [participants[0]._id],
            organizers: [organizers[0]._id],
        },
        {
            name: 'HackMIT 2022',
            description: 'A hackathon organized by MIT',
            date: '2022-09-10T12:00:00.000Z',
            location: 'MIT',
            status: 'Finished',
            img: "https://res.cloudinary.com/dfa9vxyte/image/upload/v1679074954/eventhive/iit/Madras_agy2ys.png",
            colleges: [colleges[1]._id],
            category: [categories[0]._id],
            resources: [resources[1]._id],
            participants: [participants[1]._id],
            organizers: [organizers[1]._id],
        }
    ]);

    console.log('Data seeded');
    mongoose.connection.close();
});
