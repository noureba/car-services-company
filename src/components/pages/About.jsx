function About(Props) {

  return (
    <div className="container my-5">
      <h1 className=" text-center m-5">{Props.info.about.title}</h1>
      <p className="text-center ">{Props.info.about.description}</p>
    </div>
  );
}
export default About;
