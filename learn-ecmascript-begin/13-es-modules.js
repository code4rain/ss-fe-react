// Node.js runtime env. -> Common JS Modules
// Web Standards => ES Modules

import numberWithComma from './utils/numberWithComma.js';
import { removeSpaceHTMLString } from './utils/removeSpaceHTMLString.js';
import { shuffle } from './utils/shuffle.js';

import * as utilsModule from './utils/index.js';

// --------------------------------------------------------------------------
// (ES)ECMAScript Modules (2015)
// JavaScript Modules

// 🔶 utils 폴더에 아래 유틸리티 함수를 각 파일에 작성하고, 내보내기 구문을 설정합니다.
// 참고: https://mzl.la/3VRmved | https://mzl.la/4aSP27c
//
// utils/
// ├── index.js
// ├── numberWithComma.js
// ├── removeSpaceHTMLString.js
// └── shuffle.js

// --------------------------------------------------------------------------

let price = `${numberWithComma(9643200)}원`;
console.log(price);

const htmlString = /* html */ `
  <div id="es-module">
    <h1>
      <abbr title="ECMAScript">ES</abbr> 모듈
    </h1>
  </div>
`;
console.log(htmlString);
console.log(removeSpaceHTMLString(htmlString));

const range = [...Array(9).keys()];
console.log(range);
console.log(shuffle(range));
