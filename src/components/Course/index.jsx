import "./styles.scss";
import CardCourse from "../CardCourse";
import BtnPrimary from "../BtnPrimary";
import { useEffect, useState } from "react";
import { getAllCourses } from "../../utils/helpers";

// eslint-disable-next-line react/prop-types
function Course() {
  const [widthBtn, setWidthBtn] = useState("30%");

  useEffect(() => {
    if (innerWidth <= 900) {
      setWidthBtn("80%");
    }
  }, []);

  const [allCourses] = useState(getAllCourses());
  const [displayedCourses, setDisplayedCourses] = useState(
    allCourses.slice(0, 3)
  );
  const [remainingCourses, setRemainingCourses] = useState(allCourses.slice(3));

  const ShowMore = () => {
    const nextCourses = remainingCourses.slice(0, 3);
    setDisplayedCourses((prevCourses) => [...prevCourses, ...nextCourses]);
    setRemainingCourses((prevCourses) => prevCourses.slice(3));
  };

  return (
    <section className="cursos-container">
      <h2>Cursos de Programação</h2>
      <div className="cursos">
        {displayedCourses.map((i, index) => (
          <CardCourse key={index} keyId={i.keyId} titleCard={i.titleCourse} />
        ))}
      </div>

      {remainingCourses.length > 0 ? (
        <BtnPrimary
          title="Mostrar mais"
          clickNow={() => ShowMore()}
          widthBtn={widthBtn}
        />
      ) : (
        <span></span>
      )}
    </section>
  );
}

export default Course;
