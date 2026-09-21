const icons = {
  home: '<path d="M3 10.8 12 3l9 7.8v9.1a1.1 1.1 0 0 1-1.1 1.1H15v-6H9v6H4.1A1.1 1.1 0 0 1 3 19.9z"/>',
  files: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  sparkles: '<path d="m12 3-1.2 3.3L7.5 7.5l3.3 1.2L12 12l1.2-3.3 3.3-1.2-3.3-1.2zM5 14l-.9 2.1L2 17l2.1.9L5 20l.9-2.1L8 17l-2.1-.9zM18 13l-1.1 2.9L14 17l2.9 1.1L18 21l1.1-2.9L22 17l-2.9-1.1z"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  pill: '<path d="m10.5 20.5-7-7a5 5 0 0 1 7-7l7 7a5 5 0 0 1-7 7Z"/><path d="m8.5 8.5 7 7"/>',
  heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  mic: '<rect x="9" y="2" width="6" height="13" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v5M8 22h8"/>',
  square: '<rect x="6" y="6" width="12" height="12" rx="2"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="m15 18-6-6 6-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  trend: '<path d="m3 17 6-6 4 4 8-8"/><path d="M15 7h6v6"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  alert: '<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>'
};

const icon = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.sparkles}</svg>`;
const navItems = [
  { id: 'home', label: '홈', icon: 'home' },
  { id: 'records', label: '진료 기록', icon: 'files' },
  { id: 'tasks', label: '챙길 일', icon: 'check', badge: '2' },
  { id: 'family', label: '가족', icon: 'users' }
];

const state = {
  page: location.hash.slice(1) || 'home',
  returnPage: 'records',
  tasks: [
    { id: 1, title: '저녁 혈압약 챙기기', meta: '오늘 오후 8:00 · 어머니', icon: 'pill', tone: '', done: false },
    { id: 2, title: '혈압 기록 확인하기', meta: '오늘 중 · 가족에게 공유', icon: 'heart', tone: 'green', done: true },
    { id: 3, title: '다음 진료 질문 정리', meta: '10월 13일 전까지', icon: 'files', tone: 'orange', done: false }
  ],
  recording: false,
  messages: []
};

const main = document.querySelector('#app-main');
const toast = document.querySelector('#toast');

function bindStaticIcons() {
  document.querySelectorAll('[data-icon]').forEach((el) => { el.innerHTML = icon(el.dataset.icon); });
}

function renderNav() {
  const current = ['detail', 'summary'].includes(state.page) ? 'records' : state.page;
  const markup = navItems.map(item => `<button class="nav-button" data-page="${item.id}" ${current === item.id ? 'aria-current="page"' : ''}>${icon(item.icon)}<span>${item.label}</span>${item.badge ? `<span class="nav-badge">${state.tasks.filter(t => !t.done).length}</span>` : ''}</button>`).join('');
  document.querySelector('.side-nav').innerHTML = `${markup}<button class="nav-button" data-page="agent" ${current === 'agent' ? 'aria-current="page"' : ''}>${icon('sparkles')}<span>금명이에게 묻기</span></button>`;
  document.querySelector('.bottom-nav').innerHTML = markup;
}

function taskItem(task) {
  return `<div class="today-item ${task.done ? 'done' : ''}">
    <span class="item-icon ${task.tone}">${icon(task.icon)}</span>
    <div><strong>${task.title}</strong><p>${task.meta}</p></div>
    <button class="check-button" data-task="${task.id}" aria-label="${task.title} ${task.done ? '미완료로 변경' : '완료'}">${icon('check')}</button>
  </div>`;
}

function pageHeading(kicker, title, description = '') {
  return `<div class="page-heading"><div><span class="eyebrow">${kicker}</span><h2>${title}</h2></div>${description ? `<p>${description}</p>` : '<span class="date-chip">9월 21일 · 월요일</span>'}</div>`;
}

function homePage() {
  const openTasks = state.tasks.filter(t => !t.done);
  return `<section class="page">
    ${pageHeading('안녕하세요, 수진님', '김금명 님의 오늘을<br>함께 챙겨볼까요?')}
    <div class="dashboard-grid">
      <div class="stack">
        <article class="card welcome-card"><div class="card-pad">
          <span class="eyebrow">오늘의 진료 · 서울봄내과</span>
          <h2>진료에서 달라진 점이<br>2개 있어요</h2>
          <p>처방 용량과 다음 검사 일정을 확인해주세요.</p>
          <div class="welcome-actions">
            <button class="button primary" data-page="detail">진료 요약 보기 ${icon('arrow')}</button>
            <button class="button ghost" data-page="agent">금명이에게 묻기</button>
          </div>
        </div></article>

        <article class="card card-pad">
          <div class="card-header"><h3>오늘 함께 챙길 일</h3><button class="text-link" data-page="tasks">전체 보기</button></div>
          <div class="today-list">${state.tasks.slice(0,2).map(taskItem).join('')}</div>
        </article>

        <article class="card card-pad">
          <div class="card-header"><h3>이번 주 건강 브리핑</h3><span class="badge green">안정적</span></div>
          <div class="briefing"><span class="item-icon">${icon('trend')}</span><div><strong>혈압이 지난주보다 안정적으로 유지됐어요</strong><p>아침 평균 128/78mmHg · 7일 중 6일 기록 완료</p></div></div>
        </article>
      </div>

      <aside class="stack">
        <article class="card card-pad">
          <div class="card-header"><h3>빠른 케어 메뉴</h3></div>
          <div class="quick-grid">
            <button class="quick-button" data-page="parent"><span>${icon('mic')}</span><strong>진료 기록</strong></button>
            <button class="quick-button" data-page="records"><span>${icon('calendar')}</span><strong>다음 일정</strong></button>
            <button class="quick-button" data-page="agent"><span>${icon('sparkles')}</span><strong>기록에 질문</strong></button>
            <button class="quick-button" data-page="family"><span>${icon('users')}</span><strong>가족 공유</strong></button>
          </div>
        </article>
        <article class="card card-pad">
          <div class="card-header"><h3>건강 지표 요약</h3><button class="text-link" data-action="notice">기록 보기</button></div>
          <div class="health-stats">
            <div class="stat"><span>혈압</span><strong>128<small>/78</small></strong><small>mmHg</small></div>
            <div class="stat"><span>공복 혈당</span><strong>92</strong><small>mg/dL</small></div>
            <div class="stat"><span>걸음 수</span><strong>4,821</strong><small>오늘</small></div>
          </div>
        </article>
        <article class="card card-pad next-visit">
          <span class="eyebrow">다가오는 내원 일정</span><h3>10월 13일 · 오전 10:30</h3><p>서울봄내과 · 혈액검사 예정</p>
          <button class="button full" data-page="records">일정 자세히 보기</button>
        </article>
      </aside>
    </div>
  </section>`;
}

function recordsPage() {
  return `<section class="page">
    ${pageHeading('진료 기록', '쌓이는 기록이<br>이어지는 돌봄이 돼요', '김금명 님의 진료 변화와 다음 일정을 한눈에 확인하세요.')}
    <div class="record-layout">
      <div class="timeline">
        ${[
          ['15','9월','서울봄내과 정기 진료','처방 용량 변경 · 혈액검사 예정','새 기록','red'],
          ['18','8월','서울봄내과 정기 진료','기존 처방 유지 · 경과 관찰','가족 공유 완료','green'],
          ['21','7월','서울봄내과 정기 진료','복약 안내 · 혈압 기록 요청','요약 완료','']
        ].map(v => `<article class="card visit-card" data-page="detail"><div class="visit-date"><strong>${v[0]}</strong><small>${v[1]}</small></div><div><h3>${v[2]}</h3><p>${v[3]}</p><div class="visit-meta"><span class="badge ${v[5]}">${v[4]}</span></div></div>${icon('chevron')}</article>`).join('')}
      </div>
      <aside class="stack">
        <article class="card card-pad next-visit"><span class="eyebrow">다음 진료</span><h3>10월 13일, 혈액검사</h3><p>서울봄내과 · 오전 10:30</p><button class="button full" data-action="calendar">캘린더에 추가</button></article>
        <article class="card card-pad"><div class="card-header"><h3>다음 진료 때 물어볼 것</h3><span class="badge">2개</span></div><div class="question-list"><div class="question"><i></i><span>약을 아침과 저녁 중 언제 복용해야 하나요?</span></div><div class="question"><i></i><span>혈압이 낮은 날에도 같은 용량을 먹어야 하나요?</span></div></div><button class="button secondary full" style="margin-top:16px" data-page="agent">질문 더 정리하기</button></article>
      </aside>
    </div>
  </section>`;
}

function tasksPage() {
  const done = state.tasks.filter(t => t.done).length;
  return `<section class="page">
    ${pageHeading('챙길 일', '작은 일도 함께 챙기면<br>더 든든해요', '오늘의 복약부터 다음 진료 준비까지 가족과 나눠 챙겨요.')}
    <article class="card card-pad task-progress"><div class="progress-ring" style="background:conic-gradient(var(--primary) 0 ${Math.round(done/state.tasks.length*100)}%,var(--primary-soft) ${Math.round(done/state.tasks.length*100)}%)"><strong>${done}/${state.tasks.length}</strong></div><div><span class="eyebrow">오늘의 진행률</span><h3>${done ? '잘 챙기고 있어요' : '지금부터 하나씩 챙겨봐요'}</h3><p class="muted">남은 일 ${state.tasks.length-done}개</p></div></article>
    <div class="task-groups">
      <article class="card task-card"><div class="card-pad"><div class="card-header"><h3>가족이 함께 챙길 일</h3><span class="badge">공유 중</span></div>${state.tasks.map(taskItem).join('')}<button class="add-task full" data-action="add-task">${icon('plus')} 할 일 추가</button></div></article>
      <div class="stack"><article class="card card-pad next-visit"><span class="eyebrow">다음 진료까지 D-22</span><h3>10월 13일 · 서울봄내과</h3><p>혈액검사 전 8시간 금식이 필요해요.</p><button class="button full" data-page="detail">관련 진료 내용 보기</button></article><article class="card card-pad"><div class="card-header"><h3>가족별 담당</h3></div><div class="member"><span class="avatar">수</span><div><strong>수진 님</strong><p>진료 일정 · 질문 정리</p></div><span class="badge green">주 보호자</span></div><div class="member"><span class="avatar">민</span><div><strong>민호 님</strong><p>복약 확인</p></div><span class="badge">가족</span></div></article></div>
    </div>
  </section>`;
}

function familyPage() {
  return `<section class="page">
    ${pageHeading('가족 연결', '김금명 님 곁에<br>우리 가족이 함께해요', '동의한 정보만 안전하게 나누고 역할을 함께 정할 수 있어요.')}
    <div class="family-grid">
      <article class="card card-pad"><div class="card-header"><h3>함께 돌보는 가족</h3><button class="text-link" data-action="invite">+ 가족 초대</button></div>${[
        ['수','김수진','주 보호자 · 진료와 예약 확인','주 보호자','green'],
        ['민','김민호','복약 관련 확인','가족',''],
        ['금','김금명','본인 · 공유 범위 설정','본인','orange']
      ].map(m => `<div class="member"><span class="avatar">${m[0]}</span><div><strong>${m[1]}</strong><p>${m[2]}</p></div><span class="badge ${m[4]}">${m[3]}</span></div>`).join('')}</article>
      <div class="stack"><article class="card card-pad"><div class="card-header"><h3>가족 공유 범위</h3><span>${icon('shield')}</span></div>${['진료 요약','처방 정보','다음 진료 일정','건강 지표'].map((p,i)=>`<div class="permission"><div><strong>${p}</strong><p>${i===3?'최근 30일 기록':'모든 연결 가족에게 공유'}</p></div><button class="toggle ${i===3?'':'on'}" data-action="toggle" aria-label="${p} 공유 설정"></button></div>`).join('')}</article><article class="card card-pad"><div class="briefing"><span class="item-icon">${icon('shield')}</span><div><strong>동의 범위 안에서 안전하게</strong><p>공유 범위는 김금명 님 또는 주 보호자가 언제든 바꿀 수 있어요.</p></div></div></article></div>
    </div>
  </section>`;
}

function detailPage() {
  return `<section class="page"><button class="detail-back" data-page="records">${icon('back')} 진료 기록으로</button>
    ${pageHeading('2026년 9월 15일 · 김금명 님', '서울봄내과 진료 요약', '녹음과 처방전에서 중요한 내용만 정리했어요.')}
    <div class="detail-grid"><div class="stack">
      <article class="card card-pad summary-hero"><span class="badge">진료 핵심</span><h2>처방 용량과 다음 검사 일정을<br>확인해주세요</h2><p>이번 처방전에는 이전보다 낮은 용량이 기재되어 있어요. 다음 진료 때 혈액검사를 받기로 했어요.</p></article>
      <article class="card card-pad"><div class="card-header"><h3>이번 진료에서 달라진 점</h3><span class="badge red">2개</span></div><div class="change-row"><span class="item-icon">${icon('pill')}</span><div><strong>처방 용량이 변경됐어요</strong><p>이전 5mg → 이번 2.5mg</p><button class="text-link" data-action="evidence">처방전 근거 보기</button></div></div><div class="change-row"><span class="item-icon green">${icon('calendar')}</span><div><strong>다음 검사 일정이 생겼어요</strong><p>10월 13일 · 혈액검사</p><button class="text-link" data-action="transcript">녹음 근거 04:32</button></div></div></article>
      <article class="card card-pad alert-card"><div class="card-header"><h3>복용 시간은 확인이 필요해요</h3><span>${icon('alert')}</span></div><p class="muted">녹음과 처방전에 적힌 시간이 서로 달라요.</p><div class="evidence"><strong>진료 녹음 02:14</strong><p>“저녁 식후에 드세요.”</p></div><div class="evidence"><strong>처방전</strong><p>“아침 식후”</p></div><button class="button ghost full" style="margin-top:14px" data-action="question">병원에 물어볼 질문에 추가</button></article>
    </div><aside class="stack"><article class="card card-pad next-visit"><span class="eyebrow">다음 진료</span><h3>10월 13일, 혈액검사</h3><p>서울봄내과 · 오전 10:30</p><button class="button full" data-action="calendar">캘린더에 추가</button></article><article class="card card-pad"><div class="card-header"><h3>가족 공유</h3><span class="badge green">공유 완료</span></div><p class="muted" style="font-size:.78rem">수진 님과 민호 님이 이 요약을 볼 수 있어요.</p><button class="button secondary full" style="margin-top:14px" data-action="share">다시 공유하기</button></article><button class="button primary full" data-page="agent">이 기록에 대해 질문하기 ${icon('arrow')}</button></aside></div>
  </section>`;
}

function agentPage() {
  const hasMessages = state.messages.length > 0;
  return `<section class="page"><div class="card chat-shell"><div class="chat-content">${hasMessages ? `<div class="messages">${state.messages.map(m => `<div class="message ${m.role}">${m.text}<small>${m.role === 'bot' ? '9월 15일 진료 기록 기준' : '방금'}</small></div>`).join('')}</div>` : `<div class="chat-intro"><span class="agent-orb">${icon('sparkles')}</span><h2>진료 기록 안에서 쉽게 설명해드려요</h2><p>김금명 님의 기록을 바탕으로 답하고, 근거가 없으면 모른다고 알려드려요.</p></div><div class="suggestions">${['약 용량이 왜 바뀌었어?','다음 방문 전에 뭘 준비해야 해?','복용 시간은 언제인지 알려줘','가족에게 공유된 내용 보여줘'].map(q => `<button class="suggestion" data-question="${q}">${q}</button>`).join('')}</div>`}</div><form class="chat-compose" id="chat-form"><input id="chat-input" aria-label="금명이에게 질문" placeholder="진료 기록에 대해 물어보세요" autocomplete="off"><button class="send-button" aria-label="질문 보내기">${icon('send')}</button></form></div></section>`;
}

function parentPage() {
  return `<section class="page parent-page"><article class="card parent-panel"><span class="badge">김금명 님의 금명이</span><button class="record-orb ${state.recording ? 'recording' : ''}" data-action="record" aria-label="${state.recording ? '진료 녹음 마치기' : '진료 녹음 시작'}">${icon(state.recording ? 'square' : 'mic')}</button><h2>${state.recording ? '진료 내용을<br>듣고 있어요' : '진료 내용을<br>함께 기억할게요'}</h2><p>${state.recording ? '편하게 진료받으세요.<br>끝나면 아래 버튼을 눌러주세요.' : '진료 전에 녹음해도 되는지<br>의료진에게 먼저 알려주세요.'}</p><button class="button primary full" data-action="record">${state.recording ? '진료 녹음 마치기' : '진료 녹음 시작'}</button><button class="text-link" style="margin-top:18px" data-page="home">보호자 화면으로 돌아가기</button></article></section>`;
}

const pages = { home: homePage, records: recordsPage, tasks: tasksPage, family: familyPage, detail: detailPage, agent: agentPage, parent: parentPage };
const pageTitles = { home: ['금명이 홈','오늘의 케어'], records: ['진료 기록','건강 기록'], tasks: ['함께 챙기기','챙길 일'], family: ['연결 관리','가족'], detail: ['진료 기록','진료 요약'], agent: ['기록 기반 안내','금명이에게 묻기'], parent: ['간편 모드','부모님 화면'] };

function render({ focus = false } = {}) {
  if (!pages[state.page]) state.page = 'home';
  const [kicker, title] = pageTitles[state.page];
  document.querySelector('#section-kicker').textContent = kicker;
  document.querySelector('#section-title').textContent = title;
  main.innerHTML = pages[state.page]();
  renderNav();
  if (focus) main.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigate(page) {
  if (!pages[page]) return;
  if (page === 'detail') state.returnPage = state.page;
  state.page = page;
  history.pushState({}, '', `#${page}`);
  render({ focus: true });
}

