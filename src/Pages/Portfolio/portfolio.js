import React from 'react';
import Card from 'react-bootstrap/Card';
import Choovie from '../../Assets/images/choovie.png';
import WorkDayScheduler from '../../Assets/images/workdayscheduler.png';

export default function Portfolio() {
    return (
        <div class="work">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ Choovie } />
            <Card.Body>
                <Card.Title>Choovie</Card.Title>
                <Card.Text>
                 Choovie is a website that will help you pick the perfect movie for movie night!
                </Card.Text>
            </Card.Body>
            <Card.Body>
                    <Card.Link href="https://kmelissasantos.github.io/Choovie/">Link to Deployed Site</Card.Link>
                    <Card.Link href="https://github.com/kmelissasantos/choovie">Link to GitHub Repo</Card.Link>
            </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ WorkDayScheduler } />
            <Card.Body>
                <Card.Title>WorkDayScheduler</Card.Title>
                <Card.Text>
                Get together with your community through our website called Local Machine!
                </Card.Text>
            </Card.Body>
            <Card.Body>
                    <Card.Link href="https://github.com/kmelissasantos/Work-Day-Scheduler">Link to Deployed Site</Card.Link>
                    <Card.Link href="https://kmelissasantos.github.io/Work-Day-Scheduler/">Link to GitHub Repo</Card.Link>
            </Card.Body>
        </Card>
        </div>
    )
}
