type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "BHARATH THIMMAPPA — Portfolio",
    fullName: "BHARATH THIMMAPPA",
    email: "bharaththimmappa26@mail.com",
  },
  hero: {
    name: "BHARATH THIMMAPPA",
    p: ["Enthusiastic fresher skilled in Machine Learning, Cybersecurity, and Full-Stack Web Development."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `A passionate fresher with a solid foundation in Machine Learning, Cybersecurity, and Full-Stack Web Development.
      Eager to contribute, collaborate with professionals, and grow in a dynamic IT environment.
      Looking for an entry-level role to apply skills and embrace new challenges.`
    },
    experience: {
      p: "What I have done so far",
      h2: "Internship and Project Experience.",
    },
    feedbacks: {
      p: "",
      h2: "Education.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories.
    It reflects my ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
