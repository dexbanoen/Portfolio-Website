const AboutPage = () => {
  return (
    <>
      <h3>About Me</h3>
      <br></br>
      <div>
        <p>
          My name is Dexter Banoen Garde, and I am a full-time student in
          Computer Science Health and Life Sciences, as well as a part-time
          student in Cybersecurity. My education blends skills in programming,
          data analysis, and system design with a deep understanding of natural
          sciences.
          <br></br>
          <br></br>
          In parallel, my part-time cybersecurity coursework focuses on
          mastering security protocols, threat mitigation, and network security,
          skills, crucial across multiple sectors. My portfolio showcases
          projects and research that integrate advanced technological solutions
          with strong security measures in healthcare.
        </p>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
