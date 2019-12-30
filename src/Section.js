import React from 'react';
import './Section.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
Requires: 
section
info1 - first paragraph
info2 - second paragraph
info3 - third paragraph
technologies - technology experience
*/



function AboutSection(props){
	return(
		<div className = {props.section} id = {props.section}>
			<h1>{props.section}</h1>
			<div className = "content">
				{props.info1}
				<br/><br/>
				{props.info2}
				<br/><br/>
				{props.info3}
				<br/><br/>
				<ul>
					{props.technologies.map(txt=> <li><span>{txt}</span></li>)}
				</ul>
			</div>
		</div>
	);
}


function ExperienceSection(props){
	return(
		<div className = {props.section} id= {props.section}>
			<h1>{props.section}</h1>
		</div>
	);
}

export {AboutSection, ExperienceSection}