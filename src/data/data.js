// Data to send in dp solution
const data = {
  trucks: [
    {
      truckName: "A",
      truckCapacty: 22,
    },
    {
      truckName: "B",
      truckCapacty: 54,
    }
  ],
  goods: [
    // name, weight, quantity(value), isTaken initally 0
    ["Carrot", 10, 20, 0],
    ["Apple", 13, 22, 0],
    ["Melon", 12, 50, 0],
  ]
}

// Data to recive in dp solution
const data1= {
  trucks: [
    {
      truckName: "A",
      truckCapacty: 20,
      payload: [
        ["Carrot", 10, 20, 1],
        ["Melon", 12, 50, 1],
      ],
      totalWeight: 22,
      totalQuantity: 70,
    },
    {
      truckName: "B",
      truckCapacty: 14,
      payload: [
        ["Apple", 13, 22, 1]
      ],
      totalWeight: 13,
      totalQuantity: 22,
    }
  ],
  goods: [
    // you must check maybe there is some goods that doesn't fit in trucks
  ]
}

// Data to send in genetic solution
const data2 = {
  trucks: [
    {
      truckName: "A",
      truckCapacty: 22,
    },
    {
      truckName: "B",
      truckCapacty: 54,
    }
  ],
  goods: [
    // name, weight, quantity(value), isTaken initally 0
    ["Carrot", 10, 20, 0],
    ["Apple", 13, 22, 0],
    ["Melon", 12, 50, 0],
  ],
  populationsCount: 100,
  generationsCount: 100,
}

// Data to recive in genetic solution
const data3= {
  trucks: [
    {
      truckName: "A",
      truckCapacty: 20,
      payload: [
        ["Carrot", 10, 20, 1],
        ["Melon", 12, 50, 1],
      ],
      totalWeight: 22,
      totalQuantity: 70,
    },
    {
      truckName: "B",
      truckCapacty: 14,
      payload: [
        ["Apple", 13, 22, 1]
      ],
      totalWeight: 13,
      totalQuantity: 22,
    }
  ],
  goods: [
    // you must check maybe there is some goods that doesn't fit in trucks
  ]
}
