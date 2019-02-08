import React, { Component } from 'react';
import './BigPanel.css'

class Footer extends Component {

    getProjectItem(item) {
        return (
            <div key={item.title} className="mb-2">
                <big><strong>{item.title}</strong></big>
                <div><strong>Description: </strong>{item.description}</div>
                {item.demo && <div><strong>Demo: </strong> <a href={item.demo}>{item.demo}</a></div>}
                <small>
                    <strong>Keywords: </strong>
                    {item.technologies.map((value, key) => <span key={key + value}>{value}{key + 1 !== item.technologies.length && ', '}</span>)}
                </small>
            </div>
        );
    }

    getExperienceItem(item) {
        return (
            <div key={item.position} className="mb-2">
                <div className="row">
                    <big className="col-8"><strong>{item.position}</strong></big>
                    <div className="col-3">{item.time}</div>
                </div>
                <div><strong>Company: </strong>{item.company}</div>
            </div>
        );
    }


    getEducationItem(item) {
        return (
            <div key={item.name} className="mb-2">
                <div className="row">
                    <big className="col-8"><strong>{item.name}</strong></big>
                    <div className="col-3">{item.time}</div>
                </div>
                <div><strong>University: </strong>{item.university}</div>
                <small><strong>Faculty: </strong>{item.faculty}</small>
            </div>
        );
    }

    render() {
        return (
            <div className="big-panel">
                <h5>Soft Skills</h5>
                {this.props.data.softSkills.map(item => <div key={item}><strong>{item}</strong></div>)}
                <h5>Projects</h5>
                {this.props.data.projects.map(item => this.getProjectItem(item))}
                <h5>Experience</h5>
                {this.props.data.experience.map(item => this.getExperienceItem(item))}
                <h5>Education</h5>
                {this.props.data.education.map(item => this.getEducationItem(item))}
            </div>
        );
    }
}

export default Footer;
