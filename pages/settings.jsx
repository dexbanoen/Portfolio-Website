import styles from "../styles/SettingsPage.module.css";

const SettingsPage = () => {
  return (
    <>
      <h2>Website Description / Credits</h2>
      <div className={styles.container}>
        <p>
          This project is based on the original VSCode Portfolio by Nitin
          Ranganath available{" "}
          <a href="https://github.com/itsnitinr/vscode-portfolio">here</a>. I
          have adapted and extended this code to suit my specific needs and to
          deepen my understanding of Next.js among other technologies.
          <br></br>
          <br></br>
          Through this adaptation, I have familiarized myself with essential
          aspects of web development such as routing, page layouts, advanced CSS
          techniques, and app deployment. This project has not only helped me to
          enhance my technical skills but also provided practical experience in
          deploying live applications and understanding their architecture.
        </p>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Settings" },
  };
}

export default SettingsPage;
