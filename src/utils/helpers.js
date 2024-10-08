const allCourses = [
  { titleCourse: "Fundamentos Python", keyId: "fp-py-01" },
  { titleCourse: "Python POO", keyId: "pp-py-01" },
  { titleCourse: "Python UI", keyId: "pu-py-01" },
  { titleCourse: "Fundamentos Python", keyId: "fp-py-01" },
];

export let statusLogin = true;

export function getAllCourses() {
  return allCourses;
}

export function searchCourse(text) {
  const course = allCourses.filter((e) => {
    return e.titleCourse.toLowerCase().includes(text.toLowerCase());
  });

  return course;
}

export function checkLoginState(localPath = "/") {
  if (statusLogin) {
    window.open(localPath, "_self");
  } else {
    window.open("/login", "_self");
  }
}
