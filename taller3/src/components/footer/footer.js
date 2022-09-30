import './footer.css';

function Footer() {
    return(
        <footer id="footer">
        <div class="footer">
        <div class="col01">
            <div class="col1">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aspernatur, officiis delectus quas distinctio eligendi, debitis dolores obcaecati accusamus sequi ad recusandae hic, nostrum doloremque expedita similique aliquid aliquam asperiores!</p>
            </div>
            <div class="icons">
                <div class="iconp"><i class="fa-brands fa-instagram"></i></div>
                <div class="iconp"><i class="fa-brands fa-facebook-f"></i></div>
                <div class="iconp"><i class="fa-brands fa-twitter"></i></div>
            </div>
        </div>
        <hr class="footer-hr" noshade=""/>
            <div class="col2">
                <p class="location"><i class="fa-solid fa-location-dot"></i>  Avenida carrera 8. #12A-42. Bogotá DC, Colombia </p>
                <p class="phone"><i class="fa-solid fa-phone">  +57 601 4567899</i></p>
            </div>
            <hr class="footer-hr" noshade="" />
            <div class="col3">
                <a href="">Politicas de privacidad</a>
                <a href="">Politicas de privacidad</a>
            </div>
            <hr class="footer-hr" noshade="" />
            <div class="icons1">
                <div class="iconp"><i class="fa-brands fa-instagram"></i></div>
                <div class="iconp"><i class="fa-brands fa-facebook-f"></i></div>
                <div class="iconp"><i class="fa-brands fa-twitter"></i></div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;