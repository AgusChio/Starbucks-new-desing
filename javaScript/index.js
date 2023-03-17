let menu = document.querySelector('.menu-icon')
let navbar = document.querySelector('.navbar')

menu.addEventListener('click', function () {
    navbar.classList.toggle('open-menu')
    menu.classList.toggle('move')
})
window.onscroll = () => {
    navbar.classList.remove('open-menu')
    menu.classList.remove('move')
}


// ---------- Contact Form -----------

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
});


// --------- Scroll top ----------

let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('scroll-active', window.scrollY > 0)
})


// ---------- EmailJS -----------

emailjs.init('Vf_ff7aWpioBKxarG');

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    emailjs.send("service_qwcrlvi","template_yvgg2zp", {
        from_name: name,
        from_email: email,
        message: message
    }).then(function (e) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Thank you for contacting us',
            text: "We will get back to you shortly",
            showConfirmButton: false,
            timer: 3000
        })
    })
    .catch(err => console.log(err))
});