// Data structure for cards

const data = [
    {
        type: 'workout',
        thumb: '/images/lake-inniscarra-thumb.jpg',
        trainer: '/images/lake-inniscarra-trainer.jpg',
        title: 'Lake Inniscarra, Ireland—Pyramid',
        metricTime: '30:53',
        metricDistance: '6,248 M',
        details: 'Awesome details about the workout.'
    },
    {
        type: 'series',
        workouts: ['id_1', 'id_2', 'id_3', 'id_4', 'id_5', 'id_6', 'id_7', 'id_8', 'id_9' ],
        thumb: '../images/performance-series-thumb.jpg',
        trainer: '../images/performance-series-trainer.jpg',
        title: 'Performance Series',
    },
    {
        type: 'workout',
        thumb: '../images/slow-pulls-thumb.jpg',
        trainer: '../images/slow-pulls-trainer.jpg',
        title: 'Slow Pulls and Fast Intervals',
        metricTime: '44:13',
        metricDistance: '9,948 M',
        details: ''
    },
    {
        type: 'series',
        workouts: ['id_1', 'id_2', 'id_3', 'id_4', 'id_5', 'id_6', 'id_7', 'id_8', 'id_9', 'id_10', 'id_11', 'id_12' ],
        thumb: '../images/20-minutes-to-toned-thumb.jpg',
        trainer: '../images/20-minutes-to-toned-trainer.jpg',
        title: '20 Minutes to Toned',
    },
    {
        type: 'workout',
        thumb: '../images/charles-race-thumb.jpg',
        trainer: '../images/charles-race-trainer.jpg',
        title: 'Charles Race, Boston, Massachusetts',
        metricTime: '36:22',
        metricDistance: '8,648 M',
        details: ''
    },
    {
        type: 'series',
        workouts: ['id_1', 'id_2', 'id_3', 'id_4', 'id_5', 'id_6', 'id_7', 'id_8', 'id_9', 'id_10', 'id_11', 'id_12' ],
        thumb: '../images/full-body-hiit-thumb.jpg',
        trainer: '../images/full-body-hiit-trainer.jpg',
        title: 'Full-Body HIIT Series',
    },
    {
        type: 'workout',
        thumb: '../images/kafue-river-thumb.jpg',
        trainer: '../images/kafue-river-trainer.jpg',
        title: 'Kafue River, Zambia—Power Stroke Pyramid',
        metricTime: '36:22',
        metricDistance: '8,648 M',
        details: ''
    },
    {
        type: 'series',
        workouts: ['id_1', 'id_2', 'id_3', 'id_4', 'id_5', 'id_6', 'id_7', 'id_8', 'id_9', 'id_10', 'id_11', 'id_12', 'id_13', 'id_14', 'id_15', 'id_16' ],
        thumb: '../images/shred-and-burn-thumb.jpg',
        trainer: '../images/shred-and-burn-trainer.jpg',
        title: 'Shred & Burn Series',
    }
];

export default data;