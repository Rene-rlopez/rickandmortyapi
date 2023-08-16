import React from 'react'
import femaleAvatar from '../img/female_avatar.svg'
import maleAvatar from '../img/male_avatar.svg'
import teamAvatar from '../img/personal_site.svg'

export default function MyProfile() {
    return (

        <main className='developers text-center'>
            <h2>Developers</h2>
            <h3>Estos son los integrantes del equipo que desarrollo este sitio:</h3>

            <div id="carousel-integrantes" class="carousel carousel-dark slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carousel-integrantes" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel-integrantes" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousel-integrantes" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carousel-integrantes" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carousel-integrantes" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carousel-integrantes" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={teamAvatar} class="d-block w-100" alt="Inicio" />
                    </div>

                    <div class="carousel-item">
                        <div className='container'>
                            <img src={maleAvatar} class="imgDeveloper rounded-circle" alt="..." />
                            <p className='textDeveloper'>Hello! I am passionate about programming and committed to personal and professional growth. My approach is based on responsibility, kindness and honesty, values that guide my work and my team relationships. In addition to working as a team, I have had the honor of leading collaborative projects that have strengthened my ability to communicate effectively and lead others to success. I believe in the importance of feedback, and I am always looking to learn from my colleagues and share my knowledge with them.</p>
                            <div>
                                <strong>Cristian Monroy</strong>
                                <p className='textInfo text-center'>Software Developer</p>
                                <div>
                                <i class="fa-brands fa-github m-2"></i>
                                <i class="fa-brands fa-linkedin m-2"></i>
                                <i class="fa-brands fa-wordpress m-2"></i>
                                <i class="fa-brands fa-instagram m-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div className='container'>
                            <img src={femaleAvatar} class="imgDeveloper rounded-circle" alt="..." />
                            <p className='textDeveloper'>Hello! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet metus congue, eleifend leo non, elementum ante. Aliquam tellus nibh, tincidunt et rutrum a, elementum in dolor. Cras rutrum nunc sapien, in efficitur justo pulvinar quis. Pellentesque porttitor magna eget eros suscipit lobortis. Sed eleifend dictum nulla, vitae luctus erat venenatis id. Proin mattis neque sit amet nulla aliquet, ut porta ipsum egestas. Aliquam tristique sollicitudin blandit.</p>
                            <div>
                                <strong>Juliana Baleta</strong>
                                <p className='textInfo text-center'>Software Developer</p>
                                <div>
                                <i class="fa-brands fa-github m-2"></i>
                                <i class="fa-brands fa-linkedin m-2"></i>
                                <i class="fa-brands fa-wordpress m-2"></i>
                                <i class="fa-brands fa-instagram m-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div className='container'>
                            <img src={maleAvatar} class="imgDeveloper rounded-circle" alt="..." />
                            <p className='textDeveloper'>Hello! Aenean dapibus gravida massa quis vestibulum. Nulla auctor lobortis sapien, eget convallis diam venenatis eu. Nam rutrum quis lectus et egestas. Cras ac tellus porttitor, rutrum nibh ut, malesuada dui. Sed lobortis, elit at congue condimentum, risus lectus varius nibh, vitae rutrum turpis ipsum sit amet massa. Nulla facilisi. Mauris molestie dignissim eros, et pellentesque erat pretium at. Aliquam quis mattis dui. Vestibulum finibus maximus orci, at aliquet metus commodo ac. Cras molestie sapien a tellus ultrices gravida. Mauris eu commodo tortor, a placerat diam.</p>
                            <div>
                                <strong>Francisco Marín</strong>
                                <p className='textInfo text-center'>Software Developer</p>
                                <div>
                                <i class="fa-brands fa-github m-2"></i>
                                <i class="fa-brands fa-linkedin m-2"></i>
                                <i class="fa-brands fa-wordpress m-2"></i>
                                <i class="fa-brands fa-instagram m-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div className='container'>
                            <img src={femaleAvatar} class="imgDeveloper rounded-circle" alt="..." />
                            <p className='textDeveloper'>Hello! Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            <div>
                                <strong>Liliana Aguilar</strong>
                                <p className='textInfo text-center'>Software Ingenier</p>
                                <div>
                                <i class="fa-brands fa-github m-2"></i>
                                <i class="fa-brands fa-linkedin m-2"></i>
                                <i class="fa-brands fa-wordpress m-2"></i>
                                <i class="fa-brands fa-instagram m-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <div className='container'>
                            <img src={maleAvatar} class="imgDeveloper rounded-circle" alt="..." />
                            <p className='textDeveloper'>Hello! At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                            <div>
                                <strong>René López</strong>
                                <p className='textInfo text-center'>Software Developer</p>
                                <div>
                                <i class="fa-brands fa-github m-2"></i>
                                <i class="fa-brands fa-linkedin m-2"></i>
                                <i class="fa-brands fa-wordpress m-2"></i>
                                <i class="fa-brands fa-instagram m-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel-integrantes" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel-integrantes" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </main>

    )
}