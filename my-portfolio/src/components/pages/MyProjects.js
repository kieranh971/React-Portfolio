import React from "react";

const myProjects = [
    {
        title: "Brunch Bites",
        description: "Visit this ReactJS app to find local brunch spots near you!",
        github: "https://github.com/PhalenH/brunch-bites",
        githubDepoloyed: "https://brunch-bites.herokuapp.com/",
        src: "Brunch Bites",
        alt: "BB-landing-page",
        id: 1
    },
    {
        title: "Hero App",
        description: "Check out this app that helps beginner web developers build their first site!",
        github: "https://github.com/lindamart/Interactive_FrontEnd_HeroApp",
        githubDepoloyed: "https://lindamart.github.io/Interactive_FrontEnd_HeroApp/",
        src: "Hero Helper",
        alt: "HH-app",
        id: 2
    },
    {
        title: "Password Generator",
        description: "Need a random password? This app is for you! A nice introduction to Javascript.",
        github: "https://github.com/kieranh971/password-generator",
        githubDepoloyed: "https://kieranh971.github.io/password-generator/",
        src: "PW Generator",
        alt: "PW-app",
        id: 3
    },
    {
        title: "Workout Tracker",
        description: "Lose track of your workouts easily? I don't workout but if I did I would definitely use this app to keep myself on track!",
        github: "https://github.com/kieranh971/Workout-Tracker",
        githubDepoloyed: "https://hidden-hamlet-34615.herokuapp.com/",
        src: "Workout Tracker",
        alt: "Tracker-App",
        id: 4
    },
]

export default function Projects() {
    return(
        <div>
            <h1>My Projects</h1>
            {myProjects.map((project) => (
                <div key={project.id}>
                    <div className="img-container">
                        <img className="img-go-here" src={require(`../../assets/${project.src}.PNG`)} alt={project.alt}/>
                    </div>
                    <div className="project-info">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <a href={project.githubDepoloyed}>Live Application</a>
                        <a href={project.github}>Github Repository</a>
                    </div>
                </div>
            ))}
        </div>
    )
}