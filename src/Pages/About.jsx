import React from "react";
import Header from "./Shared/Header";

const About = () => {
  return (
    <>
      <Header /> {/* Header at the top */}
      <div className="container mx-auto p-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-4">
            Welcome to Our Newspaper, where journalism meets integrity. We are
            committed to delivering the latest news with accuracy, transparency,
            and fairness. Our mission is to provide our readers with in-depth
            analysis, compelling stories, and diverse perspectives on the issues
            that matter most.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Our History</h2>
          <p className="text-lg mb-4">
            Established in 2024, Our Newspaper has grown from a small local
            publication to a trusted source of news for readers around the
            world. Over the years, we have expanded our coverage to include a
            wide range of topics, from politics and economics to culture and
            technology.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-lg mb-4">
            Our mission is to inform, educate, and engage our readers by
            providing them with the most accurate and relevant news. We strive
            to uphold the highest standards of journalism and to serve as a
            watchdog for the public interest.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Our Team</h2>
          <p className="text-lg mb-4">
            Our team of dedicated journalists, editors, and contributors works
            tirelessly to bring you the news that matters. We are proud of the
            diverse backgrounds and perspectives that our team members bring to
            their work, and we believe that this diversity makes our reporting
            stronger and more comprehensive.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
          <p className="text-lg mb-4">
            We love hearing from our readers! If you have any questions,
            comments, or suggestions, please feel free to reach out to us at
            contact@ournewspaper.com. You can also follow us on social media to
            stay updated on the latest news and stories.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
