export function loadKakaoMap(appKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') return reject(new Error('Server side'));
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
}
