"use client";

import { Button } from "@/components/ui/button";
import EmphasizeText from "@/components/Highlighted";
import DynamicBreadcrumb from "@/components/ui/breadcrumb-dynamic";

const ServiceAgreementPage = () => {
  return (
    <main className="w-10/12 md:w-11/12 mx-auto py-6">
      <DynamicBreadcrumb />
      {/* Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-6">
        Service Agreement
      </h1>

      {/* Agreement Date */}
      <p className="text-lg text-center text-secondary mb-10">
        This Service Agreement ("Agreement") is made and entered into as of
        <EmphasizeText> [Effective Date] </EmphasizeText>, by and between the
        following parties:
      </p>

      {/* Company & Contractor Information */}
      <section className="mb-10 space-y-6">
        <p>
          <EmphasizeText>[Client's Full Name] </EmphasizeText>{" "}
          <strong>(Client)</strong>: An individual residing at
          <EmphasizeText> [Client’s Address] </EmphasizeText>, who is engaging
          the Contractor to provide services as outlined in this Agreement.
        </p>

        <p>
          <EmphasizeText>[Company Name]</EmphasizeText>{" "}
          <strong>(Contractor): </strong>A corporation registered in
          <EmphasizeText> [State/Country] </EmphasizeText> with its principal
          place of business at
          <EmphasizeText> [Company Address] </EmphasizeText>. The Contractor
          agrees to perform the services in accordance with the terms and
          conditions specified in this Agreement.
        </p>

        <p>
          Both parties acknowledge that they have the full legal authority to
          enter into this Agreement and fulfill their respective obligations as
          outlined herein.
        </p>
      </section>

      {/* Agreement Sections */}
      <section className="space-y-10">
        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            1. SERVICES
          </h2>

          <p>
            <strong>1.1 Scope of Services:</strong> The Contractor agrees to
            provide the following services to the Client in accordance with the
            terms of this Agreement:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Detailed description of Service 1</li>
            <li>Detailed description of Service 2</li>
            <li>Detailed description of Service 3</li>
            <li>Additional services as mutually agreed upon in writing</li>
          </ul>

          <p>
            <strong>1.2 Quality and Professionalism:</strong> The Contractor
            shall perform all services professionally and in accordance with
            industry standards, ensuring a high level of quality, accuracy, and
            reliability in the deliverables.
          </p>

          <p>
            <strong>1.3 Modifications and Additional Services:</strong> Any
            modifications or additional services requested by the Client that
            fall outside the initial project scope shall be subject to a
            separate agreement or an amendment to this Agreement. Additional
            fees and timeline adjustments may apply.
          </p>

          <p>
            <strong>1.4 Service Completion and Delivery:</strong> The Contractor
            agrees to complete all services within the agreed-upon timeline and
            shall provide deliverables in the format specified by the Client.
            Any delays shall be communicated promptly, along with a revised
            timeline if necessary.
          </p>

          <p>
            <strong>1.5 Client Responsibilities:</strong> The Client agrees to
            provide timely feedback, approvals, and any necessary resources
            required for the successful completion of services. Any delays
            caused by the Client may result in adjustments to the project
            timeline.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            2. COMPENSATION
          </h2>

          <p>
            <strong>2.1 Payment Terms:</strong> The Client agrees to pay the
            Contractor a total fee of
            <EmphasizeText> [Total Amount] </EmphasizeText> for the services
            rendered under this Agreement. The agreed compensation covers all
            deliverables, tasks, and obligations as outlined in this Agreement.
          </p>

          <p>
            <strong>2.2 Payment Schedule:</strong> Payments shall be made
            according to the following schedule:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>First Payment:</strong>{" "}
              <EmphasizeText>[Amount]</EmphasizeText> due upon signing this
              Agreement.
            </li>
            <li>
              <strong>Second Payment:</strong>{" "}
              <EmphasizeText>[Amount]</EmphasizeText> due upon completion of{" "}
              <EmphasizeText>[Milestone 1]</EmphasizeText>.
            </li>
            <li>
              <strong>Third Payment:</strong>{" "}
              <EmphasizeText>[Amount]</EmphasizeText> due upon completion of{" "}
              <EmphasizeText>[Milestone 2]</EmphasizeText>.
            </li>
            <li>
              <strong>Final Payment:</strong>{" "}
              <EmphasizeText>[Amount]</EmphasizeText> due upon completion and
              final approval of the project.
            </li>
          </ul>

          <p>
            <strong>2.3 Late Payment Fees:</strong> If payment is not received
            within <EmphasizeText>[X]</EmphasizeText> days of the due date, a
            late fee of 2% per month (24% annualized) on the outstanding balance
            will be applied. If the balance remains unpaid for more than 30
            days, the late fee increases to 3% per month (36% annualized).
            Payments that remain outstanding beyond 60 days may incur additional
            collection costs and legal fees, if applicable.
          </p>

          <p>
            <strong>2.4 Accepted Payment Methods:</strong> Payments shall be
            made using one of the following accepted methods:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Zelle:</strong> Payments must be sent to the Contractor’s
              designated Zelle account. The Client is responsible for ensuring
              accuracy before submission.
            </li>
            <li>
              <strong>Venmo:</strong> Payments must be sent as{" "}
              <strong>Friends & Family</strong> (if applicable) to avoid
              additional processing fees.
            </li>
            <li>
              <strong>Cash:</strong> Cash payments must be made in person and
              accompanied by a signed receipt acknowledging the transaction.
            </li>
            <li>
              <strong>Business Checks:</strong> Only checks issued from a
              verifiable business account will be accepted. The check must be
              made payable to the Contractor, and the Client must provide a
              valid business address and contact information.
            </li>
            <li>
              <strong>Cashier’s Checks:</strong> Must be issued directly by a
              bank and made payable to the Contractor.
            </li>
          </ul>

          <p>
            <strong>2.5 Check Verification and Clearance:</strong> Payments made
            by Business Checks or Cashier’s Checks will <strong>not</strong> be
            considered accepted until they have been fully verified and the
            funds have cleared in the Contractor’s account.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              All checks will be subject to bank verification, which may take{" "}
              <EmphasizeText>[X] </EmphasizeText>business days.
            </li>
            <li>
              If a check is flagged as fraudulent or unverifiable, the Client
              will be required to submit payment via an alternative accepted
              method.
            </li>
            <li>
              If a check is returned unpaid for any reason (insufficient funds,
              account closure, stop payment, etc.), the Client will be
              responsible for a **returned check fee of{" "}
              <EmphasizeText>[X]</EmphasizeText> and must remit payment
              immediately through a different accepted method.
            </li>
          </ul>

          <p>
            <strong>2.6 Payment Finality:</strong> Once a payment is verified
            and cleared, it shall be considered final and non-refundable except
            as otherwise stated in this Agreement.
          </p>

          <p>
            <strong>2.7 Non-Payment and Work Suspension:</strong> If the Client
            fails to make a scheduled payment, the Contractor reserves the right
            to suspend work until payment is received. Any delays caused by
            non-payment shall not affect the project deadlines or the
            Contractor’s obligations.
          </p>

          <p>
            <strong>2.8 Refunds:</strong> Payments made are non-refundable
            unless otherwise agreed in writing by both parties. If the project
            is terminated before completion, any refund amount shall be
            determined based on the work completed and expenses incurred up to
            the termination date.
          </p>

          <p>
            <strong>2.9 Adjustments and Additional Costs:</strong> Any
            additional work requested beyond the original scope may require an
            adjustment to the total fee. Such adjustments shall be mutually
            agreed upon in writing before any additional work begins.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            3. EXPENSES
          </h2>

          <p>
            <strong>3.1 Contractor’s Responsibility:</strong> The Contractor
            shall be responsible for covering all expenses incurred in
            connection with the services provided under this Agreement, unless
            otherwise agreed upon in writing by both parties.
          </p>

          <p>
            <strong>3.2 Non-Reimbursable Expenses:</strong> The Client shall not
            be obligated to reimburse the Contractor for any work-related
            expenses, including but not limited to travel, software, tools,
            subscriptions, licensing fees, or equipment costs required for the
            completion of the project.
          </p>

          <p>
            <strong>3.3 Pre-Approved Expenses:</strong> If any additional
            expenses are necessary for project execution, the Contractor must
            obtain prior written approval from the Client. Such approved
            expenses shall be reimbursed according to the agreed-upon terms and
            with appropriate supporting documentation.
          </p>

          <p>
            <strong>3.4 Taxes and Fees:</strong> The Contractor shall be solely
            responsible for any taxes, duties, or fees associated with their
            business operations, including income taxes, self-employment taxes,
            or any other financial obligations required by law.
          </p>

          <p>
            <strong>3.5 Expense Reporting:</strong> If pre-approved expenses are
            eligible for reimbursement, the Contractor must submit an itemized
            invoice along with receipts and supporting documentation. The Client
            reserves the right to reject any expenses that do not comply with
            the agreed-upon terms.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            4. OWNERSHIP AND INTELLECTUAL PROPERTY
          </h2>

          <p>
            <strong>4.1 Contractor Ownership:</strong> The Contractor shall
            retain full ownership of all work products, including but not
            limited to intellectual property, copyrights, trademarks, trade
            secrets, patents, designs, concepts, and any other proprietary
            materials created under this Agreement.
          </p>

          <p>
            <strong>4.2 Transfer of Rights:</strong> Ownership rights, including
            all intellectual property rights, shall transfer to the Client only
            upon full and final payment as outlined in this Agreement. Until
            payment is received in full, the Contractor reserves all rights to
            the work product, including the right to withhold final
            deliverables.
          </p>

          <p>
            <strong>4.3 Limited License Prior to Payment:</strong> If necessary
            for project execution, the Contractor may grant the Client a
            temporary, non-exclusive, and revocable license to use the work
            product solely for review and internal evaluation. This temporary
            license shall immediately terminate if the Client fails to make
            payments as agreed upon.
          </p>

          <p>
            <strong>4.4 Third-Party Materials:</strong> Any third-party
            materials, including stock images, fonts, software, or assets used
            in the project, shall remain the property of their respective
            owners. The Client is responsible for securing the appropriate
            licenses for any third-party content unless otherwise agreed upon in
            writing.
          </p>

          <p>
            <strong>4.5 Portfolio and Promotional Use:</strong> The Contractor
            retains the right to display, reference, and include the completed
            work in their portfolio, marketing materials, or case studies,
            unless otherwise agreed upon in writing by both parties.
          </p>

          <p>
            <strong>4.6 Modifications and Derivative Works:</strong> The Client
            may not modify, distribute, or create derivative works of the
            delivered product without the express written consent of the
            Contractor, unless full ownership rights have been transferred.
          </p>

          <p>
            <strong>4.7 Survival of Rights:</strong> The provisions outlined in
            this section shall survive the termination or completion of this
            Agreement.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            5. REVISIONS AND FEEDBACK
          </h2>

          <p>
            <strong>5.1 Client Feedback Collection:</strong> Client feedback
            will be gathered at key project milestones through written
            communication, scheduled meetings, or designated feedback forms to
            ensure alignment with project expectations and requirements.
          </p>

          <p>
            <strong>5.2 Included Revisions:</strong> The project scope includes{" "}
            <EmphasizeText>[X]</EmphasizeText> revisions at no additional cost,
            provided they are requested within{" "}
            <EmphasizeText>[specified timeframe]</EmphasizeText> following the
            project submission.
          </p>

          <p>
            <strong>5.3 Revision Turnaround Time:</strong> Standard revisions
            will be completed within <EmphasizeText>[X] </EmphasizeText>{" "}
            business days unless otherwise agreed upon by both parties.
          </p>

          <p>
            <strong>5.4 Process for Additional Changes:</strong>
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Formal Submission:</strong> All revision requests must be
              clearly documented and submitted in writing through email, a
              designated feedback form, or another mutually agreed-upon method.
              The request should include a detailed description of the changes
              required, referencing specific sections or elements of the work
              product. This ensures clarity, facilitates efficient revisions,
              and helps maintain alignment with the project scope and
              expectations.
            </li>

            <li>
              <strong>Additional Charges:</strong> Any revision requests beyond
              the included scope will be subject to additional charges, billed
              at a fixed cost per revision.
            </li>

            <li>
              <strong>Major Modifications:</strong> Changes that significantly
              alter the original project scope may require a separate agreement
              or an amendment to the existing contract to account for the
              additional work, costs, and timeline adjustments.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            6. CONFIDENTIALITY
          </h2>

          <p>
            <strong>6.1 Confidential Information Protection:</strong> The
            Contractor shall maintain the strict confidentiality of all
            information received from the Client, including but not limited to
            business operations, financial data, proprietary technology, trade
            secrets, client lists, and any other sensitive information disclosed
            during the course of this Agreement. The Contractor agrees that such
            information shall not be disclosed, shared, or used for any purpose
            outside the scope of this Agreement without the Client's explicit
            written consent.
          </p>

          <p>
            <strong>6.2 Limited Access and Use:</strong> The Contractor shall
            take all reasonable measures to protect confidential information
            from unauthorized access, disclosure, or misuse. Access to such
            information shall be restricted only to personnel or subcontractors
            who require it to fulfill their responsibilities under this
            Agreement, and they shall be bound by the same confidentiality
            obligations.
          </p>

          <p>
            <strong>6.3 Exclusions:</strong> Confidentiality obligations shall
            not apply to information that:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              Was already in the public domain at the time of disclosure or
              becomes publicly available without breach of this Agreement.
            </li>
            <li>
              Is lawfully obtained from a third party without restriction.
            </li>
            <li>
              Is independently developed by the Contractor without reliance on
              confidential information from the Client.
            </li>
            <li>
              Is required to be disclosed by law, regulation, or legal process,
              provided that the Contractor gives the Client prompt notice to
              allow for protective measures.
            </li>
          </ul>

          <p>
            <strong>6.4 Duration of Confidentiality Obligation:</strong> This
            confidentiality obligation shall remain in effect indefinitely and
            shall continue beyond the termination or completion of this
            Agreement. The Contractor shall return or destroy all confidential
            materials upon completion of the project unless otherwise agreed in
            writing by the Client.
          </p>

          <p>
            <strong>6.5 Remedies for Breach:</strong> In the event of a breach
            of confidentiality, the Client shall be entitled to seek injunctive
            relief, damages, or any other legal remedy available under
            applicable law.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            7. TERM AND TERMINATION
          </h2>

          <p>
            <strong>7.1 Term of Agreement:</strong> This Agreement shall take
            effect on <EmphasizeText>[X]</EmphasizeText> and shall remain in
            force until the successful completion of the project, as defined by
            the fulfillment of all agreed-upon deliverables, milestones, and
            final approval by the Client. The Agreement will remain active
            unless terminated under the conditions specified herein. Any
            extensions, modifications, or amendments to the project timeline
            must be mutually agreed upon in writing by both parties.
          </p>

          <p>
            <strong>7.2 Early Termination:</strong> Early termination of this
            Agreement is not permitted unless one of the following conditions is
            met:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Material Breach:</strong> Either party commits a
              significant breach of contract, including but not limited to
              failure to fulfill contractual obligations, persistent
              non-performance, or actions that substantially hinder project
              completion.
            </li>

            <li>
              <strong>Fraud or Misrepresentation:</strong> If either party is
              found to have engaged in fraudulent activities, misrepresentation,
              or deceptive practices that negatively impact the agreement.
            </li>

            <li>
              <strong>Mutual Written Agreement:</strong> Both parties agree in
              writing to terminate the Agreement under mutually acceptable
              terms.
            </li>
          </ul>

          <p>
            <strong>7.3 Termination Procedure:</strong> In the event of early
            termination, the terminating party must provide a formal written
            notice specifying the reason for termination. Both parties shall be
            responsible for settling any outstanding obligations, including
            payments for completed work and any deliverables provided up to the
            termination date. If applicable, intellectual property rights and
            ownership of any work completed shall be determined in accordance
            with the terms outlined in this Agreement.
          </p>

          <p>
            <strong>7.4 Early Termination Fee:</strong> If the Client terminates
            this Agreement before project completion for any reason other than a
            material breach by the Contractor, the Client agrees to pay an early
            termination fee, which shall be calculated as follows:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Payment for all work completed up to the termination date.</li>
            <li>
              Reimbursement for any non-refundable expenses incurred by the
              Contractor, including but not limited to materials, software, and
              subcontractor fees.
            </li>
            <li>
              An early termination fee of 30-50% of the tramining contract
              balance or $1,500, whichever is greater.
            </li>
            <li>Any outstanding invoices due at the time of termination.</li>
          </ul>

          <p>
            The early termination fee compensates the Contractor for lost time,
            resources, and scheduling disruptions caused by the premature
            cancellation of the contract. If the Contractor terminates this
            Agreement early for reasons not outlined in Section 7.2, no
            termination fee shall be due from the Client.
          </p>

          <p>
            <strong>7.5 Effect of Termination:</strong> Upon termination of this
            Agreement, all rights and obligations of both parties shall cease,
            except for any provisions that, by their nature, are intended to
            survive termination, including but not limited to confidentiality,
            indemnification, and ownership rights of completed work.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            8. LIABILITY AND INDEMNIFICATION
          </h2>
          <p>
            <strong>8.1 Limitation of Liability:</strong> The Contractor shall
            not be held liable for any indirect, incidental, special,
            consequential, or punitive damages arising from or related to the
            services provided under this Agreement. This includes, but is not
            limited to, loss of revenue, profits, business opportunities, data,
            or any other economic advantage, even if the Contractor has been
            advised of the possibility of such damages. The Contractor’s total
            liability, whether in contract, tort (including negligence), or
            otherwise, shall be limited to the total amount paid by the Client
            for the services rendered under this Agreement.
          </p>
          <p>
            <strong>8.2 Indemnification:</strong> The Client agrees to
            indemnify, defend, and hold the Contractor harmless from and against
            any claims, demands, damages, liabilities, losses, costs, and
            expenses (including reasonable attorney fees) arising from:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Any third-party claims related to the Client’s use of the services
              provided under this Agreement, including but not limited to claims
              of infringement, misrepresentation, or unauthorized use.
            </li>
            <li>
              Any failure by the Client to comply with applicable laws,
              regulations, or contractual obligations.
            </li>
            <li>Any material breach of this Agreement by the Client.</li>
          </ul>
          <p>
            This indemnification obligation shall survive the termination or
            completion of this Agreement and shall remain in effect
            indefinitely.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            9. GENERAL PROVISIONS
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Governing Law:</strong> This Agreement shall be governed
              by and interpreted in accordance with the laws of the State of
              California, without regard to its conflict of law principles.
            </li>

            <li>
              <strong>Entire Agreement:</strong> This Agreement constitutes the
              entire understanding between the parties and supersedes all prior
              negotiations, agreements, representations, and understandings,
              whether written or oral, relating to the subject matter herein.
            </li>

            <li>
              <strong>Amendments:</strong> Any modifications, changes, or
              amendments to this Agreement must be made in writing and signed by
              both parties. No verbal agreements, implied modifications, or
              informal communications shall be recognized as valid amendments to
              this Agreement, as outlined in Section 5.4.
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Any proposed amendment must clearly state the specific
                  sections being modified, along with the rationale for the
                  change.
                </li>
                <li>
                  Amendments shall only be effective once a written document has
                  been signed by authorized representatives of both parties.
                </li>
                <li>
                  Electronic or digital signatures shall be considered valid if
                  both parties have agreed in writing to their use.
                </li>
                <li>
                  Neither party shall unreasonably withhold or delay consent to
                  a proposed amendment that is necessary due to changes in
                  applicable laws, regulations, or unforeseen circumstances
                  affecting the performance of this Agreement.
                </li>
                <li>
                  If an amendment results in additional costs, extended
                  timelines, or changes to obligations, the parties shall
                  negotiate fair adjustments to compensation, deadlines, or
                  responsibilities.
                </li>
                <li>
                  All amendments shall be attached as an official addendum to
                  this Agreement and shall be considered legally binding.
                </li>
              </ul>
              This clause ensures that any revisions to the terms and conditions
              of this Agreement are clearly documented and agreed upon by both
              parties to prevent misunderstandings or disputes.
            </li>

            <li>
              <strong>Severability:</strong> If any provision of this Agreement
              is found to be invalid, unenforceable, or contrary to applicable
              law, the remainder of the Agreement shall remain in full force and
              effect, and the invalid provision shall be modified to the extent
              necessary to comply with the law while preserving the original
              intent of the parties.
            </li>

            <li>
              <strong>Force Majeure:</strong> Neither party shall be held liable
              for any failure or delay in performing its obligations under this
              Agreement due to causes beyond its reasonable control, provided
              that such causes are not the result of the party's negligence or
              willful misconduct. Such events include, but are not limited to:
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Acts of God, including but not limited to earthquakes,
                  hurricanes, floods, wildfires, or other natural disasters.
                </li>
                <li>
                  Acts of war, invasion, hostilities (whether war is declared or
                  not), civil unrest, rebellion, insurrection, terrorism, or
                  sabotage.
                </li>
                <li>
                  Government actions, orders, laws, embargoes, quarantines, or
                  regulatory changes that directly impact the performance of
                  obligations under this Agreement.
                </li>
                <li>
                  Labor strikes, lockouts, protests, or industrial disturbances
                  that are not limited to the employees of the affected party.
                </li>
                <li>
                  National or regional emergencies, pandemics, epidemics, public
                  health crises, or imposed travel restrictions that prevent the
                  normal course of business operations.
                </li>
                <li>
                  Technical failures, cyberattacks, system outages, or failures
                  of third-party service providers essential to the services
                  provided under this Agreement.
                </li>
              </ul>
              In the event of a Force Majeure event:
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The affected party must promptly notify the other party in
                  writing, detailing the nature of the event and its expected
                  impact on contractual obligations.
                </li>
                <li>
                  The affected party shall make reasonable efforts to mitigate
                  the impact of the Force Majeure event and resume performance
                  as soon as practicable.
                </li>
                <li>
                  If the Force Majeure event continues for a period exceeding 20
                  days, either party may terminate this Agreement upon written
                  notice, without liability, except for payment of any
                  outstanding amounts due for services already performed.
                </li>
              </ul>
              The provisions of this clause do not excuse the Client from its
              obligation to pay for services rendered prior to the occurrence of
              the Force Majeure event.
            </li>

            <li>
              <strong>Assignment:</strong> Neither party may assign, transfer,
              delegate, or subcontract its rights, duties, or obligations under
              this Agreement without the prior written consent of the other
              party. Any attempted assignment, transfer, or delegation without
              such consent shall be considered null and void. Notwithstanding
              the foregoing:
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  The Contractor may engage subcontractors or independent
                  contractors to assist in the provision of services, provided
                  that the Contractor remains fully responsible for the
                  performance of such subcontractors and ensures that they
                  comply with the terms of this Agreement.
                </li>
                <li>
                  Either party may assign this Agreement in its entirety,
                  without requiring prior written consent, in the event of a
                  merger, acquisition, or sale of substantially all of its
                  assets, provided that the successor entity agrees in writing
                  to be bound by the terms of this Agreement.
                </li>
                <li>
                  Any permitted assignee or successor shall assume all rights
                  and obligations of the original assigning party and shall be
                  subject to the same terms and conditions set forth herein.
                </li>
              </ul>
              Nothing in this clause shall prohibit the Contractor from using
              third-party service providers, tools, or technologies as part of
              its service delivery, provided that such use does not diminish the
              Contractor’s obligations or liability under this Agreement.
            </li>

            <li>
              <strong>Waiver:</strong> The failure of either party to enforce
              any provision, right, or obligation under this Agreement shall not
              be construed as a waiver of such provision, right, or obligation,
              nor shall it prevent that party from enforcing such provisions in
              the future. A waiver of any breach or default shall not constitute
              a waiver of any subsequent breach or default. Any waiver must be
              made in writing and signed by an authorized representative of the
              waiving party. No failure, delay, or course of dealing by either
              party in exercising any right or remedy under this Agreement shall
              operate as a waiver or preclude any further exercise of such right
              or remedy.
            </li>

            <li>
              <strong>Dispute Resolution:</strong> Any disputes, controversies,
              or claims arising under or in connection with this Agreement,
              including but not limited to disputes relating to the formation,
              interpretation, performance, breach, or termination of this
              Agreement, shall first be resolved through good faith negotiations
              between the parties.
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Negotiation and Mediation:</strong> If a dispute
                  arises, the parties agree to engage in good faith discussions
                  and make reasonable efforts to resolve the matter amicably
                  within 21 days of written notice of the dispute. If
                  negotiations fail, the parties may voluntarily seek mediation
                  before proceeding to arbitration.
                </li>

                <li>
                  <strong>Binding Arbitration:</strong> If the dispute cannot be
                  resolved through negotiations or mediation, it shall be
                  submitted to binding arbitration in the State of California,
                  in accordance with the rules and procedures of the American
                  Arbitration Association (AAA) or another mutually agreed-upon
                  arbitration body.
                </li>

                <li>
                  <strong>Arbitration Process:</strong> The arbitration shall be
                  conducted by a single neutral arbitrator unless the parties
                  agree to a panel. The arbitrator shall have the authority to
                  grant any relief that would be available in a court of law.
                  The arbitration shall be confidential, and all proceedings,
                  evidence, and documents shall remain private and protected
                  from public disclosure.
                </li>

                <li>
                  <strong>Costs and Fees:</strong> The costs of arbitration,
                  including arbitrator fees and administrative expenses, shall
                  be shared equally by both parties unless otherwise ordered by
                  the arbitrator. Each party shall bear its own legal fees and
                  expenses unless the arbitrator determines that awarding fees
                  to the prevailing party is justified.
                </li>

                <li>
                  <strong>Exclusions from Arbitration:</strong> Notwithstanding
                  the foregoing, either party may seek injunctive relief or
                  equitable remedies in a court of competent jurisdiction for
                  claims related to intellectual property rights,
                  confidentiality breaches, or unauthorized use of proprietary
                  information.
                </li>

                <li>
                  <strong>Jurisdiction and Venue:</strong> If legal action is
                  required beyond arbitration, the parties agree that the courts
                  located in the State of California shall have exclusive
                  jurisdiction over any proceedings arising from this Agreement.
                </li>

                <li>
                  <strong>Survival:</strong> This dispute resolution provision
                  shall survive the termination, cancellation, or expiration of
                  this Agreement.
                </li>
              </ul>
              By agreeing to arbitration, both parties waive their right to a
              jury trial or participation in any class-action lawsuit related to
              this Agreement.
            </li>
          </ul>
        </div>
      </section>

      {/* Signature Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-secondary mb-6">
          IN WITNESS WHEREOF, the parties hereto have executed this Agreement as
          of the Effective Date.
        </h2>

        <p className="text-lg text-secondary mb-8">
          By signing below, both parties acknowledge that they have read,
          understood, and agree to the terms and conditions set forth in this
          Agreement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          {/* Client Signature */}
          <div className="border border-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Company A (Client)</h3>
            <p className="text-sm mb-6">Signature: _________________________</p>
            <p className="text-sm">Name: ____________________________</p>
            <p className="text-sm">Title: ____________________________</p>
            <p className="text-sm">Date: ____________________________</p>
          </div>

          {/* Contractor Signature */}
          <div className="border border-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">
              Company B (Contractor)
            </h3>
            <p className="text-sm mb-6">Signature: _________________________</p>
            <p className="text-sm">Name: ____________________________</p>
            <p className="text-sm">Title: ____________________________</p>
            <p className="text-sm">Date: ____________________________</p>
          </div>
        </div>
      </section>

      {/* Call to Action Button */}
      <section className="text-center mt-12">
        <Button variant={"outline"} className="px-6 py-3 text-lg">
          Download Agreement
        </Button>
      </section>
    </main>
  );
};

export default ServiceAgreementPage;
