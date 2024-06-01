document.querySelectorAll('input[type="range"]').forEach(function(range) {
    range.addEventListener('input', function() {
        this.style.setProperty('--value', this.value + '%');
    });
});
