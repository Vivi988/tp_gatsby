import React from 'react';
import { FaTwitter, FaGithub } from 'react-icons/fa';

const SocialLinks = () => (
    <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <a href="https://twitter.com" aria-label="Twitter" style={{ margin: '0 10px' }}><FaTwitter size={30} /></a>
        <a href="https://github.com" aria-label="Github"style={{ margin: '0 10px' }}><FaGithub size={30} /></a>
    </div>
);

export default SocialLinks;
