const data = [{
    id: 1,
    img: "./assets/mexico.jpg",
    googleHref: "https://www.google.com/maps?q=Guadalajara&ftid=0x8428b18cb52fd39b:0xd63d9302bf865750",
    country: "mexico",
    title: "Vibrant-colorful-culture",
    date: "January 2022 - May 2022",
    description: "I enjoyed my time in Mexico because of the warmth and friendliness of the people. The locals were always welcoming and eager to share their culture with me. Additionally, I loved the opportunity to go cycling and explore the beautiful countryside. Guadalajara was a particularly wonderful city, with its charming historic districts and vibrant culture. I felt so at home there."
    
},
{
    id: 2,
    img: "./assets/costa-rica.jpg",
    googleHref: "https://www.google.com/maps/place/Guanacaste+Province,+Hojancha,+Costa+Rica/@10.0580857,-85.4278958,15z/data=!3m1!4b1!4m5!3m4!1s0x8f9fbab6419868c1:0x5fc5a738d1b6b9de!8m2!3d10.057561!4d-85.4195011",
    country: "costa rica",
    title: "Pura Vida",
    date: "October 2021 - January 2022",
    description: "I particularly enjoyed hiking through the jungle and seeing all the different plants and wildlife. The natural beauty of Hojancha left a lasting impression on me and I hope to return someday."
    
},
{
    id: 3,
    img: "./assets/china.jpg",
    googleHref: "https://www.google.com/maps/place/Liaoning,+China/@40.7818394,117.7136392,7z/data=!3m1!4b1!4m5!3m4!1s0x358f5e2ea41fd385:0x7b5a542ee2054d00!8m2!3d41.8357099!4d123.42925",
    country: "China",
    title: "Add Oil - 加油 💪",
    date: "January 2018 - September 2021",
    description: "I loved teaching in China, it was an incredibly rewarding experience. I had the opportunity to interact with locals and make many new friends. I also enjoyed cycling with my friends, exploring the countryside and seeing all the beautiful sights. The culture was so different from home, but I found it to be incredibly fascinating. I will always treasure my time in China and the memories I made there."  
},
{
    id: 4,
    img: "./assets/dumaguete.jpg",
    googleHref: "https://www.google.com/maps/place/Dumaguete,+Negros+Oriental,+Philippines/@9.2957317,123.2645578,14z/data=!3m1!4b1!4m5!3m4!1s0x33ab6edb788ea0f7:0xd79dfe9b5bfc37fb!8m2!3d9.3068402!4d123.3054467",
    country: "the philippines",
    title: "Hiding From COVID",
    date: "January 2020 - March 2020",
    description: "I had an amazing time in the Philippines, particularly in Cebu. The beaches were beautiful and the local culture was fascinating. I found the people to be incredibly friendly and welcoming. My original plans were to stay for a short period of time, but due to the outbreak of COVID-19 in China, I decided to extend my stay in the Philippines. I felt safe and comfortable there, so I wanted to wait out the outbreak before returning home."  
},
{
    id: 5,
    img: "./assets/kep.jpg",
    googleHref: "https://www.google.com/maps/place/Kep+Province,+Cambodia/@10.4924848,104.2760596,12z/data=!3m1!4b1!4m5!3m4!1s0x310836851a8b389f:0x1d6a42c22bd268ae!8m2!3d10.536089!4d104.3559158",
    country: "cambodia",
    title: "Finding Balance",
    date: "January 2019 - February 2019",
    description: "I had an amazing time at the yoga retreat in Kep, Cambodia. The setting was truly serene and peaceful, surrounded by lush greenery and the sound of nature. The daily yoga classes were challenging yet invigorating, and I felt my mind and body becoming stronger and more flexible. I also appreciated the opportunity to connect with other like-minded individuals and to learn from experienced yoga instructors. Overall, it was a truly transformative experience that I will always remember."  
},
{
    id: 6,
    img: "./assets/germany.jpg",
    googleHref: "https://www.google.com/maps/place/Berlin,+Germany/@52.5067614,13.2846511,11z/data=!3m1!4b1!4m5!3m4!1s0x47a84e373f035901:0x42120465b5e3b70!8m2!3d52.5200066!4d13.404954",
    country: "germany",
    title: "Study Abroad Experience",
    date: "July 2014 - September 2014",
    description: "Studying abroad in Germany at Technische Universität Berlin was an incredible opportunity. The classes were rigorous and academically stimulating, and I learned so much about my field of study. I also had the privilege of traveling around the country on extended weekends, seeing famous historical sites like concentration camps, the Reichstag, Neuschwanstein Castle, and the church where Martin Luther nailed his theses. These experiences gave me a deeper appreciation for Germany's history and culture and have left a lasting impression on me. I will always remember the time I spent in Germany, it was an amazing and enriching experience."  
},
{
    id: 7,
    img: "./assets/puerto-rico.jpg",
    googleHref: "https://www.google.com/maps/place/San+Jos%C3%A9,+San+Juan,+00923,+Puerto+Rico/@18.3969577,-66.0348735,12.56z/data=!4m5!3m4!1s0x8c036617bdfa15eb:0x97da39deea3c019f!8m2!3d18.4180025!4d-66.0329433",
    country: "puerto rico",
    title: "Training in Paradise",
    date: "January 2014",
    description: "I had an unforgettable experience on my winter swim training trip to Puerto Rico with Calvin University's swim team. The warm weather and crystal clear waters were a welcome change from the colder temperatures and indoor pools we were used to. We trained hard every day, pushing ourselves to improve and achieve our goals. The coaches and team members were supportive and encouraging, creating a great team dynamic. The trip was not only an opportunity to improve our swimming skills but also a chance to bond and make lasting memories with my teammates. The culture and beauty of Puerto Rico was a bonus, being able to explore the island, its food and its people was an amazing experience."  
},
{
    id: 8,
    img: "./assets/japan.jpg",
    googleHref: "https://www.google.com/maps/place/Tokyo,+Japan/@35.5079446,139.2093999,9z/data=!3m1!4b1!4m5!3m4!1s0x605d1b87f02e57e7:0x2e01618b22571b89!8m2!3d35.6761919!4d139.6503106",
    country: "puerto rico",
    title: "Discovering the Authentic Japan",
    date: "August 2013",
    description: "I had the privilege of visiting Japan many years ago and reconnecting with my former Japanese exchange student, Takuya. He was the perfect guide, showing me the ins and outs of the country and introducing me to authentic Japanese culture. I also had the opportunity to explore the bustling metropolis of Tokyo. Takuya showed me around the city, taking me to see famous landmarks such as the Tokyo Tower and the Meiji Shrine. I was amazed by the bright lights and energy of the city, and I enjoyed trying all the different street foods and shopping at the colorful markets."  
},
{
    id: 9,
    img: "./assets/hawaii.jpg",
    googleHref: "https://www.google.com/maps/place/O%E2%80%98ahu/@21.4836959,-158.105312,11z/data=!3m1!4b1!4m5!3m4!1s0x7c006632db726b03:0xd9587d69906fcbc3!8m2!3d21.4389123!4d-158.0000565",
    country: "Hawaii",
    title: "Island Adventures",
    date: "July 2013",
    description: "Visiting my brother in Hawaii was a trip of a lifetime. The beautiful islands offered a diverse range of activities that allowed me to fully immerse myself in the natural beauty of the state. My brother, an experienced sailor, took me sailing on his boat around the islands, we explored hidden coves, saw sea turtles and dolphins swimming alongside us and even caught a few fish. It was an incredible experience to feel the wind in my hair and the sun on my face as we glided across the water. We also went kayaking and explored the crystal clear waters of the islands, visiting remote beaches and snorkeling in the coral reefs. The diverse marine life was truly breathtaking, and I will always remember the colorful fish and sea turtles that we saw."  
}
]

export default data;
