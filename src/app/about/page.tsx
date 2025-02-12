import React from "react";
import Link from "next/link";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className="bg-yellow-400 h-12">
        <div className="text-background flex justify-between items-center">
          <h1 className="text-xl m-2">InnoTech Hub</h1>
          <ul className="flex gap-3 mr-4 cursor-pointer">
            <li>
              <Link className="hover:text-pink-400" href="/" aria-label="Home">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-400" href="/about" aria-label="About">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-purple-400" href="/services" aria-label="Services">
                Services
              </Link>
            </li>
            <li>
              <Link className="hover:text-green-400" href="/contact" aria-label="Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* About Section */}
      <div className={styles.paragraph}>
        <h4 className={styles.h4}>Short Description:</h4>
        <p>
          &quot;At InnoTech Hub, we’re passionate about transforming concepts into
          reality through innovative technology solutions. Our experienced team
          works hand-in-hand with you to navigate the complexities of the
          digital world.&quot;
        </p>
        <br />

        <h3 className={styles.h3}>Our Mission :</h3>
        <p>
          &quot;We strive to empower businesses by harnessing technology to drive
          growth and efficiency.&quot;
        </p>
      </div>
    </div>
  );
};

export default About;
