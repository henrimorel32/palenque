// Textos legales adaptados al marco normativo colombiano
// Ley 1581 de 2012, Decreto 1377 de 2013, Decreto 1074 de 2015, Ley 300 de 1996

export type Locale = 'es' | 'en' | 'fr';

export interface LegalSection {
  title: string;
  content: string[];
}

export const termsContent: Record<Locale, LegalSection[]> = {
  es: [
    {
      title: '1. Introducción',
      content: [
        'Palenque Eco Hostel (en adelante "el Establecimiento"), identificado con NIT [NÚMERO NIT], con domicilio en Rincón del Mar, Sucre, Colombia, pone a disposición de los usuarios los presentes Términos y Condiciones de uso del sitio web y servicios de reserva.',
        'Al acceder, navegar o utilizar los servicios ofrecidos a través de www.palenquerincondelmar.co, el usuario declara haber leído, entendido y aceptado en su totalidad estos términos. Si no está de acuerdo, debe abstenerse de utilizar el sitio.',
      ],
    },
    {
      title: '2. Objeto',
      content: [
        'El objeto de estos Términos y Condiciones es regular el acceso, uso y contratación de los servicios de alojamiento, gastronomía, tours y actividades ofrecidos por Palenque Eco Hostel.',
        'Los servicios se rigen por las disposiciones de la Ley 300 de 1996 (Ley de Turismo), el Decreto 1075 de 2015 y las normas del Ministerio de Comercio, Industria y Turismo de Colombia.',
      ],
    },
    {
      title: '3. Reservas y pagos',
      content: [
        'Las reservas pueden realizarse a través del sitio web, correo electrónico, teléfono o WhatsApp. La confirmación de la reserva está sujeta a la disponibilidad y al pago del anticipo correspondiente.',
        'Los precios publicados son en pesos colombianos (COP) por persona por noche, salvo indicación contraria. Incluyen el desayuno y acceso a las zonas comunes.',
        'El pago puede realizarse mediante transferencia bancaria, consignación o en efectivo directamente en el establecimiento. No se aceptan tarjetas de crédito o débito en el sitio.',
        'El comprobante de pago debe enviarse al correo info@palenquerincondelmar.co para confirmar la reserva.',
      ],
    },
    {
      title: '4. Política de cancelación',
      content: [
        'El huésped podrá cancelar su reserva sin penalización hasta 48 horas antes de la fecha de check-in.',
        'Cancelaciones realizadas con menos de 48 horas de anticipación o no show (no presentación) generarán la pérdida del 50% del valor total de la reserva como penalización.',
        'En caso de emergencias debidamente comprobadas (enfermedad, desastres naturales, cierre de vías), el Establecimiento podrá ofrecer reprogramación o reembolso total a su discreción.',
      ],
    },
    {
      title: '5. Check-in y check-out',
      content: [
        'El check-in está programado a partir de las 14:00 (2:00 p.m.) y el check-out antes de las 12:00 (12:00 m.).',
        'El late check-out (salida tardía) está sujeto a disponibilidad y debe solicitarse con anticipación. Puede generar un cargo adicional.',
        'Al momento del check-in, el huésped debe presentar un documento de identidad válido (cédula de ciudadanía, pasaporte o cédula de extranjería) para el registro ante las autoridades competentes, conforme a la normativa colombiana de turismo.',
      ],
    },
    {
      title: '6. Responsabilidades del huésped',
      content: [
        'El huésped se compromete a utilizar las instalaciones, mobiliario y servicios de manera responsable, respetando el medio ambiente y las normas de convivencia del establecimiento.',
        'Queda prohibido el consumo de sustancias ilícitas, el exceso de ruido después de las 22:00 y comportamientos que afecten la tranquilidad de otros huéspedes.',
        'El huésped es responsable de cualquier daño causado a las instalaciones por negligencia o mal uso.',
        'El Establecimiento no se hace responsable por pérdida de objetos de valor no depositados en la caja de seguridad.',
      ],
    },
    {
      title: '7. Menores de edad',
      content: [
        'Los menores de edad deben estar siempre bajo la supervisión de un adulto responsable.',
        'El Establecimiento cuenta con camarotes y habitaciones familiares. Se recomienda informar previamente la edad de los menores para asignar la habitación adecuada.',
      ],
    },
    {
      title: '8. Mascotas',
      content: [
        'Palenque Eco Hostel admite mascotas previa comunicación y autorización. El huésped es responsable del bienestar, comportamiento y limpieza de su mascota.',
        'Las mascotas no están permitidas en las áreas de restaurante, cocina ni en las camas de las habitaciones.',
      ],
    },
    {
      title: '9. Objetos perdidos',
      content: [
        'Los objetos olvidados en las instalaciones serán conservados por un período máximo de 30 días calendario. Pasado este plazo, el Establecimiento podrá disponer de ellos.',
        'Para reclamar un objeto perdido, el huésped debe contactar al Establecimiento y acordar la forma de envío o retiro a su costo.',
      ],
    },
    {
      title: '10. Modificaciones',
      content: [
        'Palenque Eco Hostel se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el sitio web.',
        'Se recomienda a los usuarios revisar periódicamente estos términos antes de realizar una reserva.',
      ],
    },
    {
      title: '11. Ley aplicable y jurisdicción',
      content: [
        'Estos Términos y Condiciones se rigen por las leyes de la República de Colombia, en especial la Ley 300 de 1996, la Ley 1581 de 2012 y demás normas concordantes.',
        'Cualquier controversia será resuelta ante los jueces y tribunales del departamento de Bolívar, Colombia.',
      ],
    },
    {
      title: '12. Contacto',
      content: [
        'Para cualquier duda o reclamación, puede contactarnos a través de:',
        '• Correo electrónico: info@palenquerincondelmar.co',
        '• Teléfono / WhatsApp: +57 310 527 0542',
        '• Dirección: Rincón del Mar, Sucre, Colombia',
      ],
    },
  ],
  en: [
    {
      title: '1. Introduction',
      content: [
        'Palenque Eco Hostel (hereinafter "the Establishment"), identified with NIT [NIT NUMBER], located at Rincón del Mar, Sucre, Colombia, makes these Terms and Conditions of use of the website and booking services available to users.',
        'By accessing, browsing or using the services offered through www.palenquerincondelmar.co, the user declares having read, understood and fully accepted these terms. If you do not agree, you must refrain from using the site.',
      ],
    },
    {
      title: '2. Purpose',
      content: [
        'The purpose of these Terms and Conditions is to regulate access, use and contracting of accommodation, gastronomy, tour and activity services offered by Palenque Eco Hostel.',
        'Services are governed by the provisions of Law 300 of 1996 (Tourism Law), Decree 1075 of 2015 and the regulations of the Ministry of Commerce, Industry and Tourism of Colombia.',
      ],
    },
    {
      title: '3. Bookings and payments',
      content: [
        'Bookings can be made through the website, email, telephone or WhatsApp. Confirmation of the booking is subject to availability and payment of the corresponding deposit.',
        'Published prices are in Colombian pesos (COP) per person per night, unless otherwise indicated. They include breakfast and access to common areas.',
        'Payment can be made by bank transfer, deposit or cash directly at the establishment. Credit or debit cards are not accepted on site.',
        'Proof of payment must be sent to info@palenquerincondelmar.co to confirm the booking.',
      ],
    },
    {
      title: '4. Cancellation policy',
      content: [
        'Guests may cancel their reservation without penalty up to 48 hours before the check-in date.',
        'Cancellations made less than 48 hours in advance or no-shows will incur a penalty of 50% of the total reservation value.',
        'In case of duly proven emergencies (illness, natural disasters, road closures), the Establishment may offer rescheduling or a full refund at its discretion.',
      ],
    },
    {
      title: '5. Check-in and check-out',
      content: [
        'Check-in is scheduled from 14:00 (2:00 p.m.) and check-out before 12:00 (12:00 p.m.).',
        'Late check-out is subject to availability and must be requested in advance. It may incur an additional charge.',
        'At check-in, the guest must present a valid ID document (citizenship card, passport or foreigner ID) for registration with the competent authorities, in accordance with Colombian tourism regulations.',
      ],
    },
    {
      title: '6. Guest responsibilities',
      content: [
        'The guest undertakes to use the facilities, furniture and services responsibly, respecting the environment and the coexistence rules of the establishment.',
        'Consumption of illicit substances, excessive noise after 22:00 and behaviors that affect the tranquility of other guests are prohibited.',
        'The guest is responsible for any damage caused to the facilities through negligence or misuse.',
        'The Establishment is not responsible for loss of valuables not deposited in the safe.',
      ],
    },
    {
      title: '7. Minors',
      content: [
        'Minors must always be under the supervision of a responsible adult.',
        'The Establishment has bunk beds and family rooms. It is recommended to inform in advance the age of minors to assign the appropriate room.',
      ],
    },
    {
      title: '8. Pets',
      content: [
        'Palenque Eco Hostel accepts pets with prior notice and authorization. The guest is responsible for the welfare, behavior and cleanliness of their pet.',
        'Pets are not allowed in the restaurant, kitchen or on the beds in the rooms.',
      ],
    },
    {
      title: '9. Lost items',
      content: [
        'Items forgotten in the facilities will be kept for a maximum period of 30 calendar days. After this period, the Establishment may dispose of them.',
        'To claim a lost item, the guest must contact the Establishment and arrange for shipping or pickup at their own expense.',
      ],
    },
    {
      title: '10. Modifications',
      content: [
        'Palenque Eco Hostel reserves the right to modify these Terms and Conditions at any time. Modifications will take effect from their publication on the website.',
        'Users are advised to periodically review these terms before making a booking.',
      ],
    },
    {
      title: '11. Applicable law and jurisdiction',
      content: [
        'These Terms and Conditions are governed by the laws of the Republic of Colombia, in particular Law 300 of 1996, Law 1581 of 2012 and other related regulations.',
        'Any dispute will be resolved before the judges and courts of the department of Bolívar, Colombia.',
      ],
    },
    {
      title: '12. Contact',
      content: [
        'For any questions or claims, you can contact us through:',
        '• Email: info@palenquerincondelmar.co',
        '• Phone / WhatsApp: +57 310 527 0542',
        '• Address: Rincón del Mar, Sucre, Colombia',
      ],
    },
  ],
  fr: [
    {
      title: '1. Introduction',
      content: [
        'Palenque Eco Hostel (ci-après "l\'Établissement"), identifié avec le NIT [NUMÉRO NIT], domicilié au Rincón del Mar, Sucre, Colombie, met à disposition des utilisateurs les présentes Conditions Générales d\'utilisation du site web et des services de réservation.',
        'En accédant, naviguant ou utilisant les services proposés via www.palenquerincondelmar.co, l\'utilisateur déclare avoir lu, compris et accepté intégralement ces conditions. En cas de désaccord, il doit s\'abstenir d\'utiliser le site.',
      ],
    },
    {
      title: '2. Objet',
      content: [
        'L\'objet des présentes Conditions Générales est de réguler l\'accès, l\'utilisation et la réservation des services d\'hébergement, de gastronomie, d\'excursions et d\'activités proposés par Palenque Eco Hostel.',
        'Les services sont régis par les dispositions de la Loi 300 de 1996 (Loi sur le Tourisme), du Décret 1075 de 2015 et des réglementations du Ministère du Commerce, de l\'Industrie et du Tourisme de Colombie.',
      ],
    },
    {
      title: '3. Réservations et paiements',
      content: [
        'Les réservations peuvent être effectuées via le site web, par email, téléphone ou WhatsApp. La confirmation de la réservation est soujette à disponibilité et au paiement de l\'acompte correspondant.',
        'Les prix publiés sont en pesos colombiens (COP) par personne et par nuit, sauf indication contraire. Ils incluent le petit-déjeuner et l\'accès aux zones communes.',
        'Le paiement peut être effectué par virement bancaire, dépôt ou en espèces directement à l\'établissement. Les cartes de crédit ou de débit ne sont pas acceptées sur place.',
        'La preuve de paiement doit être envoyée à info@palenquerincondelmar.co pour confirmer la réservation.',
      ],
    },
    {
      title: '4. Politique d\'annulation',
      content: [
        'L\'hôte peut annuler sa réservation sans pénalité jusqu\'à 48 heures avant la date d\'arrivée.',
        'Les annulations effectuées moins de 48 heures à l\'avance ou les non-présentations entraîneront une pénalité de 50% de la valeur totale de la réservation.',
        'En cas d\'urgence dûment justifiée (maladie, catastrophes naturelles, fermeture de routes), l\'Établissement pourra proposer un report ou un remboursement total à sa discrétion.',
      ],
    },
    {
      title: '5. Arrivée et départ',
      content: [
        'L\'arrivée (check-in) est prévue à partir de 14h00 et le départ (check-out) avant 12h00.',
        'Le départ tardif est soumis à disponibilité et doit être demandé à l\'avance. Des frais supplémentaires peuvent s\'appliquer.',
        'Lors de l\'arrivée, l\'hôte doit présenter une pièce d\'identité valide (carte d\'identité, passeport ou carte d\'étranger) pour l\'enregistrement auprès des autorités compétentes, conformément à la réglementation colombienne sur le tourisme.',
      ],
    },
    {
      title: '6. Responsabilités de l\'hôte',
      content: [
        'L\'hôte s\'engage à utiliser les installations, le mobilier et les services de manière responsable, en respectant l\'environnement et les règles de coexistence de l\'établissement.',
        'La consommation de substances illicites, le bruit excessif après 22h00 et les comportements affectant la tranquillité des autres hôtes sont interdits.',
        'L\'hôte est responsable de tout dommage causé aux installations par négligence ou mauvaise utilisation.',
        'L\'Établissement décline toute responsabilité pour la perte d\'objets de valeur non déposés dans le coffre-fort.',
      ],
    },
    {
      title: '7. Mineurs',
      content: [
        'Les mineurs doivent toujours être sous la supervision d\'un adulte responsable.',
        'L\'Établissement dispose de lits superposés et de chambres familiales. Il est recommandé d\'informer préalablement de l\'âge des mineurs pour attribuer la chambre appropriée.',
      ],
    },
    {
      title: '8. Animaux domestiques',
      content: [
        'Palenque Eco Hostel accepte les animaux domestiques sur notification et autorisation préalables. L\'hôte est responsable du bien-être, du comportement et de la propreté de son animal.',
        'Les animaux ne sont pas autorisés dans les zones de restaurant, de cuisine ni sur les lits des chambres.',
      ],
    },
    {
      title: '9. Objets perdus',
      content: [
        'Les objets oubliés dans les installations seront conservés pendant une période maximale de 30 jours calendaires. Passé ce délai, l\'Établissement pourra en disposer.',
        'Pour réclamer un objet perdu, l\'hôte doit contacter l\'Établissement et convenir du mode d\'envoi ou de retrait à ses frais.',
      ],
    },
    {
      title: '10. Modifications',
      content: [
        'Palenque Eco Hostel se réserve le droit de modifier les présentes Conditions Générales à tout moment. Les modifications entreront en vigueur dès leur publication sur le site web.',
        'Il est conseillé aux utilisateurs de consulter régulièrement ces conditions avant d\'effectuer une réservation.',
      ],
    },
    {
      title: '11. Droit applicable et juridiction',
      content: [
        'Les présentes Conditions Générales sont régies par les lois de la République de Colombie, notamment la Loi 300 de 1996, la Loi 1581 de 2012 et autres réglementations connexes.',
        'Tout litige sera résolu devant les juges et tribunaux du département de Bolívar, Colombie.',
      ],
    },
    {
      title: '12. Contact',
      content: [
        'Pour toute question ou réclamation, vous pouvez nous contacter par :',
        '• Email : info@palenquerincondelmar.co',
        '• Téléphone / WhatsApp : +57 310 527 0542',
        '• Adresse : Rincón del Mar, Sucre, Colombie',
      ],
    },
  ],
};

