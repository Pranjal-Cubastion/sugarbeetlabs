import styles from "./TermsContent.module.css";

const TOC: { id: string; title: string }[] = [
  { id: "s1", title: "1. Sugarbeet Rules" },
  { id: "s2", title: "2. Types of Content" },
  { id: "s3", title: "3. Restrictions on the App" },
  { id: "s4", title: "4. Colorado Safety Policy" },
  { id: "s5", title: "5. Privacy" },
  { id: "s6", title: "6. Payment Terms" },
  { id: "s7", title: "7. Virtual Items" },
  { id: "s8", title: "8. Push Notifications; Location-Based Features" },
  { id: "s9", title: "9. Disclaimer" },
  { id: "s10", title: "10. Limitation of Liability" },
  { id: "s11", title: "11. Indemnity" },
  { id: "s12", title: "12. Copyright Infringement Claims" },
  { id: "s13", title: "13. Third Party App Store" },
  { id: "s14", title: "14. Dispute Resolution" },
  { id: "s15", title: "15. Use of Third Party Integrations" },
  { id: "s16", title: "16. Termination and Remedies" },
  { id: "s17", title: "17. Miscellaneous" },
  { id: "s18", title: "18. Governing Law and Forum" },
  { id: "s19", title: "19. The Sugarbeet Labs" },
];

