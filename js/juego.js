function showElement(elementId) {
    var elements = document.querySelectorAll('.info');
    elements.forEach(function(element) {
        if (element.id === elementId) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}

function showDescription() {
    showElement('description');
}

function showRequirements() {
    showElement('requirements');
}

function showMinimumRequirements() {
    showElement('minimum-requirements');
}