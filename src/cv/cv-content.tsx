import Head from "next/head";

export function CVContent() {
  return (
    <>
      <Head>
        <title>Curriculum Vitae | Shane Taylor</title>
        <meta name="description" content="The Professional Details of Shane Taylor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        Shane Taylor
      </h1>
      <section>
        <h2>Contact Information</h2>
        <ul>
          <li>shaneallantaylor@gmail</li>
          <li>github.com/shaneallantaylor</li>
          <li>linkedin.com/in/shane-allan-taylor</li>
          <li>Pacific Time Zone</li>
        </ul>
      </section>
      <section>
        <h2>Experience</h2>
        <section>
          <h3>Disney+</h3>
          <span>Software Engineer</span>
          <span>May 2021 to present</span>
          <ul>
            <li>Lead development of large internal project to support a new bundle product in a complicated legacy system.</li>
            <li>Collaborated across multiple teams to translate designs and story epics into focused Jira tickets.</li>
            <li>Coordinated engineering approach to develop accurate level of effort estimates for team members.</li>
            <li>Cultivated mutually supportive working relationships with cross-functional stakeholders to be lead without authority in group settings.</li>
            <li>Architected analytics tracking library for use across all future commerce domain initiatives via intnernal platform engineering team.</li>
            <li>Advocated for documentation across all subjects areas of commerce domain to capture institutional and establish a culture of trust in documentation.</li>
            <li>Delivered extensible support for special product offers under agressive timelines with a focus on reducing technical debt while preparing the domain for future business needs.</li>
            <li>Championed effective pull request standards to on improve review times for engineers across the domain.</li>
            <li>Joined the interview team effort to support domain hiring.</li>
            <li>Recognized for kicking ass at a quarterly meeting? (CAT)</li>
            <li>Prioritized reducing technical debt when possible, amid agressive timelines for business deliverables.</li>
          </ul>
        </section>
        <section>
          <h3>Codesmith</h3>
          <span>Lead Instructor & Senior Software Engineer</span>
          <span>April 2019 to March 2021</span>
          <ul>
            <li>Migrated event configuration options from config files into a SQL database and integrated with express service via custom middleware streamlining the events management process</li>
            <li>Developed granular event filtering and sorting experience leveraging the Redux Form onChange API and the React-Router history API, increasing traffic to our public events listings</li>
            <li>Leveraged Redux by lifting banner display from local state, preventing accidental duplication of banner displays while simultaneously enabling the use of a single banner component, improving developer experience as new features are added and reducing technical debt</li>
            <li>Successfully launched a new online program for the organization, focused on part-time learning while enhancing the immersive culture, block-driven development, and engineering empathy at the core of Codesmiths' values</li>
            <li>Professed technical communication, engineering best practices, and core JavaScript concepts to online classroom of 20+ students</li>
            <li>Mentored new engineers through onboarding into the Codesmith codebase, providing context and motivation for implementation details and improved the quality of on-going work through a detailed code-review process, improving the quality of pull-requests</li>
            <li>Led public JavaScript workshops to 80+ attendees weekly on closure, recursion, asynchronicity, OOP, and higher-order functions</li>
          </ul>
        </section>

        <section>
          <h3>Lettuce Grow (The Farm Project)</h3>
          <span>Frontend Software Engineer</span>
          <span>July 2019 to October 2019</span>
          <ul>
            <li>Implemented Redux-Toolkit mitigating prop-drilling in complex legacy codebase and improve code clarity while maintaining an extensible approach to state management on our rapidly growing e-commerce platform.</li>
            <li>Engineered custom redux middleware reducing superfluous connections between asynchronous actions and side effects within thunk implementations and instead establish a clear, reducer-like solution improving maintainability of codebase</li>
            <li>Introduced Styled Components to codebase to mitigate growing concerns with the 'append-only' approach to CSS while also improving developer confidence, speed, and site performance</li>
            <li>Utilized Formik state management and Yup validation for checkout forms enabling a seamless user experience and developer workflow</li>
            <li>Established new Bitbucket pipeline between CI/CD and development environments improving accessibility to front end builds for QA team</li>
          </ul>
        </section>
        <section>
          <h3>GLAAD</h3>
          <span>Web Developer</span>
          <ul>
            <li>Integrated hosting platform to develop digital products and execute tests by managing staging environments and code deployment.</li>
            <li>Deployed Django to manage authentication and user-friendly administration interface on a performant, scalable framework</li>
            <li>Utilized gulp.js to develop and deploy custom email designs with inline-CSS injection, improving open rates, clickthrough, and donations</li>
          </ul>
        </section>
      </section>
    </>
  )
}