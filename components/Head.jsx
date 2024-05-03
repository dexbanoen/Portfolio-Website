import Head from "next/head";

const CustomHead = ({ title }) => {
  return 
    (
      <Head>
  <title>{title}</title>
  </Head>);
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Dexter Banoen Garde",
};
