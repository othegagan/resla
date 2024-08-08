import Link from 'next/link';

const Privacy = () => {
    return (
        <section>
            <div className='prose-base prose prose-h3:text-black prose-a:font-semibold  prose-a:text-accent-300 hover:prose-a:text-black mx-auto mb-10 max-w-5xl px-8 text-sm text-neutral-600 lg:mb-20'>
                <div className=' mx-auto pb-10 pt-14'>
                    <h1 className='font-display text-3xl font-extrabold text-black md:text-5xl'>Privacy Policy</h1>
                </div>

                <p className=' text-neutral-700'>
                    <span className='text-primary'>MyBundee</span> ('MyBundee', 'we', 'us', or 'our') recognizes the importance of privacy. In this Privacy
                    Policy, we describe how we collect, use, and disclose information that we obtain about users of our website MyBundee.com (the 'Site'), our
                    mobile application (the 'App'), and the services available through our Site and App (collectively, the Site, the App, and the services
                    available through them are the 'Services').
                </p>

                <p className='mt-4'>
                    By using any of our Services, you agree that any information that we collect from or about you through our Services, including personal
                    information, anonymous information, and aggregate information, will be handled as described in this Privacy Policy. Your use of our
                    Services, and any dispute over privacy, is subject to this Privacy Policy and any other applicable agreements between you and MyBundee, such
                    as our Terms of Service, including any applicable limitations on damages and the resolution of disputes. We collect information about you
                    directly from you, from third parties, and automatically through your use of our Services. We may combine information collected from or
                    about you from these various sources.
                </p>

                <h2 className='my-6 text-xl font-bold text-neutral-900'>Information We Collect Directly From You</h2>
                <p className='my-4 space-y-4'>
                    We may collect information about you directly from you. For example, if you create an account with us, we will collect your name, email
                    address, password, date of birth, driver's license information, mobile phone number, payment information, billing address, and photo. We
                    will also collect any other information that you provide to us through our Services. For example, we will collect your name, email address,
                    and the contents of any message you send to us through our Site.
                </p>

                <h2 className='my-6 text-xl font-bold text-neutral-900'>Information We Collect About You from Third Parties</h2>
                <p className='my-4 space-y-4'>
                    We may also collect information about you from third parties. For example, if a friend refers you to our Services or adds you as a guest, we
                    will collect your name and email address from your friend, or if a property manager provides us with information about the property's
                    tenants, we will collect the names and email addresses for those tenants.
                </p>

                <h2 className='my-6 text-xl font-bold text-neutral-900'>Information We Collect Automatically Through Our Services</h2>
                <p>
                    We automatically collect information about you through your use of our Services, including, without limitation, your IP address, browser
                    type, device type, operating system and version, unique device identifier, mobile network information, domain name, the website that led you
                    to our Services, the website to which you go after leaving our Services, the dates and times you access our Services, the links you click,
                    and other activities within the Services. We also collect information about your car reservations (e.g., dates, times, and locations of
                    reservations).
                    <br />
                    In order for our Services to work, you must authorize us to access your geolocation. If you authorize us to collect your geolocation
                    information, we will collect such geolocation information while our App is running on your device. You can disable our access to your
                    geolocation services by changing the location settings on your device. Doing so, however, will limit your ability to use certain features of
                    our Services (e.g., you may not be able to drive an MyBundee car). Please see our Cookies and Other Tracking Mechanisms section below for
                    more information about how we automatically collect information about your use of our Services.
                </p>

                <h2 className='my-6 text-xl font-bold text-neutral-900'>Other Information We Collect Automatically Through Our Vehicles</h2>
                <p>
                    We automatically collect information about you through your use of our vehicles, including, without limitation, the times you pick up and
                    return the car, damage before and after you use the car, mileage, speed, and battery life remaining. Similar to geolocation tracking of you
                    through our App, we will also track the geolocation of our cars. We primarily use this information to monitor the health of our vehicles,
                    but we may also use it to ensure appropriate use of our services, investigate accidents, and for other purposes described in this Privacy
                    Policy.
                    <br />
                    We may combine information we collect automatically through our Services with information we collect directly from you or from third
                    parties.
                </p>

                <h2 className='my-6 text-xl font-bold text-neutral-900'>How We Use Your Information</h2>
                <p>
                    We may use your information, including personal information, for the following purposes: Providing and Improving Our Services. To provide
                    and maintain our Services; to improve our Services; to develop new features, products, or services; to perform technical operations, such as
                    updating software; to validate our users and ensure their qualifications to use our Services; to facilitate payment; and for other customer
                    service and support purposes.
                </p>

                <h2 className='my-6 text-xl font-bold text-neutral-900'>Marketing and Communications</h2>
                <p>
                    To communicate with you about your account and use of our Services, including to send you product updates; to respond to your inquiries; to
                    provide you with news and newsletters, special offers, promotions, and other information we think may interest you; and for other
                    informational, marketing, or promotional purposes. Our communications with you may include communications via email, push notification, or
                    text message (SMS). Please see our section regarding Your Choices for more information about how to change your communications preferences.
                </p>

                <h2 className='my-6 text-xl font-bold text-neutral-900'>Personalizing Content</h2>
                <p>
                    To personalize the information and content we display to you, including marketing, promotional, and sponsored content and advertising within
                    the Services. For example, if information from our App indicates that you are near a coffee shop with which we have arranged a discount for
                    Enjoy users, we may display information about that discount to you. Similarly, if your use of our Services indicates that you frequent a
                    particular restaurant, we may provide you with a promotion to that restaurant. Research and Analytics.
                    <br />
                    To analyze how you interact with our Services; to monitor and analyze usage and activity trends; and for other research, analytical, and
                    statistical purposes.
                </p>

                <h2 className='my-6 text-xl font-bold text-neutral-900'>Protecting Rights and Interests</h2>
                <p>
                    To protect the safety, rights, property, or security of MyBundee, the Services, any third party, or the general public; to detect, prevent,
                    or otherwise address fraud, security, or technical issues; to prevent or stop activity which MyBundee, in its sole discretion, may consider
                    to be, or to pose a risk of being, an illegal, unethical, or legally actionable activity; to use as evidence in litigation; and to enforce
                    this Privacy Policy or our Terms of Service.
                </p>

                <h2 className='my-6 text-xl font-bold text-neutral-900'>Legal Compliance</h2>
                <p>
                    To comply with applicable legal or regulatory obligations, including as part of a judicial proceeding; to respond to a subpoena, warrant,
                    court order, or other legal process; or as part of an investigation or request, whether formal or informal, from law enforcement or a
                    governmental authority.
                </p>

                <h2 className='my-6 text-xl font-bold text-neutral-900'>How We Disclose Your Information</h2>
                <p>
                    We may disclose your information, including personal information, as described to you at the time of collection or disclosure or as follows:
                </p>

                <div className='mt-4 pl-4'>
                    <ol className='list-disc space-y-5'>
                        <li>
                            <h5 className='font-semibold'>Affiliates</h5>
                            <p>
                                We may disclose your information to current or future affiliates or subsidiaries for research, marketing, and other purposes
                                consistent with this Privacy Policy
                            </p>
                        </li>
                        <li>
                            <h5 className='font-semibold'>Service Providers</h5>
                            <p>
                                We may disclose your information to our vendors, service providers, agents, consultants, or others who perform functions on our
                                behalf. For example, we may disclose your information to third-party service providers to help process payments.
                            </p>
                        </li>
                        <li>
                            <h5 className='font-semibold'>Other Unaffiliated Third Parties</h5>
                            <p>
                                We may disclose your information to third parties, including so that those third parties may send marketing information to you.
                            </p>
                        </li>
                        <li>
                            <h5 className='font-semibold'>Business Transfers</h5>
                            <p>
                                We may disclose your information to another entity in connection with, including during negotiations of, an acquisition or
                                merger, sale or transfer of a business unit or assets, bankruptcy proceeding, or as part of any other similar business transfer.
                            </p>
                        </li>
                        <li>
                            <h5 className='font-semibold'>Protecting Rights and Interests</h5>
                            <p>
                                We may disclose your information to protect the safety, rights, property, or security of MyBundee, the Services, any third
                                party, or the general public; to detect, prevent, or otherwise address fraud, security, or technical issues; to prevent or stop
                                activity which MyBundee, in its sole discretion, may consider to be, or to pose a risk of being, an illegal, unethical, or
                                legally actionable activity; to use as evidence in litigation; and to enforce this Privacy Policy or our Terms of Service .
                            </p>
                        </li>
                        <li>
                            <h5 className='font-semibold'>Legal Compliance</h5>
                            <p>
                                We may disclose your information to comply with applicable legal or regulatory obligations, including as part of a judicial
                                proceeding; in response to a subpoena, warrant, court order, or other legal process; or as part of an investigation or request,
                                whether formal or informal, from law enforcement or a government official.
                            </p>
                        </li>
                        <li>
                            <h5 className='font-semibold'>Aggregate and De-Identified Information</h5>
                            <p>
                                We may disclose aggregate, anonymous, or de-identified information about users for marketing, advertising, research, compliance,
                                or other purposes. For example, we may share aggregate information with property managers about how their guests use our
                                Services (e.g., the times that are most popular and the most popular destinations) or insurers to help them understand how
                                people drive.
                            </p>
                        </li>
                        <li>
                            <h5 className='font-semibold'>Cookies and Other Tracking Mechanisms</h5>
                            <p>
                                We and our service providers use cookies and other tracking mechanisms to track information about your use of our Services. We
                                or our service providers may combine this information with other information, including personal information, we collect about
                                you.
                            </p>
                        </li>
                    </ol>
                </div>

                <h2 className='my-6 text-xl font-bold text-neutral-900'>Cookies</h2>
                <p className=' '>
                    Cookies are alphanumeric identifiers that we transfer to your computer's hard drive through your web browser for record-keeping purposes.
                    Some cookies allow us to make it easier for you to navigate our Services, while others are used to enable a faster log-in process or to
                    allow us to track your activities while using our Services. Most web browsers automatically accept cookies, but if you prefer, you can edit
                    your browser options to block them in the future. The Help portion of the toolbar on most browsers will tell you how to prevent your
                    computer from accepting new cookies, how to have the browser notify you when you receive a new cookie, or how to disable cookies altogether.
                    Visitors to our Services who disable cookies will be able to browse certain areas of the Services, but some features may not function (e.g.,
                    you may not be able to stay logged into your account).
                </p>

                <h2 className='my-6 text-xl font-bold text-neutral-900'>Clear GIFs, pixel tags and other technologies</h2>
                <p>
                    Clear GIFs are tiny graphics with a unique identifier, similar in function to cookies. In contrast to cookies, which are stored on your
                    computer's hard drive, clear GIFs are embedded invisibly on web pages. We may use clear GIFs (also referred to as web beacons, web bugs or
                    pixel tags), in connection with our Services to, among other things, track the activities users of our Services, help us manage content, and
                    compile statistics about usage of our Services. We and our third party service providers also use clear GIFs in HTML emails to our
                    customers, to help us track email response rates, identify when our emails are viewed, and track whether our emails are forwarded.
                </p>

                <h2 className='my-6 text-xl font-bold text-neutral-900'>Third-Party Analytics</h2>
                <p>
                    We may use third-party analytics companies to evaluate use of our Services. We or our service providers use these tools to help us
                    understand use of, and to improve, our Services, performance, and user experiences. These entities may use cookies and other tracking
                    technologies, such as web beacons or local storage objects (“LSOs”), to perform their services.
                </p>

                <h2 className='my-6 text-xl font-bold text-neutral-900'>Do Not Track Disclosure</h2>
                <p>
                    Our Services do not respond to Do Not Track signals. For more information about Do Not Track signals, please click
                    <Link target='_blank' className='mx-2 text-primary underline underline-offset-2' href='http://www.allaboutdnt.com/'>
                        here.
                    </Link>
                    You may, however, disable certain tracking as discussed in the Cookies and Other Tracking Mechanisms section above (e.g., by disabling
                    cookies). You also may opt out of interest-based advertising by following the instructions in the Interest-Based Advertising section below.
                </p>

                <h2 className='my-6 text-xl font-bold text-neutral-900'>Third-Party Links</h2>
                <p>
                    Our Services may contain links to third-party websites and applications. Any access to and use of such linked websites and applications is
                    not governed by this Privacy Policy but instead is governed by the privacy policies of those third parties. We are not responsible for the
                    information practices of such third-party websites or applications.
                </p>

                <h2 className='my-6 text-xl font-bold text-neutral-900'>Interest-Based Advertising</h2>
                <p>
                    We may use third parties such as network advertisers to serve advertisements on our Services and on third-party websites or other media
                    (e.g., social networking platforms). This enables us and these third parties to target advertisements to you for products and services in
                    which you might be interested. We may provide these third-party advertisers with information, including personal information, about you.
                    <br />
                    You may opt out of many third-party ad networks. For example, you may go to the Digital Advertising Alliance ("DAA")
                    <Link target='_blank' href='http://www.aboutads.info/choices/' className='mx-2 text-primary underline underline-offset-2'>
                        Consumer Choice Page
                    </Link>
                    for information about opting out of interest-based advertising and your choices regarding having information used by
                    <Link target='_blank' className='mx-2 text-primary underline underline-offset-2' href='http://www.aboutads.info/participating/'>
                        DAA companies
                    </Link>
                    . You may also go to the Network Advertising Initiative ("NAI")
                    <Link target='_blank' href='http://www.networkadvertising.org/choices/' className='mx-2 text-primary underline underline-offset-2'>
                        Consumer Opt-Out Page
                    </Link>
                    for information about opting out of interest-based advertising and your choices regarding having information used by
                    <Link
                        target='_blank'
                        href='http://www.networkadvertising.org/participating-networks'
                        className='mx-2 text-primary underline underline-offset-2'>
                        NAI members
                    </Link>
                    . Additional information is available on the DAA's website at
                    <Link target='_blank' className='mx-2 text-primary underline underline-offset-2' href=' www.aboutads.info'>
                        www.aboutads.info
                    </Link>
                    or the NAI's website at
                    <Link target='_blank' className='mx-2 text-primary underline underline-offset-2' href=' www.networkadvertising.org'>
                        www.networkadvertising.org
                    </Link>
                    . Opting out from one or more companies listed on the DAA
                    <Link href='http://www.networkadvertising.org/choices/' className='mx-2 text-primary underline underline-offset-2'>
                        Consumer Choice Page
                    </Link>
                    or the NAI Consumer Opt-Out Page will opt you out from those companies delivery of interest-based content or ads to you, but it does not
                    mean you will no longer receive any advertising through our Services or any third-party services. You may continue to receive
                    advertisements, for example, based on the particular website that you are viewing (i.e., contextually based ads). If your browser is
                    configured to reject cookies when you opt out on the DAA or NAI websites, your opt out may not be effective. Please note that if you use
                    multiple devices you will have to opt out on each individual device.
                </p>

                <h2 className='my-6 text-xl font-bold text-neutral-900'>Security</h2>
                <p>
                    We have taken steps to help protect the personal information we collect. However, no data security measures can guarantee 100% security. You
                    should take steps to protect against unauthorized access to your device and account by, among other things, choosing a robust password that
                    nobody else knows or can easily guess and keeping your log-in and password private. We are not responsible for any lost, stolen, or
                    compromised passwords or for any activity on your account via unauthorized password activity.
                </p>

                <h2 className='my-6 text-xl font-bold text-neutral-900'>Your Choices</h2>
                <p>
                    Accessing, Modifying, or Deleting Your Personal Information. You may access, modify, or delete the personal information that you have
                    provided to us by logging into your account settings or emailing us at
                    <Link className='mx-2 text-primary underline underline-offset-2' href='mailto:help@mybundee.com'>
                        help@mybundee.com
                    </Link>
                    with what you would like updated. Please note that we may retain certain information about you as required by law or as permitted by law for
                    legitimate business purposes. For example, if you request that we delete your information but we believe that you have violated our Terms of
                    Service we may retain information about you in order to attempt to resolve the issue before deleting it.
                </p>

                <h2 className='my-6 text-xl font-bold text-neutral-900'>Opting out of Marketing Emails</h2>
                <p>
                    We may send periodic promotional emails to you. You may opt out of such communications by following the opt-out instructions contained in
                    the email. Please note that it may take up to ten (10) business days for us to process opt-out requests. If you opt out of receiving emails
                    about recommendations or other information we think may interest you, we may still send you emails about your account or any Services you
                    have requested or received from us. We may also send you emails that contain marketing information about third parties (e.g., a discount at
                    a nearby coffee shop). If we do so, any information that you subsequently provide to that third party will be subject to that third party's
                    privacy practices and you will have to opt out of any marketing communications from them directly
                </p>

                <h2 className='my-6 text-xl font-bold text-neutral-900'>Children</h2>
                <p>
                    Our Services are not targeted to children under thirteen (13) years of age and we do not knowingly collect personal information from
                    children under 13. In accordance with the Children's Online Privacy Protection Act (“COPPA”), if we discover that a child under 13 has
                    provided us with personal information, we will promptly delete such personal information from our systems.
                </p>

                <br />

                <div className='space-y-6'>
                    <h1 className='my-6 text-2xl font-bold text-neutral-900'>Contact Us</h1>
                    <p>
                        If you have questions about this Privacy Policy or the privacy aspects of our Services, please contact us at
                        <Link className='mx-2 text-primary underline underline-offset-2' href='https://mybundee.com/' target='_blank'>
                            www.mybundee.com
                        </Link>
                        for any general inquiries or support-related issues. We value your feedback and are here to assist you.
                    </p>
                    <h2 className='my-6 text-xl font-bold text-neutral-900'>Changes to this Privacy Policy</h2>
                    <p>
                        This Privacy Policy is current as of the Effective Date set forth above. We may change this Privacy Policy from time to time, so please
                        be sure to check back periodically. We will post any changes, including any material changes, to this Privacy Policy on our Site.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Privacy;
