# 🌌 Fourier Oracle: Mathematical Art Visualizer

**Fourier Oracle** is an interactive visualization project that decomposes and reconstructs complex geometric shapes using Fourier Series. It creates dazzling Fourier Epicycle animations based on user drawings or mathematical seeds.

## ✨ Key Features

- **Interactive DFT Drawing**: Transforms freehand curves drawn by users into mathematical harmonic functions using the Discrete Fourier Transform (DFT).
- **Mathematical Seed Gallery**: Instantly visualizes beautiful mathematical geometric shapes such as Lissajous, Hypotrochoid, and Infinity curves.
- **Dynamic Multi-color System**: Applies real-time rainbow gradients and neon glow effects based on frequency and period.
- **Meditative Animation**: Provides a meditative visual experience through 0.1x ultra-slow motion modes and infinite rolling trails.

## 🛠 Tech Stack

- **Frontend**: React 19, Vite
- **Graphics**: HTML5 Canvas API
- **Mathematics**: Discrete Fourier Transform (DFT) Logic (Custom Implementation)

## 📁 Project Structure

- `src/components/FourierCanvas2D.jsx`: Core 2D Fourier visualization & UI component (Stable)
- `src/components/FourierCanvas3D.jsx`: 3D Fourier visualization component (Planned)
- `src/lib/dft.js`: Discrete Fourier Transform (DFT) mathematical logic
- `src/styles/`: Global themes and design system

## 🚀 Recent Updates (v1.1 - Mobile UX Refined)

- **Mobile First Designs**: Fully revamped mobile-friendly UI including Hamburger Menu (☰) and Drop-down Settings Panel.
- **Responsive Canvas**: Implemented responsive logic where seed drawings and trails automatically scale in real-time with screen size changes.
- **Enhanced Dock**: Applied mobile-optimized floating dock and improved Shuffle logic.

## 📄 Documentation

For detailed implementation details and technical optimization processes, please refer to the following documents:

- [Fourier Series Devlog (KR)](./docs/fourier_series_devlog.md): Implementation details and optimization history
- [Fourier Implementation Plan](./docs/fourier_implementation_plan.md): Initial design and structure plan
- [Fourier Task History](./docs/fourier_task_history.md): Complete task history

---

_Created for Art & Engineering Portfolio._
