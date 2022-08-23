import { Grid, Card, Box, useMediaQuery } from "@mui/material";
import React from "react";

import workTheme from "../../styles/workTheme";
import styles from "./PrivacyInfo.module.scss";

interface Props {}

const PrivacyInfo: React.FC<Props> = () => {
  const isMobile = useMediaQuery(workTheme.breakpoints.down("sm"));

  return (
    <Box>
      <Grid className={styles.privacy_container}>
        <Grid container maxWidth="lg" sx={{ p: isMobile ? 1 : 3 }}>
          <Card variant="outlined" sx={{ p: isMobile ? 2 : 4 }}>
            <h2>Privacy Policy for Vegard Aaberge Website</h2>
            <p>Last updated: August 19, 2022</p>
            <p>
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects You.
            </p>
            <p>
              We use Your Personal data to provide and improve the Service. By
              using the Service, You agree to the collection and use of
              information in accordance with this Privacy Policy. This Privacy
              Policy has been created with the help of the{" "}
              <a
                href="https://www.privacypolicies.com/privacy-policy-generator/"
                target="_blank"
                rel="noreferrer"
              >
                Privacy Policy Generator
              </a>
              .
            </p>
            <h2>Interpretation and Definitions</h2>
            <h3>Interpretation</h3>
            <p>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>
            <h3>Definitions</h3>
            <p>For the purposes of this Privacy Policy:</p>
            <ul>
              <li>
                <p>
                  <strong>Account</strong> means a unique account created for
                  You to access our Service or parts of our Service.
                </p>
              </li>
              <li>
                <p>
                  <strong>Company</strong> (referred to as either &quot;the
                  Company&quot;, &quot;We&quot;, &quot;Us&quot; or
                  &quot;Our&quot; in this Agreement) refers to Vegard Aaberge
                  Website.
                </p>
              </li>
              <li>
                <p>
                  <strong>Cookies</strong> are small files that are placed on
                  Your computer, mobile device or any other device by a website,
                  containing the details of Your browsing history on that
                  website among its many uses.
                </p>
              </li>
              <li>
                <p>
                  <strong>Country</strong> refers to: Norway
                </p>
              </li>
              <li>
                <p>
                  <strong>Device</strong> means any device that can access the
                  Service such as a computer, a cellphone or a digital tablet.
                </p>
              </li>
              <li>
                <p>
                  <strong>Personal Data</strong> is any information that relates
                  to an identified or identifiable individual.
                </p>
              </li>
              <li>
                <p>
                  <strong>Service</strong> refers to the Website.
                </p>
              </li>
              <li>
                <p>
                  <strong>Service Provider</strong> means any natural or legal
                  person who processes the data on behalf of the Company. It
                  refers to third-party companies or individuals employed by the
                  Company to facilitate the Service, to provide the Service on
                  behalf of the Company, to perform services related to the
                  Service or to assist the Company in analyzing how the Service
                  is used.
                </p>
              </li>
              <li>
                <p>
                  <strong>Usage Data</strong> refers to data collected
                  automatically, either generated by the use of the Service or
                  from the Service infrastructure itself (for example, the
                  duration of a page visit).
                </p>
              </li>
              <li>
                <p>
                  <strong>Website</strong> refers to Vegard Aaberge Website,
                  accessible from{" "}
                  <a
                    href="vegardaaberge.no"
                    rel="external nofollow noopener"
                    target="_blank"
                  >
                    vegardaaberge.no
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <strong>You</strong> means the individual accessing or using
                  the Service, or the company, or other legal entity on behalf
                  of which such individual is accessing or using the Service, as
                  applicable.
                </p>
              </li>
            </ul>
            <h2>Collecting and Using Your Personal Data</h2>
            <h3>Types of Data Collected</h3>
            <h4>Personal Data</h4>
            <p>
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or
              identify You. Personally identifiable information may include, but
              is not limited to:
            </p>
            <ul>
              <li>
                <p>Email address</p>
              </li>
              <li>
                <p>First name and last name</p>
              </li>
              <li>
                <p>Phone number</p>
              </li>
            </ul>
            <h4>Usage Data</h4>
            <p>Usage Data is not collected when using the Service.</p>

            <h4>Tracking Technologies and Cookies</h4>
            <p>
              We do not use Cookies and similar tracking technologies to track
              the activity on Our Service.
            </p>
            <h3>Use of Your Personal Data</h3>
            <p>The Company may use Personal Data for the following purposes:</p>
            <ul>
              <li>
                <p>
                  <strong>To provide and maintain our Service</strong>,
                  including to monitor the usage of our Service.
                </p>
              </li>
              <li>
                <p>
                  <strong>To contact You:</strong> To contact You by email,
                  telephone calls, SMS, or other equivalent forms of electronic
                  communication, such as a mobile application&apos;s push
                  notifications regarding updates or informative communications
                  related to the functionalities, products or contracted
                  services, including the security updates, when necessary or
                  reasonable for their implementation.
                </p>
              </li>
              <li>
                <p>
                  <strong>To manage Your requests:</strong> To attend and manage
                  Your requests to Us.
                </p>
              </li>
              <li>
                <p>
                  <strong>For other purposes</strong>: We may use Your
                  information for other purposes, such as data analysis,
                  identifying usage trends, determining the effectiveness of our
                  promotional campaigns and to evaluate and improve our Service,
                  products, services, marketing and your experience.
                </p>
              </li>
            </ul>
            <p>
              We may share Your personal information in the following
              situations:
            </p>
            <ul>
              <li>
                <strong>With Service Providers:</strong> We may share Your
                personal information with Service Providers to monitor and
                analyze the use of our Service, to contact You.
              </li>
              <li>
                <strong>With Your consent</strong>: We may disclose Your
                personal information for any other purpose with Your consent.
              </li>
            </ul>
            <h3>Retention of Your Personal Data</h3>
            <p>
              The Company will retain Your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use Your Personal Data to the extent necessary to
              comply with our legal obligations (for example, if we are required
              to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies.
            </p>
            <h3>Transfer of Your Personal Data</h3>
            <p>
              Your information, including Personal Data, is processed at the
              Company&apos;s operating offices and in any other places where the
              parties involved in the processing are located. It means that this
              information may be transferred to — and maintained on — computers
              located outside of Your state, province, country or other
              governmental jurisdiction where the data protection laws may
              differ than those from Your jurisdiction.
            </p>
            <p>
              Your consent to this Privacy Policy followed by Your submission of
              such information represents Your agreement to that transfer.
            </p>
            <p>
              The Company will take all steps reasonably necessary to ensure
              that Your data is treated securely and in accordance with this
              Privacy Policy and no transfer of Your Personal Data will take
              place to an organization or a country unless there are adequate
              controls in place including the security of Your data and other
              personal information.
            </p>
            <h3>Disclosure of Your Personal Data</h3>
            <h4>Law enforcement</h4>
            <p>
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g. a court or
              a government agency).
            </p>
            <h4>Other legal requirements</h4>
            <p>
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:
            </p>
            <ul>
              <li>Comply with a legal obligation</li>
              <li>Protect and defend the rights or property of the Company</li>
              <li>
                Prevent or investigate possible wrongdoing in connection with
                the Service
              </li>
              <li>
                Protect the personal safety of Users of the Service or the
                public
              </li>
              <li>Protect against legal liability</li>
            </ul>
            <h3>Security of Your Personal Data</h3>
            <p>
              The security of Your Personal Data is important to Us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While We strive to
              use commercially acceptable means to protect Your Personal Data,
              We cannot guarantee its absolute security.
            </p>
            <h2>Children&apos;s Privacy</h2>
            <p>
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13. If You are a parent or guardian and You are
              aware that Your child has provided Us with Personal Data, please
              contact Us. If We become aware that We have collected Personal
              Data from anyone under the age of 13 without verification of
              parental consent, We take steps to remove that information from
              Our servers.
            </p>
            <p>
              If We need to rely on consent as a legal basis for processing Your
              information and Your country requires consent from a parent, We
              may require Your parent&apos;s consent before We collect and use
              that information.
            </p>
            <h2>Links to Other Websites</h2>
            <p>
              Our Service contain links to other websites that are not operated
              by Us. If You click on a third party link, You will be directed to
              that third party&apos;s site. We strongly advise You to review the
              Privacy Policy of every site You visit.
            </p>
            <p>
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </p>
            <h2>Changes to this Privacy Policy</h2>
            <p>
              We may update Our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>
              We will let You know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              &quot;Last updated&quot; date at the top of this Privacy Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, You can
              contact us:
            </p>
            <ul>
              <li>By email: vegard.aaberge@gmail.com</li>
            </ul>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PrivacyInfo;
