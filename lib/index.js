'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var de = {
  card_declined: 'Die Karte wurde abgelehnt.',
  expired_card: 'Die Karte ist abgelaufen.',
  incorrect_cvc: 'Der Sicherheitscode ist falsch.',
  incorrect_number: 'Die Kartennummer ist falsch.',
  incorrect_zip: 'Die Postleitzahl ist ung\xFCltig.',
  invalid_cvc: 'Der Sicherheitscode ist ung\xFCltig.',
  invalid_expiry_month: 'Der Monat des Ablaufdatums ist ung\xFCltig.',
  invalid_expiry_year: 'Das Jahr des Ablaufdatums ist ung\xFCltig.',
  invalid_number: 'Die Kartennummer ist keine g\xFCltige Kreditkartennummer.',
  missing: 'Es gibt keine Karte von der abgebucht wird.',
  processing_error: 'Ein Fehler ist aufgetreten bei der Bearbeitung der Karteninformationen.',
  rate_limit: 'Es ist ein Fehler aufgetreten bei der API-Anfrage. Bitte lassen Sie uns wissen wenn dieses Problem konstant vorkommt.'
};
var en = {
  card_declined: 'The card was declined.',
  expired_card: 'The card has expired.',
  incorrect_cvc: 'The card\'s security code is incorrect.',
  incorrect_number: 'The card number is incorrect.',
  incorrect_zip: 'The card\'s zip code failed validation.',
  invalid_cvc: 'The card\'s security code is invalid.',
  invalid_expiry_month: 'The card\'s expiration month is invalid.',
  invalid_expiry_year: 'The card\'s expiration year is invalid.',
  invalid_number: 'The card number is not a valid credit card number.',
  missing: 'There is no card on a customer that is being charged.',
  processing_error: 'An error occurred while processing the card.',
  rate_limit: 'An error occurred due to requests hitting the API too quickly. Please let us know if you\'re consistently running into this error.'
};
var es = {
  card_declined: 'La tarjeta fue rechazada.',
  expired_card: 'La tarjeta est\xE1 vencida.',
  incorrect_cvc: 'El c\xF3digo de seguridad de la tarjeta es incorrecto.',
  incorrect_zip: 'La verificaci\xF3n del c\xF3digo postal de la tarjeta fall\xF3.',
  incorrect_number: 'El n\xFAmero de tarjeta es incorrecto.',
  invalid_cvc: 'El c\xF3digo de seguridad de la tarjeta no es v\xE1lido.',
  invalid_expiry_month: 'El mes de vencimiento de la tarjeta no es v\xE1lido.',
  invalid_expiry_year: 'El a\xF1o de vencimiento de la tarjeta no es v\xE1lido.',
  invalid_number: 'El n\xFAmero de tarjeta no es v\xE1lido.',
  missing: 'No existe una tarjeta asociada al cliente al que se le est\xE1 cobrando.',
  processing_error: 'Ocurri\xF3 un error mientras se procesaba la tarjeta.',
  rate_limit: 'Ocurri\xF3 un error debido a las solicitudes que llegan a IPA muy r\xE1pido. H\xE1ganos saber si este error se le presenta de manera constante.'
};
var fr = {
  incorrect_number: 'Le num\xE9ro de carte est incorrect.',
  invalid_number: 'Le num\xE9ro de carte n\u2019est pas un num\xE9ro de carte valide.',
  invalid_expiry_month: 'Le mois d\u2019expiration de la carte n\u2019est pas valide.',
  invalid_expiry_year: 'L\u2019ann\xE9e d\u2019expiration de la carte n\u2019est pas valide.',
  invalid_cvc: 'Le code de s\xE9curit\xE9 de la carte n\u2019est pas valide.',
  expired_card: 'La carte a expir\xE9.',
  incorrect_cvc: 'Le code de s\xE9curit\xE9 de la carte est incorrect.',
  incorrect_zip: 'La validation du code postal de la carte a \xE9chou\xE9.',
  card_declined: 'La carte a \xE9t\xE9 refus\xE9e.',
  missing: 'Aucun client associ\xE9 \xE0 cette carte',
  processing_error: 'Une erreur est survenue lors du contr\xF4le de la carte.',
  rate_limit: 'Une erreur est survenue en raison d\'un trop grand nombre de requ\xEAtes vers le serveur. Veuillez nous contacter si vous rencontrez cette erreur syst\xE9matiquement.'
};
var DE_TRANSLATIONS = exports.DE_TRANSLATIONS = Object.freeze(de);
var EN_TRANSLATIONS = exports.EN_TRANSLATIONS = Object.freeze(en);
var ES_TRANSLATIONS = exports.ES_TRANSLATIONS = Object.freeze(es);
var FR_TRANSLATIONS = exports.FR_TRANSLATIONS = Object.freeze(fr);