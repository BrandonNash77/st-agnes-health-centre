// Simple translation dictionary (expand as needed)
const translations = {
  en: {
    "main-title": "Welcome to St. Agnes Health Centre",
    "main-slogan": "We treat & care — GOD HEALS",
    "about-title": "About Us",
    "about-desc": "St. Agnes Health Centre has been serving the community since 2007, providing top-notch medical care with a dedicated team of professionals. Our mission is to improve lives through compassionate healthcare.",
    "services-title": "Our Services",
    "contact-title": "Contact Us",
    "appointment-title": "Request an Appointment",
    "doctors-title": "Our Doctors",
    "testimonials-title": "Testimonials",
    "blog-title": "Health Tips & News",

    /* navbar */
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "nav.menu.doctors": "Doctors",
    "nav.menu.hospitals": "Hospitals",
    "nav.menu.testimonials": "Testimonials",
    "nav.team": "Our Team",
    "nav.portal": "Patient Portal",

    /* services items */
    "service.general.name": "General Checkup",
    "service.general.desc": "Routine health checkup",
    "service.ultrasound.name": "Ultrasound",
    "service.ultrasound.desc": "Diagnostic imaging using ultrasound technology",
    "service.pediatrics.name": "Pediatrics",
    "service.pediatrics.desc": "Child healthcare",
    "service.echography.name": "Ultrasound",
    "service.echography.desc": "Non-invasive imaging to visualise organs and the fetus.",
    "service.vaccination.name": "Vaccination (PEV - free)",
    "service.vaccination.desc": "Expanded immunisation programme offered free for infants and the community.",
    "service.consultation.name": "Medical Consultation",
    "service.consultation.desc": "General and specialist consultations for diagnosis and follow-up.",
    "service.hospitalization.name": "Hospitalization",
    "service.hospitalization.desc": "Inpatient care and monitored treatments when required.",
    "service.laboratory.name": "Laboratory (Biomedical analyses)",
    "service.laboratory.desc": "Rapid biological and biochemical tests to support clinical diagnosis.",
    "service.bacteriology.name": "Bacteriology (Antibiogram)",
    "service.bacteriology.desc": "Bacterial identification and susceptibility testing to guide therapy.",
    "service.healtheducation.name": "Health Education",
    "service.healtheducation.desc": "Public health sessions to promote healthy behaviours and prevention.",
    "service.familyplanning.name": "Family Planning",
    "service.familyplanning.desc": "Contraceptive counselling and follow-up for individuals and couples.",
    "service.operating.name": "Operating Theatre",
    "service.operating.desc": "Facilities and teams for scheduled and emergency surgical procedures.",
    "service.minorSurgery.name": "Minor Surgery",
    "service.minorSurgery.desc": "Outpatient minor procedures such as sutures and excisions.",
    "service.childbirth.name": "Childbirth / Delivery",
    "service.childbirth.desc": "Maternity services and support during labour and delivery.",
    "service.propharmacy.name": "Pro-Pharmacy",
    "service.propharmacy.desc": "Dispensing of prescription and over-the-counter medicines with advice.",
    "service.pediatrics.name": "Paediatrics",
    "service.pediatrics.desc": "Child health services including consultations and immunisations.",
    "service.maternity.name": "Maternity (Antenatal care)",
    "service.maternity.desc": "Comprehensive prenatal care to support mother and baby throughout pregnancy.",

    /* dashboard */
    "dashboard.welcome": "Welcome",
    "dashboard.title": "My Dashboard",
    "dashboard.greeting": "Welcome back, {name}",
    "dashboard.upcoming": "Upcoming Appointments",
    "dashboard.no_appointments": "No upcoming appointments.",
    "dashboard.book_service": "Book",
    "dashboard.view_all_services": "View All Services",
    "services.book": "Book",

    /* account settings */
    "account.title": "Account Settings",
    "account.change_info": "Change Account Information",
    "account.current_password": "Current Password",
    "account.new_password": "New Password",
    "account.confirm_password": "Confirm Password",
    "account.save_changes": "Save Changes",
    "account.update_success": "Account updated successfully.",
    "account.reset_title": "Reset Password",
    "account.reset_instructions": "Enter your username and email to reset your password.",
    "account.reset_submit": "Reset Password",
    "account.reset_success": "Password reset successful.",
    "account.reset_error": "Password reset failed. Check username and email.",
    "account.delete_confirm": "Are you sure you want to delete your account?",

    /* generic */
    "btn.book": "Book An Appointment Now",
    "btn.check_all_services": "CHECK OUT ALL SERVICES",
    "btn.back": "← Back",
    "menu.toggle": "Toggle menu",
    "search.title": "Search site",
    "search.placeholder": "Search services, doctors...",

    /* featured cards (index) */
    "featured.minor_surgery.title": "Minor Surgery",
    "featured.minor_surgery.desc": "Outpatient surgical care for small procedures.",
    "featured.delivery.title": "Delivery (Accouchement)",
    "featured.delivery.desc": "Safe childbirth services with trained professionals.",
    "featured.pharmacy.title": "Pro-Pharmacy",
    "featured.pharmacy.desc": "Prescription and over-the-counter medications.",
    "featured.laboratory.title": "Laboratory",
    "featured.laboratory.desc": "Biological and biomedical analysis services.",

    /* Why choose sections */
    "why.title": "Why Choose St. Agnes Health Centre",
    "why.sec1.title": "A World Class Healthcare Environment",
    "why.sec1.desc": "Our state-of-the-art facility combines modern medical technology with comfortable, healing environments.",
    "why.sec2.title": "Digital Health Records",
    "why.sec2.desc": "Access your medical history, test results, and appointments through our secure digital platform.",
    "why.sec3.title": "Appointments at Your Convenience",
    "why.sec3.desc": "Book appointments 24/7 through our online portal or mobile app.",
    "why.sec4.title": "Reduced Waiting Times",
    "why.sec4.desc": "Our queue management system minimises waiting time.",
    "why.sec5.title": "Patient-Focused Staff",
    "why.sec5.desc": "Our team is committed to providing compassionate, personalized care.",
    "why.sec6.title": "International Expertise",
    "why.sec6.desc": "Our team includes professionals trained at leading international institutions.",

    /* patient portal labels (if not already present) */
    "portal.signup.title": "Sign Up",
    "portal.login.title": "Login",
    "portal.username": "Username",
    "portal.password": "Password",
    "portal.email": "Email",
    "portal.signup.button": "Sign Up",
    "portal.login.button": "Login",
    "portal.already": "Already have an account?",
    "portal.noaccount": "Don't have an account?",

    /* hamburger tooltip */
    "hamburger.label": "Open main menu",

    /* Footer */
    "footer.about_title": "About",
    "footer.about_text": "St. Agnes Health Centre — quality care in Douala. Open 24/7 with full maternal, paediatric and diagnostic services.",
    "footer.quick_links": "Quick Links",
    "footer.contact_title": "Contact",
    "footer.phone_label": "Phone",
    "footer.email_label": "Email",
    "footer.address_label": "Address",
    "footer.follow_us": "Follow Us",
    "footer.newsletter_placeholder": "Your email address",
    "footer.subscribe": "Subscribe",
    "newsletter.success": "Thank you — you are subscribed.",
    "newsletter.invalid": "Please enter a valid email.",
    "account.dashboard": "Dashboard",
    "account.settings": "Account Settings",
    "account.logout": "Logout",

    /* Redesign additions — hero */
    "nav.why": "Why Choose Us",
    "hero.badge": "Trusted Healthcare Since 2007",
    "hero.welcome_prefix": "Welcome to",
    "hero.subtitle": "Quality primary care, diagnostics, maternity and pharmacy services for you and your family in Douala.",
    "hero.call_label": "Call us 24/7",
    "hero.hours_value": "Open Mon–Sun 24/7",
    "hero.hours_label": "Always available for you",
    "hero.fc_top_title": "Open 24/7",
    "hero.fc_bottom_title": "17+ Years",
    "hero.fc_bottom_sub": "Serving Douala since 2007",
    "btn.view_services": "View Services",

    /* section eyebrow labels */
    "label.about": "About Us",
    "label.services": "Our Services",
    "label.why": "Why Choose Us",
    "label.team": "Our Team",
    "label.contact": "Get in Touch",
    "label.health_tips": "Health Tips",

    /* about */
    "about.stat1_label": "Years of Service",
    "about.stat2_label": "Patients Served",
    "about.stat3_label": "Availability",
    "about.badge": "Est. 2007",

    /* services intro + extra cards */
    "services.intro": "From routine checkups to specialized care, we provide a wide range of medical services to keep you and your family healthy.",
    "featured.emergency.title": "Emergency Care",
    "featured.emergency.desc": "Non-invasive imaging and urgent medical attention when you need it most.",
    "featured.checkups.title": "Health Checkups",
    "featured.checkups.desc": "Routine preventive screenings and wellness assessments for all ages.",

    /* why choose intro */
    "why.intro": "We combine modern medical technology with compassionate care to deliver the best health outcomes for our patients.",

    /* team */
    "team.intro": "Our dedicated professionals bring years of experience and genuine compassion to every patient interaction.",
    "team.page_intro": "Meet the dedicated professionals serving St. Agnes Health Centre.",
    "team.doc1.specialty": "General Practitioner",
    "team.doc1.desc": "Experienced clinician in primary care, chronic disease management and emergency assessment.",
    "team.doc2.specialty": "Pediatrician",
    "team.doc2.desc": "Caring pediatric specialist focused on growth, immunisation and child development.",
    "team.staff.title": "Our Medical Staff",
    "team.staff.specialty": "Nurses & Support Team",
    "team.staff.desc": "A compassionate team of nurses, lab technicians and support staff dedicated to your wellbeing.",
    "btn.meet_team": "Meet the Full Team",

    /* appointment CTA band */
    "cta.title": "Your care starts here.",
    "cta.desc": "Reach out today and our team will help you find the right care, at a time that works for you.",
    "cta.book_btn": "Book an Appointment",
    "cta.contact_btn": "Contact the Clinic",

    /* contact section */
    "contact.intro": "We are here to help. Reach out to us or schedule your visit today.",
    "contact.phone_label": "Phone",
    "contact.email_label": "Email",
    "contact.location_label": "Location",
    "contact.hours_label": "Opening Hours",
    "contact.hours_value": "Monday – Sunday: Open 24/7",

    /* appointment form */
    "form.full_name": "Full Name",
    "form.name_ph": "Your name",
    "form.email": "Email Address",
    "form.email_ph": "you@example.com",
    "form.phone": "Phone Number",
    "form.phone_ph": "+237 6XX XXX XXX",
    "form.date": "Preferred Date",
    "form.service": "Service",
    "form.opt.select": "Select a service...",
    "form.opt.consultation": "Medical Consultation",
    "form.opt.maternity": "Maternity Care",
    "form.opt.laboratory": "Laboratory",
    "form.opt.pharmacy": "Pharmacy",
    "form.opt.vaccination": "Vaccination",
    "form.opt.ultrasound": "Ultrasound",
    "form.opt.pediatrics": "Pediatrics",
    "form.opt.surgery": "Minor Surgery",
    "form.opt.other": "Other",
    "form.message": "Message (optional)",
    "form.message_ph": "Briefly describe your concern...",
    "form.submit": "Book Appointment",

    /* blog / health tips */
    "blog.card1.title": "Stay Hydrated",
    "blog.card1.desc": "Drinking water is essential for good health. Aim for at least 8 glasses a day to keep your body functioning at its best.",
    "blog.card2.title": "Wash Your Hands",
    "blog.card2.desc": "Regular handwashing with soap prevents infections and protects you and your loved ones from illness.",
    "blog.card3.title": "Get Vaccinated",
    "blog.card3.desc": "Vaccines protect you and your community. Stay up to date with your immunisations for a healthier life.",

    /* footer / search / misc */
    "footer.newsletter_intro": "Subscribe for health tips and updates from St. Agnes.",
    "search.go": "Go",
    "aria.call_us": "Call us",
    "footer.rights": "All rights reserved.",

    /* inner-page hero (services, appointment) */
    "page.services.eyebrow": "Our Services",
    "page.services.heading": "Comprehensive Healthcare Services",
    "page.services.subtitle": "From routine checkups to specialised care, explore the full range of medical services available at St. Agnes Health Centre.",
    "page.gallery.eyebrow": "Our Facility",
    "page.gallery.heading": "A Closer Look Inside St. Agnes",
    "page.gallery.subtitle": "A glimpse of our clinic environment, equipment and care spaces.",
    "page.services_cta.title": "Ready to book your visit?",
    "page.services_cta.desc": "Choose a service above and our team will take care of the rest.",
    "page.appointment.eyebrow": "Book a Visit",
    "page.appointment.subtitle": "Pick a time that works for you below, or reach us directly by phone or WhatsApp — our team is available 24/7.",
    "page.appointment.whatsapp_label": "WhatsApp",
    "page.appointment.whatsapp_value": "Message us on WhatsApp",
    "page.appointment.calendar_heading": "Pick a Date & Time"
  },
  fr: {
    "main-title": "Bienvenue au Centre de Santé Ste. Agnès",
    "main-slogan": "Nous soignons & prenons soin — DIEU GUÉRIT",
    "about-title": "À Propos de Nous",
    "about-desc": "Le Centre de Santé Ste. Agnès sert la communauté depuis 2007, offrant des soins médicaux de qualité avec une équipe dévouée de professionnels. Notre mission est d'améliorer la vie grâce à des soins compatissants.",
    "services-title": "Nos Services",
    "contact-title": "Contactez-Nous",
    "appointment-title": "Demander un Rendez-vous",
    "doctors-title": "Nos Médecins",
    "testimonials-title": "Témoignages",
    "blog-title": "Conseils de Santé & Actualités",

    /* navbar */
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "nav.menu.doctors": "Médecins",
    "nav.menu.hospitals": "Hôpitaux",
    "nav.menu.testimonials": "Témoignages",
    "nav.team": "Notre équipe",
    "nav.portal": "Portail Patient",

    /* services items */
    "service.general.name": "Consultation Générale",
    "service.general.desc": "Examen de santé de routine",
    "service.ultrasound.name": "Échographie",
    "service.ultrasound.desc": "Imagerie diagnostique par ultrasons",
    "service.pediatrics.name": "Pédiatrie",
    "service.pediatrics.desc": "Soins de santé pour enfants",
    "service.echography.name": "Échographie",
    "service.echography.desc": "Imagerie non invasive pour visualiser organes et fœtus.",
    "service.vaccination.name": "Vaccination (PEV - gratuit)",
    "service.vaccination.desc": "Programme élargi de vaccination offert gratuitement aux nourrissons et à la communauté.",
    "service.consultation.name": "Consultation Médicale",
    "service.consultation.desc": "Consultations générales et spécialisées pour diagnostic et suivi.",
    "service.hospitalization.name": "Hospitalisation",
    "service.hospitalization.desc": "Prise en charge et traitements sous surveillance lorsque nécessaire.",
    "service.laboratory.name": "Laboratoire (Analyses biomédicales)",
    "service.laboratory.desc": "Analyses biologiques et biochimiques rapides pour appuyer le diagnostic clinique.",
    "service.bacteriology.name": "Bactériologie (Antibiogramme)",
    "service.bacteriology.desc": "Identification bactérienne et tests de sensibilité pour guider la thérapie.",
    "service.healtheducation.name": "Éducation Sanitaire",
    "service.healtheducation.desc": "Sessions de sensibilisation pour promouvoir des comportements de santé préventifs.",
    "service.familyplanning.name": "Planning Familial",
    "service.familyplanning.desc": "Conseils contraceptifs et suivi pour personnes et couples.",
    "service.operating.name": "Bloc Opératoire",
    "service.operating.desc": "Équipements et équipes pour interventions chirurgicales programmées et urgentes.",
    "service.minorSurgery.name": "Petite Chirurgie",
    "service.minorSurgery.desc": "Procédures mineures en ambulatoire : sutures, excisions, etc.",
    "service.childbirth.name": "Accouchement",
    "service.childbirth.desc": "Services de maternité et accompagnement lors du travail et de l'accouchement.",
    "service.propharmacy.name": "Pro-Pharmacie",
    "service.propharmacy.desc": "Dispensation de médicaments et conseils pharmaceutiques sur place.",
    "service.pediatrics.name": "Pédiatrie",
    "service.pediatrics.desc": "Soins pour enfants : consultations, vaccinations et suivi du développement.",
    "service.maternity.name": "Maternité (Consultation prénatale)",
    "service.maternity.desc": "Suivi prénatal complet pour la santé de la mère et du bébé tout au long de la grossesse.",

    /* dashboard */
    "dashboard.welcome": "Bienvenue",
    "dashboard.title": "Mon Tableau de Bord",
    "dashboard.greeting": "Bon retour, {name}",
    "dashboard.upcoming": "Rendez-vous à venir",
    "dashboard.no_appointments": "Aucun rendez-vous à venir.",
    "dashboard.book_service": "Réserver",
    "dashboard.view_all_services": "Voir tous les services",
    "services.book": "Réserver",

    /* account settings */
    "account.title": "Paramètres du Compte",
    "account.change_info": "Modifier les informations du compte",
    "account.current_password": "Mot de passe actuel",
    "account.new_password": "Nouveau mot de passe",
    "account.confirm_password": "Confirmer le mot de passe",
    "account.save_changes": "Enregistrer les modifications",
    "account.update_success": "Compte mis à jour avec succès.",
    "account.reset_title": "Réinitialiser le mot de passe",
    "account.reset_instructions": "Saisissez votre nom d'utilisateur et votre e-mail pour réinitialiser le mot de passe.",
    "account.reset_submit": "Réinitialiser le mot de passe",
    "account.reset_success": "Réinitialisation du mot de passe réussie.",
    "account.reset_error": "Échec de la réinitialisation. Vérifiez le nom d'utilisateur et l'e-mail.",
    "account.delete_confirm": "Voulez-vous vraiment supprimer votre compte ?",

    /* generic */
    "btn.book": "Réserver un rendez-vous",
    "btn.check_all_services": "VOIR TOUS LES SERVICES",
    "btn.back": "← Retour",
    "menu.toggle": "Basculer le menu",
    "search.title": "Rechercher sur le site",
    "search.placeholder": "Rechercher services, médecins...",

    /* featured cards (index) */
    "featured.minor_surgery.title": "Petite Chirurgie",
    "featured.minor_surgery.desc": "Soins chirurgicaux ambulatoires pour petites interventions.",
    "featured.delivery.title": "Accouchement",
    "featured.delivery.desc": "Services de maternité et accompagnement par des professionnels formés.",
    "featured.pharmacy.title": "Pro-Pharmacie",
    "featured.pharmacy.desc": "Dispensation de médicaments et conseils pharmaceutiques.",
    "featured.laboratory.title": "Laboratoire",
    "featured.laboratory.desc": "Services d'analyses biologiques et biomédicales.",

    /* Why choose sections */
    "why.title": "Pourquoi choisir le Centre de Santé Ste. Agnès",
    "why.sec1.title": "Un environnement de soins de classe mondiale",
    "why.sec1.desc": "Notre établissement combine technologie médicale moderne et environnements confortables.",
    "why.sec2.title": "Dossiers de santé numériques",
    "why.sec2.desc": "Accédez à votre historique médical, résultats et rendez-vous via notre plateforme sécurisée.",
    "why.sec3.title": "Rendez-vous à votre convenance",
    "why.sec3.desc": "Prenez rendez-vous 24/7 via notre portail en ligne ou application.",
    "why.sec4.title": "Réduction du temps d'attente",
    "why.sec4.desc": "Notre système minimise le temps d'attente.",
    "why.sec5.title": "Personnel centré sur le patient",
    "why.sec5.desc": "Notre équipe fournit des soins compatissants et personnalisés.",
    "why.sec6.title": "Expertise internationale",
    "why.sec6.desc": "Notre équipe comprend des professionnels formés dans des institutions internationales.",

    /* patient portal */
    "portal.signup.title": "Inscription",
    "portal.login.title": "Connexion",
    "portal.username": "Nom d'utilisateur",
    "portal.password": "Mot de passe",
    "portal.email": "Email",
    "portal.signup.button": "S'inscrire",
    "portal.login.button": "Se connecter",
    "portal.already": "Vous avez déjà un compte ?",
    "portal.noaccount": "Vous n'avez pas de compte ?",

    /* hamburger tooltip */
    "hamburger.label": "Ouvrir le menu principal",

    /* Footer */
    "footer.about_title": "À propos",
    "footer.about_text": "Centre de Santé Ste. Agnès — soins de qualité à Douala. Ouvert 24/7 avec services de maternité, pédiatrie et diagnostics.",
    "footer.quick_links": "Liens Rapides",
    "footer.contact_title": "Contact",
    "footer.phone_label": "Téléphone",
    "footer.email_label": "Email",
    "footer.address_label": "Adresse",
    "footer.follow_us": "Suivez-nous",
    "footer.newsletter_placeholder": "Votre adresse email",
    "footer.subscribe": "S'abonner",
    "newsletter.success": "Merci — vous êtes abonné.",
    "newsletter.invalid": "Veuillez saisir une adresse email valide.",
    "account.dashboard": "Tableau de Bord",
    "account.settings": "Paramètres du Compte",
    "account.logout": "Se Déconnecter",

    /* Redesign additions — hero */
    "nav.why": "Pourquoi Nous Choisir",
    "hero.badge": "Soins de Confiance Depuis 2007",
    "hero.welcome_prefix": "Bienvenue au",
    "hero.subtitle": "Soins primaires de qualité, diagnostics, maternité et services de pharmacie pour vous et votre famille à Douala.",
    "hero.call_label": "Appelez-nous 24/7",
    "hero.hours_value": "Ouvert Lun–Dim 24/7",
    "hero.hours_label": "Toujours disponible pour vous",
    "hero.fc_top_title": "Ouvert 24/7",
    "hero.fc_bottom_title": "17+ Ans",
    "hero.fc_bottom_sub": "Au service de Douala depuis 2007",
    "btn.view_services": "Voir les Services",

    /* section eyebrow labels */
    "label.about": "À Propos de Nous",
    "label.services": "Nos Services",
    "label.why": "Pourquoi Nous Choisir",
    "label.team": "Notre Équipe",
    "label.contact": "Contactez-Nous",
    "label.health_tips": "Conseils de Santé",

    /* about */
    "about.stat1_label": "Années de Service",
    "about.stat2_label": "Patients Servis",
    "about.stat3_label": "Disponibilité",
    "about.badge": "Depuis 2007",

    /* services intro + extra cards */
    "services.intro": "Des bilans de routine aux soins spécialisés, nous offrons une large gamme de services médicaux pour la santé de toute votre famille.",
    "featured.emergency.title": "Soins d'Urgence",
    "featured.emergency.desc": "Imagerie non invasive et prise en charge médicale urgente lorsque vous en avez le plus besoin.",
    "featured.checkups.title": "Bilans de Santé",
    "featured.checkups.desc": "Dépistages préventifs de routine et évaluations de bien-être pour tous les âges.",

    /* why choose intro */
    "why.intro": "Nous combinons technologie médicale moderne et soins attentionnés pour offrir les meilleurs résultats de santé à nos patients.",

    /* team */
    "team.intro": "Nos professionnels dévoués apportent des années d'expérience et une compassion sincère à chaque interaction avec les patients.",
    "team.page_intro": "Rencontrez les professionnels dévoués du Centre de Santé Ste. Agnès.",
    "team.doc1.specialty": "Médecin Généraliste",
    "team.doc1.desc": "Clinicien expérimenté en soins primaires, gestion des maladies chroniques et évaluation des urgences.",
    "team.doc2.specialty": "Pédiatre",
    "team.doc2.desc": "Spécialiste pédiatrique attentionnée, axée sur la croissance, la vaccination et le développement de l'enfant.",
    "team.staff.title": "Notre Personnel Médical",
    "team.staff.specialty": "Infirmiers & Équipe de Soutien",
    "team.staff.desc": "Une équipe compatissante d'infirmiers, de techniciens de laboratoire et de personnel de soutien dévouée à votre bien-être.",
    "btn.meet_team": "Découvrir Toute l'Équipe",

    /* appointment CTA band */
    "cta.title": "Vos soins commencent ici.",
    "cta.desc": "Contactez-nous dès aujourd'hui et notre équipe vous aidera à trouver les soins adaptés, au moment qui vous convient.",
    "cta.book_btn": "Prendre un Rendez-vous",
    "cta.contact_btn": "Contacter le Centre",

    /* contact section */
    "contact.intro": "Nous sommes là pour vous aider. Contactez-nous ou planifiez votre visite dès aujourd'hui.",
    "contact.phone_label": "Téléphone",
    "contact.email_label": "Email",
    "contact.location_label": "Localisation",
    "contact.hours_label": "Horaires d'Ouverture",
    "contact.hours_value": "Lundi – Dimanche : Ouvert 24/7",

    /* appointment form */
    "form.full_name": "Nom Complet",
    "form.name_ph": "Votre nom",
    "form.email": "Adresse Email",
    "form.email_ph": "vous@exemple.com",
    "form.phone": "Numéro de Téléphone",
    "form.phone_ph": "+237 6XX XXX XXX",
    "form.date": "Date Souhaitée",
    "form.service": "Service",
    "form.opt.select": "Sélectionnez un service...",
    "form.opt.consultation": "Consultation Médicale",
    "form.opt.maternity": "Soins de Maternité",
    "form.opt.laboratory": "Laboratoire",
    "form.opt.pharmacy": "Pharmacie",
    "form.opt.vaccination": "Vaccination",
    "form.opt.ultrasound": "Échographie",
    "form.opt.pediatrics": "Pédiatrie",
    "form.opt.surgery": "Petite Chirurgie",
    "form.opt.other": "Autre",
    "form.message": "Message (facultatif)",
    "form.message_ph": "Décrivez brièvement votre préoccupation...",
    "form.submit": "Réserver un Rendez-vous",

    /* blog / health tips */
    "blog.card1.title": "Restez Hydraté",
    "blog.card1.desc": "Boire de l'eau est essentiel pour une bonne santé. Visez au moins 8 verres par jour pour que votre corps fonctionne au mieux.",
    "blog.card2.title": "Lavez-vous les Mains",
    "blog.card2.desc": "Un lavage régulier des mains avec du savon prévient les infections et protège vous et vos proches contre les maladies.",
    "blog.card3.title": "Faites-vous Vacciner",
    "blog.card3.desc": "Les vaccins vous protègent, vous et votre communauté. Restez à jour avec vos vaccinations pour une vie plus saine.",

    /* footer / search / misc */
    "footer.newsletter_intro": "Abonnez-vous pour recevoir des conseils de santé et actualités de Ste. Agnès.",
    "search.go": "Rechercher",
    "aria.call_us": "Appelez-nous",
    "footer.rights": "Tous droits réservés.",

    /* inner-page hero (services, appointment) */
    "page.services.eyebrow": "Nos Services",
    "page.services.heading": "Services de Santé Complets",
    "page.services.subtitle": "Des bilans de routine aux soins spécialisés, découvrez toute la gamme de services médicaux disponibles au Centre de Santé Ste. Agnès.",
    "page.gallery.eyebrow": "Notre Établissement",
    "page.gallery.heading": "Un Aperçu du Centre Ste. Agnès",
    "page.gallery.subtitle": "Un aperçu de notre environnement clinique, de nos équipements et de nos espaces de soins.",
    "page.services_cta.title": "Prêt à réserver votre visite ?",
    "page.services_cta.desc": "Choisissez un service ci-dessus et notre équipe s'occupe du reste.",
    "page.appointment.eyebrow": "Réserver une Visite",
    "page.appointment.subtitle": "Choisissez un horaire ci-dessous, ou contactez-nous directement par téléphone ou WhatsApp — notre équipe est disponible 24/7.",
    "page.appointment.whatsapp_label": "WhatsApp",
    "page.appointment.whatsapp_value": "Contactez-nous sur WhatsApp",
    "page.appointment.calendar_heading": "Choisissez une Date et une Heure"
  }
};