export default function TermsContent() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero} aria-label="Terms and Conditions">
        <div className={styles.inner}>
          <span className={styles.eyebrow}>T&amp;Cs</span>
          <h1 className={styles.h1}>
            Terms &amp; <span className={styles.accent}>Conditions</span>
          </h1>
          <p className={styles.meta}>Last updated: February 24th, 2026</p>

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

      <section className={styles.body} aria-label="Terms of Use">
        {/* Intro */}
        <div className={styles.intro}>
          <p className={styles.p}>
            Welcome to Sugarbeet&rsquo;s Terms and Conditions of Use (these
            &ldquo;Terms&rdquo;). This is a contract between you and Sugarbeet
            Labs (as defined further below), and we want you to know your rights
            and our rights before you use the Sugarbeet website or application
            (&ldquo;Sugarbeet&rdquo; or the &ldquo;App&rdquo;). Please take a few
            moments to read these Terms before enjoying the App, because once you
            access, view, or use the App, you are going to be legally bound by
            these Terms (so it&rsquo;s probably best to read them first!). Please
            also read our Community Guidelines (which form part of these Terms)
            and our Privacy Policy.
          </p>
          <p className={styles.p}>
            Please be aware that if you subscribe to services for a term (the
            &ldquo;Initial Term&rdquo;), then the terms of your subscription will
            be automatically renewed for additional periods of the same duration
            as the Initial Term at Sugarbeet Labs&rsquo; then-current fee for such
            services, unless you cancel your subscription in accordance with
            Section 6 below.
          </p>
          <p className={styles.p}>
            You should also note that Section 14 of these Terms contains
            provisions governing how claims that you and Sugarbeet Labs have
            against each other are resolved. In particular, it contains an
            arbitration agreement that will, with limited exceptions, require
            disputes between us to be submitted to binding and final arbitration.
            You have a right to opt out of the arbitration agreement pursuant to
            Section 14 below. If you do not opt out of the arbitration agreement
            in accordance with Section 14, (1) you will only be permitted to
            pursue claims and seek relief against us on an individual basis only;
            and (2) you are waiving your right to seek relief in a court of law
            and to have a jury trial on your claims.
          </p>
          <p className={styles.p}>
            And a notice to California subscribers: You may cancel your
            subscription and request a refund at any time prior to midnight of the
            third business day following the date you subscribed. If you
            subscribed using your Apple ID, refunds are handled by Apple, not
            Sugarbeet Labs. If you wish to request a refund, please visit Apple
            Support. If you subscribed using your Google Play Store account or
            through Sugarbeet, please contact customer support.
          </p>
        </div>

        {/* 1 */}
        <div id="s1" className={styles.section}>
          <h2 className={styles.h2}>1. Sugarbeet Rules</h2>
          <p className={styles.p}>
            Before you can use the App, you will need to register for an account
            (&ldquo;Account&rdquo;). In order to create an Account you must:
          </p>
          <ul className={styles.list}>
            <li>
              be at least 18 years old or the age of majority to legally enter
              into a contract under the laws of your home country if that happens
              to be greater than 18; and
            </li>
            <li>be legally permitted to use the App by the laws of your home country.</li>
          </ul>
          <p className={styles.p}>
            Please note that we monitor for underage use and we will terminate,
            suspend or ask you to verify your Account if we have reason to believe
            that you may be underage.
          </p>
          <p className={styles.p}>
            You can create an Account via manual registration, or by using your
            Facebook login details. If you create an Account using your Facebook
            login details, you authorize us to access, display and use certain
            information from your Facebook account (e.g. profile pictures,
            relationship status, location and information about Facebook friends).
            For more information about what information we use and how we use it,
            please check out our Privacy Policy. By using our App, you acknowledge
            that we may collect and use of your data and information in accordance
            with our Privacy Policy.
          </p>
          <p className={styles.p}>
            Unfortunately, we cannot allow you to use another person&rsquo;s
            Sugarbeet account or to share your Sugarbeet account with any other
            person without permission. You are responsible for ensuring that any
            use of your account complies with these Terms.
          </p>
          <p className={styles.p}>
            You&rsquo;ll have great fun on Sugarbeet, but if you feel the need to
            leave, you can delete your Account at any time by going to the
            &lsquo;Settings&rsquo; page when you are logged in and clicking on the
            &lsquo;Delete account&rsquo; link. Your Account will be deleted
            immediately but it may take a little while for Your Content (defined
            below) to be completely removed from the App. Your profile information
            will be treated in accordance with our Privacy Policy. If you delete
            your Account and try to create a new account within this time period
            using the same credentials, we will re-activate your Account for you.
          </p>
          <p className={styles.p}>
            We use a combination of automated systems, user reports and a team of
            moderators to monitor and review accounts and content to identify
            breaches of these Terms. We reserve the right at our sole discretion to
            terminate or suspend any Account, restrict access to the App, or make
            use of any operational, technological, legal or other means available
            to enforce the Terms (including without limitation blocking specific IP
            addresses). For users residing in the European Union (&ldquo;EU&rdquo;),
            we will notify you when we take action against your Account or Your
            Content unless it is not appropriate for us to do so (for example, we
            are not permitted by law enforcement agencies). For all other users, we
            may take such action, at any time without liability and without the need
            to give you prior notice. Without limiting the foregoing in any way and
            unless otherwise prohibited by mandatory laws in the country in which
            you reside, we expressly reserve the right to terminate or suspend your
            Account without notice (1) for violating these Terms, (2) due to your
            conduct on the App, or your conduct with other users of the App
            (including your &ldquo;offline&rdquo; conduct), if we, in our sole
            discretion, determine your conduct was inappropriate or improper, (3) if
            we or our affiliates, in our or their sole discretion, determine your
            conduct on other apps operated by our affiliates was inappropriate or
            improper, or (4) for any reasons whatsoever that we deem, in our sole
            discretion, justifies termination. If your Account is terminated or
            suspended, you agree you will not receive a refund for any paid service
            or features you have already been charged for. If you believe that
            we&rsquo;ve made a mistake in taking action on your Account or Your
            Content, you have the option to appeal our decision within a six-month
            period. If you wish to appeal a decision, please start by taking a
            moment to read the relevant section of our Community Guidelines. If you
            still think there has been a mistake in the action taken on your account
            or content, the best way to appeal is to fill out the appeals form
            linked in the notification shown to you within the app at the time.
            Alternatively, you can contact us (please explain why you are appealing
            our decision, and give as much detail as you can).
          </p>
          <p className={styles.p}>
            For users residing in the EU, you have additional rights under the
            Digital Services Act to: (i) access third party out-of-court dispute
            settlement processes; (ii) seek remedies from the courts in the EU
            member state in which you live; and (iii) lodge a complaint with your
            local EU regulatory authority. For users residing in the UK, you have a
            right under local law to bring a claim for breach of contract if you
            believe we have breached these Terms by removing, restricting or
            limiting access to, or distribution of, your Content, or suspending or
            terminating your account. Users residing in the UK may also click here
            to find out more about (i) the measures we take to protect individuals
            from content which may be against our Community Guidelines, these Terms,
            or otherwise harmful or unlawful (referred to as &lsquo;Violating
            Content&rsquo;); (ii) how we act on reports of Violating Content and
            non-compliance complaints; and (iii) how we use proactive technology to
            identify and remove Violating content on Sugarbeet.
          </p>
          <p className={styles.p}>
            You may not access, tamper with, or use non-public areas of the App or
            our systems. Certain portions of the App may not be accessible if you
            have not registered for an Account.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* 2 */}
        <div id="s2" className={styles.section}>
          <h2 className={styles.h2}>2. Types of Content</h2>
          <p className={styles.p}>
            There are three types of content that you will be able to access on
            the App:
          </p>
          <ul className={styles.list}>
            <li>content that you upload and provide (&ldquo;Your Content&rdquo;);</li>
            <li>content that members provide (&ldquo;Member Content&rdquo;); and</li>
            <li>
              content that the Sugarbeet Labs provides (including, without
              limitation, database(s) and/or software) (&ldquo;Our Content&rdquo;).
            </li>
          </ul>

          <h3 className={styles.h3}>There is certain content we can&rsquo;t allow on Sugarbeet</h3>
          <p className={styles.p}>
            Our Community Guidelines form part of these Terms and outline what
            content and conduct is accepted on and off our App. You agree to comply
            with our Community Guidelines as may be updated from time to time.
          </p>
          <p className={styles.p}>
            We want our users to be able express themselves as much as possible on
            Sugarbeet, but we have to impose restrictions on certain content which:
          </p>
          <ul className={styles.list}>
            <li>is illegal or encourages, promotes or incites any illegal activity;</li>
            <li>is harmful to minors;</li>
            <li>is defamatory or libelous;</li>
            <li>
              itself, or the posting of which, infringes any third party&rsquo;s
              rights (including, without limitation, intellectual property rights
              and privacy rights);
            </li>
            <li>
              shows another person which was created or distributed without that
              person&rsquo;s consent;
            </li>
            <li>
              contains language or imagery which could be deemed offensive or is
              likely to harass, upset, embarrass, alarm or annoy any other person;
            </li>
            <li>is obscene, pornographic, violent or otherwise may offend human dignity;</li>
            <li>
              is abusive, insulting or threatening, discriminatory or which promotes
              or encourages racism, sexism, hatred or bigotry;
            </li>
            <li>
              relates to commercial activities (including, without limitation,
              sales, competitions and advertising, links to other websites or
              premium line telephone numbers);
            </li>
            <li>involves the transmission of &ldquo;junk&rdquo; mail or &ldquo;spam&rdquo;;</li>
            <li>
              impersonates or intends to deceive or manipulate a person (including,
              without limitation, scams and inauthentic behavior);
            </li>
            <li>
              contains any spyware, adware, viruses, corrupt files, worm programs or
              other malicious code designed to interrupt, damage or limit the
              functionality of or disrupt any software, hardware, telecommunications,
              networks, servers or other equipment, Trojan horse or any other
              material designed to damage, interfere with, wrongly intercept or
              expropriate any data or personal information whether from Sugarbeet or
              otherwise; or
            </li>
            <li>in any other way violates our Community Guidelines.</li>
          </ul>

          <h3 className={styles.h3}>Your Content</h3>
          <p className={styles.p}>
            You agree that Your Content must comply with our Community Guidelines
            as updated from time to time. As Your Content is unique, you are
            responsible and liable for Your Content. You will indemnify, defend,
            release, and hold us harmless from any claims made in connection with
            Your Content. Sorry that was a bit of a mouthful, but you are what you
            post!
          </p>
          <p className={styles.p}>
            You may not display any personal contact or banking information on your
            individual profile page whether in relation to you or any other person
            (for example, names, home addresses or postcodes, telephone numbers,
            email addresses, URLs, credit/debit card or other banking details). If
            you do choose to reveal any personal information about yourself to other
            users, whether via email or otherwise, it is at your own risk. We
            encourage you to use the same caution in disclosing details about
            yourself to third parties online as you would under any other
            circumstances.
          </p>
          <p className={styles.p}>
            As Sugarbeet is a public community, Your Content will be visible to
            other users of the App all around the world &ndash; so make sure you are
            comfortable sharing Your Content before you post. As such, you agree that
            Your Content may be viewed by other users and any person visiting,
            participating in or who is sent a link to the App. By uploading Your
            Content on Sugarbeet, you represent and warrant to us that you have all
            necessary rights and licenses to do so, and automatically grant us a
            non-exclusive, royalty free, perpetual, worldwide license to use Your
            Content in any way (including, without limitation, editing, copying,
            modifying, adapting, translating, reformatting, creating derivative works
            from, incorporating into other works, advertising, distributing and
            otherwise making available to the general public such Content, whether in
            whole or in part and in any format or medium currently known or developed
            in the future).
          </p>
          <p className={styles.p}>
            We may assign and/or sub-license the above license to our affiliates and
            successors without any further approval by you.
          </p>
          <p className={styles.p}>
            We do not have any obligation to store Your Content &ndash; if it&rsquo;s
            important, you should make a copy.
          </p>
          <p className={styles.p}>
            So that we can prevent the unconsented use of Your Content by other
            members or third parties outside of Sugarbeet, you authorize us to act on
            your behalf with respect to such infringing and/or unauthorized uses.
            This expressly includes the authority, but not the obligation, for us to
            send takedown notices (including, without limitation, pursuant to 17
            U.S.C. § 512(c)(3) (i.e., DMCA Takedown Notices)) on your behalf if Your
            Content is taken and used by third parties outside of Sugarbeet.
          </p>

          <h3 className={styles.h3}>Member Content</h3>
          <p className={styles.p}>
            Other members of Sugarbeet will also share content via the App. Member
            Content belongs to the user who posted the content and is stored on our
            servers and displayed via the App at the direction of the user providing
            the Member Content.
          </p>
          <p className={styles.p}>
            You do not have any rights in relation to other users&rsquo; Member
            Content, and you may only use other Sugarbeet users&rsquo; personal
            information to the extent that your use of it matches Sugarbeet&rsquo;s
            purpose of allowing people to meet one another. You may not use other
            users&rsquo; information for commercial purposes, to spam, to harass,
            stalk or to make unlawful threats. We reserve the right to terminate your
            Account if you misuse other users&rsquo; information.
          </p>
          <p className={styles.p}>
            Member Content is subject to the terms and conditions of Sections 512(c)
            and/or 512(d) of the Digital Millennium Copyright Act 1998. If you have a
            complaint about Member Content, please see the Digital Millennium
            Copyright Act section below for more information.
          </p>

          <h3 className={styles.h3}>Our Content</h3>
          <p className={styles.p}>
            You may be wondering what happens to the rest of the Content on
            Sugarbeet. Well, it belongs to us! Any other text, content, graphics,
            user interfaces, trademarks, logos, sounds, artwork, and other
            intellectual property appearing on Sugarbeet, as well as the Sugarbeet
            software and database(s), are owned, controlled or licensed by us and are
            protected by copyright, trademark, data, database rights and/or other
            intellectual property law rights. All right, title and interest in and to
            Our Content remains with us at all times.
          </p>
          <p className={styles.p}>
            We grant you a non-exclusive, limited, personal, non-transferable,
            revocable, license to access and use Our Content, without the right to
            sublicense, under the following conditions:
          </p>
          <ul className={styles.list}>
            <li>
              you shall not use, sell, modify, or distribute Our Content except as
              permitted by the functionality of the App;
            </li>
            <li>you shall not use our name in metatags, keywords and/or hidden text;</li>
            <li>
              you shall not create derivative works from Our Content or scrape,
              disable, decompile, analyze or in any way commercially exploit Our
              Content, in whole or in part, in any way; and
            </li>
            <li>you shall use Our Content for lawful purposes only.</li>
          </ul>
          <p className={styles.p}>We reserve all other rights.</p>

          <h3 className={styles.h3}>No Obligation to Pre-Screen Content</h3>
          <p className={styles.p}>
            While we don&rsquo;t assume any obligation to pre-screen any of Your
            Content or any Member Content, there may be times where we need to step
            in to help keep our members safe, and we reserve the right to review,
            pre-screen, refuse and/or remove any Member Content and Your Content,
            including content exchanged between users in direct messages as set out
            in these Terms.
          </p>

          <h3 className={styles.h3}>Use of Recommender Systems</h3>
          <p className={styles.p}>
            We have developed matching algorithms to predict your compatibility with
            other users and so we can show you people we think are a good match for
            you. You can learn more about our use of recommender systems and the main
            parameters we use in our Privacy Policy.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* 3 */}
        <div id="s3" className={styles.section}>
          <h2 className={styles.h2}>3. Restrictions on the App</h2>
          <p className={styles.p}>You agree to:</p>
          <ul className={styles.list}>
            <li>
              comply with all applicable laws, including without limitation, privacy
              laws, intellectual property laws, anti-spam laws, equal opportunity
              laws and regulatory requirements;
            </li>
            <li>
              use your real name and real age in creating your Sugarbeet account and
              on your profile; and
            </li>
            <li>
              use the services in a safe, inclusive and respectful manner and adhere
              to our Community Guidelines at all times.
            </li>
          </ul>
          <p className={styles.p}>You agree that you will not:</p>
          <ul className={styles.list}>
            <li>
              act in an unlawful or disrespectful manner including being dishonest,
              abusive or discriminatory;
            </li>
            <li>
              misrepresent your identity, your age, your current or previous
              positions, qualifications or affiliations with a person or entity;
            </li>
            <li>disclose information that you do not have the consent to disclose;</li>
            <li>stalk or harass any other user of the App;</li>
            <li>
              use the App in any deceptive, inauthentic or manipulative way, including
              engaging in conduct or distributing content relating to scams, spam,
              inauthentic profiles or commercial and promotional activity;
            </li>
            <li>submit appeals, reports, notices or complaints that are manifestly unfounded; or</li>
            <li>
              develop, support or use software, devices, scripts, robots, other types
              of mobile code or any other means or processes (including crawlers,
              browser plugins and add-on or other technology) to scrape or otherwise
              exfiltrate from Sugarbeet or its services, or otherwise copy profiles
              and other data from the services.
            </li>
          </ul>
          <p className={styles.p}>
            We don&rsquo;t like users misbehaving in the Sugarbeet community. You can
            report any abuse or complain about Member Content by contacting us,
            outlining the abuse and/or complaint. You can also report a user directly
            from a profile or in chat by clicking the &lsquo;Block &amp;
            Report&rsquo; link. We reserve the right to investigate any possible
            violations of these Terms, any Sugarbeet user&rsquo;s rights, or any third
            party rights and we may, in our sole discretion, immediately terminate any
            user&rsquo;s right to use of the App without prior notice, as set out
            further in Section 1 above, and/or remove any improper, infringing or
            otherwise unauthorized Member Content submitted to the App.
          </p>
          <p className={styles.p}>
            We don&rsquo;t control any of the things our users say or do, so you are
            solely responsible for your interactions with other users of the App.
          </p>
          <p className={styles.caps}>
            IN CERTAIN CIRCUMSTANCES, SUCH AS IN RESPONSE TO MEMBER-GENERATED OR
            PRESS REPORTS OF SUSPECTED MISCONDUCT, THE SUGARBEET LABS MAY INVESTIGATE
            WHETHER A MEMBER HAS A CRIMINAL HISTORY, WHICH MAY, DEPENDING ON THE
            CIRCUMSTANCES, INCLUDE SEARCHING SEX OFFENDER REGISTRIES OR OTHER PUBLIC
            RECORDS. IF SUCH INVESTIGATIONS IDENTIFY A PERSON WITH A CRIMINAL
            CONVICTION, THE SUGARBEET LABS MAY USE AVAILABLE INFORMATION TO DETERMINE
            WHETHER THE PERSON IDENTIFIED BY THE INVESTIGATION IS THE SAME PERSON AS
            THE MEMBER ABOUT WHOM THE INVESTIGATION WAS CONDUCTED. FOLLOWING ANY SUCH
            INVESTIGATION, WITH RESPECT TO ANY MEMBER THAT THE SUGARBEET LABS
            REASONABLY BELIEVES TO HAVE BEEN CONVICTED OF A SEX OFFENSE (SUCH AS
            SEXUAL ASSAULT OR SEXUAL HARASSMENT, AND INCLUDING ANY REGISTERED SEX
            OFFENDERS), OR A CONVICTION FOR HUMAN TRAFFICKING, STALKING, KIDNAPPING,
            CHILD ABUSE, DOMESTIC ABUSE, MURDER, HATE CRIMES, OR TERRORISM OR VIOLENT
            EXTREMISM, THE SUGARBEET LABS MAY TAKE STEPS TO BLOCK THAT PERSON FROM
            USING THE SERVICE AND COMMUNICATING WITH OTHER MEMBERS OVER THE PLATFORM.
            THE SUGARBEET LABS RESERVES THE RIGHT TO BLOCK MEMBERS FOR OTHER OFFENSES,
            OR FOR OTHER VIOLATIONS OF THESE TERMS, OR FOR OTHER REASONS IN THEIR SOLE
            DISCRETION. CRIMINAL BACKGROUND INVESTIGATIONS, WHEN CONDUCTED, ARE NOT
            TYPICALLY UPDATED BY THE SUGARBEET LABS. ADDITIONALLY, WHILE
            INVESTIGATIONS FOR CRIMINAL HISTORIES MAY BE CONDUCTED ON SOME MEMBERS,
            THEY ARE NOT FOOLPROOF AND MOST MEMBERS ARE NOT EXPECTED TO BE SUBJECT TO
            ANY FORM OF CHECK FOR CRIMINAL HISTORIES. ANY INVESTIGATIONS FOR CRIMINAL
            HISTORIES MAY GIVE MEMBERS A FALSE SENSE OF SECURITY. THE CHECKS FOR
            CRIMINAL HISTORIES THAT MAY BE CONDUCTED BY THE SUGARBEET LABS ARE NOT A
            PERFECT SAFETY SOLUTION. CRIMINALS MAY CIRCUMVENT EVEN THE MOST
            SOPHISTICATED SEARCH TECHNOLOGY. NOT ALL CRIMINAL RECORDS ARE PUBLIC IN
            ALL STATES AND NOT ALL DATABASES ARE UP TO DATE. ONLY PUBLICLY AVAILABLE
            CONVICTIONS ARE INCLUDED IN CHECKS, AND CHECKS DO NOT COVER OTHER TYPES OF
            CONVICTIONS OR ARRESTS OR ANY CONVICTIONS FROM FOREIGN COUNTRIES.
          </p>
          <p className={styles.p}>
            You agree to, and hereby do, release Sugarbeet Labs and its successors
            from any claims, demands, losses, damages, rights, and actions of any
            kind, including personal injuries, death and property damage, that either
            directly or indirectly arises from your interactions with or conduct of
            other users of the App. If you are a California resident, you hereby waive
            California Civil Code Section 1542, which states, &ldquo;A general release
            does not extend to claims that the creditor or releasing party does not
            know or suspect to exist in his or her favor at the time of executing the
            release and that, if known by him or her, would have materially affected
            his or her settlement with the debtor or released party.&rdquo; The
            foregoing release does not apply to any claims, demands, or any losses,
            damages, rights and actions of any kind, including personal injuries,
            death or property damage for any unconscionable commercial practice by
            Sugarbeet Labs or for such party&rsquo;s fraud, deception, false, promise,
            misrepresentation or concealment, suppression or omission of any material
            fact in connection with the App.
          </p>
          <p className={styles.p}>
            Scraping or replicating any part of the App without our prior consent is
            expressly prohibited. This includes by any means (automated or otherwise)
            other than through our currently available, published interfaces &ndash;
            unless you have been specifically allowed to do so in a separate agreement
            with us.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* 4 */}
        <div id="s4" className={styles.section}>
          <h2 className={styles.h2}>4. Colorado Safety Policy</h2>
          <p className={styles.p}>
            In addition to the above terms, if you are a resident of Colorado the
            following Safety Policy terms also apply to you:
          </p>
          <h3 className={styles.h3}>There is certain content we can&rsquo;t allow on Sugarbeet</h3>
          <p className={styles.p}>
            Community Guidelines form part of these Terms and outline what content and
            conduct is accepted on and off our App. You agree to comply with our
            Community Guidelines as may be updated from time to time. We want our users
            to be able express themselves as much as possible on Sugarbeet, but we have
            to impose restrictions on certain content which is illegal, harmful to
            minors (including misconduct that threatens public or personal safety,
            such as a threatened or attempted act of homicide, unlawful sexual
            behavior, assault, kidnapping, stalking, harassment, involuntary
            intoxication, robbery, theft, or any other conduct that threatens public
            or another person&rsquo;s safety), defamatory or libelous, infringing,
            offensive, obscene, abusive, discriminatory, commercial, spam, deceptive,
            malicious, or otherwise violates our Community Guidelines.
          </p>
          <h3 className={styles.h3}>Background Check</h3>
          <p className={styles.p}>
            In certain circumstances, such as in response to member-generated or press
            reports of suspected misconduct, the Sugarbeet Labs may investigate whether
            a member has a criminal history, which may include searching sex offender
            registries or other public records. Criminal background investigations, when
            conducted, are not typically updated by the Sugarbeet Labs. While
            investigations for criminal histories may be conducted on some members, they
            are not foolproof and most members are not expected to be subject to any form
            of check. Any investigations may give members a false sense of security and
            are not a perfect safety solution. Not all criminal records are public in all
            states and not all databases are up to date. Only publicly available
            convictions are included in checks, and checks do not cover other types of
            convictions or arrests or any convictions from foreign countries.
          </p>
          <h3 className={styles.h3}>Identification and Device Verification</h3>
          <p className={styles.p}>
            To use our service, you must be at least 18 years old or the age of majority
            to legally enter into a contract under the laws of your home country if that
            happens to be greater than 18. We monitor for underage use and we will
            terminate, suspend or ask you to verify your Account if we have reason to
            believe that you may be underage. We may require users to verify their
            identity in order to register an Account, or to continue using an Account, at
            any time. We also reserve the right to require users to provide a valid phone
            number registered to their Account and to verify it at any time. If you
            don&rsquo;t complete a verification request, you may be unable to register an
            Account or you may lose access to the Sugarbeet services. We may also suspend
            or close your Account where you have multiple Accounts. You authorize your
            wireless carrier to use or disclose information about your account and your
            wireless device, if available, to Sugarbeet or its service provider for the
            duration of your business relationship, solely to help them identify you or
            your wireless device and to prevent fraud.
          </p>
          <h3 className={styles.h3}>When a member may be suspended or blocked</h3>
          <p className={styles.p}>
            All members must comply with the platform rules described and referenced in
            our Community Guidelines. If you behave in a way that goes against
            Sugarbeet&rsquo;s Community Guidelines, values, or otherwise act in any way
            we believe to be potentially harmful to Sugarbeet or its members, we may
            take a range of actions on your account. We may: remove the content; issue a
            warning; or ban the offending member from some or all Sugarbeet Labs apps.
            When necessary, we also may cooperate with law enforcement to assist in
            potential criminal investigations related to member conduct. Your treatment
            towards others outside of the Sugarbeet app can also result in action against
            your account. You cannot submit appeals, reports, notices or complaints that
            are false reports or report for malicious, biased, or other illegitimate
            reasons.
          </p>
          <h3 className={styles.h3}>Notice regarding Sexual Conduct</h3>
          <p className={styles.p}>
            Consent is required at all times. Everyone on Sugarbeet is expected to
            discuss and respect boundaries. This includes never making assumptions about
            what someone is comfortable with. Consent can be withdrawn at any time, and
            sex is never owed to anyone and sex without consent is against the law and
            may result in criminal or civil liability in Colorado.
          </p>
          <h3 className={styles.h3}>Safety Resources &amp; Measures</h3>
          <p className={styles.p}>
            We partner with Bloom, run by Chayn, to provide complimentary online trauma
            support to members of our global community who experience sexual assault or
            relationship abuse. We also partner with Kodex, a collaborative data sharing
            portal to ensure trusted and secure communications with verified government
            agencies. Safety is a top priority at Sugarbeet. We use a combination of human
            moderators and automated systems to monitor and review Sugarbeet accounts and
            interactions for content that may be against our Community Guidelines, against
            our Terms and Conditions, or otherwise harmful. Our members play a critical
            role in the safety of Sugarbeet by reporting content or behavior that may
            violate our Community Guidelines.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* 5 */}
        <div id="s5" className={styles.section}>
          <h2 className={styles.h2}>5. Privacy</h2>
          <p className={styles.p}>
            For information about how the Sugarbeet Labs collects, uses, and shares your
            personal data, please check out our Privacy Policy. By using Sugarbeet, you
            acknowledge that we may use such data in accordance with our Privacy Policy.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* 6 */}
        <div id="s6" className={styles.section}>
          <h2 className={styles.h2}>6. Payment Terms</h2>
          <h3 className={styles.h3}>Generally</h3>
          <p className={styles.p}>
            Sugarbeet may offer products and services for purchase on the App
            (&ldquo;In-App Purchase&rdquo;). If you choose to make an In-App Purchase,
            you acknowledge and agree that additional terms, disclosed to you at the
            point of purchase, may apply, and that such additional terms are
            incorporated herein by reference. You may make an In-App Purchase through
            the following payment methods (&ldquo;Payment Method&rdquo;): (a) making a
            purchase through a third-party platform such as the Apple App Store and
            Google Play Store (&ldquo;Third Party Store&rdquo;), or (b) paying with your
            credit card, debit card, or PayPal account, which will be processed by a
            third-party processor. Once you have made an In-App Purchase, you authorise
            us to charge your chosen Payment Method.
          </p>
          <p className={styles.caps}>
            IF YOU PURCHASE AN AUTOMATICALLY RENEWING SUBSCRIPTION, YOUR SUBSCRIPTION
            WILL RENEW AT THE END OF THE PERIOD, UNLESS YOU CANCEL, AT SUGARBEET&rsquo;S
            THEN-CURRENT PRICE FOR SUCH SUBSCRIPTIONS. TO AVOID CHARGES FOR A NEW
            SUBSCRIPTION PERIOD, YOU MUST CANCEL BEFORE THE END OF THE THEN-CURRENT
            SUBSCRIPTION PERIOD. DELETING YOUR ACCOUNT OR DELETING THE APPLICATION FROM
            YOUR DEVICE DOES NOT CANCEL YOUR SUBSCRIPTION.
          </p>
          <h3 className={styles.h3}>Canceling Subscriptions</h3>
          <p className={styles.p}>
            If you purchased a subscription directly from Sugarbeet, you may cancel or
            change your Payment Method via the payment settings option under your
            profile. If you purchased a subscription through a Third Party Store, you
            will need to access your account with that Third Party Store and follow
            instructions to change or cancel your subscription. If you cancel your
            subscription, you may use your subscription until the end of the period you
            last paid for, but you will not (except as set forth in &ldquo;Refunds&rdquo;
            below) be eligible for a prorated refund. Because our Services may be utilised
            without a subscription, canceling your subscription does not remove your
            profile from our Services.
          </p>
          <h3 className={styles.h3}>Free Trials</h3>
          <p className={styles.p}>
            If you sign up for a free trial and do not cancel, your trial may convert into
            a paid subscription and your Payment Method will be charged at the then-current
            price for such subscription. To avoid charges for a new subscription period,
            you must cancel before the end of the then-current subscription period or free
            trial period.
          </p>
          <h3 className={styles.h3}>Refunds</h3>
          <p className={styles.p}>
            Generally, all charges for purchases are nonrefundable, and there are no
            refunds or credits for partially used periods. However, for subscribers
            residing in Arizona, California, Colorado, Connecticut, Illinois, Iowa,
            Minnesota, New York, North Carolina, Ohio, Rhode Island, and Wisconsin, and
            for subscribers residing outside the US, additional refund rights may apply as
            described in these Terms.
          </p>
          <p className={styles.p}>
            To request a refund, in addition to cancelling, eligible subscribers must
            request a refund to receive one. If you subscribed using your Apple ID, refunds
            are handled by Apple. If you subscribed through Google and reside outside the
            US, your refund will be handled by Google. For all other purchases, please
            contact customer support with your order number, or mail a signed and dated
            cancellation notice to: Sugarbeet, Attn.: Cancellations, P.O. Box 300940,
            Austin, Texas, 78703.
          </p>
          <h3 className={styles.h3}>Taxes</h3>
          <p className={styles.p}>
            The payments required under this Section 6 do not include any Sales Tax that
            may be due. If Sugarbeet determines it has a legal obligation to collect a
            Sales Tax from you, Sugarbeet will collect such Sales Tax in addition to the
            payments required under this Section 6.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* 7 */}
        <div id="s7" className={styles.section}>
          <h2 className={styles.h2}>7. Virtual Items</h2>
          <p className={styles.p}>
            At times, you may be able to purchase a limited, personal, non-transferable,
            non-sublicensable, revocable license to access special limited-use features
            from Sugarbeet, referred to here as &ldquo;Virtual Items.&rdquo; You can only
            purchase Virtual Items through Sugarbeet or Sugarbeet&rsquo;s partners. Virtual
            Items represent a limited license right governed by this Agreement, and no
            title or ownership in or to Virtual Items is being transferred or assigned to
            you. Sugarbeet may manage, regulate, control, modify, or eliminate Virtual
            Items at any time. You shall not sell, redeem, or otherwise transfer Virtual
            Items to any person or entity.
          </p>
          <p className={styles.caps}>
            ALL PURCHASES AND REDEMPTIONS OF VIRTUAL ITEMS MADE THROUGH OUR SERVICES ARE
            FINAL AND NON-REFUNDABLE. YOU ACKNOWLEDGE THAT SUGARBEET IS NOT REQUIRED TO
            PROVIDE A REFUND FOR ANY REASON, AND THAT YOU WILL NOT RECEIVE MONEY OR OTHER
            COMPENSATION FOR UNUSED VIRTUAL ITEMS WHEN AN ACCOUNT IS CLOSED, WHETHER SUCH
            CLOSURE WAS VOLUNTARY OR INVOLUNTARY.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* 8 */}
        <div id="s8" className={styles.section}>
          <h2 className={styles.h2}>8. Push Notifications; Location-Based Features</h2>
          <p className={styles.p}>
            We may provide you with emails, text messages, push notifications, alerts and
            other messages related to the App and/or the Sugarbeet services. If you no
            longer wish to receive push notifications/alerts from the App, you may opt out
            by changing your notification settings on your mobile device. With respect to
            other types of messaging or communications, such as emails, you can unsubscribe
            or opt out by following the specific instructions included in such
            communications, or by emailing us with your request at{" "}
            <a href="mailto:feedback@team.sugarbeet.com">feedback@team.sugarbeet.com</a>.
          </p>
          <p className={styles.p}>
            The App may allow access to or make available opportunities for you to view
            certain content and receive other products, services and/or other materials
            based on your location, using one or more reference points, such as GPS,
            Bluetooth and/or software within your mobile device. If you disable these or do
            not authorize the App to access your location data, you will not be able to
            access such location-specific content.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* 9 */}
        <div id="s9" className={styles.section}>
          <h2 className={styles.h2}>9. Disclaimer</h2>
          <p className={styles.caps}>
            THE APP, SITE, OUR CONTENT, AND MEMBER CONTENT ARE ALL PROVIDED TO YOU
            &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTY OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO, FITNESS FOR A
            PARTICULAR PURPOSE, TITLE, OR NON-INFRINGEMENT. WITHOUT LIMITING THE
            FOREGOING, WE DO NOT GUARANTEE THE COMPATIBILITY OF ANY MATCHES. ADDITIONALLY,
            WE DO NOT MAKE ANY WARRANTIES THAT THE APP OR SITE WILL BE UNINTERRUPTED,
            SECURE OR ERROR FREE. YOUR USE OF THE APP OR SITE IS AT YOUR OWN RISK. YOU ARE
            SOLELY RESPONSIBLE FOR YOUR INTERACTIONS WITH OTHER MEMBERS. THE SUGARBEET LABS
            IS NOT RESPONSIBLE FOR THE CONDUCT OF ANY USER. SUGARBEET LABS DOES NOT CONDUCT
            CRIMINAL BACKGROUND CHECKS ON ITS MEMBERS.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* 10 */}
        <div id="s10" className={styles.section}>
          <h2 className={styles.h2}>10. Limitation of Liability</h2>
          <p className={styles.caps}>
            NEITHER US NOR ANY OWNER WILL BE LIABLE FOR ANY DAMAGES, DIRECT, INDIRECT,
            INCIDENTAL, CONSEQUENTIAL, SPECIAL, OR PUNITIVE, INCLUDING, WITHOUT LIMITATION,
            LOSS OF DATA, INCOME, PROFIT OR GOODWILL, LOSS OF OR DAMAGE TO PROPERTY AND
            CLAIMS OF THIRD PARTIES ARISING OUT OF YOUR ACCESS TO OR USE OF THE APP, SITE,
            OUR CONTENT, OR ANY MEMBER CONTENT. IF ANY PORTION OF THIS LIMITATION ON
            LIABILITY IS FOUND TO BE INVALID OR UNENFORCEABLE FOR ANY REASON, THEN OUR
            AGGREGATE LIABILITY SHALL NOT EXCEED ONE HUNDRED DOLLARS ($100). THE FOREGOING
            DOES NOT APPLY TO LIABILITY ARISING FROM ANY FRAUD OR FRAUDULENT
            MISREPRESENTATIONS, OR ANY OTHER LIABILITY THAT CANNOT BE LIMITED BY APPLICABLE
            LAW.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* 11 */}
        <div id="s11" className={styles.section}>
          <h2 className={styles.h2}>11. Indemnity</h2>
          <p className={styles.p}>
            All the actions you make and information you post on Sugarbeet remain your
            responsibility. Therefore, you agree to indemnify, defend, release, and hold
            us, and our partners, licensors, affiliates, contractors, officers, directors,
            employees, representatives and agents, harmless, from and against any third
            party claims, damages (actual and/or consequential), actions, proceedings,
            demands, losses, liabilities, costs and expenses (including reasonable legal
            fees) suffered or reasonably incurred by us arising as a result of, or in
            connection with:
          </p>
          <ul className={styles.list}>
            <li>any negligent acts, omissions or willful misconduct by you;</li>
            <li>your access to and use of the App;</li>
            <li>the uploading or submission of Content to the App by you;</li>
            <li>any breach of these Terms by you; and/or</li>
            <li>your violation of any law or of any rights of any third party.</li>
          </ul>
          <p className={styles.p}>
            We retain the exclusive right to settle, compromise and pay any and all claims
            or causes of action which are brought against us without your prior consent.
            The foregoing provision does not require you to indemnify Sugarbeet Labs for
            any unconscionable commercial practice or any fraud, deception, false promise,
            misrepresentation or concealment, suppression or omission of any material fact
            in connection with the App.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* 12 */}
        <div id="s12" className={styles.section}>
          <h2 className={styles.h2}>12. Procedure for Making Claims of Copyright Infringement</h2>
          <p className={styles.p}>
            If you believe any content on Sugarbeet infringes the copyright in a work that
            you own, please submit a notification alleging such infringement (&ldquo;DMCA
            Takedown Notice&rdquo;) to Sugarbeet Labs&rsquo;s Copyright Agent. The Takedown
            Notice must include: a physical or electronic signature of a person authorized
            to act on behalf of the owner; identification of the copyrighted work claimed to
            have been infringed; identification of the material claimed to be infringing;
            information reasonably sufficient to permit us to contact you; a statement of
            good faith belief; and a statement, under penalty of perjury, that the
            information is accurate and you are authorized to act on behalf of the owner.
          </p>
          <p className={styles.p}>
            Takedown Notices should be sent to Sugarbeet Labs&rsquo;s Copyright Agent at{" "}
            <a href="mailto:copyright@team.sugarbeet.com">copyright@team.sugarbeet.com</a>.
            If you wish to reach out via other methods, you can write to: Sugarbeet, Attn:
            Sugarbeet Labs&rsquo;s Copyright Agent, P.O. Box 300940, Austin, Texas, 78703;
            or phone: +1 – 512-696-1409.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* 13 */}
        <div id="s13" className={styles.section}>
          <h2 className={styles.h2}>13. Third Party App Store</h2>
          <p className={styles.p}>
            The following additional terms and conditions apply to you if you download the
            App from a Third Party Store. To the extent that the other terms of these Terms
            are less restrictive than, or conflict with, the terms of this Section, the more
            restrictive or conflicting terms in this Section will apply, but solely with
            respect to the App and the Third Party Store. You acknowledge and agree that:
          </p>
          <ul className={styles.list}>
            <li>
              These Terms are concluded solely between you and the Sugarbeet Labs and not
              with the providers of the Third Party Store, and the Sugarbeet Labs is solely
              responsible for the App and the content thereof.
            </li>
            <li>
              The Third Party Store provider has no obligation whatsoever to provide any
              maintenance and support services with respect to the App.
            </li>
            <li>
              The Sugarbeet Labs, not the Third Party Store provider, is responsible for
              addressing any claims you or any third party may have relating to the App.
            </li>
            <li>
              The Third Party Store provider and its subsidiaries are third party
              beneficiaries of these Terms and may enforce these Terms against you.
            </li>
            <li>
              In the event of a conflict between a Third Party Store&rsquo;s or mobile
              carrier&rsquo;s applicable terms and these Terms, the terms of the Third Party
              Store or mobile carrier shall govern and control.
            </li>
          </ul>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* 14 */}
        <div id="s14" className={styles.section}>
          <h2 className={styles.h2}>14. Dispute Resolution</h2>
          <p className={styles.p}>
            Please read the following arbitration agreement in this Section
            (&ldquo;Arbitration Agreement&rdquo;) carefully. Unless you opt out in the
            manner described in Section 14(10) below, this Arbitration Agreement requires
            you and Sugarbeet Labs to resolve disputes by binding arbitration instead of in
            court, and limits the manner in which we may seek relief from each other.
          </p>
          <h3 className={styles.h3}>1. When Does This Arbitration Agreement Apply?</h3>
          <p className={styles.p}>
            This Arbitration Agreement applies to any disputes or claims of any kind
            whatsoever between you and the Sugarbeet Labs arising out of or relating to the
            Terms, your use of our App, or any other aspect of your relationship with
            Sugarbeet, except (i) that you or Sugarbeet may assert individual claims in
            small claims court if your claims qualify; (ii) that you or Sugarbeet may seek
            equitable relief in court for infringement or misuse of intellectual property
            rights, and (iii) to the extent the Ending Forced Arbitration of Sexual Assault
            and Sexual Harassment Act precludes arbitration of the disputes or claims.
          </p>
          <h3 className={styles.h3}>2. Notice of Dispute and Informal Resolution</h3>
          <p className={styles.p}>
            Before beginning the arbitration process, you and Sugarbeet Labs agree to first
            notify one another of the dispute in writing at least 60 days in advance of
            initiating an arbitration. You and Sugarbeet agree to meet and confer, via
            teleconference or videoconference, in a good faith effort to informally resolve
            any claim or dispute. Completion of this informal dispute resolution is a
            condition precedent to filing any demand for arbitration.
          </p>
          <h3 className={styles.h3}>3. How Do You Start The Arbitration Process?</h3>
          <p className={styles.p}>
            If you and Sugarbeet Labs are unable to resolve the dispute within 60 days,
            either party may proceed to file a claim for arbitration by submitting notice by
            certified mail of the claim with an individualized arbitration demand. Notice to
            Sugarbeet Labs must be submitted to our registered agent: CT Corporation, 1209
            Orange Street, City of Wilmington, County of New Castle, Delaware 19801.
          </p>
          <h3 className={styles.h3}>4. What Are The Rules Of Arbitration?</h3>
          <p className={styles.p}>
            The Federal Arbitration Act (&ldquo;FAA&rdquo;) governs this Arbitration
            Agreement. If you live in California, the arbitration will be administered by
            ADR Services, Inc. If you live outside of California, the arbitration will be
            administered by National Arbitration and Mediation. The initiating party must
            pay all filing fees for the arbitration.
          </p>
          <h3 className={styles.h3}>5. What Can The Arbitrator Decide?</h3>
          <p className={styles.p}>
            The arbitrator has the exclusive authority to resolve any and all threshold
            arbitrability issues. The arbitrator will have the authority to award monetary
            damages and to grant any non-monetary remedy or relief available in an
            individual proceeding. The award of the arbitrator is final and binding upon you
            and us.
          </p>
          <h3 className={styles.h3}>6. No Jury Trials</h3>
          <p className={styles.caps}>
            BY AGREEING TO ARBITRATION, YOU AND SUGARBEET ARE EACH AGREEING TO WAIVE THEIR
            RIGHTS TO A JURY TRIAL. There is no judge or jury in arbitration, and court
            review of an arbitration award is subject to very limited review.
          </p>
          <h3 className={styles.h3}>7. One At A Time</h3>
          <p className={styles.caps}>
            ALL CLAIMS AND DISPUTES WITHIN THE SCOPE OF THIS ARBITRATION AGREEMENT MUST BE
            ARBITRATED ON AN INDIVIDUAL BASIS AND NOT ON A CLASS OR COLLECTIVE BASIS, AND
            YOU AND SUGARBEET LABS GIVE UP YOUR RIGHTS TO PARTICIPATE IN A CLASS ACTION OR
            ANY OTHER CLASS PROCEEDING, except as provided in Section 14(8) below.
          </p>
          <h3 className={styles.h3}>8. Mass Filings</h3>
          <p className={styles.p}>
            If, at any time, 30 or more similar demands for arbitration are asserted against
            Sugarbeet or related parties by the same or coordinated counsel or entities
            within a period of 60 days or otherwise close in proximity (&ldquo;Mass
            Filing&rdquo;), additional protocols apply, including bellwether arbitrations,
            global mediation, and batch arbitration, as described in these Terms.
          </p>
          <h3 className={styles.h3}>9. Offer of Judgment</h3>
          <p className={styles.p}>
            At least 14 days before the date set for the arbitration hearing, any party may
            serve an offer in writing upon the other party to allow judgment on specified
            terms. If the offer is not accepted and the other party fails to obtain a
            favorable award, the other party shall not recover any post-offer costs and
            shall pay the offering party&rsquo;s costs from the time of the offer.
          </p>
          <h3 className={styles.h3}>10. Opt-Out</h3>
          <p className={styles.p}>
            New users who create a Sugarbeet account for the first time on or after July
            24, 2023 may opt out of this Arbitration Agreement by sending written notice of
            your decision to opt out to{" "}
            <a href="mailto:sugarbeetoptout@sugarbeet.com">sugarbeetoptout@sugarbeet.com</a>,
            within 31 days after first becoming subject to this Arbitration Agreement. Your
            notice must include your name, your Sugarbeet username (if any), the email
            address and/or phone number you used to set up your account, and an unequivocal
            statement that you want to opt out.
          </p>
          <h3 className={styles.h3}>11. Severability</h3>
          <p className={styles.p}>
            Except as provided in subsection 14(7), if any part of this Arbitration
            Agreement is found under the law to be invalid or unenforceable, then such
            specific part shall be severed and the remainder shall continue in full force
            and effect.
          </p>
          <h3 className={styles.h3}>12. Survival of Agreement</h3>
          <p className={styles.p}>
            The terms of this Arbitration Agreement will continue, even after your
            relationship with Sugarbeet has ended.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* 15 */}
        <div id="s15" className={styles.section}>
          <h2 className={styles.h2}>15. Use of Third Party Integrations</h2>
          <p className={styles.p}>
            If you use the Snap Lenses feature offered in our App or any other AR features
            provided by Snap similar to Snap Lenses, you will be subject to the Snap Inc.
            Terms of Service, which contain an arbitration clause including a waiver of any
            right to participate in a class-action lawsuit or class-wide arbitration. If you
            do not agree to be subject to the Snap Inc. Terms of Service, you should not use
            the Snap-provided AR camera features within our App.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* 16 */}
        <div id="s16" className={styles.section}>
          <h2 className={styles.h2}>16. Termination and Remedies</h2>
          <p className={styles.p}>
            These Terms commence on the date you accept them and continue until terminated
            in accordance with the terms herein. You can delete your Account at any time by
            logging into the App, going to the &ldquo;Settings&rdquo; tab (the gear icon),
            and following the instructions to terminate your account. Please note that if
            you delete your Account, your subscription will continue until the end of the
            subscription period for which applicable fees have been paid, and you will not
            be entitled to a refund except as stated in Section 6. In addition to deleting
            your account, you will also need to cancel/manage any recurring subscriptions
            purchased via a Third Party Store to avoid additional billing.
          </p>
          <p className={styles.p}>
            In the event that Sugarbeet Labs determines, in its sole discretion, that you
            have breached any portion of these Terms, have misused the App, or have
            otherwise demonstrated conduct which the Sugarbeet Labs regards as inappropriate
            or unlawful, Sugarbeet Labs reserves the right to warn you, delete your User
            Content, discontinue your Account, discontinue your subscription(s) without
            refund, notify and/or cooperate with law enforcement authorities, and/or pursue
            any other action which Sugarbeet Labs deems appropriate.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* 17 */}
        <div id="s17" className={styles.section}>
          <h2 className={styles.h2}>17. Miscellaneous</h2>
          <p className={styles.p}>
            These Terms, which we may amend from time to time, constitute the entire
            agreement between you and the Sugarbeet Labs. The Terms supersede all previous
            agreements, representations and arrangements between us (written or oral),
            excluding the Privacy Policy. Nothing in this clause shall limit or exclude any
            liability for fraudulent misrepresentation.
          </p>
          <p className={styles.p}>
            As Sugarbeet grows, we might have to make changes to these Terms so we reserve
            the right to modify, amend or change the Terms at any time (a &ldquo;Change&rdquo;).
            If we do this then the Changes will be posted on this page and we will indicate
            the Effective Date of the updates at the bottom of the Terms. Your continued use
            of Sugarbeet following any Change constitutes your acceptance of the Change and
            you will be legally bound by the new updated Terms.
          </p>
          <p className={styles.p}>
            If, for any reason, any of the Terms are declared illegal, invalid or otherwise
            unenforceable by a court of a competent jurisdiction, then to the extent that
            term is illegal, invalid or unenforceable, it shall be severed and the remainder
            of the Terms shall survive and remain in full force and effect.
          </p>
          <p className={styles.p}>
            If you have any questions, complaints or claims with respect to the App, please
            contact us at{" "}
            <a href="mailto:hello@sugarbeetlabs.com">hello@sugarbeetlabs.com</a>.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* 18 */}
        <div id="s18" className={styles.section}>
          <h2 className={styles.h2}>18. Governing Law and Forum</h2>
          <p className={styles.p}>
            Subject to Section 14(3) and any mandatory laws that may apply in the country in
            which you reside, your access to the App, Our Content, and any Member Content,
            any claims arising from or related to your relationship with the Sugarbeet Labs,
            and these Terms are governed and interpreted by the laws of the State of Texas.
            All claims arising out of or relating to these Terms that are not submitted to
            arbitration will be litigated exclusively in the federal or state courts of
            Travis County, Texas. You agree that such courts shall have personal
            jurisdiction and venue and waive any objection based on inconvenient forum. You
            agree that you will not file or participate in a class action against us.
          </p>
          <a href="#top" className={styles.top}>↑ Back to top</a>
        </div>

        {/* 19 */}
        <div id="s19" className={styles.section}>
          <h2 className={styles.h2}>19. The Sugarbeet Labs</h2>
          <p className={styles.p}>
            The Terms constitute a binding legal agreement between you as user
            (&ldquo;you&rdquo;) and the Sugarbeet Labs (&ldquo;we&rdquo; or
            &ldquo;us&rdquo;). The Sugarbeet Labs includes, but is not limited to, Sugarbeet
            Labs LLC (a Texas company).
          </p>
        </div>

        <div className={styles.divider} />
        <div className={styles.effective}>
          The Terms were last updated on: February 24th, 2026.
        </div>
      </section>
    </>
  );
}
