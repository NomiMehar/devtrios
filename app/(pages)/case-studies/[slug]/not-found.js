import Link from "next/link";
import styles from "./CaseStudyDetail.module.scss";

export default function NotFound() {
  return (
    <div className={styles.not_found}>
      <div className="container">
        <h1>Case Study Not Found</h1>
        <p>The case study you're looking for doesn't exist.</p>
        <Link href="/">Go Back Home</Link>
      </div>
    </div>
  );
}
