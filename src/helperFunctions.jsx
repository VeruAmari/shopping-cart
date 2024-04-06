function roundToTwo(number) {
  return +(Math.round(number + 'e+2') + 'e-2');
}

export { roundToTwo };
