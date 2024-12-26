// Fonction pour faire défiler vers la section des fonctionnalités
function scrollToFeatures() {
    document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
}

// Écouteur d'événements pour le formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    
    const name = this[0].value.trim();
    const email = this[1].value.trim();

    if (name === "" || email === "") {
        alert("Veuillez remplir tous les champs.");
    } else {
        alert("Merci pour votre inscription !");
        this.reset();
    }
});

// Fonction pour détecter le défilement et ajouter la classe visible
function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100) { // Ajustez ce seuil selon vos besoins
            element.classList.add('visible');
        }
    });
}

// Écouteur d'événements pour le défilement
window.addEventListener('scroll', handleScroll);
handleScroll(); // Appel initial pour vérifier les éléments visibles au chargement
