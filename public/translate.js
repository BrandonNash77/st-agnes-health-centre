// Google Translate widget bootstrap (fallback for content lang.js doesn't cover)
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,fr',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        multilanguagePage: true
    }, 'google_translate_element');
}

// Translate any dynamically loaded content (e.g. accordion panels) once Google Translate is active
function translateNewContent(element) {
    if (window.google && window.google.translate) {
        const iframe = document.getElementsByClassName('goog-te-menu-frame')[0];
        if (iframe) {
            const currentLang = iframe.contentDocument.getElementById('gt-sl-gms').value;
            if (currentLang !== 'en') {
                google.translate.TranslateElement.getInstance().translateElement(element);
            }
        }
    }
}

// Listen for accordion changes to translate new content
document.addEventListener('DOMContentLoaded', () => {
    const accordion = document.getElementById('whyChooseAccordion');
    if (accordion) {
        accordion.addEventListener('shown.bs.collapse', (e) => {
            translateNewContent(e.target);
        });
    }
});
