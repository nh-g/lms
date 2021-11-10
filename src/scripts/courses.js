export function getCourseById(id, array) {
  if (array !== undefined) {
    return array.find((item) => {
      return item.id === id;
    });
  }
}

