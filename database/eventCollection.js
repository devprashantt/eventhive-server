const eventCollection = [
    {
        name: 'TechFest 2023',
        description: 'A festival of technology',
        date: '2023-10-15T18:00:00.000Z',
        location: 'IIIT Hyderabad',
        colleges: [colleges[0]._id],
        resources: [resources[0]._id],
        participants: [participants[0]._id],
        organizers: [organizers[0]._id],
        status: 'Upcoming'
    },
    {
        name: 'HackMIT 2022',
        description: 'A hackathon organized by MIT',
        date: '2022-09-10T12:00:00.000Z',
        location: 'MIT',
        colleges: [colleges[1]._id],
        resources: [resources[1]._id],
        participants: [participants[1]._id],
        organizers: [organizers[1]._id],
        status: 'Finished'
    }
]

export default eventCollection;