const Footer = () => {
  return (
    <div className="inline-block p-4 space-x-4 bg-transparent border-2 rounded-xl">
      <box-icon
        type="logo"
        name="twitter"
        color="white"
        animation="tada"
        background-color="none"
      ></box-icon>
      <box-icon type="logo" name="github" color="white"></box-icon>
      <box-icon type="logo" name="linkedin" color="white"></box-icon>
    </div>
  );
};
export default Footer;
