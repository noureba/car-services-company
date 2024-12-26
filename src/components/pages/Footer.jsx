function Footer(Props) {
  return (
    <div className="container-fluid p-5 bgRed ">
      <div className="d-flex justify-content-around">
      {Props.footerMenu.map((item) => {
        return (
          <a key={item.id} href={item.slug}>
            {item.title}
          </a>
        );
      })}
      </div>
      
      <p className="text-center py-5">Your Company Name. All rights reserved.</p>
    </div>
  );
}

export default Footer;
