import { expect } from 'chai';
import { DE_TRANSLATIONS, EN_TRANSLATIONS, ES_TRANSLATIONS, FR_TRANSLATIONS } from '../src';

const STRIPE_ERRORS = [
  'card_declined',
  'expired_card',
  'incorrect_cvc',
  'incorrect_number',
  "incorrect_zip",
  'invalid_cvc',
  'invalid_expiry_month',
  'invalid_expiry_year',
  'invalid_number',
  'missing',
  'processing_error',
  'rate_limit'
];

describe('stripe-i18n', () => {
  it('contains DE translations', () => {
    expect(DE_TRANSLATIONS).include.all.keys(STRIPE_ERRORS);
  });

  it('contains EN translations', () => {
    expect(EN_TRANSLATIONS).include.all.keys(STRIPE_ERRORS);
  });

  it('contains ES translations', () => {
    expect(ES_TRANSLATIONS).include.all.keys(STRIPE_ERRORS);
  });

  it('contains FR translations', () => {
    expect(FR_TRANSLATIONS).include.all.keys(STRIPE_ERRORS);
  });
});
