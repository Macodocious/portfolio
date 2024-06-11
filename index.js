// For security

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a');

    links.forEach(function(link) {
        if (link.getAttribute('href') && link.getAttribute('href').startsWith('http')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});