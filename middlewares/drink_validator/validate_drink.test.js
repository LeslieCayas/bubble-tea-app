const validateDrink = require('./validate_drink')


const res = {}

const next = () => {
  console.log("next called")
}

describe('Test Flavours', () => {
  test('Invalid Flavour', () => {
    const req = {
      body: {
        flavour: "Orange Juice",
        mixins_1: "Pearls",
        mixins_2: "Aloe Vera",
        sugar_level: "50%",
        ice_level: "50%"
      },
      session: {
        userId: 1
      }
    }
    expect(() => {
      validateDrink(req, res, next)
    }).toThrow("Invalid Drink Input")
  })

  test('Valid Flavour', () => {
    const req = {
      body: {
        flavour: "Premium Milk Tea",
        mixins_1: "Pearls",
        mixins_2: "Aloe Vera",
        sugar_level: "50%",
        ice_level: "50%"
      },
      session: {
        userId: 1
      }
    }
    expect(() => {
      validateDrink(req, res, next)
    }).not.toThrow("Invalid Drink Input")
  })
})

describe('Test Mixins', () => {
  test('1 Invalid Mixin', () => {
    const req = {
      body: {
        flavour: "Premium Milk Tea",
        mixins_1: "Cheese",
        mixins_2: "Aloe Vera",
        sugar_level: "50%",
        ice_level: "50%"
      },
      session: {
        userId: 1
      }
    }
    expect(() => {
      validateDrink(req, res, next)
    }).toThrow("Invalid Mixin Input")
  })

  test('2 Invalid Mixins', () => {
    const req = {
      body: {
        flavour: "Premium Milk Tea",
        mixins_1: "Cheese",
        mixins_2: "Apple",
        sugar_level: "50%",
        ice_level: "50%"
      },
      session: {
        userId: 1
      }
    }
    expect(() => {
      validateDrink(req, res, next)
    }).toThrow("Invalid Mixin Input")
  })

  test('Valid Mixins', () => {
    const req = {
      body: {
        flavour: "Premium Milk Tea",
        mixins_1: "Pearls",
        mixins_2: "Aloe Vera",
        sugar_level: "50%",
        ice_level: "50%"
      },
      session: {
        userId: 1
      }
    }
    expect(() => {
      validateDrink(req, res, next)
    }).not.toThrow("Invalid Mixin Input")
  })
})

describe('Test Sugar Level', () => {
  test('Invalid Sugar Level', () => {
    const req = {
      body: {
        flavour: "Premium Milk Tea",
        mixins_1: "Pearls",
        mixins_2: "none",
        sugar_level: "10000%",
        ice_level: "50%"
      },
      session: {
        userId: 1
      }
    }
    expect(() => {
      validateDrink(req, res, next)
    }).toThrow("Invalid Sugar Level Input")
  })

  test('Valid Sugar Level', () => {
    const req = {
      body: {
        flavour: "Premium Milk Tea",
        mixins_1: "Pearls",
        mixins_2: "none",
        sugar_level: "50%",
        ice_level: "50%"
      },
      session: {
        userId: 1
      }
    }
    expect(() => {
      validateDrink(req, res, next)
    }).not.toThrow("Invalid Sugar Level Input")
  })
})

describe('Test Ice Level', () => {
  test('Invalid Ice Level', () => {
    const req = {
      body: {
        flavour: "Premium Milk Tea",
        mixins_1: "Pearls",
        mixins_2: "none",
        sugar_level: "50%",
        ice_level: "10000%"
      },
      session: {
        userId: 1
      }
    }
    expect(() => {
      validateDrink(req, res, next)
    }).toThrow("Invalid Ice Level Input")
  })

  test('Valid Sugar Level', () => {
    const req = {
      body: {
        flavour: "Premium Milk Tea",
        mixins_1: "Pearls",
        mixins_2: "none",
        sugar_level: "50%",
        ice_level: "50%"
      },
      session: {
        userId: 1
      }
    }
    expect(() => {
      validateDrink(req, res, next)
    }).not.toThrow("Invalid Ice Level Input")
  })
})

test('Multiple Errors', () => {
  const req = {
    body: {
      flavour: "Premium Milk Tea",
      mixins_1: "Cheese",
      mixins_2: "Aloe Vera",
      sugar_level: "Cheese",
      ice_level: "50%"
    },
    session: {
      userId: 1
    }
  }
  expect(() => {
    validateDrink(req, res, next)
  }).toThrow("Invalid Mixin Input")
})

test('Multiple Errors', () => {
  const req = {
    body: {
      flavour: "Orange Juice",
      mixins_1: "Pearls",
      mixins_2: "Aloe Vera",
      sugar_level: "Cheese",
      ice_level: "50%"
    },
    session: {
      userId: 1
    }
  }
  expect(() => {
    validateDrink(req, res, next)
  }).toThrow("Invalid Drink Input")
})

test('No User In Session', () => {
  const req = {
    body: {
      flavour: "Premium Milk Tea",
      mixins_1: "Pearls",
      mixins_2: "Aloe Vera",
      sugar_level: "50%",
      ice_level: "50%"
    },
    session: {}
  }
  expect(() => {
    validateDrink(req, res, next)
  }).toThrow("Please Log In or Sign Up")
})