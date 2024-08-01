document.getElementById('businessType').addEventListener('click', function() {
    var dropdown = this.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.dropdown-item').forEach(function(item) {
    item.addEventListener('click', function() {
        var input = document.getElementById('businessType');
        input.value = this.textContent;
        this.parentElement.style.display = 'none';
    });
});

document.addEventListener('click', function(event) {
    var dropdown = document.querySelector('.dropdown');
    var businessTypeInput = document.getElementById('businessType');

    if (!businessTypeInput.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});