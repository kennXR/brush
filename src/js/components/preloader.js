export default class PreLoader {
    constructor() {
        this.preloader = document.getElementById('preloader');
}

show() {
    this.preloader.style.display = 'flex';
    gsap.fromTo(this.preloader, {
        opacity: 0
    }, {
        duration: 1,
        opacity: 1,
        ease: 'power2.out'
    });
}

hide() {
    gsap.to(this.preloader, {
        duration: 2,
        delay: 2,
        opacity: 0,
        ease: 'power2.out',
        onComplete: () => {
            this.preloader.style.display = 'none';
        }
    });
}

}
