import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logos, title, description, linkText, link } = props;
	let tools = ""
	console.log(logos)
	tools = logos.map((logo, i) => (
		<li key={i}>
			<span>
				<div>
					<i className={logo.class} style={{ fontSize: "100%" }}>
						<p
							className="text-center"
							style={{ fontSize: "30%" }}
						>
							{logo.name}
						</p>
					</i>

				</div>
			</span>
		</li>
	));
	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<ul className="project-icon">
							{tools}
						</ul>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>
							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
