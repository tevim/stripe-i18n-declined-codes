# stripe-i18n
This npm package contains translations for all stripe.com declines codes that the user can fix. Checkout the stripe readme @ https://stripe.com/docs/declines/codes and the wiki @ https://github.com/stripe/stripe-node/wiki/Error-Handling

## Installation
Install the package with:

```bash
$ yarn add stripe-i18n
```

## Usage Example

```js
import Stripe from 'stripe'
import { EN_TRANSLATIONS } from 'stripe-i18n' # import your language

stripe.charges.create({
  amount: 995,
  // ...
}).then(
  function (result) {},
  function (err) {
    // StripeCardError is the only kind of exception that the user can fix, let's throw everything else
    if(err.type !== 'StripeCardError') throw err

    return { error: EN_TRANSLATIONS[err.code] || ' ... generic payment error occured' }
  }
)
```

## Supported Languages
This package supports the following languages as exports:

```js
import { DE_TRANSLATIONS } from 'stripe-i18n'
import { EN_TRANSLATIONS } from 'stripe-i18n'
import { ES_TRANSLATIONS } from 'stripe-i18n'
import { FR_TRANSLATIONS } from 'stripe-i18n'
```

## Development

Run all tests:

```bash
$ yarn install
$ yarn test
```
