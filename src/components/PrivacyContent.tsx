import styles from "./PrivacyContent.module.css";

const TOC: { id: string; title: string }[] = [
  { id: "collect", title: "What do we collect?" },
  { id: "use", title: "How do we use your information?" },
  { id: "others", title: "What information can others see?" },
  { id: "share", title: "Do we share your information?" },
  { id: "rights", title: "What are your rights?" },
  { id: "us-state", title: "US State Privacy Rights" },
  { id: "delete", title: "Deleting your account" },
  { id: "global", title: "Connecting you around the world" },
  { id: "security", title: "Security" },
  { id: "age", title: "Age Restriction Policy" },
  { id: "california", title: "California (CCPA)" },
];

const CCPA_CATEGORIES = [
  "Identifiers, such as name and location;",
  "Personal information, as defined in the California customer records law, such as contact (including email and telephone number) and financial information;",
  "Characteristics of protected classifications under California or federal law (if you choose to provide them), such as age, gender identity, marital status, sexual orientation, race, ancestry, national origin, religion, and medical conditions;",
  "Commercial information, such as transaction information and purchase history;",
  "Biometric information;",
  "Internet or network activity information, such as browsing history and interactions with our Sites and App;",
  "Geolocation data, such as mobile device location;",
  "Audio, electronic, visual and similar information, such as photos and videos;",
  "Professional or employment-related information, such as work history and prior employer;",
  "Non-public education information; and",
  "Inferences drawn from any of the personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics.",
];

