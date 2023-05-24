export const _range = (end: any, start = 0) => {
  // console.log("end",end)
  // console.log("start",start)
  return new Array(end - start)
    .fill(end - start)
    .map((_, idx) => start + idx + 1);
};
