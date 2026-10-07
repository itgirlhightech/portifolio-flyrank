import decisionTreeFigure from '../assets/dt.png'
import recommendedActionsFigure from '../assets/ra.png'

function FlyRankCapstone() {
  return (
    <main className="capstone-page">
      <section className="capstone-hero">
        <p className="capstone-eyebrow">
          FlyRank AI Internship · Capstone
        </p>

        <h1>
          Content Refresh Opportunity Scoring:
          <span> A Signal-Based Approach to Prioritizing Human Review</span>
        </h1>

        <p className="capstone-intro">
          A signal-based analysis of observed content decline and ranked
          refresh-review opportunities.
        </p>
      </section>

      <section className="capstone-section">
        <h2>Abstract</h2>

        <p>
          This study asks which safe search-content signals are associated
          with observed content decline and how they can support a ranked
          refresh-review queue. Using the FlyRank internship warehouse, I
          aggregated content-level performance and query signals and defined
          an observed decline label from changes in 30-day impressions. A
          Decision Tree was evaluated against a majority-class baseline using
          a client-level grouped holdout to reduce cross-client leakage. The
          Decision Tree identified <code>visible_queries</code> and{' '}
          <code>rare_share</code> as its most influential features, but it did
          not outperform the baseline, achieving 0.701 F1 compared with 0.808
          for the baseline. The resulting signal-based queue prioritizes
          content for human review rather than predicting future search
          performance or prescribing automatic refreshes.
        </p>
      </section>

      <section className="capstone-section">
        <h2>Introduction</h2>

        <p>
          Search-content performance can change over time, creating a need to
          identify content items that may warrant closer review. However, a
          large content inventory makes manual prioritization difficult,
          particularly when the available data contains multiple search and
          performance signals that may indicate different types of
          opportunity.
        </p>

        <p>
          This study focuses on the decision of{' '}
          <strong>
            which content items should receive priority for human review
          </strong>{' '}
          when considering potential refresh opportunities. The analysis
          examines whether observable search-content signals are associated
          with an observed decline in impressions and whether these signals
          can be translated into a transparent, ranked review queue.
        </p>

        <p>
          Rather than attempting to predict Google's ranking behavior or
          establish that a content refresh will cause future performance
          improvements, this work is framed as a{' '}
          <strong>decision-support analysis</strong>. The resulting
          recommendations are intended to help a reviewer identify content
          items that merit further investigation based on observed historical
          signals.
        </p>

        <div className="capstone-highlight">
          <strong>Problem statement</strong>
          <p>
            Which safe search-content signals are associated with observed
            content decline, and how can they support a ranked refresh-review
            queue for human evaluation?
          </p>
        </div>
      </section>

      <section className="capstone-section">
        <h2>Data</h2>

        <p>
          This analysis uses the FlyRank ML Internship warehouse, accessed
          through the internship dataset and queried with DuckDB. The analysis
          combines content-level daily performance data with aggregated
          90-day query-level signals.
        </p>

        <p>
          The main performance data was used to calculate 30-day impression
          totals for a recent period and the preceding 30-day period. Content
          items were retained when they had at least 100 impressions in the
          preceding 30-day period, providing a minimum level of historical
          activity for the decline analysis.
        </p>

        <h3>Features</h3>

        <ul>
          <li>
            <code>imp_prev30</code> — impressions during the preceding
            30-day period.
          </li>
          <li>
            <code>visible_queries</code> — number of visible queries associated
            with the content.
          </li>
          <li>
            <code>rare_share</code> — share of impressions associated with
            rare queries.
          </li>
          <li>
            <code>anon_share</code> — share of impressions associated with
            anonymized queries.
          </li>
          <li>
            <code>top_query_share</code> — share of retained impressions
            represented by the highest-impression query.
          </li>
        </ul>

        <h3>Observed decline label</h3>

        <p>
          A content item was labeled as declining when its impressions in the
          most recent 30-day period were below 80% of the preceding 30-day
          period:
        </p>

        <pre className="capstone-code">
{`is_declining = 1
when imp_last30 < 0.8 × imp_prev30`}
        </pre>

        <p>
          The final modeling dataset contained{' '}
          <strong>102,203 content items</strong>.
        </p>
      </section>

      <section className="capstone-section">
        <h2>Methodology</h2>

        <h3>Observation window</h3>

        <p>
          The analysis used the most recent 60-day window available in the
          performance data, divided into two consecutive 30-day periods.
          Content items with fewer than 100 impressions in the preceding
          period were excluded.
        </p>

        <h3>Baseline</h3>

        <p>
          A majority-class classifier was used as the baseline. It assigns
          every held-out observation to the most common class in the training
          data.
        </p>

        <h3>Decision Tree</h3>

        <p>
          A Decision Tree classifier was trained with a maximum depth of 5 and
          <code>random_state=42</code>.
        </p>

        <h3>Validation</h3>

        <p>
          To reduce the risk of cross-client leakage, the evaluation used an
          80/20 grouped holdout based on <code>client_hash_id</code>. The
          training set contained 39 clients and the test set contained 10
          clients, with no client overlap between the two groups.
        </p>

        <p>
          Model performance was evaluated using accuracy, precision, recall,
          and F1 score.
        </p>

        <h3>Public-safety considerations</h3>

        <p>
          The public-facing analysis uses hashed identifiers and aggregated
          signals. It does not expose client names, domains, URLs, private
          queries, credentials, or raw data exports.
        </p>
      </section>

      <section className="capstone-section">
        <h2>Results</h2>

        <p>
          The grouped evaluation showed that the majority-class baseline
          outperformed the Decision Tree on the held-out client groups.
        </p>

        <div className="capstone-table-wrapper">
          <table className="capstone-table">
            <thead>
              <tr>
                <th>Model</th>
                <th>Accuracy</th>
                <th>Precision</th>
                <th>Recall</th>
                <th>F1</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Baseline</td>
                <td>0.679</td>
                <td>0.679</td>
                <td>1.000</td>
                <td>0.808</td>
              </tr>

              <tr>
                <td>Decision Tree</td>
                <td>0.599</td>
                <td>0.710</td>
                <td>0.692</td>
                <td>0.701</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          The Decision Tree achieved higher precision than the baseline, but
          its recall was substantially lower. Overall, its F1 score was below
          the baseline, indicating that the tree did not provide a stronger
          predictive solution under the grouped client-level evaluation.
        </p>

        <h3>Feature importance</h3>

        <div className="capstone-figure">
            <img
                src={decisionTreeFigure}
                alt="Decision Tree feature importance"
            />
            <p className="capstone-figure-caption">
                Feature importance from the fitted Decision Tree.
            </p>
        </div>


        <div className="capstone-table-wrapper">
          <table className="capstone-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Importance</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td><code>visible_queries</code></td>
                <td>0.335059</td>
              </tr>
              <tr>
                <td><code>rare_share</code></td>
                <td>0.323156</td>
              </tr>
              <tr>
                <td><code>anon_share</code></td>
                <td>0.173374</td>
              </tr>
              <tr>
                <td><code>imp_prev30</code></td>
                <td>0.155154</td>
              </tr>
              <tr>
                <td><code>top_query_share</code></td>
                <td>0.013258</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Within the fitted Decision Tree, <code>visible_queries</code> and{' '}
          <code>rare_share</code> had the highest feature importance, followed
          by <code>anon_share</code> and <code>imp_prev30</code>.{' '}
          <code>top_query_share</code> contributed relatively little to the
          tree's splits.
        </p>

        <p>
          These values describe how the fitted tree used the available
          features. They should not be interpreted as causal effects or as
          independent measures of predictive power.
        </p>

        <h3>Confusion matrix</h3>

        <div className="capstone-confusion">
          <div>
            <span>6,663</span>
            <small>True negatives</small>
          </div>

          <div>
            <span>9,875</span>
            <small>False positives</small>
          </div>

          <div>
            <span>10,741</span>
            <small>False negatives</small>
          </div>

          <div>
            <span>24,166</span>
            <small>True positives</small>
          </div>
        </div>
      </section>

      <section className="capstone-section">
        <h2>Ranked Recommendations</h2>

        <p>
          Because the Decision Tree did not outperform the baseline, the
          recommendation queue is based on transparent signal rules rather
          than treating the model output as a reliable probability.
        </p>

        <p>
          The queue uses observed decline and query-content signals to
          prioritize items for human review.
        </p>

        <h3>Signal rules</h3>

        <ul>
          <li>
            <strong>Observed decline:</strong> recent impressions below 80%
            of the preceding period.
          </li>
          <li>
            <strong>Low query visibility:</strong>{' '}
            <code>visible_queries ≤ 4</code>, corresponding to the 25th
            percentile.
          </li>
          <li>
            <strong>High query concentration:</strong>{' '}
            <code>top_query_share ≥ 0.821</code>, approximately the 90th
            percentile.
          </li>
          <li>
            <strong>High rare-query share:</strong>{' '}
            <code>rare_share ≥ 0.284</code>, approximately the 90th percentile.
          </li>
        </ul>

        <h3>Action hierarchy</h3>

        <div className="capstone-actions">
          <article>
            <span className="capstone-action-number">01</span>
            <h4>REVIEW</h4>
            <p>
              Observed decline and/or high query concentration. These items
              receive the highest priority for human investigation.
            </p>
          </article>

          <article>
            <span className="capstone-action-number">02</span>
            <h4>QUICK_WIN</h4>
            <p>
              Low query visibility without a higher-priority review signal.
            </p>
          </article>

          <article>
            <span className="capstone-action-number">03</span>
            <h4>MONITOR</h4>
            <p>
              High rare-query share without higher-priority signals.
            </p>
          </article>

          <article>
            <span className="capstone-action-number">04</span>
            <h4>NO_ACTION</h4>
            <p>
              No strong signal identified by the defined rules.
            </p>
          </article>
        </div>

        <div className="capstone-figure">
            <img
                src={recommendedActionsFigure}
                alt="Recommended actions for content review"
            />
            <p className="capstone-figure-caption">
                Distribution of recommended actions across the ranked review queue.
            </p>
         </div>


        <h3>Queue composition</h3>

        <div className="capstone-table-wrapper">
          <table className="capstone-table">
            <thead>
              <tr>
                <th>Recommended action</th>
                <th>Content items</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>REVIEW</td>
                <td>67,639</td>
              </tr>
              <tr>
                <td>QUICK_WIN</td>
                <td>6,162</td>
              </tr>
              <tr>
                <td>MONITOR</td>
                <td>2,644</td>
              </tr>
              <tr>
                <td>NO_ACTION</td>
                <td>25,758</td>
              </tr>
              <tr>
                <th>Total</th>
                <th>102,203</th>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Items are ranked first by action priority, then by signal strength
          and previous-period impressions as a tie-breaker. The queue is
          designed to support <strong>human review and prioritization</strong>,
          not to prescribe automatic content updates.
        </p>
      </section>

      <section className="capstone-section">
        <h2>Limitations and Honest Framing</h2>

        <p>
          The Decision Tree did not outperform the majority-class baseline
          under client-level grouped validation. The model also produced both
          false positives and false negatives, limiting its use as a reliable
          predictive classifier.
        </p>

        <p>
          The observed decline label is defined from historical impression
          changes and should not be interpreted as a causal measure of content
          quality or future search performance.
        </p>

        <p>
          Feature importance indicates how the fitted tree used the available
          signals, not causal influence.
        </p>

        <div className="capstone-warning">
          <strong>What this analysis does not claim</strong>

          <ul>
            <li>It does not predict Google's ranking behavior.</li>
            <li>It does not prove causality.</li>
            <li>It does not predict future search performance.</li>
            <li>
              It does not demonstrate that refreshing a content item will
              improve its future performance.
            </li>
            <li>
              It does not recommend automatic content updates without human
              evaluation.
            </li>
          </ul>
        </div>
      </section>

      <section className="capstone-section">
        <h2>Reproducibility</h2>

        <p>
          The analysis is designed to be reproducible from the project
          notebook using DuckDB and the FlyRank internship warehouse.
        </p>

        <ul>
          <li>
            <strong>Repository:</strong>{' '}
            <a
              href="https://github.com/itgirlhightech/flyrank-ml-internship-starter.git"
              target="_blank"
              rel="noreferrer"
            >
              GitHub repository
            </a>
          </li>

          <li>
            <strong>Notebook:</strong> capstone notebook under{' '}
            <code>work/notebooks/</code>.
          </li>

          <li>
            <strong>Analysis:</strong> DuckDB, pandas and scikit-learn.
          </li>

          <li>
            <strong>Authentication:</strong> Hugging Face read access is
            required to query the internship warehouse.
          </li>

          <li>
            <strong>Outputs:</strong> model results, ranked action queue and
            figures are generated from the notebook.
          </li>
        </ul>
      </section>

      <section className="capstone-section">
        <h2>Acknowledgments and Data Credit</h2>

        <p>
          Built on the{' '}
          <a
            href="https://flyrank.ai"
            target="_blank"
            rel="noreferrer"
          >
            FlyRank ML Internship dataset
          </a>
          .
        </p>
      </section>
    </main>
  )
}

export default FlyRankCapstone