const rangeSlider = document.querySelector('.range__container');

const formatValues = [
  document.getElementById('min'), // Поле для минимального значения
  document.getElementById('max'), // Поле для максимального значения
];

const formatForSlider = {
  from: function (formattedValue) {
    return Number(formattedValue); // Преобразуем форматированное значение в число
  },
  to: function (numericValue) {
    return Math.round(numericValue); // Округляем число до ближайшего целого
  },
};

noUiSlider.create(rangeSlider, {
  range: {
    min: 0,
    max: 1000,
  },
  start: [0, 900],
  connect: true,
  step: 1,
  behavior: 'drag',
  handleAttributes: [
    { 'aria-label': 'lower' },
    { 'aria-label': 'upper' },
  ],
  format: formatForSlider,
});

rangeSlider.noUiSlider.on('update', (values, handle) => {
  formatValues[handle].value = values[handle]; // Обновляем поля при движении ползунка
});

