export const unitsBind: { [key: string]: string[] } = {
  Height: ['ft', 'cm'],
  Weight: ['lbs', 'kg'],
};

export const rulerInit: Record<string, any> = {
  age: {
    min: 12,
    max: 70,
    value: 27,
    offset: 870, // the starting point on the ruler in pixels - 10px offset
    stepPx: 50,
  },
  height: {
    cm: {
      stepPx: 50,
      offset: 6970, // the starting point on the ruler in pixels - 10px offset
      man: {
        min: 140,
        max: 230,
        value: 175
      },
      woman: {
        min: 130,
        max: 230,
        value: 165
      }
    },
    ft: {
      offset: 2785, // the starting point on the ruler in pixels - 10px offset
      stepPx: 50,
      man: {
        min: 55.2,
        max: 90,
        value: 69.6
      },
      woman: {
        min: 51.6,
        max: 90,
        value: 64.8
      }
    },
  },
  weight: {
    kg: {
      offset: 2226,
      stepPx: 50,
      man: {
        min: 40,
        max: 180,
        value: 84
      },
      woman: {
        min: 40,
        max: 150,
        value: 72
      }
    },
    lbs: {
      offset: 4976,
      stepPx: 50,
      man: {
        min: 88,
        max: 396,
        value: 185
      },
      woman: {
        min: 88,
        max: 330,
        value: 158
      }
    },
  },
};

export const skinColors = [
  '#FFEEDB', '#FFE1C1', '#FAD2A7', '#FAC892', '#FFE7E1', '#FFE0D9', '#FFD6C9', '#F2C6AD',
  '#E4B080', '#CF965F', '#9D6F43', '#7C5733', '#774217', '#6D3A11', '#462810', '#291709'
];
export const typeСlothing = ['sportswear', 'casual', 'evening wear', 'office wear'];
export const packageServices = [
  {
    title: "Standart",
    price: 0.99,
    amount: 0.99,
    name: "1 week"
  },
  {
    title: "50% save",
    price: 0.49,
    amount: 24.99,
    name: "12 months"
  },
  {
    title: "25% save",
    price: 0.75,
    amount: 2.99,
    name: "1 month"
  },

]