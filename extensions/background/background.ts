// 알람 설정
chrome.alarms.create('myAlarm', {
  when: Date.now() + 5000, // 5초 후에 알람이 울릴 수 있도록 설정
});

// 알람 울릴 때 실행될 이벤트 핸들러
chrome.alarms.onAlarm.addListener(function (alarm) {
  if (alarm.name === 'myAlarm') {
    // 알림 생성
    chrome.action.setIcon({ path: 'favicon.ico' }); // 알림 아이콘 설정
    chrome.action.setTitle({ title: '알림 제목' }); // 알림 제목 설정
    chrome.action.setBadgeText({ text: '!' }); // 알림 배지 설정
  }
});

// 알림 클릭 시 실행될 이벤트 핸들러
chrome.action.onClicked.addListener(function (tab) {
  // 알림 클릭 시 원하는 동작을 수행하도록 추가 코드 작성
  // 예: 새 탭 열기
  chrome.tabs.create({ url: 'https://www.naver.com/' });
});

export {};
