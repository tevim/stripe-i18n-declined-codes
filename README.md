# stripe-i18n-declined-codes
This npm package contains translations for all stripe.com declined codes that the user can fix. Checkout the stripe readme @ https://stripe.com/docs/declines/codes and the wiki @ https://github.com/stripe/stripe-node/wiki/Error-Handling

## Installation
Install the package with:

```bash
$ yarn add stripe-i18n-declined-codes
```

## Usage Example

```js
import Stripe from 'stripe'
import { EN_TRANSLATIONS } from 'stripe-i18n-declined-codes'

const stripe = new Stripe(STRIPE_SECRET_KEY)
stripe.charges.create({
  amount: 995,
  // ...
}).then(
  function (result) {},
  function (err) {
    if(err.type === 'StripeCardError') {
      return EN_TRANSLATIONS[err.code] || ' ... generic payment error occured'
    }
    // ...
  }
)
```

## Supported Languages
This package supports the following languages as exports:

```js
import { DE_TRANSLATIONS } from 'stripe-i18n-declined-codes'
import { EN_TRANSLATIONS } from 'stripe-i18n-declined-codes'
import { ES_TRANSLATIONS } from 'stripe-i18n-declined-codes'
import { FR_TRANSLATIONS } from 'stripe-i18n-declined-codes'
```

## Development

Run all tests:

```bash
$ yarn install
$ yarn test
```
