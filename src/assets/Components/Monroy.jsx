import React from 'react'

export default function MyProfile() {
    return (
        <div className='container pt-4'>
            <div className="row">
                <div className="card pt-4">
                    <img src="./src/img/me.jpg" className="img-fluid w-25 h-50 mx-auto d-block rounded-circle" alt="Profile" />
                    <div className="card-body text-center">
                        <h2>Information</h2>
                        <strong>Name</strong><p>Cristian Alexander Monroy</p>
                        <strong>Age</strong><p>21 years</p>
                        <h3>About me</h3>
                        <p>Hello! I am passionate about programming and committed to personal and professional growth. My approach is based on responsibility, kindness and honesty, values that guide my work and my team relationships. In addition to working as a team, I have had the honor of leading collaborative projects that have strengthened my ability to communicate effectively and lead others to success. I believe in the importance of feedback, and I am always looking to learn from my colleagues and share my knowledge with them.</p>
                        <h3>Objective</h3>
                        <p>My goals include continuing to grow in the world of programming, contributing to innovative projects, and continuing to learn from my experiences and from those around me. I am always excited about the challenges that lie ahead and the opportunity to make a difference through technology.</p>
                    </div>
                    <div className="lenguajes">
                        <strong className='fs-4 text-warning'>Programming languages:</strong>
                        <ul>
                            <li>
                                <img src="./src/img/php.svg" alt="PHP" style={{ width: "30px", height: "30px" }} />
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">70%</div>
                                </div>
                            </li>
                            <li>
                                <img src="./src/img/c-sharp-c.svg" alt="C#" style={{ width: "25px", height: "25px" }} />
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "65%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">65%</div>
                                </div>
                            </li>
                            <li>
                                <img src="./src/img/javascript-js.svg" alt="PHP" style={{ width: "30px", height: "30px" }} />
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "65%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
                                </div>
                            </li>
                            <li>
                                <img src="./src/img/java.svg" alt="JAVA" style={{ width: "30px", height: "30px" }} />
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "40%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">40%</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="DataBase">
                        <strong className='fs-4 text-info'>Database managers:</strong>
                        <ul>
                            <li>
                                <img src="./src/img/mysql.svg" alt="MySql" style={{ width: "30px", height: "30px" }} />
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">70%</div>
                                </div>
                            </li>
                            <li>
                                <img src="./src/img/sqlserver.svg" alt="SqlServer" style={{ width: "30px", height: "30px" }} />
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">70%</div>
                                </div>
                            </li>
                            <li>
                                <img src="./src/img/mongo.svg" alt="MONGODB" style={{ width: "30px", height: "30px" }} />
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "45%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">45%</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="web">
                        <strong className='fs-4 text-success'>Web-page design:</strong>
                        <ul>
                            <li>
                                <img src="./src/img/html.svg" alt="HTML" style={{ width: "30px", height: "30px" }} />
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">90%</div>
                                </div>
                            </li>
                            <li>
                                <img src="./src/img/css.svg" alt="CSS" style={{ width: "30px", height: "30px" }} />
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                            </li>
                            <li>
                                <img src="./src/img/bootstrap.svg" alt="BOOTSTRAP" style={{ width: "30px", height: "30px" }} />
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">80%</div>
                                </div>
                            </li>
                            <li>
                                <img src="./src/img/react.svg" alt="REACT" style={{ width: "30px", height: "30px" }} />
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "35%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">35%</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>



    )
}
