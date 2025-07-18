// CardsContainer.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from './Card';
import ai from "../assets/ai.png";
import iot from "../assets/iot.png"
import computer from "../assets/computer.jpeg"
import robot from "../assets/robot.png"
import olymp from "../assets/olymp.png"
import cir from "../assets/cir.jpg"
import training from "../assets/trainig.webp"
import cent from "../assets/centuary.png"
import compi from "../assets/compi.jpeg"
import policy from "../assets/policy.png"
import stem from "../assets/stem.jpeg"
import prep from "../assets/prep.png"
import learning from "../assets/learning.jpg"

const CardsContainer = () => {
    const cardsData = [
        { image: ai, header: 'AI in Education', subheader: 'Exploring the integration of artificial intelligence to enhance personalized learning, assessment, and administrative efficiency', link: '#' },
        { image: iot, header: 'Robotics and IoT', subheader: 'Investigating the role of robotics and Internet of Things (IoT) in creating interactive and engaging learning environments.', link: '#' },
        { image: computer, header: 'Digital Classrooms', subheader: 'Studying the effectiveness of digital tools and platforms in transforming traditional classrooms.', link: '#' },
        { image: learning, header: 'Experiential Learning', subheader: 'Examining the impact of hands-on, project-based learning on student engagement and achievement.', link: '#' },
        { image: cir, header: 'Innovative Teaching Methods', subheader: 'Developing and evaluating new teaching strategies that promote active learning and critical thinking', link: '#' },
        { image: compi, header: 'Competency-Based Education', subheader: 'Researching frameworks and practices that support individualized learning paths based on students mastery of skills.', link: '#' },
        { image: cent, header: '21st Century Skills', subheader: 'Assessing the development of digital literacy and other essential skills needed for success in a technology-driven world.', link: '#' },
        { image: training, header: 'Teacher Training', subheader: 'Evaluating the effectiveness of professional development programs in enhancing educators digital competencies.', link: '#' },
        { image: prep, header: 'Student Preparedness', subheader: 'Investigating how digital literacy influences students readiness for higher education and the workforce', link: '#' },
        { image: stem, header: 'STEM Education', subheader: 'Evaluating the effectiveness of professional development programs in enhancing educators digital competencies.', link: '#' },
        { image: policy, header: 'Policy Analysis', subheader: 'Analyzing the effects of local, national, and international education policies on teaching and learning. Providing evidence-based recommendations to policymakers to support effective and equitable education reforms', link: '#' }
    ];

    const chunkedCardsData = [];
    for (let i = 0; i < cardsData.length; i += 3) {
        chunkedCardsData.push(cardsData.slice(i, i + 3));
    }

    return (
        <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            interval={3000}
        >
            {chunkedCardsData.map((chunk, index) => (
                <div key={index} className="flex justify-around">
                    {chunk.map((card, subIndex) => (
                        <Card
                            key={subIndex}
                            image={card.image}
                            header={card.header}
                            subheader={card.subheader}
                            link={card.link}
                        />
                    ))}
                </div>
            ))}
        </Carousel>
    );
};

export default CardsContainer;
