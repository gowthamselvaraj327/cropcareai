import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";

const ResultComponent = () => {
  const { result, upimg } = useContext(AppContext);
  const [isReadMore, setIsReadMore] = useState(true);
  const [ispreReadMore, setpreIsReadMore] = useState(true);
  const [title, setTitle] = useState();
  const [desc, setDesc] = useState();
  const [prevent, setPrevent] = useState();
  const [sname, setSname] = useState();
  const [buy, setBuy] = useState();
  const navigate = useNavigate();

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const togglepreReadMore = () => {
    setpreIsReadMore(!ispreReadMore);
  };

  useEffect(() => {
    if (result) {
      result?.map((item) =>
        item.label === "buy_link"
          ? setBuy(item.confidence)
          : item.label === "title"
          ? setTitle(item.confidence)
          : item.label === "desc"
          ? setDesc(item.confidence)
          : item.label === "prevent"
          ? setPrevent(item.confidence)
          : item.label === "sname"
          ? setSname(item.confidence)
          : null
      );
      console.log(typeof desc);
    } else {
      navigate("/upload");
      return;
    }
  }, [result, navigate, desc]);

  return (
    <section className="about section container" id="about">
      {result ? (
        <div className="about__container grid">
          <img src={upimg} alt="" className="about__img" />

          <div className="about__data">
            <h2 className="section__title about__title">
              {title} <br />
            </h2>

            <p className="about__description" align="justify">
              <b className="read">Description :</b>
              <br />
              {isReadMore && desc ? desc.slice(0, 150) : desc}
              <p onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? <b>...Read more </b> : <b> show less</b>}
              </p>
            </p>
            <p className="about__description" align="justify">
              <b className="read">Prevention :</b>
              <br />
              {ispreReadMore && prevent ? prevent.slice(0, 150) : prevent}
              <p onClick={togglepreReadMore} className="read-or-hide">
                {ispreReadMore ? <b>...Read more </b> : <b> show less</b>}
              </p>
            </p>
            <p className="about__description">
              <b className="read">Supplement : </b>
              {sname}
            </p>

            <Link to={buy} target="blank" className="button button--flex">
              Shop Now <i className="ri-arrow-right-down-line button__icon"></i>
            </Link>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default ResultComponent;