let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function sendQuestion(question) {
  const answers = {
    '약 용량이 왜 바뀌었어?': '9월 15일 처방전에는 혈압약이 5mg에서 2.5mg으로 줄어든 것으로 기록돼 있어요. 정확한 변경 이유는 기록에 없어 병원에 확인이 필요해요.',
    '다음 방문 전에 뭘 준비해야 해?': '10월 13일 혈액검사가 예정되어 있어요. 검사 전 8시간 금식 안내가 기록되어 있고, 복용 시간 질문도 함께 준비해두면 좋아요.',
    '복용 시간은 언제인지 알려줘': '진료 녹음은 저녁 식후, 처방전은 아침 식후로 서로 달라요. 임의로 판단하지 말고 병원이나 약국에 확인해주세요.',
    '가족에게 공유된 내용 보여줘': '수진 님과 민호 님에게 진료 요약, 처방 정보, 다음 일정이 공유되어 있어요. 건강 지표는 현재 공유하지 않고 있어요.'
  };
  state.messages.push({ role: 'user', text: question });
  state.messages.push({ role: 'bot', text: answers[question] || '현재 진료 기록에서는 그 내용을 확인하기 어려워요. 다음 진료 때 물어볼 질문으로 저장해드릴까요?' });
  render();
}

document.addEventListener('click', (event) => {
  const pageTarget = event.target.closest('[data-page]');
  if (pageTarget) { event.preventDefault(); navigate(pageTarget.dataset.page); return; }
  const taskButton = event.target.closest('[data-task]');
  if (taskButton) { const task = state.tasks.find(t => t.id === Number(taskButton.dataset.task)); task.done = !task.done; render(); showToast(task.done ? '챙길 일을 완료했어요.' : '미완료로 되돌렸어요.'); return; }
  const question = event.target.closest('[data-question]');
  if (question) { sendQuestion(question.dataset.question); return; }
  const action = event.target.closest('[data-action]');
  if (!action) return;
  switch (action.dataset.action) {
    case 'record': state.recording = !state.recording; render(); showToast(state.recording ? '시연용 녹음을 시작했어요.' : '진료 기록을 안전하게 저장했어요.'); break;
    case 'toggle': action.classList.toggle('on'); showToast('가족 공유 범위를 변경했어요.'); break;
    case 'add-task': showToast('새 할 일 입력 기능은 프로토타입에서 준비 중이에요.'); break;
    case 'invite': showToast('가족 초대 링크를 준비했어요.'); break;
    case 'calendar': showToast('10월 13일 일정을 캘린더에 추가했어요.'); break;
    case 'question': showToast('다음 진료 질문에 추가했어요.'); break;
    case 'share': showToast('가족에게 진료 요약을 다시 공유했어요.'); break;
    case 'evidence': showToast('처방전: 혈압약 2.5mg · 1일 1회'); break;
    case 'transcript': showToast('“다음 달 13일에 혈액검사 한번 해볼게요.”'); break;
    default: showToast('이 기능은 프로토타입에서 확인 중이에요.');
  }
});

document.addEventListener('submit', (event) => {
  if (event.target.id !== 'chat-form') return;
  event.preventDefault();
  const input = document.querySelector('#chat-input');
  const value = input.value.trim();
  if (value) sendQuestion(value);
});

window.addEventListener('popstate', () => { state.page = location.hash.slice(1) || 'home'; render(); });
bindStaticIcons();
render();