export default function PrivacyContent() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero} aria-label="Privacy Policy">
        <div className={styles.inner}>
          <span className={styles.eyebrow}>Privacy</span>
          <h1 className={styles.h1}>
            Privacy <span className={styles.accent}>Policy</span>
          </h1>
          <p className={styles.meta}>How Sugarbeet Labs collects and uses your information</p>

          <nav className={styles.toc} aria-label="Table of contents">
            <p className={styles.tocTitle}>Contents</p>
            <ul className={styles.tocList}>
              {TOC.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`}>{t.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section className={styles.body} aria-label="Privacy Policy">
        {/* Intro */}
        <div className={styles.intro}>
          <p className={styles.p}>
            Welcome to the Sugarbeet Labs Privacy Policy. Whether you&rsquo;re
            ready to put yourself out there and start dating or just looking for a
            new friend, at Sugarbeet, we believe every relationship and
            opportunity should start with respect and equality&hellip; especially
            when it comes to your personal information.
          </p>
          <p className={styles.p}>
            This Policy explains how we process your personal information. It
            applies any time you&rsquo;re using the Sugarbeet mobile application or
            desktop version (&ldquo;App&rdquo;), and to your use of our
            &ldquo;Sites&rdquo;, which includes our websites, microsites, and other
            digital products and services, like our competitions or surveys. We
            also suggest you read our{" "}
            <a href="/tcs">Terms and Conditions of Use</a>.
          </p>
          <p className={styles.p}>
            We are responsible for taking care of all the personal information we
            collect and you share with us. According to the General Data Protection
            Regulation (&ldquo;GDPR&rdquo;) of 27 April 2016 and other applicable
            personal data laws, we are the data &ldquo;controller&rdquo; for all
            personal information collected and processed through our App and Sites.
            Have any questions about this Policy? Just{" "}
            <a href="/contact">contact us</a> and we&rsquo;ll be happy to help.
          </p>
          <div className={styles.note}>
            <strong>Good to know</strong>
            We will need to change this Policy from time to time, but the most
            current version controls how we use your information. Be sure to
            regularly check for updates; we will let you know by email or notice of
            any material or significant changes.
          </div>
        </div>

        {/* Collect */}
        <div id="collect" className={styles.section}>
          <h2 className={styles.h2}>What do we collect?</h2>
          <p className={styles.p}>
            You make the first move by using the Sugarbeet App or Sites, which is
            when we collect some information about you. The type of information
            collected or shared depends on the specific situation and what exactly
            you are doing. You will not be able to change your date of birth and, if
            you give Sugarbeet access to your location in your device settings, your
            location is automatically updated based on the location of your device.
          </p>

          <h3 className={styles.h3}>1. Registration Information</h3>
          <p className={styles.p}>
            When you download the App and create a Sugarbeet account, we collect
            certain information about you to help enhance the App and verify the
            people using it. This can include:
          </p>
          <ul className={styles.list}>
            <li>Name</li>
            <li>Username</li>
            <li>Gender identity</li>
            <li>Location</li>
            <li>Email address</li>
            <li>Date, time and location of birth</li>
            <li>Photographs</li>
            <li>Mobile number</li>
            <li>Sexual preference</li>
            <li>Login information for social media accounts you connect to your Account, like Facebook or Instagram</li>
          </ul>
          <p className={styles.p}>
            After you register, you can change this information at any time through
            your account. You are responsible for making sure your account details
            are kept up to date, particularly if your phone number changes.
          </p>

          <h3 className={styles.h3}>2. Linked Social Media Information</h3>
          <p className={styles.p}>
            One way we help simplify and enhance your connecting is by making it
            possible for you to use your other social media accounts during your
            Sugarbeet experience. If you choose to register or sign in using your
            Facebook or Apple account, you give them permission to share certain
            profile details with us. You can also link your Sugarbeet account with
            your Instagram, Facebook, or Spotify accounts to share information like
            your Instagram photos or top Spotify artists.
          </p>
          <div className={styles.note}>
            <strong>Good to know</strong>
            If you unlink a social media account, this does not automatically delete
            the information that was already added to your Sugarbeet account. If
            you&rsquo;d like this information removed, you must also delete it within
            your Sugarbeet account.
          </div>

          <h3 className={styles.h3}>3. Profile Verification and ID Verification (including biometric information)</h3>
          <p className={styles.p}>
            We require every person using our App and Sites to verify their
            accounts. This means we might ask for your phone number and, in some
            cases, ask that you carry out a photo verification or ID verification.
            You can choose to (i) verify your photo voluntarily, which adds a grey
            &ldquo;verified&rdquo; badge, and (ii) verify your identity with your ID
            document, which adds a blue &ldquo;verified&rdquo; badge. Photo
            verification may use facial recognition technology to compare submitted
            photos to your profile photo. ID checks are carried out on our behalf by
            our third-party partner, Veriff.
          </p>
          <p className={styles.p}>
            We keep photo verification scans only as long as we need them, but never
            longer than 3 years after your last interaction with us. Veriff retains
            your selfie and ID picture for up to 72 hours. For members in South
            Korea, ID verification is conducted manually.
          </p>

          <h3 className={styles.h3}>4. Purchase Information</h3>
          <p className={styles.p}>
            If you decide to purchase any of our premium services, we will process
            your payment information and securely keep it for audit/tax purposes and
            to prevent fraud. To prevent fraudulent payments, we use automated
            decisions and our systems check payment information and transactions for
            behaviour that might violate our Terms and Conditions of Use.
          </p>

          <h3 className={styles.h3}>5. Geolocation Information</h3>
          <p className={styles.p}>
            If you give Sugarbeet access to your location in your device settings, we
            will collect information about your location when you use your mobile
            device to personalise your App experience and make it easier to connect.
            This can include information about WiFi access points and your
            longitude/latitude. You can always turn off geolocation in your device
            settings if you change your mind.
          </p>

          <h3 className={styles.h3}>6. Device Information</h3>
          <p className={styles.p}>
            When you use the App, we can collect information about your device,
            including its unique identifier, model, and operating system, as well as
            log and usage data. You can also choose to give our App access to your
            device&rsquo;s address book, which will only be used when you want to add
            someone to your contacts.
          </p>

          <h3 className={styles.h3}>7. Photo Information</h3>
          <p className={styles.p}>
            We collect data about your profile photos that allows us to arrange them
            in a way that is favourable to you, such as which photos people spend the
            most time looking at or which have the best lighting. You can opt out of
            this feature through our app settings at any time.
          </p>

          <h3 className={styles.h3}>8. Link Information</h3>
          <p className={styles.p}>
            If you use links while using our App or Sites, we can keep track of how
            you interact with them, including third-party services that we are not
            responsible for, by monitoring redirecting clicks or other methods.
          </p>

          <h3 className={styles.h3}>9. Messages</h3>
          <p className={styles.p}>
            We review the content of messages sent in the App to identify topics,
            sentiments, and trends across our Users. We will take steps to remove
            personally identifying information from such messages, prior to reviewing
            them. We will not share the content of User messages or information we
            derive from them with any third party.
          </p>

          <h3 className={styles.h3}>10. Success Stories, Surveys, and Other Contributions</h3>
          <p className={styles.p}>
            From time to time, we may contact you to see if you would like to take
            part in a research survey, provide feedback or a testimonial, or be part
            of a marketing campaign. You can always say no and your participation is
            completely optional.
          </p>

          <h3 className={styles.h3}>11. Customer Support Contact Information</h3>
          <p className={styles.p}>
            If you contact our Customer Support team, we can track your IP address and
            will receive your email address and the information you share with us to
            help resolve your request. We keep records of our communications with you
            for 6 years after your account is deleted.
          </p>

          <h3 className={styles.h3}>12. Cookies and Similar Technology Information</h3>
          <p className={styles.p}>
            When you use our App or visit our Sites, we can collect personal data from
            you automatically by using cookies or similar technologies. Some cookies
            are necessary for the App and Sites to function and cannot be switched
            off, but you do have choices for others. A cookie is a small file placed
            on your device or internet browser that allows us to recognise and
            remember your preferences.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* Use */}
        <div id="use" className={styles.section}>
          <h2 className={styles.h2}>How do we use your information?</h2>
          <p className={styles.p}>
            Our main goal: give you an enjoyable Sugarbeet experience as you connect.
          </p>

          <h3 className={styles.h3}>1. Using Your Information</h3>
          <p className={styles.p}>We use your personal information to:</p>
          <ul className={styles.list}>
            <li>offer our services and features to you;</li>
            <li>contact you with information about the App, such as updates and new features;</li>
            <li>personalise the App, Sites, and content we deliver to you;</li>
            <li>carry out research and analysis about how you use and interact with the App and Sites;</li>
            <li>test new technologies and processes meant to enhance and improve the App and Sites;</li>
            <li>resolve disputes, troubleshoot problems, and enforce our Terms and Conditions of Use;</li>
            <li>investigate fraud and protect our legal rights;</li>
            <li>protect third parties and the people on our App and Sites from harm; and</li>
            <li>
              if you&rsquo;ve consented, send you information by direct marketing about our
              promotions and offers.
            </li>
          </ul>

          <h3 className={styles.h3}>2. Our Matching Algorithms</h3>
          <p className={styles.p}>
            We developed matching algorithms to predict your compatibility with others
            and show you people we think are a good match for you. To do this, our
            algorithms use the information you share in your profile, information about
            your activity on the App, whether you&rsquo;ve verified your photo, and your
            device coordinates.
          </p>

          <h3 className={styles.h3}>3. Moderation Practices</h3>
          <p className={styles.p}>
            We use a combination of automated systems and a team of moderators to
            monitor and review accounts and messages for content that suggests a
            violation of our Terms and Conditions of Use. We will issue a warning to
            the relevant account if any account or message meets the relevant criteria
            suggesting a likely violation, and can also restrict or block access.
          </p>

          <h3 className={styles.h3}>4. Lawful Basis</h3>
          <p className={styles.p}>
            According to EU and UK data protection laws, processing personal
            information must always have a specific lawful basis. If the legal basis is
            consent, you can withdraw your consent at any time. If the legal basis is
            legitimate interests, you have a right to object to how we use that
            information.
          </p>
          <p className={styles.p}>
            <strong>Students.</strong> We may seek to understand which of our users
            might be in college or university in order to improve services for students
            (this applies only to people who identified themselves as being from the
            US or Canada, except Quebec, and 18&ndash;24 years old). We do this using
            recent location data to see if your device&rsquo;s coordinates match a
            general university or college area &mdash; a simple &ldquo;at campus?
            yes/no&rdquo; result. We do not track your live movements or store where you
            are studying, and we do not keep any of the location data used for this
            activity.
          </p>
          <p className={styles.p}>
            <strong>RootRallies.</strong> We offer the chance to join Root Rallies,
            which are groups of local events, challenges and social groups based on
            specific location or topics, and automatically recommend events for you to
            join based on your location, activities, and interests.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* Others */}
        <div id="others" className={styles.section}>
          <h2 className={styles.h2}>What information can others see?</h2>
          <p className={styles.p}>
            Our App is specifically designed to make it easier for you to connect and
            interact, which involves making certain information about you available to
            others. You should always assume that anything you post or submit may be
            publicly viewable and accessible to people on or off the App. The
            information you post about yourself is at your own risk &mdash; we are not
            responsible for the information you choose to share with others.
          </p>
          <h3 className={styles.h3}>Important things to know when sharing information</h3>
          <p className={styles.p}>
            We recommend not putting sensitive information that could be used for abuse
            or misuse on your profile for others to see, such as email addresses, URLs,
            instant messaging details, phone numbers, full names, addresses, credit
            card details, national identity numbers, driver&rsquo;s licence details, or
            any other sensitive information. Remember that photographs you post can also
            reveal information about yourself.
          </p>
          <h3 className={styles.h3}>RootRallies Profile Sharing</h3>
          <p className={styles.p}>
            If you use Root Rallies, you should assume that whatever information you
            share can be seen by any Root Rallies member. If you are in a region where
            our separate Root Rallies app is available, your Root Rallies profile will
            automatically be visible both in Root Rallies mode on the main Sugarbeet App
            and on the separate Root Rallies app.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* Share */}
        <div id="share" className={styles.section}>
          <h2 className={styles.h2}>Do we share your information?</h2>
          <p className={styles.p}>
            In order to help you make connections, it might sometimes be necessary to
            share some personal information with others. We will only ever share your
            personal information in the limited circumstances described in this Policy.
            We investigate and verify all of the trusted third parties we work with
            (&ldquo;Service Providers&rdquo;) to make sure they have adequate data
            protection and information security measures in place.
          </p>
          <h3 className={styles.h3}>When we share information, with who, and why</h3>
          <ul className={styles.list}>
            <li>
              <strong>Service Providers</strong> &mdash; to offer functions and services,
              such as billing (e.g. Google Play), authentication (e.g. Twilio), social
              media providers, customer support (e.g. Zendesk, Sierra), research (e.g.
              Typeform or Kantar), and IT services.
            </li>
            <li>
              <strong>Moderators</strong> &mdash; to monitor activity on the App and approve
              content (name, registration details, profile information, message content,
              photographs).
            </li>
            <li>
              <strong>Payment Processing and Telecommunications Companies</strong> &mdash; to
              facilitate payments for our premium services.
            </li>
            <li>
              <strong>Marketing Service Providers</strong> &mdash; to market and advertise our
              App on third-party websites and applications and measure the effectiveness
              of our advertising.
            </li>
            <li>
              <strong>Legal Enforcement and Preventing Harm</strong> &mdash; to cooperate with
              lawful requests from law enforcement and protect people from harm.
            </li>
            <li>
              <strong>Our Business Transfers</strong> &mdash; in the event of a merger,
              acquisition, re-organisation, sale of assets, insolvency or administration.
            </li>
            <li>
              <strong>Anti-Spam and Anti-Fraud Procedures</strong> &mdash; sharing data such as
              email, phone, and IP information to block accounts and suspected fraudulent
              transactions.
            </li>
            <li>
              <strong>Aggregated Information</strong> &mdash; sharing anonymised, aggregated
              statistics with third parties for industry and demographic analysis.
            </li>
          </ul>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* Rights */}
        <div id="rights" className={styles.section}>
          <h2 className={styles.h2}>What are your rights?</h2>
          <p className={styles.p}>
            You generally have the following rights regarding your personal
            information, depending on the specific circumstances:
          </p>
          <ul className={styles.list}>
            <li><strong>Right to be informed</strong> &mdash; to know what personal information we process and why.</li>
            <li><strong>Right to access</strong> &mdash; to request a copy of the personal information we have about you.</li>
            <li><strong>Right to rectify</strong> &mdash; to correct inaccurate personal information.</li>
            <li><strong>Right to data portability</strong> &mdash; to retrieve your personal information to transfer it elsewhere.</li>
            <li><strong>Right to erase</strong> &mdash; to have your personal information deleted, except where we have compelling reasons to keep it.</li>
            <li><strong>Right to restrict or object</strong> &mdash; to limit or stop how we use your personal information.</li>
            <li><strong>Right to complain</strong> &mdash; to complain to us or your country&rsquo;s data privacy authority.</li>
            <li><strong>Rights related to automated decision-making</strong> &mdash; not to be subject to decisions made without human involvement that have significant or legal effects on you.</li>
          </ul>
          <p className={styles.p}>
            If you want to learn more or exercise your rights, just visit our Feedback
            Page, email our Data Protection Officer at{" "}
            <a href="mailto:DPO@sugarbeet.com">DPO@sugarbeet.com</a>, or{" "}
            <a href="/contact">contact us</a>. To protect everyone, we might need to ask
            you for specific information to confirm your identity before we answer your
            request.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* US State */}
        <div id="us-state" className={styles.section}>
          <h2 className={styles.h2}>US State Privacy Rights</h2>
          <p className={styles.p}>
            Some US states have their own privacy laws, regulations, and rights,
            including California, Colorado, Connecticut, New Jersey, Oregon, Texas,
            Utah, and Virginia. Please read this information along with our Privacy
            Policy.
          </p>
          <h3 className={styles.h3}>Do not track signals</h3>
          <p className={styles.p}>
            At this time, we do not track the personal information of those using our
            App or Sites over time or across third-party online services. We also do
            not knowingly allow third parties to collect personal information about
            someone&rsquo;s activities over time and across different online services
            when using our App.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* Delete */}
        <div id="delete" className={styles.section}>
          <h2 className={styles.h2}>What happens when you delete your account?</h2>
          <p className={styles.p}>
            If you delete your account, we make sure it is no longer viewable on the
            App. Just in case you delete by accident or change your mind, it&rsquo;s
            possible to restore your account for up to 28 days after deleting. We will
            also begin the process of deleting your personal information if you are no
            longer actively using your account, i.e. after 4 years of no activity.
          </p>
          <p className={styles.p}>
            After the 28-day period, we start the process of deleting your personal
            information, unless we must keep it to follow applicable law, to prove we
            followed applicable law, to resolve an outstanding issue, claim, or dispute,
            or for our legitimate business interests such as fraud prevention and
            enhancing safety and security.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* Global */}
        <div id="global" className={styles.section}>
          <h2 className={styles.h2}>Connecting you around the world</h2>
          <p className={styles.p}>
            Our App and Sites are global. To make this possible, we operate a global
            network of servers to provide the App and Sites and store your personal
            information, including servers in the US, UK, and the EU. Your personal
            information will be sent to and used in the US and UK, no matter what
            country you live in. We make sure your personal information is adequately
            protected &mdash; especially when transferred overseas &mdash; using valid
            legal mechanisms such as the EU-approved model clauses. For more information,
            email <a href="mailto:DPO@sugarbeet.com">DPO@sugarbeet.com</a>.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* Security */}
        <div id="security" className={styles.section}>
          <h2 className={styles.h2}>Security</h2>
          <p className={styles.p}>
            Using a website or the Internet is never 100% secure and even we
            can&rsquo;t guarantee that unauthorised access, hacking, data loss, or other
            breaches will never happen. Any transmission is at your own risk. To help
            keep your data secure:
          </p>
          <ul className={styles.list}>
            <li>Always log out of your account when you&rsquo;re done.</li>
            <li>Never share your password with anyone else.</li>
            <li>Regularly change your password.</li>
            <li>If you ever think someone has access to your password or account, take steps to secure it right away.</li>
          </ul>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* Age */}
        <div id="age" className={styles.section}>
          <h2 className={styles.h2}>Age Restriction Policy</h2>
          <p className={styles.p}>
            You must be at least 18 years old to use Sugarbeet. We do not knowingly
            collect any information or market to children, minors, or anyone under 18
            years old. If we become aware that someone under 18 has registered a
            Sugarbeet account and shared personal information with us, we will take
            steps to terminate that person&rsquo;s registration.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* California */}
        <div id="california" className={styles.section}>
          <h2 className={styles.h2}>California (CCPA)</h2>
          <p className={styles.p}>
            If you&rsquo;re a California resident, the California Consumer Privacy Act
            (CCPA) requires us to disclose information regarding the categories of
            personal information we collect, the sources, the business or commercial
            purposes for which it is collected, and the categories of parties to whom we
            disclose it.
          </p>
          <h3 className={styles.h3}>Categories of Personal Information</h3>
          <p className={styles.p}>
            The data we may collect falls within the following categories of
            &ldquo;personal information&rdquo; as defined by the CCPA:
          </p>
          <ul className={styles.list}>
            {CCPA_CATEGORIES.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className={styles.p}>
            The categories of sensitive personal information are account log-in and
            password, financial data or other credentials allowing access to your
            account, biometric information, and any other sensitive personal information
            you may provide in your account or post about yourself.
          </p>

          <h3 className={styles.h3}>Your California Rights</h3>
          <ul className={styles.list}>
            <li>The right to request that we disclose what personal information we have collected, used, and shared about you over the past 12 months.</li>
            <li>The right to request that we correct inaccurate personal information we maintain about you.</li>
            <li>The right to request that we delete your personal information, subject to certain exceptions.</li>
            <li>The right to be free from unlawful discrimination for exercising your rights under the Act.</li>
          </ul>

          <h3 className={styles.h3}>&ldquo;Sales&rdquo; &amp; &ldquo;Sharing&rdquo;</h3>
          <p className={styles.p}>
            While we do not believe our use of analytics and advertising technologies
            constitutes a &ldquo;sale&rdquo; as that term is defined under the CCPA, you
            can opt out of any activities that may be considered selling or sharing by
            clicking &ldquo;Do Not Sell or Share My Personal Information&rdquo; on the
            website homepage or in the Privacy Settings on the app. We also respond to
            and abide by opt-out preference signals sent through the Global Privacy
            Control. We do not knowingly &ldquo;sell&rdquo; or &ldquo;share&rdquo; the
            personal information of children under 16.
          </p>

          <h3 className={styles.h3}>Shine the Light</h3>
          <p className={styles.p}>
            California&rsquo;s &ldquo;Shine the Light&rdquo; law (Civil Code section
            1798.83) requires certain businesses to respond to requests from California
            customers about their practices related to disclosing personal information to
            third parties for direct marketing purposes. If you wish to find out about
            any rights you may have, you can write to us at{" "}
            <a href="mailto:feedback@sugarbeetlabs.com">feedback@sugarbeetlabs.com</a>.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        <div className={styles.divider} />
        <div className={styles.contactBox}>
          <p>
            Questions about your privacy? Email our Data Protection Officer at{" "}
            <a href="mailto:DPO@sugarbeet.com">DPO@sugarbeet.com</a> or{" "}
            <a href="/contact">contact us</a>.
          </p>
        </div>
      </section>
    </>
  );
}
