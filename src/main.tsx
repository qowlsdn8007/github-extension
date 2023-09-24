import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

const rootElement = document.createElement('div');
rootElement.id = "github-extension-root";
document.body.appendChild(rootElement);

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function addNewTab() {
  const tabContainer = document.querySelector('ul.UnderlineNav-body'); // 탭을 포함하는 컨테이너 요소를 선택합니다.
  const newTabElement = document.createElement('a');
  newTabElement.href = '#'; // 새로운 탭의 링크를 지정합니다.
  newTabElement.textContent = 'My New Tab'; // 새로운 탭의 텍스트를 지정합니다.
  tabContainer?.appendChild(newTabElement); // 탭 컨테이너에 새로운 탭을 추가합니다.

  newTabElement.addEventListener('click', () => {
      // 새로운 탭을 클릭했을 때 실행되는 함수입니다.
      const contentContainer = document.querySelector('div.Layout-main'); // 컨텐츠를 포함하는 컨테이너 요소를 선택합니다.
      (contentContainer as Element).innerHTML = ''; // 컨텐츠 컨테이너의 내용을 지웁니다.
      contentContainer?.appendChild(rootElement); // 컨텐츠 컨테이너에 리액트 앱을 추가합니다.
      }
  );
}

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') { addNewTab(); }