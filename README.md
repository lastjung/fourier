# 🌌 Fourier Oracle: Mathematical Art Visualizer

**Fourier Oracle**은 복잡한 기히학적 형태를 푸리에 급수(Fourier Series)를 통해 분해하고 재구성하는 인터랙티브 시각화 프로젝트입니다. 사용자의 드로잉이나 수학적 시드(Seed)를 바탕으로 화려한 푸리에 에피사이클(Epicycles) 애니메이션을 생성합니다.

## ✨ Key Features

- **Interactive DFT Drawing**: 사용자로부터 입력받은 자유 곡선을 이산 푸리에 변환(Discrete Fourier Transform)을 통해 수학적 조화 함수로 변환합니다.
- **Mathematical Seed Gallery**: 리사주(Lissajous), 하이포트로코이드(Hypotrochoid), 인피니티 곡선 등 아름다운 수학적 기하학 형태를 즉시 시각화합니다.
- **Dynamic Multi-color System**: 주파수와 주기에 따른 실시간 무지개 그라데이션 및 네온 글로우 효과를 적용했습니다.
- **Meditative Animation**: 0.1x 초감속 모드와 무한 롤링 트레일을 통해 수학적 생성 과정을 명상적인 비주얼로 표현합니다.

## 🛠 Tech Stack

- **Frontend**: React 19, Vite
- **Graphics**: HTML5 Canvas API
- **Mathematics**: Discrete Fourier Transform (DFT) Logic (Custom Implementation)

## 📁 Project Structure

- `src/components/FourierCanvas2D.jsx`: 2D 푸리에 시각화 및 UI 핵심 컴포넌트 (Stable)
- `src/components/FourierCanvas3D.jsx`: 3D 푸리에 시각화 컴포넌트 (Planned)
- `src/lib/dft.js`: 이산 푸리에 변환(DFT) 수학 로직
- `src/styles/`: 전역 테마 및 디자인 시스템

## 🚀 Recent Updates (v1.1 - Mobile UX Refined)

- **Mobile First Designs**: 햄버거 메뉴(☰), 드롭다운 설정 패널 등 모바일 친화적 UI 전면 개편.
- **Responsive Canvas**: 화면 크기 변화에 따라 시드 그림과 궤적의 크기가 실시간으로 자동 축소/확대되는 반응형 로직 구현.
- **Enhanced Dock**: 모바일 최적화된 하단 플로팅 도크 및 개선된 셔플(Shuffle) 로직 적용.

## 📄 Documentation

상세한 구현 내역 및 기술적 최적화 과정은 다음 문서를 참고하세요:

- [Fourier Series Devlog (KR)](./docs/fourier_series_devlog.md): 상세 구현 및 최적화 내역
- [Fourier Implementation Plan](./docs/fourier_implementation_plan.md): 초기 설계 및 구조 정리 계획
- [Fourier Task History](./docs/fourier_task_history.md): 전체 작업 이력

---

_Created for Art & Engineering Portfolio._
