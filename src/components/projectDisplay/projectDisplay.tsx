import React, { Component } from 'react';
import { projects } from './projects'
import './projectDisplayStyles.css'
import ProjectCard from './projectCard'

class DisplayProjects extends Component<{}, { tempSave: Object }> {


    // hoverEvent = () => {
    //     let cards = []
    //     let currentCard;
    //     for (let i = 0; i < projects.length; i++) {
    //         currentCard = document.getElementsByClassName(`project${i}`);
    //         currentCard.addEventListener('mouseenter',)
    //     }
    // }

    render() {

        // https://codepen.io/gabrielajohnson/pen/EMVxEL Look At this later!
        let tempSave = { title: "", url: "", image: "", information: "" }
        return (
            <div className="wrapper">
                <h1>Projects</h1>
                {projects.map((project: { title: string, url: string, image: string, information: string }, index: number) => {
                    if ((index + 1) % 2 === 0) {
                        return (
                            <div className="row cardRow" key={index}>
                                <ProjectCard title={tempSave.title} url={tempSave.url} image={tempSave.image} information={tempSave.information} index={index - 1}></ProjectCard>
                                <ProjectCard title={project.title} url={project.url} image={project.image} information={project.information} index={index}></ProjectCard>
                            </div>
                        )
                    }
                    // This one is buggy when using an uneven number of projects
                    if (index + 1 === projects.length && (index + 1) % 2 !== 0) {
                        return (
                            <div className="row cardRow" key={index}>
                                <ProjectCard title={project.title} url={project.url} image={project.image} information={project.information} index={index}></ProjectCard>
                            </div>
                        )
                    }
                    tempSave = { title: project.title, url: project.url, image: project.image, information: project.information }
                    return false
                })}
                {/* {this.hoverEvent()} */}
            </div>
        )
    }
}

export default DisplayProjects;