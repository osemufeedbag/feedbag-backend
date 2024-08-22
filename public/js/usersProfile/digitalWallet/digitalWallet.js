let hasSelected = false;
        const identitySection = document.querySelector('.identity');
        const ninButtonEl = document.querySelectorAll('.ninContinue');
        const utiButtonEl = document.querySelectorAll('.utiContinue');
        const idButtonEl = document.querySelectorAll('.idContinue');

        ninButtonEl.forEach(button => {
            button.addEventListener('click', () => {
                if (!hasSelected) {
                    hasSelected = true;
                    document.getElementsByClassName("id").style.display = 'none';
                    document.getElementsByClassName("utility").style.display = 'none';
                    document.getElementsByClassName("selfiee").style.display = 'block';
                    document.getElementsByClassName("selfie").style.display = 'block';
                }
            });
        });

        
        utiButtonEl.forEach(button => {
            button.addEventListener('click', () => {
                if (!hasSelected) {
                    hasSelected = true;
                    document.getElementsByClassName("id").style.display = 'none';
                    document.getElementsByClassName("nin").style.display = 'none';
                    document.getElementsByClassName("selfiee").style.display = 'block';
                    document.getElementsByClassName("selfie").style.display = 'block';
                }
            });
        });

        
        idButtonEl.forEach(button => {
            button.addEventListener('click', () => {
                if (!hasSelected) {
                    hasSelected = true;
                    document.getElementsByClassName("utility").style.display = 'none';
                    document.getElementsByClassName("nin").style.display = 'none';
                    document.getElementsByClassName("selfiee").style.display = 'block';
                    document.getElementsByClassName("selfie").style.display = 'block';
                }
            });
        });