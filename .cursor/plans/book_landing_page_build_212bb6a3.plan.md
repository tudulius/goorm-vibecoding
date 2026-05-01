---
name: Book Landing Page Build
overview: Day2 정적 웹 페이지를 한 권 중심의 모던 책 소개 랜딩으로 재작성하고, 프로젝트 핵심 내용을 README에 정리합니다.
todos:
  - id: rewrite-day2-html
    content: Day2 index.html을 단일 책 소개 랜딩 구조로 재작성
    status: completed
  - id: restyle-day2-css
    content: Day2 style.css를 모던/미니멀 테마로 전면 업데이트
    status: completed
  - id: rebuild-day2-js
    content: Day2 script.js에 스크롤/내비/CTA 인터랙션 구현
    status: completed
  - id: refresh-readme
    content: README.md를 이번 Day2 프로젝트 핵심 내용 중심으로 업데이트
    status: completed
  - id: verify-page-flow
    content: 핵심 UI/인터랙션/문서 일치성 검증
    status: completed
isProject: false
---

# 모던 책 소개 페이지 및 README 작성 계획

## 목표
- `Day2_260430_목` 폴더의 웹 페이지를 **한 권 집중 소개형** 랜딩으로 재구성
- 프로젝트의 의도, 구성, 실행법, 커스터마이징 포인트를 `README.md`에 최신화

## 변경 범위
- 페이지 구조 재설계: [`/Users/inchulshin/Documents/GitHub/tudulius/M4-goorm-vibecoding/Day2_260430_목/index.html`](/Users/inchulshin/Documents/GitHub/tudulius/M4-goorm-vibecoding/Day2_260430_목/index.html)
- 스타일 전면 교체: [`/Users/inchulshin/Documents/GitHub/tudulius/M4-goorm-vibecoding/Day2_260430_목/style.css`](/Users/inchulshin/Documents/GitHub/tudulius/M4-goorm-vibecoding/Day2_260430_목/style.css)
- 인터랙션 스크립트 재구성: [`/Users/inchulshin/Documents/GitHub/tudulius/M4-goorm-vibecoding/Day2_260430_목/script.js`](/Users/inchulshin/Documents/GitHub/tudulius/M4-goorm-vibecoding/Day2_260430_목/script.js)
- 문서 업데이트: [`/Users/inchulshin/Documents/GitHub/tudulius/M4-goorm-vibecoding/README.md`](/Users/inchulshin/Documents/GitHub/tudulius/M4-goorm-vibecoding/README.md)

## 구현 방향
- 단일 책 랜딩 섹션 구성
  - 히어로(책 제목/한 줄 소개/CTA)
  - 책 핵심 정보(저자, 장르, 출간일, 평점 등)
  - 줄거리/핵심 메시지
  - 독자 포인트(추천 대상, 기대 효과)
  - 독자 리뷰 카드
  - 구매/자세히 보기 CTA
- 모던/미니멀 디자인 시스템
  - 여백 중심 레이아웃, 카드형 정보 블록, 단순한 색 체계
  - 반응형 기준(모바일 우선 보정 포함)
- JS 인터랙션(가벼운 범위)
  - 네비게이션 앵커 스무스 스크롤
  - 스크롤 위치 기반 현재 섹션 활성화
  - CTA 버튼 클릭 시 사용자 피드백(예: 알림/강조 효과)

## README 구성
- 프로젝트 개요(무엇을 만든 프로젝트인지)
- 실행 방법(브라우저에서 바로 실행)
- 핵심 기능 요약(UI 섹션/인터랙션/반응형)
- 파일 구조 및 각 파일 역할
- 커스터마이징 가이드(책 정보, 컬러/타이포, CTA 링크 변경 포인트)

## 검증 계획
- 기본 동작 확인: 페이지 로드, 앵커 이동, 활성 메뉴 동기화
- 반응형 확인: 데스크탑/모바일 레이아웃 붕괴 여부 점검
- 문서 일치성 확인: README 설명과 실제 파일/기능 간 불일치 제거