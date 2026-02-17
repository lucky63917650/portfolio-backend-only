import React from "react";
import "./App.css";

function App() {
    return (
        <div className="app">

            {/* NAVBAR */}
            <nav className="navbar">
                <div className="logo">Lucky Vishwakarma</div>

                <div className="nav-right">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>

                    <div className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/lucky-vishwakarma-a1a07b331/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://www.instagram.com/lucky_.vishwakarma/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Instagram
                        </a>
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <section className="hero">
                <div className="hero-container">

                    <div className="hero-text">
                        <p className="hero-tag">JAVA DEVELOPER</p>

                        <h1>Lucky Vishwakarma</h1>

                        <p className="hero-description">
                            I specialize in building scalable backend systems using Spring Boot
                            and MySQL, while creating modern and responsive user interfaces with React.
                            Focused on clean architecture, performance optimization,
                            and production-ready web applications.
                        </p>

                        <div className="hero-buttons">
                            <a href="/Lucky_Resume.pdf" download className="btn primary">
                                Download Resume
                            </a>

                            <a href="#contact" className="btn outline">
                                Get In Touch
                            </a>
                        </div>
                    </div>

                    <div className="hero-image">
                        <div className="profile-wrapper">
                            <img src="/profile.jpg" alt="Lucky Vishwakarma" />
                        </div>
                    </div>

                </div>
            </section>

            {/* ABOUT */}
            <section className="section" id="about">
                <h2>About Me</h2>
                <p>
                    Dedicated Java Developer with strong expertise in backend architecture,
                    RESTful API development, and database management.
                    I focus on writing clean, maintainable code and designing scalable systems
                    using structured layered architecture.
                </p>
            </section>

            {/* SKILLS */}
            <section className="section" id="skills">
                <h2>Technical Expertise</h2>

                <div className="skills-container">
                    <div className="skill-box">
                        <h3>Backend Development</h3>
                        <p>Java, Spring Boot, JDBC, REST API Design</p>
                    </div>

                    <div className="skill-box">
                        <h3>Database Systems</h3>
                        <p>MySQL, SQL Query Optimization, Database Design</p>
                    </div>

                    <div className="skill-box">
                        <h3>Frontend Development</h3>
                        <p>React JS, HTML5, CSS3, Responsive UI Design</p>
                    </div>

                    <div className="skill-box">
                        <h3>Development Practices</h3>
                        <p>MVC Architecture, API Integration, Git Version Control</p>
                    </div>
                </div>
            </section>

            {/* PROJECTS */}
            <section className="section" id="projects">
                <h2>Selected Projects</h2>

                <div className="project-card">
                    <h3>Student Management System</h3>
                    <p>
                        Enterprise-style CRUD application developed using Spring Boot,
                        JDBC, and MySQL with layered architecture for scalability.
                    </p>
                </div>

                <div className="project-card">
                    <h3>Personal Portfolio Website</h3>
                    <p>
                        Fully responsive portfolio built using React and integrated backend
                        services demonstrating full-stack capabilities.
                    </p>
                </div>
            </section>

            {/* CONTACT */}
            {/* CONTACT */}
            {/* CONTACT */}
            <section className="section contact" id="contact">
                <h2>Get In Touch</h2>

                <form
                    onSubmit={async (e) => {
                        e.preventDefault();

                        const data = {
                            name: e.target.name.value,
                            email: e.target.email.value,
                            message: e.target.message.value,
                        };

                        try {
                            const response = await fetch("http://localhost:8081/contact", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(data),
                            });

                            if (response.ok) {
                                alert("Message Sent Successfully ✅");
                                e.target.reset();
                            } else {
                                alert("Failed to send message ❌");
                            }

                        } catch (error) {
                            alert("Server not connected ❌");
                            console.error(error);
                        }
                    }}
                >
                    <input name="name" placeholder="Your Name" required />
                    <input name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" required />
                    <button type="submit">Send Message</button>
                </form>
            </section>
            <footer>
                © 2026 Lucky Vishwakarma | Java Developer
            </footer>

        </div>
    );
}

export default App;