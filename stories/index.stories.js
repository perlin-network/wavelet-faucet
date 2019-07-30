import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import {mono} from '../src/theme'


import WF from "../src/index.js"; //wavelet-faucet.umd.js';
// import * as WF from '../build/index.js' //wavelet-faucet.umd.js';
// import WF from '../dist/wavelet-faucet.mjs' //wavelet-faucet.umd.js';

const { Faucet, FaucetButton } = WF;

storiesOf("Faucet", module)
  .add("Show faucet", () => <Faucet />)
  .add("FaucetButton", () => <FaucetButton />)
    .add("FaucetButton withHeader", () => <FaucetButton modalHeader theme={mono}/>)

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));
