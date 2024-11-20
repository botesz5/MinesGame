document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('flipped');
        
        const frontImage = item.getAttribute('data-front'); 
        const backImage = item.getAttribute('data-back'); 
        

        if (item.classList.contains('flipped')) {
            item.style.backgroundImage = `url('${backImage}')`; 
        } else {
            item.style.backgroundImage = `url('${frontImage}')`; 
        }
    });
});