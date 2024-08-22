let hasSelected = false;
        const identitySection = document.querySelector('.identity');
        const continueButtons = document.querySelectorAll('.kycContinue');

        continueButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (!hasSelected) {
                    hasSelected = true;
                    identitySection.style.display = 'none';
                }
            });
        });