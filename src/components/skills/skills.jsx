import React from "react";
import INFO from "../../data/user";
import "./styles/skills.css";

const Skills = () => {
	let skills1 = [];
	let skills2 = [];
	let skills3 = [];
	
	skills1 = INFO.icons1.map((skill, i) => (
		<li key={i}>
			<span>
				<div>
					<i className={skill.class} style={{ fontSize: "220%" }}>
						<p style={{ fontSize: "30%", marginTop: "4px" }}>
							{skill.name}
						</p>
					</i>
				</div>
			</span>
		</li>
	));

	skills2 = INFO.icons2.map((skill, i) => (
		<li key={i}>
			<span>
				<div>
					<i className={skill.class} style={{ fontSize: "220%" }}>
						<p
							className="text-center"
							style={{ fontSize: "30%", marginTop: "4px" }}
						>
							{skill.name}
						</p>
					</i>
				</div>
			</span>
		</li>
	));

	skills3 = INFO.icons3.map((skill, i) => (
		<li key={i}>
			<span>
				<div>
					<i className={skill.class} style={{ fontSize: "220%" }}>
						<p
							className="text-center"
							style={{ fontSize: "30%", marginTop: "4px" }}
						>
							{skill.name}
						</p>
					</i>
				</div>
			</span>
		</li>
	));

	return (
		<section>
				<div className="all-skills-container">
					<ul className="list-inline mx-auto skill-icon">
						{skills1}
					</ul>
					<ul className="list-inline mx-auto skill-icon">
						{skills2}
					</ul>
					<ul className="list-inline mx-auto skill-icon">
						{skills3}
					</ul>
				</div>
		</section>
	);
};

export default Skills;