export const privacyContent: Record<Locale, LegalSection[]> = {
  es: [
    {
      title: '1. Introducción',
      content: [
        'Palenque Eco Hostel, en cumplimiento de la Ley Estatutaria 1581 de 2012, el Decreto 1377 de 2013 y el Decreto 1074 de 2015 (Sector Comercio, Industria y Turismo), pone a disposición de los usuarios su Política de Tratamiento de Datos Personales.',
        'Esta política tiene por objeto garantizar el derecho constitucional de todas las personas a conocer, actualizar y rectificar la información que se haya recogido sobre ellas en nuestras bases de datos.',
      ],
    },
    {
      title: '2. Responsable del tratamiento',
      content: [
        'Razón social: Palenque Eco Hostel',
        'NIT: [NÚMERO NIT]',
        'Dirección: Rincón del Mar, Sucre, Colombia',
        'Correo electrónico: info@palenquerincondelmar.co',
        'Teléfono: +57 310 527 0542',
        'Como responsable del tratamiento, decidimos sobre la finalidad y el uso de los datos personales recolectados.',
      ],
    },
    {
      title: '3. Datos recolectados',
      content: [
        'Con el fin de prestar nuestros servicios de alojamiento, gastronomía y turismo, podemos recolectar los siguientes datos personales:',
        '• Datos de identificación: nombre completo, tipo y número de documento de identidad, nacionalidad.',
        '• Datos de contacto: dirección de correo electrónico, número de teléfono, dirección de residencia.',
        '• Datos de reserva: fechas de estadía, número de huéspedes, preferencias de alimentación o alergias (cuando apliquen).',
        '• Datos de navegación: dirección IP, tipo de navegador, páginas visitadas y cookies, conforme a nuestra política de cookies.',
        'No recolectamos datos sensibles (salud, creencias religiosas, origen étnico, etc.) salvo que sea estrictamente necesario y con autorización expresa.',
      ],
    },
    {
      title: '4. Finalidad del tratamiento',
      content: [
        'Los datos personales recolectados serán utilizados para las siguientes finalidades:',
        '• Confirmar, gestionar y facturar las reservas de alojamiento.',
        '• Enviar información sobre disponibilidad, promociones y servicios del establecimiento.',
        '• Cumplir con obligaciones legales y regulatorias ante las autoridades colombianas de turismo (MinCIT, Fontur).',
        '• Realizar encuestas de satisfacción y mejorar la calidad de nuestros servicios.',
        '• Contactar al huésped en caso de emergencias o eventualidades durante su estadía.',
        'El tratamiento de los datos se realizará únicamente para las finalidades informadas y con la autorización previa, expresa e informada del titular.',
      ],
    },
    {
      title: '5. Derechos de los titulares',
      content: [
        'Conforme al artículo 8 de la Ley 1581 de 2012, los titulares de datos personales tienen los siguientes derechos:',
        '• Derecho de acceso: conocer los datos personales que reposan en nuestras bases de datos.',
        '• Derecho de rectificación: actualizar o corregir datos inexactos o incompletos.',
        '• Derecho de supresión: solicitar la eliminación de los datos cuando no sean necesarios para las finalidades autorizadas.',
        '• Derecho de revocación: revocar la autorización otorgada para el tratamiento de datos.',
        'Para ejercer estos derechos, el titular puede enviar una solicitud al correo info@palenquerincondelmar.co, indicando su nombre completo, número de documento y el derecho que desea ejercer.',
      ],
    },
    {
      title: '6. Transferencia de datos',
      content: [
        'Palenque Eco Hostel no transferirá datos personales a terceros sin la autorización previa del titular, salvo que exista una obligación legal o judicial que lo exija.',
        'Podemos compartir datos con proveedores de servicios (plataformas de pago, software de reservas) únicamente para las finalidades autorizadas, garantizando que dichos terceros cuenten con políticas de protección de datos acordes a la normativa colombiana.',
      ],
    },
    {
      title: '7. Seguridad de la información',
      content: [
        'Implementamos medidas técnicas, administrativas y físicas de seguridad para proteger los datos personales contra pérdida, acceso no autorizado, alteración o divulgación.',
        'Estas medidas incluyen: almacenamiento en servidores seguros, acceso restringido al personal autorizado, protocolos de respaldo y políticas de contraseñas robustas.',
        'En caso de una violación de seguridad que afecte los datos personales, notificaremos a los titulares y a la Superintendencia de Industria y Comercio conforme a lo establecido en la normativa vigente.',
      ],
    },
    {
      title: '8. Vigencia',
      content: [
        'La presente política de privacidad está vigente desde su publicación y tendrá efecto indefinido, salvo modificaciones sustanciales que serán debidamente comunicadas.',
        'Los datos personales serán conservados durante el tiempo necesario para cumplir con las finalidades del tratamiento y con las obligaciones legales aplicables.',
      ],
    },
    {
      title: '9. Modificaciones',
      content: [
        'Palenque Eco Hostel se reserva el derecho de actualizar esta política en cualquier momento. Las modificaciones serán publicadas en esta sección del sitio web y entrarán en vigor desde su publicación.',
        'Se recomienda a los usuarios revisar periódicamente esta política.',
      ],
    },
    {
      title: '10. Contacto',
      content: [
        'Para ejercer sus derechos o realizar consultas sobre esta política, puede contactarnos a través de:',
        '• Correo electrónico: info@palenquerincondelmar.co',
        '• Teléfono / WhatsApp: +57 310 527 0542',
        '• Dirección: Rincón del Mar, Sucre, Colombia',
      ],
    },
  ],
  en: [
    {
      title: '1. Introduction',
      content: [
        'Palenque Eco Hostel, in compliance with Statutory Law 1581 of 2012, Decree 1377 of 2013 and Decree 1074 of 2015 (Commerce, Industry and Tourism Sector), makes its Personal Data Processing Policy available to users.',
        'The purpose of this policy is to guarantee the constitutional right of all persons to know, update and rectify the information that has been collected about them in our databases.',
      ],
    },
    {
      title: '2. Data Controller',
      content: [
        'Trade name: Palenque Eco Hostel',
        'NIT: [NIT NUMBER]',
        'Address: Rincón del Mar, Sucre, Colombia',
        'Email: info@palenquerincondelmar.co',
        'Phone: +57 310 527 0542',
        'As data controller, we decide on the purpose and use of the collected personal data.',
      ],
    },
    {
      title: '3. Data collected',
      content: [
        'In order to provide our accommodation, gastronomy and tourism services, we may collect the following personal data:',
        '• Identification data: full name, type and number of identity document, nationality.',
        '• Contact data: email address, phone number, residential address.',
        '• Reservation data: dates of stay, number of guests, dietary preferences or allergies (when applicable).',
        '• Browsing data: IP address, browser type, pages visited and cookies, in accordance with our cookie policy.',
        'We do not collect sensitive data (health, religious beliefs, ethnic origin, etc.) unless strictly necessary and with express authorization.',
      ],
    },
    {
      title: '4. Purpose of processing',
      content: [
        'The personal data collected will be used for the following purposes:',
        '• Confirm, manage and invoice accommodation reservations.',
        '• Send information about availability, promotions and establishment services.',
        '• Comply with legal and regulatory obligations before Colombian tourism authorities (MinCIT, Fontur).',
        '• Conduct satisfaction surveys and improve the quality of our services.',
        '• Contact the guest in case of emergencies or eventualities during their stay.',
        'Data processing will be carried out solely for the informed purposes and with the prior, express and informed authorization of the data subject.',
      ],
    },
    {
      title: '5. Data subject rights',
      content: [
        'In accordance with Article 8 of Law 1581 of 2012, data subjects have the following rights:',
        '• Right of access: to know the personal data held in our databases.',
        '• Right of rectification: to update or correct inaccurate or incomplete data.',
        '• Right of erasure: to request deletion of data when no longer necessary for the authorized purposes.',
        '• Right of revocation: to revoke the authorization granted for data processing.',
        'To exercise these rights, the data subject may send a request to info@palenquerincondelmar.co, indicating their full name, document number and the right they wish to exercise.',
      ],
    },
    {
      title: '6. Data transfer',
      content: [
        'Palenque Eco Hostel will not transfer personal data to third parties without the prior authorization of the data subject, unless there is a legal or judicial obligation requiring it.',
        'We may share data with service providers (payment platforms, booking software) solely for the authorized purposes, ensuring that such third parties have data protection policies in accordance with Colombian regulations.',
      ],
    },
    {
      title: '7. Information security',
      content: [
        'We implement technical, administrative and physical security measures to protect personal data against loss, unauthorized access, alteration or disclosure.',
        'These measures include: storage on secure servers, restricted access to authorized personnel, backup protocols and strong password policies.',
        'In the event of a security breach affecting personal data, we will notify the data subjects and the Superintendence of Industry and Commerce in accordance with current regulations.',
      ],
    },
    {
      title: '8. Duration',
      content: [
        'This privacy policy is effective from its publication and will remain in force indefinitely, except for substantial modifications that will be duly communicated.',
        'Personal data will be kept for the time necessary to fulfill the purposes of processing and applicable legal obligations.',
      ],
    },
    {
      title: '9. Modifications',
      content: [
        'Palenque Eco Hostel reserves the right to update this policy at any time. Modifications will be published in this section of the website and will take effect from their publication.',
        'Users are advised to periodically review this policy.',
      ],
    },
    {
      title: '10. Contact',
      content: [
        'To exercise your rights or make inquiries about this policy, you can contact us through:',
        '• Email: info@palenquerincondelmar.co',
        '• Phone / WhatsApp: +57 310 527 0542',
        '• Address: Rincón del Mar, Sucre, Colombia',
      ],
    },
  ],
  fr: [
    {
      title: '1. Introduction',
      content: [
        'Palenque Eco Hostel, conformément à la Loi Statutaire 1581 de 2012, au Décret 1377 de 2013 et au Décret 1074 de 2015 (Secteur Commerce, Industrie et Tourisme), met à disposition des utilisateurs sa Politique de Traitement des Données Personnelles.',
        'Cette politique a pour objet de garantir le droit constitutionnel de toutes les personnes de connaître, mettre à jour et rectifier les informations qui ont été collectées à leur sujet dans nos bases de données.',
      ],
    },
    {
      title: '2. Responsable du traitement',
      content: [
        'Raison sociale : Palenque Eco Hostel',
        'NIT : [NUMÉRO NIT]',
        'Adresse : Rincón del Mar, Sucre, Colombie',
        'Email : info@palenquerincondelmar.co',
        'Téléphone : +57 310 527 0542',
        'En tant que responsable du traitement, nous décidons de la finalité et de l\'utilisation des données personnelles collectées.',
      ],
    },
    {
      title: '3. Données collectées',
      content: [
        'Afin de fournir nos services d\'hébergement, de gastronomie et de tourisme, nous pouvons collecter les données personnelles suivantes :',
        '• Données d\'identification : nom complet, type et numéro de pièce d\'identité, nationalité.',
        '• Données de contact : adresse email, numéro de téléphone, adresse de résidence.',
        '• Données de réservation : dates de séjour, nombre d\'hôtes, préférences alimentaires ou allergies (le cas échéant).',
        '• Données de navigation : adresse IP, type de navigateur, pages visitées et cookies, conformément à notre politique de cookies.',
        'Nous ne collectons pas de données sensibles (santé, croyances religieuses, origine ethnique, etc.) sauf si cela est strictement nécessaire et avec autorisation expresse.',
      ],
    },
    {
      title: '4. Finalité du traitement',
      content: [
        'Les données personnelles collectées seront utilisées aux fins suivantes :',
        '• Confirmer, gérer et facturer les réservations d\'hébergement.',
        '• Envoyer des informations sur la disponibilité, les promotions et les services de l\'établissement.',
        '• Se conformer aux obligations légales et réglementaires auprès des autorités colombiennes du tourisme (MinCIT, Fontur).',
        '• Réaliser des enquêtes de satisfaction et améliorer la qualité de nos services.',
        '• Contacter l\'hôte en cas d\'urgence ou d\'éventualités pendant son séjour.',
        'Le traitement des données sera effectué uniquement pour les finalités informées et avec l\'autorisation préalable, expresse et informée du titulaire.',
      ],
    },
    {
      title: '5. Droits des titulaires',
      content: [
        'Conformément à l\'article 8 de la Loi 1581 de 2012, les titulaires de données personnelles ont les droits suivants :',
        '• Droit d\'accès : connaître les données personnelles conservées dans nos bases de données.',
        '• Droit de rectification : mettre à jour ou corriger des données inexactes ou incomplètes.',
        '• Droit de suppression : demander l\'effacement des données lorsqu\'elles ne sont plus nécessaires aux finalités autorisées.',
        '• Droit de révocation : révoquer l\'autorisation accordée pour le traitement des données.',
        'Pour exercer ces droits, le titulaire peut envoyer une demande à info@palenquerincondelmar.co, en indiquant son nom complet, son numéro de document et le droit qu\'il souhaite exercer.',
      ],
    },
    {
      title: '6. Transfert de données',
      content: [
        'Palenque Eco Hostel ne transférera pas de données personnelles à des tiers sans l\'autorisation préalable du titulaire, sauf s\'il existe une obligation légale ou judiciaire l\'exigeant.',
        'Nous pouvons partager des données avec des fournisseurs de services (plateformes de paiement, logiciels de réservation) uniquement pour les finalités autorisées, en veillant à ce que ces tiers disposent de politiques de protection des données conformes à la réglementation colombienne.',
      ],
    },
    {
      title: '7. Sécurité de l\'information',
      content: [
        'Nous mettons en œuvre des mesures de sécurité techniques, administratives et physiques pour protéger les données personnelles contre la perte, l\'accès non autorisé, l\'altération ou la divulgation.',
        'Ces mesures comprennent : le stockage sur des serveurs sécurisés, l\'accès restreint au personnel autorisé, des protocoles de sauvegarde et des politiques de mots de passe robustes.',
        'En cas de violation de sécurité affectant les données personnelles, nous notifierons les titulaires et la Superintendance de l\'Industrie et du Commerce conformément à la réglementation en vigueur.',
      ],
    },
    {
      title: '8. Durée de validité',
      content: [
        'La présente politique de confidentialité est en vigueur dès sa publication et restera applicable indéfiniment, sous réserve de modifications substantielles qui seront dûment communiquées.',
        'Les données personnelles seront conservées pendant le temps nécessaire à l\'accomplissement des finalités du traitement et aux obligations légales applicables.',
      ],
    },
    {
      title: '9. Modifications',
      content: [
        'Palenque Eco Hostel se réserve le droit de mettre à jour cette politique à tout moment. Les modifications seront publiées dans cette section du site web et entreront en vigueur dès leur publication.',
        'Il est conseillé aux utilisateurs de consulter régulièrement cette politique.',
      ],
    },
    {
      title: '10. Contact',
      content: [
        'Pour exercer vos droits ou poser des questions sur cette politique, vous pouvez nous contacter par :',
        '• Email : info@palenquerincondelmar.co',
        '• Téléphone / WhatsApp : +57 310 527 0542',
        '• Adresse : Rincón del Mar, Sucre, Colombie',
      ],
    },
  ],
};
