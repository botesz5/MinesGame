document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('flipped');
        
        const frontImage = item.getAttribute('data-front'); 
        const backImage = item.getAttribute('data-back'); 
        console.log(frontImage);
        console.log(backImage);

        if (item.classList.contains('flipped')) {
            item.style.backgroundImage = `url('${backImage}')`; 
            console.log(item.style.backgroundImage);
        } else {
            item.style.backgroundImage = `url('${frontImage}')`; 
            console.log(item.style.backgroundImage);
        }
    });
});