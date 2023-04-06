const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Create a new variable, using reduce.
const totalBatteries = batteryBatches.reduce((sum, element ) => {return sum + element})
