const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';
    // contains() mengecek apakah class size sudah ada ?
    // jika sudah , akann hasilkan nilai TRUE
    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
        // console.log(this);
    }, 500);
});