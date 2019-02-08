import React, { Component } from 'react';
import './SmallPanel.css';

class SmallPanel extends Component {

  getContactInfo(key) {
    return (
      <li key={key}>
        <div className="list-icon">
          <i className={"mr-2 fa fa-" + key}></i>
        </div>
        <span>{this.props.data.contact[key]}</span>
      </li>
    );
  }

  getProgrammingSkill(key) {
    return (
      <li key={key}>
        <strong>{key}:</strong>
        {this.props.data.programingSkills[key].map(item => this.getProgrammingSkillItem(item, true))}
      </li>
    );
  }

  getProgrammingSkillItem(item, offset = false) {
    return (
      <div className="row" key={item.name}>
        {offset && <div className="offset-1"></div>}
        <div className={offset ? "col-6" : "col-7"}>{item.name}</div>
        <div className="col-5 text-right">
          {this.getStars(item)}
        </div>
      </div>
    );
  }

  getStars(item) {
    const total = 5;
    const half = !Number.isInteger(item.rate) ? 1 : 0;
    const stars = parseInt(item.rate)
    const empty = total - stars - half;
    let starsArray = [];

    for (let i = 0; i < stars; i++) { starsArray.push(<i key={item.name + i} className="fa fa-star"></i>) };
    if (half) starsArray.push(<i key={item.name + stars + half} className="fa fa-star-half-o"></i>);
    for (let i = 0; i < empty; i++) { starsArray.push(<i key={item.name + stars + half + i} className="fa fa-star-o"></i>) };

    return (
      <span>
        {starsArray}
      </span>
    );
  }

  render() {
    return (
      <div className="small-panel">
        <h4>Contact</h4>
        <ul>{Object.keys(this.props.data.contact).map(key => this.getContactInfo(key))}</ul>
        <h4>Programing Skills</h4>
        <ul>{Object.keys(this.props.data.programingSkills).map(key => this.getProgrammingSkill(key))}</ul>
        <h4>Languages</h4>
        <ul>{this.props.data.languages.map(item => this.getProgrammingSkillItem(item))}</ul>
        <h4>Hobbies</h4>
        <div className="row">
          {this.props.data.hobbies.map(item => <div key={item} className="col-6">{item}</div>)}
        </div>
      </div>
    );
  }
}

export default SmallPanel;
