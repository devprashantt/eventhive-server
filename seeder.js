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
    const colleges = await College.insertMany([

        {
            name: 'IIIT Hyderabad',
            location: 'Hyderabad, India',
            link: 'https://www.iiit.ac.in/',
            imgUrl: 'http://www.iiit.ac.in/images/iiit-hyderabad-logo.png'
        },
        {
            name: 'MIT',
            location: 'Cambridge, Massachusetts',
            link: 'https://www.mit.edu/',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/MIT_Seal.svg/1200px-MIT_Seal.svg.png'
        },
        {
            name: 'IIT Kharagpur',
            location: 'Kharagpur, West Bengal',
            link: 'http://www.iitkgp.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT Bombay',
            location: 'Mumbai, Maharashtra',
            link: 'https://www.iitb.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT Madras ',
            location: 'Chennai, Tamil Nadu',
            link: 'https://www.iitm.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT Kanpur',
            location: 'Kanpur, Uttar Pradesh',
            link: 'https://www.iitk.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT Delhi',
            location: 'New Delhi ',
            link: 'https://home.iitd.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT Guwahati',
            location: 'Guwahati, Assam',
            link: 'https://www.iitg.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT Roorkee',
            location: 'Roorkee, Uttarakhand',
            link: 'https://www.iitr.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT Ropar',
            location: 'Rupnagar, Punjab',
            link: 'https://www.iitrpr.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT Bhubaneswar',
            location: 'Bhubaneswar, Odisha',
            link: 'https://www.iitbbs.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT Gandhinagar',
            location: 'Gandhinagar, Gujarat',
            link: 'https://iitgn.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT Hyderabad',
            location: 'Hyderabad, Telangana',
            link: 'https://iith.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT Jodhpur',
            location: 'Jodhpur, Rajasthan',
            link: 'https://www.iitj.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT Patna',
            location: 'Patna, Bihar',
            link: 'https://www.iitp.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT Indore',
            location: 'Indore, Madhya Pradesh',
            link: 'https://www.iiti.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT Mandi',
            location: 'Mandi, Himachal Pradesh',
            link: 'https://www.iitmandi.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT Varanasi',
            location: 'Varanasi, Uttar Pradesh',
            link: 'https://www.iitbhu.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT Palakkad',
            location: 'Palakkad, Kerala',
            link: 'https://iitpkd.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT Tirupati',
            location: 'Tirupati, Andhra Pradesh',
            link: 'https://www.iittp.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT (ISM) Dhanbad',
            location: 'Dhanbad, Jharkhand',
            link: 'https://www.iitism.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT Bhilai',
            location: 'Bhilai, Chhattisgarh',
            link: 'https://www.iitbhilai.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT Dharwad',
            location: ' Dharwad, Karnataka',
            link: 'https://www.iitdh.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT Jammu',
            location: 'Jammu, Jammu and Kashmir',
            link: 'https://www.iitjammu.ac.in/',
            imgUrl: ''
        },
        {
            name: 'IIT Goa',
            location: 'Goa',
            link: 'https://iitgoa.ac.in/',
            imgUrl: ''
        },
    ]);

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
