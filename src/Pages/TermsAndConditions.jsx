import Navbar from '..//MyComponets/Navbar.jsx';
import Footer from '..//MyComponets/footer.jsx';

function Terms() {
  return (
    <>
    <Navbar />
    <article>
    <div className="page-container">
      <h1>Terms & Conditions</h1>
      <p>Updated: 16 January 2026</p>

      <ol>
        <li>
          <strong>Introduction</strong><br/>
          Welcome to our platform, created for sharing ideas, publishing articles, and offering inspiring content. By accessing or using our website, you agree to follow these Terms and Conditions. Moreover, you confirm that you understand all rules explained here.
        </li>

        <li>
          <strong>Use of Our Website</strong><br/>
          You must use the platform responsibly, respectfully, and honestly. Any misuse, harmful behavior, or illegal activity is strictly prohibited. Ensure that all actions follow local laws.
        </li>

        <li>
          <strong>Article Submission Opportunity</strong><br/>
          We allow visitors to submit one article at a time, giving writers a chance to share ideas. Articles must be between 1100–2000 words, and a maximum of four submissions per week across all contributors is accepted.
        </li>

        <li>
          <strong>Submission Requirements</strong><br/>
          Articles must be 100% human-written, fully original, and not AI-generated. Plagiarized or AI-created content will be rejected. Articles must fit the platform’s tone and remain free from harmful, offensive, or copyrighted material.
        </li>

        <li>
          <strong>Review and Publishing Process</strong><br/>
          After submission, we review articles within 5–7 days. Publication is not guaranteed, and we reserve the right to accept or reject submissions without explanation.
        </li>

        <li>
          <strong>Content Rights</strong><br/>
          Once an article is approved, we have the right to edit, publish, and display it permanently. The author’s name will remain credited unless requested otherwise.
        </li>

        <li>
          <strong>Limitation of Liability</strong><br/>
          Users access the platform at their own risk. We are not responsible for any loss, misunderstanding, or issue caused by submissions or website usage.
        </li>

        <li>
          <strong>Changes to These Terms</strong><br/>
          These Terms may be updated at any time. We encourage you to review this page regularly.
        </li>

        <li>
          <strong>Contact Information</strong><br/>
          For questions about these Terms or submissions: contact@vellorey.com
        </li>
      </ol>
    </div>
    </article>
    <Footer />
    
    </>
  );
}

export default Terms;
