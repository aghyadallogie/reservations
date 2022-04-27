export const formatDateTime = (date) =>
  `${new Date(date).toISOString().slice(0, 10).replace(/-/g, "/")}   ${new Date(
    date
  )
    .toISOString()
    .slice(11, 16)}`;

export const checkDateTimeRange = (firstTimeSlot, secondTimeSlot) => {
  if (firstTimeSlot?.start_time && secondTimeSlot?.start_time) {
    const startFirstTimeSlot = new Date(firstTimeSlot?.start_time).getTime();
    const endFirstTimeSlot = new Date(firstTimeSlot?.end_time).getTime();

    const startSecondTimeSlot = new Date(secondTimeSlot?.start_time).getTime();
    const endSecondTimeSlot = new Date(secondTimeSlot?.end_time).getTime();

    if (
      Math.min(startFirstTimeSlot, endFirstTimeSlot) <
        Math.max(startSecondTimeSlot, endSecondTimeSlot) &&
      Math.max(startFirstTimeSlot, endFirstTimeSlot) >
        Math.min(startSecondTimeSlot, endSecondTimeSlot)
    ) {
      return true;
    }
  }
  return false;
};

export const groupBy = (arr, target) => {
  return arr.filter((el) => el.start_time.slice(5, 10) === target);
};

export const getCommonValues = (arr) => {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (!results.includes(arr[i].start_time.slice(5, 10))) {
      results.push(arr[i].start_time.slice(5, 10));
    }
  }
  return results;
};
