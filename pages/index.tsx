import Hero  from "@/components/Hero";

export default function Home() {
  return (
    <div className="Wrapper">
      <div className="Main-Container w80 ">
        <h1 className="Heading">Under Maintenance</h1>
        <p>Zipperfield: digital design and web development firm.</p>
        <a className="link" href="mailto:hello@zipperfield.com">hello@zipperfield.com</a>
        <Hero/>
      </div> 
   </div>
  );
}