function translateElementByKey(el, key, lang) {
    if (!el || !key) return;
    const text = (translations[lang] && translations[lang][key]) || '';
    if (!text) return;
    // if element expects placeholder
    if (el.hasAttribute('data-i18n-placeholder')) {
        el.setAttribute('placeholder', text);
        return;
    }
    // if element expects value (buttons/inputs)
    if (el.hasAttribute('data-i18n-value')) {
        el.value = text;
        if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'button') {
            el.textContent = text;
        }
        return;
    }
    // default: textContent
    el.textContent = text;
}

// enhance: process data-i18n-attr so attributes like aria-label/title can be translated
function applyAttrTranslations(lang) {
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const map = el.getAttribute('data-i18n-attr');
    if (!map) return;
    // syntax: "attr:key;attr2:key2"
    map.split(';').forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s && s.trim());
      if (!attr || !key) return;
      const text = (translations[lang] && translations[lang][key]) || '';
      if (text) el.setAttribute(attr, text);
    });
  });
}

function setLanguage(lang) {
    localStorage.setItem('lang', lang);

    // 1) id-based translations (backwards-compatible)
    if (translations[lang]) {
        for (const id in translations[lang]) {
            const el = document.getElementById(id);
            if (el) el.textContent = translations[lang][id];
        }
    }

    // 2) data-i18n attributes (preferred for new markup)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        translateElementByKey(el, key, lang);
    });

    // 3) data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        translateElementByKey(el, key, lang);
    });

    // 4) data-i18n-value
    document.querySelectorAll('[data-i18n-value]').forEach(el => {
        const key = el.getAttribute('data-i18n-value');
        translateElementByKey(el, key, lang);
    });

    // after all text updates:
    applyAttrTranslations(lang);

    // Keep the EN/FR toggle buttons in sync with the active language
    document.querySelectorAll('.lang-toggle .btn[data-lang]').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Keep <html lang="..."> accurate for accessibility/SEO
    document.documentElement.setAttribute('lang', lang);

    // Optionally, update dropdown button text
    const langBtn = document.getElementById('languageDropdown');
    if (langBtn) langBtn.textContent = lang === 'fr' ? 'FR' : 'EN';
}

