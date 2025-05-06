import React from 'react';

const Footer = () => {
    return (
        <div className='font-roboto bg-about"'>
            <footer class="mt-10 footer footer-center bg-footer  p-8">

                <aside>
                    <p class="font-light text-white text-base">© {new Date().getFullYear()} <a
                            href="https://indrojitmondal.github.io/Portfolio/"
                            target="_blank">Indrojit Mondal</a>. All Rights Reserved.</p>

                </aside>
            </footer>
        </div>
    );
};

export default Footer;