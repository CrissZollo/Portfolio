import React, { Component } from 'react';

interface Props {
    title: string;
    url: string;
    image: string;
    information: string;
    index: number;
}

class ProjectCard extends Component<Props, { display: string }> {

    state = {
        title: this.props.title,
        url: this.props.url,
        image: this.props.image,
        information: this.props.information,
        index: this.props.index,
        display: "none"
    }

    render() {
        return (
            <div className="project-card" onMouseEnter={() => { this.setState({ display: 'block' }) }} onMouseLeave={() => { this.setState({ display: 'none' }) }}>
                <div className="inforamtion row">
                    <img className={`project-image project project${this.state.index}`} src={this.state.image} alt={this.state.title} />
                    <div className={`text text${this.state.index}`} style={{ display: this.state.display }}>
                        <h2>{this.props.title}</h2>
                        <p>{this.props.information}</p>
                        <a href={this.state.url}>Test out {this.state.title}</a>
                    </div>
                </div>
            </div>
        )
    }
}


export default ProjectCard;