import React from 'react'

export default function Home() {
    return (
        <main>
            <section className='container py-5'>
                <div className='row'>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src="https://wallpapercave.com/wp/wp11660073.jpg" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="https://www.xtrafondos.com/wallpapers/resized/todos-los-personajes-de-rick-y-morty-5642.jpg?s=large" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://images6.alphacoders.com/633/633294.png" className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-dark text-white fw-light">
                <h2>¡Bienvenidos!</h2>
                <p className='fs-3'>
                    "Esta es una fanpage oficial de 'Rick and Morty', Únete a nosotros en un alucinante viaje interdimensional lleno de aventuras extravagantes y humor ácido. Somos una comunidad apasionada que celebra esta innovadora serie de animación creada por Justin Roiland y Dan Harmon. Sigue las hilarantes travesías de Rick Sánchez, el brillante pero excéntrico científico alcohólico, y su nieto Morty Smith mientras exploran universos paralelos, desafían las leyes de la física y enfrentan situaciones cómicas y a menudo peligrosas. Aquí encontrarás imágenes de personajes favoritos. ¡Prepárate para adentrarte en la mente retorcida de Rick y disfrutar de momentos inolvidables junto a Morty! Fanpage dedicada a los fans de 'Rick and Morty'. <strong>¡Wubba lubba dub dub!</strong>"
                </p>
            </section>
            <section className='row text-white fw-light'>
                <div className="col-md-6">
                    <div className="bg-dark">
                        <img src="https://images7.alphacoders.com/633/633262.png" alt="" className="img-fluid" />
                        <h2>Rick Sánchez</h2>
                        <p className='fs-4'>
                            Rick Sánchez es uno de los personajes principales de la serie de animación "Rick and Morty". Es un brillante y excéntrico científico alcohólico que es conocido por ser el abuelo de Morty Smith. La serie sigue las aventuras de Rick y su nieto Morty a través de diferentes dimensiones y realidades paralelas.
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="bg-dark">
                        <img src="https://hips.hearstapps.com/hmg-prod/images/rick-and-morty-season-5-2-1623424070.jpg?crop=0.75xw:1xh;center,top&resize=1200:*" alt="" className="img-fluid" />
                        <h2>Morty Smith</h2>
                        <p className='fs-4'>
                            Morty Smith Es el nieto de Rick Sánchez y es el coprotagonista de la serie junto a su abuelo. Morty es un adolescente de aproximadamente 14 años que se ve envuelto en las extravagantes y peligrosas aventuras de su abuelo a través de distintas dimensiones.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