// helper: try to set Google Translate combo when it becomes available
function applyGoogleTranslate(lang, attempts = 0) {
	// don't attempt forever
	if (attempts > 20) return;
	const combo = document.querySelector('.goog-te-combo');
	if (combo) {
		try {
			combo.value = lang;
			combo.dispatchEvent(new Event('change'));
		} catch (e) {
			// ignore and retry below
		}
		return;
	}
	// retry after short delay
	setTimeout(() => applyGoogleTranslate(lang, attempts + 1), 250);
}

function changeLanguage(lang) {
    // Store selected language
    localStorage.setItem('lang', lang);

    // Update dropdown text
    const langBtn = document.getElementById('languageDropdown');
    if (langBtn) {
        langBtn.textContent = lang.toUpperCase();
    }

    // 1) Apply local translations immediately (covers all elements with data-i18n / ids)
    try {
      setLanguage(lang);
    } catch (e) {
      console.error('setLanguage error', e);
    }

    // 2) Ask Google Translate to translate the page (if widget loaded)
    applyGoogleTranslate(lang);

    // REMOVE the MutationObserver from here to prevent infinite loops
    // 3) Observe DOM changes and re-apply local translations where needed (single observer)
    //if (!window.__i18nObserverInstalled) {
    //  const observer = new MutationObserver((mutations) => {
    //    // when new nodes are added, re-apply local translations to ensure dynamic content gets translated
    //    setLanguage(localStorage.getItem('lang') || 'en');
    //  });
    //  observer.observe(document.body, { childList: true, subtree: true });
    //  window.__i18nObserverInstalled = true;
    //}
}

// Handle dynamic content translation on load
document.addEventListener('DOMContentLoaded', function() {
    // Apply saved language locally
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang); // Ensure setLanguage is called here

    // Also attempt to apply Google Translate (if widget is present)
    applyGoogleTranslate(savedLang);

    // Wire up any inline language controls (if present) to use changeLanguage
    document.querySelectorAll('[data-lang]').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            const lang = this.getAttribute('data-lang');
            if (lang) changeLanguage(lang);
        });
    });
});

// expose current language getter for pages that need it
function getCurrentLang() {
    return localStorage.getItem('lang') || 'en';
}
