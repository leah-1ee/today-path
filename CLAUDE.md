# 오늘의 길 — CLAUDE.md

## 프로젝트 개요
사용자의 환경 조건, 신체적 특성, 목적에 맞는 산책로를 추천하는 웹 서비스.
경기기후원과 협력하여 날씨·식생·환경 데이터를 결합한다.

## 기술 스택
- Framework: Next.js 14 App Router + TypeScript
- Styling: Tailwind CSS
- DB: Supabase (PostgreSQL + PostGIS)
- 상태관리: Zustand
- 배포: Vercel
- 지도: 카카오맵 SDK
- 고도 데이터: Mapbox Terrain RGB API

## 확정된 사전 결정 사항
- 경사도 데이터: Mapbox Terrain RGB (DTM 아님) — MVP 이후 교체 가능하도록 lib/elevation.ts로 추상화
- 경기기후원 데이터: CSV 방식으로 수령 → Supabase vegetation 테이블에 직접 적재
- 카카오 도보 API 지원 여부: 멘토링 후 확정 예정 (대안: T맵 보행자 API)
- 루프 경로 지원 여부: 멘토링 후 확정 예정 (불가 시 왕복 방식으로 대체)
- ORM: Supabase JS Client 사용 (PostGIS 공간 쿼리 때문에 Prisma 미사용)

## MVP API 엔드포인트
- GET /api/environment — 날씨·미세먼지·꽃가루 통합
- GET /api/infra — 반경 내 화장실·공원
- GET /api/vegetation — 현재 시즌 개화 식생
- POST /api/courses — 코스 추천 3개 (필터 전체 반영)
- GET /api/lighting — 야간 조명 커버리지
- GET /api/user/filters — 필터 불러오기
- POST /api/user/filters — 필터 저장

## 코스 추천 필터 파라미터
- duration: 30 | 60 | 90 | 120 (분)
- purpose: 'light' | 'exercise' | 'nature' | 'pet'
- companion: 'solo' | 'couple' | 'child' | 'elder'
- flatOnly: boolean
- barrierFree: boolean
- avoidPollen: boolean
- includeToilet: boolean

## 절대 하면 안 되는 것
- 스펙 임의 변경 금지 — 불확실하면 반드시 먼저 질문할 것
- 가정 기반으로 구현 금지 — 애매한 부분은 작업 전에 명확히 확인할 것
- .env.local 파일 수정 금지
- 한 번에 여러 기능 동시 구현 금지 — 항상 하나씩 완료 후 다음으로

## 주의사항
- 모든 외부 API 호출에는 타임아웃 처리 (5초) 및 fallback 값 필수
- 공간 쿼리는 Supabase JS Client로 처리 (ST_DWithin 등)
- 색약 사용자 대비: 색상 + 텍스트 항상 병기 (WCAG 2.1 AA)
- 모바일 우선 반응형 디자인