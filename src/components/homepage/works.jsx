import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import "./styles/works.css";
import INFO from "../../data/user";
const WorkIcon = () => <></>;

const Works = () => {
	return (
		<div className="work">
			<VerticalTimeline lineColor={'rgb(128, 128, 128)'}>
        		{INFO.experiences.map((experience, index) => (
          			<VerticalTimelineElement
            			key={index}
						contentArrowStyle={{ borderRight: "10px solid  rgb(128, 128, 128)" }}
            			date={experience.date}
            			icon={<WorkIcon />}
            			iconStyle={{ background: 'rgb(128, 128, 128)', color: '#ccc' }}
          			>
            			<h3 className="timeline-title">{experience.title}</h3>
            			<h4 className="timeline-title">{experience.company}</h4>
            			<ul>
              				{experience.description.map((point, i) => (
                				<li key={i} className="work-description">{point}</li>
              				))}
            			</ul>
          			</VerticalTimelineElement>
        		))}
      		</VerticalTimeline>
	  	</div>
	);
};

export default Works;
