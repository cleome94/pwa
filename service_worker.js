const sCacheName = "Tarot of Oz";
const aFilesToCache = [
    '.',
    './index.html',
    './splash.html',
    './manifest.json',
    './images/hello-oz.png'
];
self.addEventListener("install", pEvent => {
    console.log("서비스 워커 설치 완료!");
    pEvent.waitUntil(
        caches.open(sCacheName)
        .then(pCache => {
            console.log("캐시에 파일 저장 완료!");
            return pCache.addAll(aFilesToCache);
        })
    );
});
self.addEventListener('activate', pEvent => {
    console.log('서비스워커 동작 시작됨!');
});
self.addEventListener('fetch', pEvent => {
    pEvent.respondWith(
        caches.match(pEvent.request)
        .then(response => {
            if(!response){
                console.log("네트워크로 데이터 요청!", pEvent.request)
                return fetch(pEvent.request)
            }
            console.log("캐시에서 데이터 요청!", pEvent.request)
            return response;
        }).catch(err => console.log(err))
    );
});