const appContainer = document.getElementById('app-container');
const isAdmin = true; // 관리자 모드

function renderPage(page = 'main') {
  let html = '';
  if (page === 'main') html = mainPage();
  if (page === 'praise') html = praisePage();
  if (page === 'sermon') html = sermonPage();
  if (page === 'gallery') html = galleryPage();
  if (page === 'community') html = communityPage();

  appContainer.classList.add('opacity-0');
  setTimeout(() => {
    appContainer.innerHTML = html;
    appContainer.classList.remove('opacity-0');
  }, 200);
}

/* ========== 공통 헤더 ========== */
function header() {
  return `
  <header class="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-lg">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <a href="#" onclick="renderPage('main')" 
         class="text-2xl font-bold hover:text-gray-300">Padre Sony</a>
      <nav class="space-x-6 hidden md:flex">
        <a href="#" onclick="renderPage('praise')" class="hover:text-primary">찬양</a>
        <a href="#" onclick="renderPage('sermon')" class="hover:text-primary">강론</a>
        <a href="#" onclick="renderPage('gallery')" class="hover:text-primary">갤러리</a>
        <a href="#" onclick="renderPage('community')" class="hover:text-primary">커뮤니티</a>
      </nav>
    </div>
  </header>`;
}

/* ========== 페이지 ========== */
function mainPage() {
  return `
    ${header()}
    <section class="relative h-[70vh] flex items-center justify-center text-white text-center bg-cover bg-center"
             style="background-image:url('https://picsum.photos/1600/900')">
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      <div class="relative z-10 max-w-2xl">
        <h1 class="text-5xl font-extrabold drop-shadow-lg mb-6">주님의 사랑이 가득한 공간</h1>
        <p class="text-xl italic mb-8">"나는 길이요 진리요 생명이다." (요 14,6)</p>
        <div class="flex justify-center space-x-4">
          <button onclick="renderPage('praise')" 
                  class="px-6 py-3 bg-primary text-white rounded-xl shadow-lg hover:bg-blue-700 transition">찬양 보러가기</button>
          <button onclick="renderPage('gallery')" 
                  class="px-6 py-3 bg-white text-gray-900 rounded-xl shadow-lg hover:bg-gray-100 transition">갤러리 둘러보기</button>
        </div>
      </div>
    </section>
  `;
}

function praisePage() {
  return `
    ${header()}
    <main class="max-w-6xl mx-auto p-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">찬양 영상</h1>
      ${isAdmin ? `
      <div class="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 class="text-xl font-semibold mb-4">유튜브 영상 추가 (관리자 전용)</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
          <input type="text" placeholder="YouTube URL" class="w-full p-2 border rounded">
          <input type="text" placeholder="제목" class="w-full p-2 border rounded">
          <button class="px-4 py-2 bg-primary text-white rounded hover:bg-blue-700">추가</button>
        </div>
      </div>` : ''}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card">
          <div class="relative w-full" style="padding-top:56.25%">
            <iframe class="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/S0y_2D1f-Gk" allowfullscreen></iframe>
          </div>
          <div class="p-4"><h3 class="font-semibold">생활성가 LIVE</h3></div>
        </div>
      </div>
    </main>
  `;
}

function sermonPage() {
  return `
    ${header()}
    <main class="max-w-6xl mx-auto p-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">강론 영상</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="card">
          <div class="relative w-full" style="padding-top:56.25%">
            <iframe class="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/jekqWsmPTZU" allowfullscreen></iframe>
          </div>
          <div class="p-4"><h3 class="font-semibold">인천교구 성령기도회 강론</h3></div>
        </div>
      </div>
    </main>
  `;
}

function galleryPage() {
  return `
    ${header()}
    <main class="max-w-6xl mx-auto p-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">갤러리</h1>
      ${isAdmin ? `
      <div class="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 class="text-xl font-semibold mb-4">사진 업로드 (관리자 전용)</h2>
        <div class="flex gap-2">
          <input type="file" class="w-full p-2 border rounded">
          <button class="px-4 py-2 bg-primary text-white rounded hover:bg-blue-700">업로드</button>
        </div>
      </div>` : ''}
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <img src="https://placehold.co/400x400" class="rounded-xl shadow-md" alt="placeholder 1">
        <img src="https://placehold.co/400x400" class="rounded-xl shadow-md" alt="placeholder 2">
      </div>
    </main>
  `;
}

function communityPage() {
  return `
    ${header()}
    <main class="max-w-6xl mx-auto p-6">
      <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">커뮤니티</h1>
      ${isAdmin ? `
      <div class="flex justify-end mb-4">
        <button class="px-4 py-2 bg-primary text-white rounded hover:bg-blue-700">글쓰기</button>
      </div>` : ''}
      <div class="bg-white rounded-xl shadow-md overflow-hidden">
        <table class="min-w-full text-left">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-2">#</th>
              <th class="px-4 py-2">제목</th>
              <th class="px-4 py-2">작성자</th>
              <th class="px-4 py-2">작성일</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t">
              <td class="px-4 py-2">1</td>
              <td class="px-4 py-2">첫 번째 글</td>
              <td class="px-4 py-2">관리자</td>
              <td class="px-4 py-2">2025-08-21</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  `;
}

/* 초기 실행 */
renderPage('main');