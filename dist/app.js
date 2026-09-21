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
  alert: '<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>',
  video: '<path d="m16 10 5-3v10l-5-3z"/><rect x="3" y="5" width="13" height="14" rx="2"/>',
  message: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>',
  activity: '<path d="M3 12h4l2-7 4 14 2-7h6"/>',
  syringe: '<path d="m18 2 4 4M17 7l3-3M19 9 2-2M7.5 19.5 4 23M9 18l-3-3 9-9 3 3z"/>',
  flask: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M8 15h8"/>',
  doctor: '<circle cx="12" cy="7" r="4"/><path d="M5 21v-2a7 7 0 0 1 14 0v2M9 14v3l3 2 3-2v-3"/>',
  paperclip: '<path d="m21 11-8.5 8.5a6 6 0 0 1-8.5-8.5L13 2a4 4 0 0 1 5.7 5.7l-9 9a2 2 0 0 1-2.8-2.8l8.3-8.3"/>'
};

const icon = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.sparkles}</svg>`;
const mobileNavItems = [
  { id: 'home', label: '홈', icon: 'home' },
  { id: 'appointments', label: '진료 예약', icon: 'calendar' },
  { id: 'parent', label: '진료 녹음', icon: 'mic', featured: true },
  { id: 'team', label: '케어팀', icon: 'message', badge: '1' },
  { id: 'health', label: '건강 기록', icon: 'activity' }
];
const sideNavItems = [
  ...mobileNavItems,
  { id: 'records', label: '진료 기록', icon: 'files' },
  { id: 'tasks', label: '챙길 일', icon: 'check', badge: '2' },
  { id: 'family', label: '가족 연결', icon: 'users' }
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
  messages: [],
  teamMessages: [],
  appointmentDay: 24,
  appointmentType: '내과',
  healthTab: 'overview'
};

const main = document.querySelector('#app-main');
const toast = document.querySelector('#toast');

function bindStaticIcons() {
  document.querySelectorAll('[data-icon]').forEach((el) => { el.innerHTML = icon(el.dataset.icon); });
}

function renderNav() {
  const current = ['detail', 'summary'].includes(state.page) ? 'records' : state.page;
  const makeNav = (item) => `<button class="nav-button ${item.featured ? 'record-nav' : ''}" data-page="${item.id}" ${current === item.id ? 'aria-current="page"' : ''}>${icon(item.icon)}<span>${item.label}</span>${item.badge ? `<span class="nav-badge">${item.id === 'team' ? 1 : state.tasks.filter(t => !t.done).length}</span>` : ''}</button>`;
  document.querySelector('.side-nav').innerHTML = `${sideNavItems.map(makeNav).join('')}<button class="nav-button" data-page="agent" ${current === 'agent' ? 'aria-current="page"' : ''}>${icon('sparkles')}<span>금명이에게 묻기</span></button>`;
  document.querySelector('.bottom-nav').innerHTML = mobileNavItems.map(makeNav).join('');
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

        <article class="card card-pad weekly-card">
          <div class="card-header"><h3>이번 주 건강 브리핑</h3><span class="badge green">안정적</span></div>
          <div class="briefing-visual"><span>${icon('heart')}</span><div><small>금명이 케어 가이드</small><strong>환절기 면역력 관리를 위한<br>3가지 생활 수칙</strong></div></div>
          <p class="weekly-copy">일교차가 커지는 시기에는 수분 섭취와 가벼운 실내 운동, 규칙적인 복약 시간이 중요해요.</p>
          <button class="text-link" data-action="briefing">건강 브리핑 읽기 →</button>
        </article>
      </div>

      <aside class="stack">
        <article class="card card-pad">
          <div class="card-header"><h3>빠른 케어 메뉴</h3></div>
          <div class="quick-grid">
            <button class="quick-button" data-action="prescription"><span>${icon('files')}</span><strong>처방전 재발급</strong><small>기존 처방 확인</small></button>
            <button class="quick-button" data-health-tab="labs" data-page="health"><span>${icon('activity')}</span><strong>최근 검사 결과</strong><small>종합 혈액검사</small></button>
            <button class="quick-button" data-health-tab="vaccines" data-page="health"><span>${icon('syringe')}</span><strong>예방접종 기록</strong><small>접종 일정 확인</small></button>
            <button class="quick-button" data-page="team"><span>${icon('doctor')}</span><strong>전담 주치의 상담</strong><small>케어팀 연결</small></button>
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

function appointmentsPage() {
  const days = [
    { day: 22, weekday: '화' }, { day: 23, weekday: '수' }, { day: 24, weekday: '목' },
    { day: 25, weekday: '금' }, { day: 26, weekday: '토' }
  ];
  const doctors = [
    { initial: '이', name: '이서진 전문의', dept: '내과 · 만성질환', detail: '진료 경력 12년 · 평점 4.9', time: '오늘 오후 4:15', badge: '가장 빠름' },
    { initial: '박', name: '박현우 전문의', dept: '가정의학과', detail: '진료 경력 9년 · 평점 4.8', time: '내일 오전 10:00', badge: '원격 진료' },
    { initial: '정', name: '정다은 전문의', dept: '내과 · 노년의학', detail: '진료 경력 15년 · 평점 4.9', time: '9월 24일 오후 2:30', badge: '주치의 추천' }
  ];
  return `<section class="page">
    ${pageHeading('진료 예약 & 원격 케어', '필요한 진료를<br>바로 이어드릴게요', '증상에 맞는 의료진과 가능한 시간을 한 화면에서 선택하세요.')}
    <article class="urgent-care"><div><span class="urgent-icon">${icon('video')}</span><div><span class="badge red">24시간 상담</span><h3>지금 의료 상담이 필요하신가요?</h3><p>대기 중인 의료진과 비대면으로 연결할 수 있어요.</p></div></div><button class="button primary" data-action="urgent-call">지금 상담 요청</button></article>
    <div class="booking-grid">
      <div class="stack">
        <article class="card card-pad"><div class="card-header"><h3>진료 분야 선택</h3><span class="step-label">1 / 3</span></div><div class="choice-chips">${['내과','가정의학과','복약 상담','건강검진'].map(type => `<button class="choice-chip ${state.appointmentType === type ? 'selected' : ''}" data-appointment-type="${type}">${type === '내과' ? icon('doctor') : type === '복약 상담' ? icon('pill') : icon('heart')}<span>${type}</span></button>`).join('')}</div></article>
        <article class="card card-pad"><div class="card-header"><h3>예약 날짜 선택</h3><span class="step-label">2 / 3</span></div><div class="date-strip">${days.map(d => `<button class="date-option ${state.appointmentDay === d.day ? 'selected' : ''}" data-appointment-day="${d.day}"><small>${d.weekday}</small><strong>${d.day}</strong><span>9월</span></button>`).join('')}</div><div class="availability"><i></i> 선택한 날짜에 예약 가능한 의료진 3명</div></article>
        <article class="card card-pad"><div class="card-header"><h3>예약 가능 의료진</h3><span class="step-label">3 / 3</span></div><div class="doctor-list">${doctors.map((doctor, index) => `<div class="doctor-card"><span class="doctor-avatar">${doctor.initial}<i></i></span><div><div class="doctor-name"><strong>${doctor.name}</strong><span class="badge ${index === 0 ? 'green' : ''}">${doctor.badge}</span></div><p>${doctor.dept}</p><small>${doctor.detail}</small><div class="doctor-time">${icon('clock')} ${doctor.time} 예약 가능</div></div><button class="button ${index === 0 ? 'primary' : 'secondary'}" data-action="book" data-doctor="${doctor.name}">예약</button></div>`).join('')}</div></article>
      </div>
      <aside class="stack"><article class="card card-pad next-visit"><span class="eyebrow">다가오는 진료</span><h3>10월 13일 · 오전 10:30</h3><p>서울봄내과 · 혈액검사 예정</p><button class="button full" data-action="calendar">일정 자세히 보기</button></article><article class="card card-pad"><div class="card-header"><h3>원격 진료 준비</h3><span>${icon('video')}</span></div><div class="prep-list"><div><span>${icon('check')}</span><p><strong>복용 중인 약 확인</strong><small>최근 처방 정보가 연결되어 있어요</small></p></div><div><span>${icon('check')}</span><p><strong>진료 질문 준비</strong><small>저장된 질문 2개가 있어요</small></p></div><div><span class="pending">3</span><p><strong>카메라·마이크 확인</strong><small>진료 10분 전 확인해주세요</small></p></div></div></article></aside>
    </div>
  </section>`;
}

function teamPage() {
  const extraMessages = state.teamMessages.map(m => `<div class="care-message user-message"><p>${m}</p><small>방금 · 전송됨</small></div>`).join('');
  return `<section class="page">
    ${pageHeading('전담 케어팀', '혼자 고민하지 않도록<br>케어팀이 함께할게요', '진료와 복약, 생활 관리에 대해 편하게 문의하세요.')}
    <div class="care-chat-layout">
      <aside class="card care-roster"><div class="card-pad"><div class="card-header"><h3>나의 케어팀</h3><span class="badge green">응답 가능</span></div><div class="team-member active"><span class="doctor-avatar purple">간<i></i></span><div><strong>김하늘 간호사</strong><p>케어 코디네이터</p></div><span>지금</span></div><div class="team-member"><span class="doctor-avatar">이</span><div><strong>이서진 전문의</strong><p>내과 주치의</p></div><span>1시간 전</span></div><div class="team-member"><span class="doctor-avatar mint">약</span><div><strong>최유리 약사</strong><p>복약 상담</p></div><span>어제</span></div></div><div class="care-hours"><span>${icon('clock')}</span><div><strong>케어팀 운영 시간</strong><p>평일 오전 9시 – 오후 6시<br>긴급 상황은 119에 연락해주세요.</p></div></div></aside>
      <article class="card care-thread"><header><div class="team-avatars"><span>간</span><span>이</span><span>약</span></div><div><strong>김금명 님 전담 케어팀</strong><p><i></i> 평균 10분 이내 답변</p></div><button class="icon-button" aria-label="케어팀 정보">${icon('users')}</button></header><div class="thread-day">오늘</div><div class="thread-body"><div class="care-message team-message"><div class="message-author"><span class="doctor-avatar purple">간</span><strong>김하늘 간호사</strong></div><p>안녕하세요, 수진님. 어머님의 최근 혈압 기록 잘 확인했어요. 지난주보다 안정적으로 유지되고 있습니다.</p><small>오전 9:42</small></div><div class="care-message user-message"><p>다행이네요. 저녁 혈압약은 오늘도 같은 시간에 드리면 될까요?</p><small>오전 9:48</small></div><div class="care-message team-message"><div class="message-author"><span class="doctor-avatar mint">약</span><strong>최유리 약사</strong></div><p>네, 오늘은 기존 시간대로 복용해주세요. 다만 진료 녹음과 처방전의 복용 시간이 달라서 다음 방문 전 병원에 확인해두겠습니다.</p><div class="care-note">${icon('pill')} <span><strong>케어팀 메모</strong> 복용 시간 확인 요청 등록</span></div><small>오전 9:55</small></div>${extraMessages}</div><div class="quick-replies">${['다음 방문 준비','복약 시간 문의','혈압 기록 확인'].map(q=>`<button data-team-question="${q}">${q}</button>`).join('')}</div><form class="team-compose" id="team-form"><button type="button" class="icon-button" aria-label="파일 첨부">${icon('paperclip')}</button><input id="team-input" aria-label="케어팀에게 메시지" placeholder="케어팀에게 메시지를 보내세요" autocomplete="off"><button class="send-button" aria-label="메시지 보내기">${icon('send')}</button></form></article>
    </div>
  </section>`;
}

function healthPage() {
  const tabLabels = { overview: '요약', labs: '검사 결과', visits: '진료·시술', vaccines: '예방접종' };
  let content = '';
  if (state.healthTab === 'overview') content = `<div class="health-dashboard">
    <div class="metric-grid">
      <article class="metric-card"><div><span>최근 혈압</span><strong>128 <small>/ 78</small></strong><p>mmHg · 정상 범위</p></div><span class="metric-trend good">${icon('trend')} 안정</span><svg viewBox="0 0 160 42" class="sparkline"><path d="M3 28 C18 15,28 30,42 21 S65 12,78 22 S101 31,116 18 S139 14,157 10"/></svg></article>
      <article class="metric-card"><div><span>공복 혈당</span><strong>92</strong><p>mg/dL · 정상 범위</p></div><span class="metric-trend good">${icon('check')} 정상</span><svg viewBox="0 0 160 42" class="sparkline mint"><path d="M3 24 C18 20,28 28,42 23 S66 18,79 22 S105 17,119 21 S141 24,157 19"/></svg></article>
      <article class="metric-card"><div><span>오늘 걸음 수</span><strong>4,821</strong><p>목표 6,000보의 80%</p></div><span class="metric-trend">${icon('activity')} 진행 중</span><div class="goal-bar"><i style="width:80%"></i></div></article>
    </div>
    <article class="card card-pad medication-panel"><div class="card-header"><div><h3>복약 관리</h3><p>처방전 기준 · 오늘 2건</p></div><button class="text-link" data-action="prescription">처방 내역</button></div><div class="med-progress"><span>오늘 복약 진행률</span><strong>1 / 2 완료</strong><div><i style="width:50%"></i></div></div><div class="medication-list"><div class="medication-item"><span class="item-icon">${icon('pill')}</span><div><div><strong>혈압약 2.5mg</strong><span class="badge orange">확인 필요</span></div><p>저녁 식후 · 1일 1회 · 오후 8:00</p><small>진료 녹음과 처방전의 복용 시간이 달라요</small></div><button class="med-check" data-action="med-check" aria-label="혈압약 복용 완료">${icon('check')}</button></div><div class="medication-item done"><span class="item-icon green">${icon('pill')}</span><div><div><strong>고지혈증약 10mg</strong><span class="badge green">복용 완료</span></div><p>저녁 식후 · 1일 1회</p><small>오늘 오후 7:40 복용 기록</small></div><button class="med-check checked" aria-label="고지혈증약 복용 완료">${icon('check')}</button></div></div></article>
    <article class="card card-pad"><div class="card-header"><h3>최근 검사 결과</h3><button class="text-link" data-health-tab="labs">전체 보기</button></div><div class="lab-row"><span class="item-icon green">${icon('flask')}</span><div><strong>2026년 정기 혈액검사</strong><p>2026년 9월 15일 · 서울봄내과</p></div><span class="badge green">정상 8</span><span class="badge orange">확인 1</span><button class="icon-button">${icon('chevron')}</button></div><div class="lab-row"><span class="item-icon">${icon('heart')}</span><div><strong>심전도 검사</strong><p>2026년 8월 18일 · 서울봄내과</p></div><span class="badge green">정상</span><button class="icon-button">${icon('chevron')}</button></div></article>
    <div class="health-two"><article class="card card-pad vaccine-panel"><div class="card-header"><div><h3>예방접종 및 정기 검진</h3><p>앞으로의 일정</p></div><button class="text-link" data-health-tab="vaccines">기록 보기</button></div><div class="vaccine-timeline"><div class="complete"><i>${icon('check')}</i><div><span class="badge green">접종 완료</span><strong>독감 예방접종</strong><p>2025년 10월 14일</p></div></div><div><i>${icon('syringe')}</i><div><span class="badge">예정</span><strong>대상포진 2차 접종</strong><p>2026년 10월 권장</p></div></div><div><i>${icon('calendar')}</i><div><span class="badge orange">검진 예정</span><strong>국가건강검진</strong><p>2026년 12월까지</p></div></div></div></article><article class="card card-pad"><div class="card-header"><h3>알레르기 및 주의사항</h3><span>${icon('alert')}</span></div><div class="allergy-card"><strong>페니실린계 항생제</strong><p>과거 발진 반응 · 처방 전 의료진 확인</p></div><div class="allergy-card neutral"><strong>낙상 주의</strong><p>야간 이동 시 보호자 동행 권장</p></div><button class="text-link allergy-link" data-action="allergy">긴급 정보 전체 보기</button></article></div>
    <article class="card data-export-card"><span class="export-icon">${icon('files')}</span><div><h3>의료 데이터 내보내기 & 전송</h3><p>안전하게 암호화된 PDF로 기록을 내려받거나 병원에 전달할 수 있어요.</p><div><button class="button ghost" data-action="export">${icon('files')} 기록 PDF 다운로드</button><button class="button secondary" data-action="hospital-share">${icon('send')} 병원 전송 준비</button></div></div><span class="secure-note">${icon('shield')} 암호화 보호</span></article>
  </div>`;
  if (state.healthTab === 'labs') content = `<div class="health-list">${[['혈액검사 종합 결과','9월 15일','총 콜레스테롤 178 · 공복 혈당 92','정상','green'],['당화혈색소 검사','8월 18일','HbA1c 5.8% · 경계 범위','추적 관찰','orange'],['신장 기능 검사','7월 21일','eGFR 84 · 크레아티닌 정상','정상','green']].map(v=>`<article class="card record-summary"><span class="item-icon ${v[4]}">${icon('flask')}</span><div><strong>${v[0]}</strong><p>2026년 ${v[1]} · ${v[2]}</p></div><span class="badge ${v[4]}">${v[3]}</span><button class="icon-button" data-action="notice">${icon('chevron')}</button></article>`).join('')}</div>`;
  if (state.healthTab === 'visits') content = `<div class="health-list"><article class="card record-summary"><span class="item-icon">${icon('doctor')}</span><div><strong>서울봄내과 정기 진료</strong><p>2026년 9월 15일 · 처방 용량 변경</p></div><span class="badge">진료</span><button class="icon-button" data-page="detail">${icon('chevron')}</button></article><article class="card record-summary"><span class="item-icon orange">${icon('heart')}</span><div><strong>백내장 수술</strong><p>2024년 5월 12일 · 새빛안과</p></div><span class="badge green">회복 완료</span><button class="icon-button" data-action="notice">${icon('chevron')}</button></article><article class="card record-summary"><span class="item-icon green">${icon('activity')}</span><div><strong>국가건강검진</strong><p>2024년 2월 8일 · 한국건강관리협회</p></div><span class="badge green">완료</span><button class="icon-button" data-action="notice">${icon('chevron')}</button></article></div>`;
  if (state.healthTab === 'vaccines') content = `<div class="health-list"><article class="card record-summary"><span class="item-icon green">${icon('syringe')}</span><div><strong>인플루엔자 예방접종</strong><p>2025년 10월 14일 · 다음 접종 2026년 10월 권장</p></div><span class="badge green">접종 완료</span></article><article class="card record-summary"><span class="item-icon">${icon('syringe')}</span><div><strong>코로나19 추가 접종</strong><p>2025년 11월 3일 · 화이자</p></div><span class="badge green">접종 완료</span></article><article class="card record-summary"><span class="item-icon orange">${icon('syringe')}</span><div><strong>대상포진 예방접종</strong><p>1차 접종 완료 · 2차 접종 일정 확인</p></div><span class="badge orange">예정</span></article></div>`;
  return `<section class="page">${pageHeading('건강 기록', '나의 건강 변화를<br>한눈에 확인해요', '검사 결과와 진료 이력, 복약 정보를 필요한 순간에 찾아보세요.')}<div class="health-tabs" role="tablist">${Object.entries(tabLabels).map(([id,label])=>`<button role="tab" aria-selected="${state.healthTab===id}" data-health-tab="${id}">${label}</button>`).join('')}</div>${content}</section>`;
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

const pages = { home: homePage, appointments: appointmentsPage, team: teamPage, health: healthPage, records: recordsPage, tasks: tasksPage, family: familyPage, detail: detailPage, agent: agentPage, parent: parentPage };
const pageTitles = { home: ['금명이 홈','오늘의 케어'], appointments: ['진료 연결','진료 예약'], team: ['전담 지원','케어팀'], health: ['통합 기록','건강 기록'], records: ['진료 기록','방문 기록'], tasks: ['함께 챙기기','챙길 일'], family: ['연결 관리','가족'], detail: ['진료 기록','진료 요약'], agent: ['기록 기반 안내','금명이에게 묻기'], parent: ['간편 모드','부모님 화면'] };

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
  if (pageTarget) { event.preventDefault(); if (pageTarget.dataset.healthTab) state.healthTab = pageTarget.dataset.healthTab; navigate(pageTarget.dataset.page); return; }
  const taskButton = event.target.closest('[data-task]');
  if (taskButton) { const task = state.tasks.find(t => t.id === Number(taskButton.dataset.task)); task.done = !task.done; render(); showToast(task.done ? '챙길 일을 완료했어요.' : '미완료로 되돌렸어요.'); return; }
  const question = event.target.closest('[data-question]');
  if (question) { sendQuestion(question.dataset.question); return; }
  const appointmentType = event.target.closest('[data-appointment-type]');
  if (appointmentType) { state.appointmentType = appointmentType.dataset.appointmentType; render(); return; }
  const appointmentDay = event.target.closest('[data-appointment-day]');
  if (appointmentDay) { state.appointmentDay = Number(appointmentDay.dataset.appointmentDay); render(); return; }
  const healthTab = event.target.closest('[data-health-tab]');
  if (healthTab) { state.healthTab = healthTab.dataset.healthTab; render(); return; }
  const teamQuestion = event.target.closest('[data-team-question]');
  if (teamQuestion) { document.querySelector('#team-input').value = teamQuestion.dataset.teamQuestion; document.querySelector('#team-input').focus(); return; }
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
    case 'urgent-call': showToast('가장 빠른 원격 상담을 확인하고 있어요.'); break;
    case 'book': showToast(`${action.dataset.doctor} 예약 시간을 선택했어요.`); break;
    case 'prescription': showToast('최근 처방전과 재발급 가능한 내역을 확인했어요.'); break;
    case 'briefing': showToast('이번 주 건강 브리핑을 열었어요.'); break;
    case 'med-check': action.classList.add('checked'); action.closest('.medication-item').classList.add('done'); showToast('복약 완료로 기록했어요.'); break;
    case 'allergy': showToast('의료진에게 보여줄 긴급 정보를 준비했어요.'); break;
    case 'export': showToast('건강 기록 PDF를 준비했어요.'); break;
    case 'hospital-share': showToast('전송할 기록과 병원을 선택해주세요.'); break;
    default: showToast('이 기능은 프로토타입에서 확인 중이에요.');
  }
});

document.addEventListener('submit', (event) => {
  if (event.target.id === 'team-form') {
    event.preventDefault();
    const input = document.querySelector('#team-input');
    const value = input.value.trim();
    if (value) { state.teamMessages.push(value); render(); showToast('케어팀에 메시지를 보냈어요.'); }
    return;
  }
  if (event.target.id !== 'chat-form') return;
  event.preventDefault();
  const input = document.querySelector('#chat-input');
  const value = input.value.trim();
  if (value) sendQuestion(value);
});

window.addEventListener('popstate', () => { state.page = location.hash.slice(1) || 'home'; render(); });
bindStaticIcons();
render();
