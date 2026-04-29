'use client';

import { Map, MapMarker } from "react-kakao-maps-sdk";
import Script from "next/script";
import { useState } from "react";

export default function KakaoMap() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // 환경변수가 잘 읽히는지 확인용 (브라우저 콘솔에 찍힘)
  const appKey = process.env.NEXT_PUBLIC_KAKAO_API_KEY; 

  return (
    <div style={{ width: "100%", height: "500px", position: "relative" }}>
      {/* 1. 스크립트 로드 전략 변경 */}
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`}
        strategy="afterInteractive"
        onLoad={() => {
            console.log("카카오 스크립트 로드 완료!");
            // window.kakao.maps.load를 통해 확실히 로드된 후 지도를 그림
            window.kakao.maps.load(() => {
                setIsLoaded(true);
            });
        }}
      />

      {/* 2. 로드 상태일 때만 지도를 렌더링 */}
      {isLoaded ? (
        <Map
          center={{ lat: 37.5665, lng: 126.9780 }}
          style={{ width: "100%", height: "100%" }}
          level={3}
        >
          <MapMarker position={{ lat: 37.5665, lng: 126.9780 }}>
            <div style={{ color: "#000", padding: "5px" }}>성공입니다!</div>
          </MapMarker>
        </Map>
      ) : (
        /* 지도가 로딩 중일 때 표시될 배경 */
        <div style={{ 
          width: "100%", 
          height: "100%", 
          backgroundColor: "#f0f0f0", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center" 
        }}>
          지도를 불러오는 중입니다... (Key: {appKey ? "연결됨" : "없음"})
        </div>
      )}
    </div>
  );
}