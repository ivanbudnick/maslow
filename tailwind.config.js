module.exports = {
  content: [
    './src/App.js',
    './src/charts/Chart.js',
    './src/components/ChartContainer.js',
    './src/components/Slider.js',
    './src/components/SliderList.js',
    './src/components/CardsGrid.js',
    './src/components/Top.js',
    './src/components/WeeklyWorkHours.js',
    './src/components/Compensation.js'
  ],
  theme: {
    extend: {
      colors:{
        'grey-top': '#303030',
        'light-green': '#5AD0A2',
        'bg-inactive': '#EEEEEE',
        'text-inactive': '#B3B3B3',
        'text-labels': '#787878'
      }
    },
    screens: {
      "tablet": {'max': '640px'}
    }
  },
  
  plugins: [],
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
}
