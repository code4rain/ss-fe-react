// --------------------------------------------------------------------------
// Virtual DOM

// 🔶 lib 폴더에 아래 유틸리티 함수를 각 파일에 작성하고, 내보내기 구문을 설정합니다.
//
// lib/
// ├── virtual/ # React
// │   ├── createElement.js
// │   └── index.js
// ├── virtual-dom/ # ReactDOM
// │   ├── VirtualDomRoot.js
// │   ├── createRoot.js
// │   └── index.js
// └── index.js

// Web Browser env.
// import * as VirtualModule from './lib/index.js';
import { createElement, createRoot } from './lib/index.js';

// 버츄얼 DOM 엘리먼트
// like React
const headingElement = createElement(
  'h1',
  { id: 'big-headline', className: 'heading', lang: 'en-UK' },
  '🍥',
  ' ',
  'ECMAScript is JavaScript'
);

const appElement = createElement(
  'div',
  { className: 'app' },
  headingElement,
  createElement(
    'p',
    {},
    'React is ',
    createElement(
      'strong',
      {},
      createElement('abbr', { title: 'JavaScript' }, 'JS'),
      ' Library'
    )
  )
);

// console.log(headingElement);

// 실제 DOM 엘리먼트
const rootElement = document.getElementById('root');
// console.log(rootElement);

// 가상 DOM 루트 생성
const virtualDomRoot = createRoot(rootElement);
// console.log(virtualDomRoot);

virtualDomRoot.render(appElement);
