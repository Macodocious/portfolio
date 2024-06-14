import './components.js';
import './navigation.js';
import './project.js';

////////////////////////////////////////////////////////////////////////// Add security to external links //////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a');

    links.forEach(function(link) {
        if (link.getAttribute('href') && link.getAttribute('href').startsWith('http')) {
            link.setAttribute('rel', 'noopener noreferrer');
            link.setAttribute('target', '_blank');
        }
    });
});