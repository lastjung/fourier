/**
 * Discrete Fourier Transform (DFT) implementation
 * @param {Array<{x: number, y: number}>} x - Array of complex numbers represented as points
 * @returns {Array<{re: number, im: number, freq: number, amp: number, phase: number}>}
 */
export function dft(x) {
  const X = [];
  const N = x.length;

  for (let k = 0; k < N; k++) {
    let re = 0;
    let im = 0;

    for (let n = 0; n < N; n++) {
      const phi = (2 * Math.PI * k * n) / N;
      re += x[n].re * Math.cos(phi) + x[n].im * Math.sin(phi);
      im += -x[n].re * Math.sin(phi) + x[n].im * Math.cos(phi);
    }

    re = re / N;
    im = im / N;

    const freq = k;
    const amp = Math.sqrt(re * re + im * im);
    const phase = Math.atan2(im, re);

    X[k] = { re, im, freq, amp, phase };
  }

  return X;
}
