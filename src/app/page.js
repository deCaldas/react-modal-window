"use client"
 
import React, { useState } from 'react';
import Modal from '../../components/modal';

function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
    <button onClick={openModal}>&gt; Contact Info &lt;</button>
    <Modal show={modalIsOpen} onClose={closeModal}>
    <h3>
        Contact through social networks
    </h3>
    <div>
        <ol>
        <li>
          <a href="https://github.com/deCaldas" target="_blank">
            <button
                variant="ghost"
                colorScheme="teal"
                leftIcon={'<IoLogoGithub />'}
                >&#64;deCaldas
            </button>
          </a>
        </li>
        <li>
            <a href="https://twitter.com/d_caldasCaridad" target="_blank">
            <button
                variant="ghost"
                colorScheme="teal"
                leftIcon={'<IoLogoTwitter />'}
                >&#64;d_caldasCaridad
            </button>
            </a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/torocardo" target="_blank">
            <button
                variant="ghost"
                colorScheme="teal"
                leftIcon={'<IoLogoLinkedin />'}
                >&#64;Diego Toro Cárdenas
            </button>
            </a>
        </li>
        </ol>
    </div>
    <br />
    <button onClick={closeModal}>Cerrar</button>
    </Modal>
</div>
  );
}

export default Home;
