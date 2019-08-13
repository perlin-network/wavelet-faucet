# Wavelet Faucet

A React component to tap into the Wavelet's testnet faucet, to add PERLs to a wallet.

## Usage

```js
import { FaucetButton, themes: { mono } } from 'wavelet-faucet';
...

<FaucetButton
    url="alternative-faucet-url" // optional will use 'https://faucet.perlin.net' by default
    modalHeader // optional, adds a header to the modal
    theme={altTheme} // optional, see src/theme.js for values
    style={{}} // styles the button 
    address="optional address prefill"
    classPrefix=""  // optional, prefix for all CSS classes inside the faucet. Will use 'wavelet-faucet' by default
    className={{}} // className for the button 
/>
```

The component uses style-components with a default darkTheme. In order to customize the look'n'feel you can either pass in your own theme or simply target class names.

## Development

### `npm start` or `yarn start`

Runs the component in the watch mode.

### `npm run build or yarn build`

Builds the component for production to the `dist` folder.<br>
