import React, { Component } from "react";
import "./BigPanel.css";

class Footer extends Component {
    getProjectItem(item) {
        return (
            <div key={item.title} className="mb-2">
                <big>
                    <strong>{item.title}</strong>
                </big>
                <div>
                    <strong>Description: </strong>
                    {item.description}
                </div>
                <div>
                    <strong>Technologies: </strong>
                    {item.technologies.map((value, key) => (
                        <span key={key + value}>
                            {value}
                            {key + 1 !== item.technologies.length && ", "}
                        </span>
                    ))}
                </div>
            </div>
        );
    }

    getExperienceItem(item) {
        return (
            <div key={item.position} className="mb-2">
                <div className="row">
                    <big className="col-8">
                        <strong>{item.position}</strong>
                    </big>
                    <div className="col-4 text-right">{item.time}</div>
                </div>
                <div>
                    <strong>Company: </strong>
                    <big>{item.company}</big>
                </div>
                <div>
                    <strong>Responsibilities: </strong>
                    <ul>
                        {item.responsibilities.map((value, key) => (
                            <li key={key + value}>
                                <i className="fa fa-solid fa-chevron-right"></i>
                                {value}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    getEducationItem(item) {
        return (
            <div key={item.name} className="mb-2">
                <div className="row">
                    <big className="col-8">
                        <strong>{item.name}</strong>
                    </big>
                    <div className="col-4 text-right">{item.time}</div>
                </div>
                <div>
                    <strong>University: </strong>
                    {item.university}
                </div>
                <div>
                    <strong>Faculty: </strong>
                    {item.faculty}
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="big-panel">
                <h5>Projects</h5>
                {this.props.data.projects.map((item) =>
                    this.getProjectItem(item)
                )}
                <h5>Positions</h5>
                {this.props.data.experience.map((item) =>
                    this.getExperienceItem(item)
                )}
                <h5>Education</h5>
                {this.props.data.education.map((item) =>
                    this.getEducationItem(item)
                )}
            </div>
        );
    }
}

export default Footer;
