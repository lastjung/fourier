# 멀티-푸리에 시스템 상세 사양서 (Multi-Fourier System Specification)

이 문서는 단순 궤적 추적기를 넘어, 다중 하모닉 시스템으로 진화한 **Fourier Oracle**의 핵심 기술 구조와 파라미터를 설명합니다.

## 1. 아키텍처 개요 (Architecture)

시스템은 단일 객체 기반에서 **배열형 인스턴스 구조**로 개편되었습니다. 각 인스턴스는 독립적인 영혼(데이터)을 가지며 전역 렌더러에 의해 생명이 유지됩니다.

- **State Structure**: `instances: Array<{id, fourier, path, center, hue, precision}>`
- **Global Governance**: `globalSettings` 상에서 모든 인스턴스의 물리 엔진(속도, 잔상 등)을 중앙 제어합니다.

---

## 2. 렌더링 엔진 상세 (Rendering Engine)

### 2.1 에피사이클 합성 (Epicycle Synthesis)

각 인스턴스는 자신의 `center` 좌표를 기준으로 DFT(이산 푸리에 변환) 결과를 원들의 맞물림으로 표현합니다.

- **Dynamic Weight**: `Core Circle Weight` 슬라이더를 통해 원들의 굵기를 실시간 조정합니다.
- **Harmonized Coloring**: 인스턴스 생성 시 부여된 `hue`를 기반으로 내부 하모닉스들이 무지개빛 그라데이션을 형성합니다.

### 2.2 패스 렌더링 (Path Rendering)

- **Segmented Drawing**: 성능과 네온 효과를 위해 패스를 세그먼트 단위로 그룹화하여 그립니다.
- **Persistence (잔상)**: 과거 데이터를 `maxPath` 윈도우 방식으로 관리하여, 끊김 없이 흐르면서도 꼬리부터 점진적으로 사라지는 효과를 구현합니다.

---

## 3. 딥-튜닝 파라미터 가이드 (Deep Tuning)

| 파라미터               | 영문 명칭   | 설명                                                 | 권장 설정 (싱글 컨셉) |
| :--------------------- | :---------- | :--------------------------------------------------- | :-------------------- |
| **Geometric Detail**   | 정밀도      | 푸리에 급수의 개수. 높을수록 원본에 가까워짐         | 50 ~ 150              |
| **Flow Speed**         | 흐름 속도   | 시간(`dt`)의 증가량. 물리적 애니메이션 속도          | 0.05x ~ 0.1x          |
| **Persistence**        | 잔상 유지   | 궤적이 유지되는 시간. 낮을수록 선명한 기하학 선 노출 | **1.0x ~ 3.0x**       |
| **Path Line Weight**   | 궤적 두께   | 그려지는 결과선(궤적)의 굵기                         | **1.5px ~ 2.5px**     |
| **Core Circle Weight** | 원 두께     | 회전하는 보조 원(에피사이클)들의 굵기                | **0.3px ~ 0.8px**     |
| **Spatial Spread**     | 무작위 분산 | 시드 소환 시 화면 중앙에서 퍼지는 범위               | 0px (중앙 집중)       |
| **Shape Scale**        | 도형 크기   | 개별 도형의 전체적인 물리적 크기                     | 100%                  |
| **Sequence Delay**     | 분석 대기   | 시드 프리뷰 노출 후 분석 시작까지의 시간             | 1.2s                  |

---

## 4. 시드 생성 및 동기화 (Sync Logic)

사용자가 'Seed'를 소환할 때 시스템은 다음 시퀀스를 따릅니다:

1. **Center Selection**: 전역 `Spread` 내에서 랜덤한 좌표를 미리 선점합니다.
2. **Preview Display**: 선점된 좌표에 무지개 가이드라인(`userPath` + `previewCenter`)을 표시합니다.
3. **DFT Analysis**: 가이드라인 데이터를 바탕으로 배후에서 푸리에 주파수 계산을 수행합니다.
4. **Handoff**: 설정된 `Delay`가 지나면 프리뷰를 끄고, 계산된 데이터를 실제 푸리에 인스턴스로 바꿉니다.

---

## 5. 성능 최적화 전략

- **Alpha Fading**: 매 프레임 `0.02` 수준의 옅은 블랙 사각형을 덮씌워 GPU 부담 없이 네온 잔상 효과를 구현합니다.
- **Batch Processing**: 30단위 세그먼트로 `stroke()`를 호출하여 브라우저의 그래픽 호출 횟수를 90% 이상 절감했습니다.
