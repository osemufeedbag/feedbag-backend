let hasSelected = false;

document.querySelectorAll('.kycContinue').forEach(button => {
    button.addEventListener('click', () => {
        if (!hasSelected) {
            hasSelected = true;
           /* document.querySelector(".id").style.display = 'none';
            document.querySelector(".utility").style.display = 'none';
            */
           document.querySelector(".identity").style.display = "none"
            document.querySelector(".selfiee").style.display = 'block';
            document.querySelector(".selfie").style.display = 'block';
        }
    });
});

document.querySelectorAll('.utiContinue').forEach(button => {
    button.addEventListener('click', () => {
        if (!hasSelected) {
            hasSelected = true;
          /*  document.querySelector(".id").style.display = 'none';
            document.querySelector(".nin").style.display = 'none';
            */
            document.querySelector(".identity").style.display = "none"
            document.querySelector(".selfiee").style.display = 'block';
            document.querySelector(".selfie").style.display = 'block';
        }
    });
});

document.querySelectorAll('.idContinue').forEach(button => {
    button.addEventListener('click', () => {
        if (!hasSelected) {
            hasSelected = true;
           /* document.querySelector(".utility").style.display = 'none';
            document.querySelector(".nin").style.display = 'none';
            */
            document.querySelector(".identity").style.display = "none"
            document.querySelector(".selfiee").style.display = 'block';
            document.querySelector(".selfie").style.display = 'block';
        }
    });
});
