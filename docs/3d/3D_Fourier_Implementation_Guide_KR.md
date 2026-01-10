# 🌌 3D 푸리에 시각화 구현 가이드 (3D Fourier Implementation Guide)

이 문서는 2D 평면 위에 그려지던 푸리에 에피사이클(Epicycles)을 **3차원 공간(3D Space)**으로 확장하는 원리와 구현 방법을 상세히 설명합니다.

---

## 1. 핵심 원리 (Core Concept)

### 2D vs 3D 차이점

- **2D 푸리에**: 복소평면($x + iy$) 상의 점을 추적합니다. 하나의 원(Cycle)이 복소수 회전($e^{i\theta}$)을 하며 2차원 평면 위의 궤적을 그립니다.
- **3D 푸리에**: 3차원 공간($x, y, z$) 상의 점을 추적합니다. 이를 구현하는 가장 직관적인 방법은 **"각 축을 독립적으로 분해"**하는 것입니다.

### 3축 분해 (Decomposition)

복잡한 3D 곡선도 결국 시간 $t$에 따라 변하는 $x, y, z$ 좌표의 집합입니다.

> $P(t) = (x(t), y(t), z(t))$

이를 세 개의 독립적인 1차원 신호로 분리하여 생각합니다:

1.  **$x(t)$**: 시간에 따른 좌우 움직임
2.  **$y(t)$**: 시간에 따른 상하 움직임
3.  **$z(t)$**: 시간에 따른 앞뒤(깊이) 움직임

이 각각의 신호에 대해 **이산 푸리에 변환(DFT)**을 수행하면, 각 축을 담당하는 **"원들의 집합(Epicycles)"**을 얻을 수 있습니다.

---

## 2. 알고리즘 구현 (Algorithm)

### 데이터 구조 (Data Structure)

3D 시드(Seed)는 `Vector3` 배열로 표현됩니다.

```javascript
// 입력 데이터 (Seed)
const path = [
  { x: 10, y: 5, z: 2 },
  { x: 12, y: 6, z: 1 },
  ...
];
```

### 3축 DFT 수행

기존의 `dft.js` 함수는 복소수(`{re, im}`)를 입력받습니다. 3D 좌표를 각각 실수부(`re`)로 넣고, 허수부(`im`)는 0으로 하여 3번 변환합니다.

```javascript
// 1. 데이터 분리
const xSignal = path.map((p) => ({ re: p.x, im: 0 }));
const ySignal = path.map((p) => ({ re: p.y, im: 0 }));
const zSignal = path.map((p) => ({ re: p.z, im: 0 }));

// 2. DFT 수행
const fourierX = dft(xSignal);
const fourierY = dft(ySignal);
const fourierZ = dft(zSignal);

// 3. 정렬 (진폭이 큰 순서대로)
fourierX.sort((a, b) => b.amp - a.amp);
fourierY.sort((a, b) => b.amp - a.amp);
fourierZ.sort((a, b) => b.amp - a.amp);
```

### 3D 재구성 (Reconstruction)

이제 세 개의 에피사이클 시스템을 돌려서 하나의 점 $P(t)$를 찾습니다.

- **X축 원들**이 회전하여 최종 $x$ 좌표를 산출.
- **Y축 원들**이 회전하여 최종 $y$ 좌표를 산출.
- **Z축 원들**이 회전하여 최종 $z$ 좌표를 산출.

$$
x(t) = \sum_{k=0}^{N-1} A_x[k] \cdot \cos(2\pi f_k t + \phi_x[k]) \\
y(t) = \sum_{k=0}^{N-1} A_y[k] \cdot \cos(2\pi f_k t + \phi_y[k]) \\
z(t) = \sum_{k=0}^{N-1} A_z[k] \cdot \cos(2\pi f_k t + \phi_z[k])
$$

_(여기서 $A$는 진폭, $f$는 주파수, $\phi$는 위상입니다)_

---

## 3. 시각화 (Visualization with Three.js)

3D 공간에서는 평면 종이(Canvas 2D)가 없으므로 **Three.js**를 사용하여 렌더링합니다.

### 주요 구성 요소

1.  **Scene**: 우주 공간 (배경)
2.  **Epicycles (원)**: `THREE.Line` 객체로 표현.
    - X축 움직임은 빨간색 원
    - Y축 움직임은 초록색 원
    - Z축 움직임은 파란색 원 등으로 구분하면 이해하기 쉽습니다.
3.  **Drawing Pen**: 세 축의 결과값이 만나는 허공의 점.
4.  **Trail (궤적)**: 펜이 지나간 자리를 잇는 `THREE.BufferGeometry` 선.

### 렌더링 루프 (Animation Loop)

```javascript
function animate() {
  // 1. 시간 증가
  time += dt;

  // 2. 각 축의 현재 위치 계산 (에피사이클 돌리기)
  const vx = computeFourier(fourierX, time);
  const vy = computeFourier(fourierY, time);
  const vz = computeFourier(fourierZ, time);

  // 3. 3D 점 생성
  const point = new THREE.Vector3(vx, vy, vz);

  // 4. 트레일에 점 추가
  trail.push(point);
  updateTrailGeometry(trail);

  // 5. 화면 렌더링
  renderer.render(scene, camera);
}
```

---

## 4. 학습 포인트 (Study Points)

1.  **복소수와 회전**: $e^{i\theta}$가 어떻게 원을 그리는지 (오일러 공식).
2.  **주파수 영역(Frequency Domain)**: 복잡한 모양을 '주파수' 성분으로 쪼갠다는 것의 의미.
3.  **차원 확장**: 2D 로직을 그대로 3번 반복하면 3D가 된다는 '차원의 독립성'.

이 가이드를 바탕으로 `FourierCanvas3D.jsx`를 분석하시면 훨씬 이해가 빠르실 겁니다! 🚀
